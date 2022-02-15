import axios from "axios";

export async function userRegister(name, email, isInstructor, isAdmin, mobileNumber, password , func) {
  try{
    const { data } = await axios.post(`/api/user/registerUser`, {name, email, isInstructor,password, isAdmin, mobileNumber});
    func(data)
  }catch(err){
    func(data)
  }
}
export async function userLogin(email, password , func) {
  try{
    const { data } = await axios.post(`/api/user/userLogin`, {email, password});
    func(data)
  }catch(err){
    func(data)
  }
}
export async function userDetails(userId , func) {
  try{
    const { data } = await axios.get(`/api/user/userDetails/${userId}`);
    func(data)
  }catch(err){
    func(data)
  }
}
export async function updateUserDetails(userId , func) {
  try{
    const { data } = await axios.post(`/api/user/userUpdate/${userId}`, {});
    func(data)
  }catch(err){
    func(data)
  }
}

export async function applyForInstructor( func) {
  try{
    const { data } = await axios.post(`/api/user/applyForInstructor`, {});
    func(data)
  }catch(err){
    func(data)
  }
}
