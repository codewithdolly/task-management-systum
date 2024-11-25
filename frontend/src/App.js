import React from 'react'
import UserList from "./component/UserList/UserList";
import "./App.css"
import TaskList from './component/TaskList/TaskList';

function App() {
  return (
    <div className='App'>
<UserList /> 
<div>
<TaskList />

</div>
    </div>
  )
}

export default App