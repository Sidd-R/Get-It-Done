import React from 'react'
import Task from './Task'

const Tasks = ({tasks, onDelete, reminder}) => {

  return (
    <>
        {tasks.map((task) => <Task key={task.id} task={task} onDelete={onDelete} reminder={reminder}/>)}
    </>
  )
}

export default Tasks