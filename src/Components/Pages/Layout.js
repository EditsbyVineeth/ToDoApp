import React, { useState } from 'react'
import HomePage from './HomePage'
import About from './About'
// import ToDoList from '../CustomComponents/ToDoForm'
import ToDoForm from '../CustomComponents/ToDoForm'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function Layout() {
  const[ addClick, setAddClick]= useState(false)

  const handleAddTask =()=>{
    setAddClick(true)
    console.log("task Open")
  }

  const handleTaskClose =()=>{
    setAddClick(!addClick)
    console.log("task closed")
  }



  return (
    <Router>
      <div>
        { addClick &&
        <div className='formSection' style={{ zIndex:'999'}}>
         <ToDoForm handleTaskClose={handleTaskClose} /> 
         </div>
         }
         
         <div style={addClick ? {backdropFilter: 'blur(10px)', opacity:'50%' , zIndex:'' }: { }}>
  
          <Routes>

           <Route path='/' element={<HomePage addClicked={handleAddTask}/>} />
           <Route path='/about' element={<About/>} />
          
          </Routes>
         </div>
         
         
        
          
        
      </div>
    </Router>
  )
}

export default Layout
