import React from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useState } from 'react'

function App() {

  const [showAddTask,setShowAddTask] = useState(false)
  const [tasks,setTasks] = useState([
    {
      "id": 2,
      "text": "Go shopping",
      "reminder": true,
      "day": "4th july 2020"
    },
    {
      "id": 3,
      "text": "study for ise",
      "reminder": false,
      "day": "26 august 2022"
    },
    {
      "text": "take a walk",
      "day": "31st july 2023",
      "reminder": true,
      "id": 4
    },
    {
      "text": "csfc",
      "day": "sxcs",
      "reminder": true,
      "id": 5
    }
  ])

  const onDelete = async (id) => {
    setTasks(tasks.filter(task=> task.id !== id))
  }

  const reminder = async id => {
    setTasks(
      tasks.map(task => task.id === id?
       {...task, reminder:!task.reminder}:task
      )
    )
  }

  const onAdd = (task) => {
    const id = Math.floor(Math.random()*10000)+1
    const nt = {id,...task}
    setTasks([...tasks,nt])
  };

  return (
    <Router>
      <div className='container'>
        <Header title="Task Tracker" onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask}/>
        
        <Routes>
          <Route path='/' exact element={
            <>
              {showAddTask && <AddTask onAdd={onAdd}/>}
              {tasks.length > 0? <Tasks tasks={tasks} onDelete={onDelete} reminder={reminder}/>:<h4 style={{textAlign:"center"}}>No Tasks Added</h4>}
            </>
          }/>
        {/* </Routes> */}
        {/* <Routes> */}
          <Route path='/about' element={<About/>}/></Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
