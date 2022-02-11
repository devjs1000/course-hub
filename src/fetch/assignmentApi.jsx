import axios from "axios";

export async function getAllAssignment(match, func) {
    const response=await axios.get(`/api/assignment/getAllAssignmentsOfInstructor/${match}`)
    func(response)
}

export async function assignmentCertificateCreate(id, course, email, comment, func){
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
