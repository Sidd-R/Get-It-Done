import React from "react"
import {FaTimes} from'react-icons/fa'

const Task = ({task, onDelete, reminder}) => {

  return (
    <div className={`task ${task.reminder? 'reminder':''}`} onDoubleClick={()=>reminder(task.id)}>
        <h3>
        {task.text}{' '}
        <FaTimes 
            style={{color: 'red', cursor: 'pointer'}} 
            // onClick={()=>{            }}
            // onClick ={() =>console.log("lets see")}
            onClick={()=>onDelete(task.id)}
        />
        </h3>
        {task.day} 
    </div>
  )
}

export default Task