export async function adminLogin(email, password, func) {
  const { data } = await axios.post(`/api/admin/adminLogin/`,{email,password});
  func(data)
}

export async function getAllInstructors(token, func) {
  const  {data} = await axios.get('/api/admin/getAllInstructors',{headers:token});
  func(data)
}

export async function getCoursesSummary(token, func) {
  const  {data} = await axios.get('/api/admin/getCoursesSummary',{headers:token});
  func(data)
}

export async function getAllOrders(token, func) {
  const  {data} = await axios.get('/api/admin/getAllOrders',{headers:token});
  func(data)
}

export async function userRequests(token, func) {
  const  {data} = await axios.get('/api/admin/userRequests',{headers:token});
  func(data)
}

export async function instructorPayments(token, func) {
  const  {data} = await axios.get('/api/instructorPayments/paymentsToInstructors',{headers:token});
  func(data)
}
