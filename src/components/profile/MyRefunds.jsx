import React,{Children} from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getMyCourses, getMyRefunds } from '../../graphql/Queries';
import { useQuery } from '@apollo/client';
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


const MyRefunds = () => {
  let token=localStorage.getItem("accessToken")
  const {data} = useQuery(getMyRefunds,{
    context: {
      headers: {
        Authorization: token,
      },
    },
  })
  const { data:myCourses, error, loading, refetch } = useQuery(getMyCourses, {
    context: {
      headers: {
        Authorization: token,
      },
    },
  });

  console.log(data);

  return (
    <div className='h-[100vh] bg-white flex justify-center items-center'>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Course Id</StyledTableCell>
            <StyledTableCell align="right">Amount</StyledTableCell>
            <StyledTableCell align="right">Refund Status</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {
Children.toArray(data?.myRefunds.map(obj=>{
 return <StyledTableRow key={'dsdasd'}>
              <StyledTableCell component="th" scope="row">
                {obj.courseId}
              </StyledTableCell>
              <StyledTableCell align="right">{obj.amount}</StyledTableCell>
              <StyledTableCell align="right">{obj.status}</StyledTableCell>
            </StyledTableRow>
}))
          }
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default MyRefunds