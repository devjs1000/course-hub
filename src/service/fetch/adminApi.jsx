export async function adminLogin(email, password, func) {
  const { data } = await axios.post(`https://management-xcitedu.herokuapp.com/admin/adminLogin/`,{email,password});
  func(data)
}

export async function getAllInstructors(token, func) {
  const  {data} = await axios.get('https://management-xcitedu.herokuapp.com/admin/getAllInstructors',{headers:token});
  func(data)
}

export async function getCoursesSummary(token, func) {
  const  {data} = await axios.get('https://management-xcitedu.herokuapp.com/admin/getCoursesSummary',{headers:token});
  func(data)
}

export async function getAllOrders(token, func) {
  const  {data} = await axios.get('https://management-xcitedu.herokuapp.com/admin/getAllOrders',{headers:token});
  func(data)
}

export async function userRequests(token, func) {
  const  {data} = await axios.get('https://management-xcitedu.herokuapp.com/admin/userRequests',{headers:token});
  func(data)
}

export async function instructorPayments(token, func) {
  const  {data} = await axios.get('https://management-xcitedu.herokuapp.com/instructorPayments/paymentsToInstructors',{headers:token});
  func(data)
}
