import React, { useEffect, useState } from 'react'
import {fetchUsers} from '../../api/api'
import "./UserList.css"

const UserList = () => {
const [users, setUsers] = useState([])

useEffect(() => {
  const getUsers = async () => {
    const data = await fetchUsers();
    setUsers(data);
    
  };
  getUsers();
}, []);


  return (
    <div className='userList'>
   
      <table>
        <thead className='table'>
          <tr>
         
          <th colSpan='4'>User List
          
          </th>
          </tr>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone No</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phoneNo}</td>
              <td>{user.role}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
   
    
    </div>
  )
}

export default UserList