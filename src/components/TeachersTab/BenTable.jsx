import * as React from 'react';
import {Children} from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {getBenefits} from '../../graphql/Queries'
import { Search, Trash, PencilSquare } from "react-bootstrap-icons";
import Button from '@mui/material/Button';
import { useMutation, useQuery } from "@apollo/client";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#c21e56',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function BenTable({id,setSelectedBenefit,isOpen,setIsOpen}) {
  let token =localStorage.getItem("accessToken")
  let {data} = useQuery(getBenefits, {
    variables: {
      courseId: id,
    },
    context: {
      headers: {
        Authorization: token,
      },
    },
  })

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
            <StyledTableCell align="right">Edit</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {Children.toArray(data?.getFullCourseDetails?.courseBenefits.map(obj=>{
     return <StyledTableRow key='ssa'>
              <StyledTableCell component="th" scope="row">
                {obj.benefitId}
              </StyledTableCell>
              <StyledTableCell align="right">{obj.name}</StyledTableCell>
              <StyledTableCell align="right">{obj.description}</StyledTableCell>
              <StyledTableCell align="right"><Button
              variant="contained" onClick={()=>{
                setSelectedBenefit(obj)
              }}
              ><PencilSquare/></Button></StyledTableCell>
              <StyledTableCell align="right"><Button
              variant="contained" color="error"
              ><Trash/></Button></StyledTableCell>
            </StyledTableRow>
  }))
}  
        </TableBody>
      </Table>
    </TableContainer>
  );
}
