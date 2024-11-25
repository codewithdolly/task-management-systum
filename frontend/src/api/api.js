import axios from "axios";

// Base URL
const API_BASE_URL = "http://localhost:8000/api";

// Fetch all users
export const fetchUsers = async () => {
   const response = await axios.get(`${API_BASE_URL}/users`);
  //  return response.data;
   console.log("list is", response.data);
   
 };

 //fetch all task
  export const fetchAllTask= async () => {
    const response= await axios.get(`${API_BASE_URL}/tasklist`);
    console.log("task list is ", response.data);
  
    
  }
 