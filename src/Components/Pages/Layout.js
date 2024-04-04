import React, { useState } from 'react'
import HomePage from './HomePage'
import About from './About'
// import ToDoList from '../CustomComponents/ToDoForm'
import ToDoForm from '../CustomComponents/ToDoForm'

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
    <div>
      { addClick &&
      <div className='formSection' style={{ zIndex:'999'}}>
       <ToDoForm handleTaskClose={handleTaskClose} /> 
       </div>
       }
       
       <div style={addClick ? {backdropFilter: 'blur(10px)', opacity:'50%' , zIndex:'' }: { }}>

         <HomePage addClicked={handleAddTask}/>
          <About/>
       </div>
       
       
      
        
      
    </div>
  )
}

export default Layout
