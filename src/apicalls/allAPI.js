import apiService from "../api/apiService";



export const addStudentApi=async (reqBoady)=>{
  return await  apiService("POST",'/students',reqBoady)
}

export const getStudentsApi=async (reqBoady)=>{
  return await  apiService("GET",'/students',reqBoady)
}

export const getSingleStudentApi=async (id)=>{
  return await  apiService("GET",`/students/${id}`)
}


export const editStudentApi=async  (id,reqBoady)=>{
  return await apiService("PUT",`/students/${id}`,reqBoady)

}


export const deleteStudentApi=async  (id)=>{
  return await apiService("DELETE",`/students/${id}`,{})

}
