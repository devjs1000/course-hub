import axios from "axios";

export async function getAllAssignmentsOfInstructor(id, func) {
    const response=await axios.get(`/api/assignment/getAllAssignmentsOfInstructor/${id}`)
    func(response)
}

export async function getAssignmentsOfUser(id, func) {
    const response=await axios.get(`/api/assignment/getAssignmentsOfUser/${id}`)
    func(response)
}

export async function submitAssignment(id, func) {
    const response=await axios.get(`/api/assignment/submitAssignment/${id}`)
    func(response)
}


export async function updateToCertified(id, course, email, comment, func){
    const response=await axios.post(`/api/assignment/updateToCertified/${id}`,{course,email,comment})
    func(response)
}

export async function updateAssignmentComment(id,comment, func){
    const response=await axios.post(`/api/assignment/updateAssignmentComment/${id}`, {comment})
    func(response)
}

export async function updateToUnSubmit(id,course,comment,emailOfUser,func){
    const response=await axios.post(`/api/assignment/updateToUnSubmit/${id}`, { course,emailOfUser,comment})
    func(response)
}
