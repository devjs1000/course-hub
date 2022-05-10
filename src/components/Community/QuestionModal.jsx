import Modal from "react-modal";
import React,{useState} from 'react'
import SelectCourse from './SelectCourse'
const QuestionModal = ({open,setOpen}) => {
  const [course, setCourse] = React.useState();
  console.log(course)
	return (
		<Modal isOpen={open} onRequestClose={() => setOpen(false)}>
       	Select Course : <SelectCourse course={course} setCourse={setCourse} />
      </Modal>
	)
}

export default QuestionModal