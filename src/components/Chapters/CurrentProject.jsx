import React,{useState,Children} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useQuery,useMutation } from "@apollo/client";
import {GetAllProjectsByChapterId,getAllProjectsByCourseId} from '../../graphql/Queries'
import {checkProjectMutation} from '../../graphql/Mutations'
import toast from 'react-hot-toast';


const CurrentProject = (id) => {
	let [loading,setLoading] = useState(true)
	console.log(id)
	const token = localStorage.getItem("accessToken");
		const {data,refetch} = useQuery(GetAllProjectsByChapterId,{
		variables:{
			chapterId: id.id,
		},
		context:{
			headers:{
				Authorization:token
			}
		}
	})

  const [checkProject] = useMutation(checkProjectMutation,{
    onCompleted: refetch,
    context : {
    headers:{
      Authorization: token
    }
  }
  })
const handleCheck =(projectId,status)=>{
    let newStatus = !status
    console.log(newStatus)
    checkProject({
      headers:{
        Authorization: token
      },
      variables:{
        projectId: projectId,
        projectStatus : newStatus
      }
    })
    toast.promise(
    checkProject({
      headers:{
        Authorization: token
      },
      variables:{
        projectId: projectId,
        projectStatus : newStatus
      }
    }),
   {
     loading: 'Saving...',
     success: <b>Checking saved!</b>,
     error: <b>Could not save.</b>,
   }
 );
  }

    console.log(data?.getAllProjectsByChapterId)
    let list=Children.toArray(data?.getAllProjectsByChapterId.map(obj=>{
     return <TableRow  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{obj.id}</TableCell>
              <TableCell align="right">{obj.userId}</TableCell>
              <TableCell align="right">
                <a href={obj.projectLink}>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                View Project</button>

                </a>
              </TableCell>
              <TableCell align="right"><button
      className="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800"
      onClick={()=>handleCheck(obj.id,obj.projectStatus)}
      >{
        obj.projectStatus? 'Checked' : 'UnChecked'
      }</button></TableCell>
            </TableRow>
    }))


	return (
		<div>
			<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Project ID</TableCell>
            <TableCell align="right">Student ID</TableCell>
            <TableCell align="right">Project Link</TableCell>
            <TableCell align="right">Project Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {list}

        </TableBody>
      </Table>
    </TableContainer>
		</div>
	)
}

export default CurrentProject































// import * as React from "react";
// import PropTypes from "prop-types";
// import Box from "@mui/material/Box";
// import Collapse from "@mui/material/Collapse";
// import IconButton from "@mui/material/IconButton";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Typography from "@mui/material/Typography";
// import Paper from "@mui/material/Paper";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

// export default ''


// function Row(props) {
//   const { row } = props;
//   const [open, setOpen] = React.useState(false);

//   return (
//     <React.Fragment>
//       <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
//         <TableCell>
//           <IconButton
//             aria-label="expand row"
//             size="small"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//           </IconButton>
//         </TableCell>
//         <TableCell component="th" scope="row">
//           {row.name}
//         </TableCell>
//         <TableCell align="right">{row.calories}</TableCell>
//         <TableCell align="right">{row.fat}</TableCell>
//         <TableCell align="right">{row.carbs}</TableCell>
//         <TableCell align="right">{row.protein}</TableCell>
//       </TableRow>
//       <TableRow>
//         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//             <Box sx={{ margin: 1 }}>
//               <Typography variant="h6" gutterBottom component="div">
//                 History
//               </Typography>
//               <Table size="small" aria-label="purchases">
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>Date</TableCell>
//                     <TableCell>Customer</TableCell>
//                     <TableCell align="right">Amount</TableCell>
//                     <TableCell align="right">Total price ($)</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {row.history.map((historyRow) => (
//                     <TableRow key={historyRow.date}>
//                       <TableCell component="th" scope="row">
//                         {historyRow.date}
//                       </TableCell>
//                       <TableCell>{historyRow.customerId}</TableCell>
//                       <TableCell align="right">{historyRow.amount}</TableCell>
//                       <TableCell align="right">celly</TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </Box>
//           </Collapse>
//         </TableCell>
//       </TableRow>
//     </React.Fragment>
//   );
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
//   createData("Eclair", 262, 16.0, 24, 6.0, 3.79),
//   createData("Cupcake", 305, 3.7, 67, 4.3, 2.5),
//   createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5),
// ];

// export default function CollapsibleTable() {
//   return (
//     <TableContainer component={Paper}>
//       <Table aria-label="collapsible table">
//         <TableHead>
//           <TableRow>
//             <TableCell />
//             <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell align="right">Calories</TableCell>
//             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//             <TableCell align="right">Protein&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <Row key={row.name} row={row} />
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

