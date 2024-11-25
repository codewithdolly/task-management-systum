import React, { useEffect, useState } from 'react'
import { fetchAllTask} from "../../api/api";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Button from '@mui/material/Button';



const TaskList = () => {
const [showTask, setShowTask] = useState([])

useEffect(() => {
  const getAllTask= async () => {
    const data = await fetchAllTask();
    setShowTask(data);
  }

  getAllTask()
}, [])


  return (
    <div>
      
    
     {showTask.map((task)=>(
         <Accordion key={task._id}>
         <AccordionSummary
           expandIcon={<ExpandMoreIcon />}
           aria-controls="panel3-content"
           id="panel3-header"
         >
          {task.title}
         </AccordionSummary>
         <AccordionDetails>
           {task.description}
         </AccordionDetails>
         <AccordionActions>
           <Button>Cancel</Button>
           <Button>Agree</Button>
         </AccordionActions>
       </Accordion>

))}
   
    </div>
  )
}

export default TaskList