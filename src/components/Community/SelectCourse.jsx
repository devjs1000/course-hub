import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {allCoursesQuery} from '../../graphql/Queries'
import { useQuery,useMutation } from "@apollo/client";

export default function SelectCourse({course,setCourse}) {

  const handleChange = (event) => {
    setCourse(event.target.value);
  };

  const {data,loading,error} = useQuery(allCoursesQuery,{
  	context:{
  		headers:{
  			Authorization: localStorage.getItem("accessToken")
  		}
  	}
  })
  let menuItems = React.Children.toArray(data?.courses.map(obj=>{
      return <MenuItem value={obj.id}>{obj.name}</MenuItem>
  }))

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Course</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={course}
          label="Course"
          onChange={handleChange}
          defaultValue='6264052de21ae29efafd83f0'
        >
          {menuItems}
        </Select>
      </FormControl>
    </Box>
  );
}
