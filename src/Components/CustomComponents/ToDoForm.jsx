// TodoForm.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../StateManagement/actionTypes' // Update import statement
import { IoMdCloseCircle } from "react-icons/io";


function TodoForm({ addTodo,handleTaskClose }) {
  const [task, setTask] = useState({ title: '', description: '', dueDate: '' }); // State to store task details

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleAddTodo = () => {
    if (task.title.trim() !== '') {
      addTodo(task); // Pass the whole task object to addTodo action
      setTask({ title: '', description: '', dueDate: '' }); // Reset task state
    }

    handleTaskClose();
    
  };

  return (
    <div className='toDoForm'>
       
       <div className='' style={{textAlign:'right'}}> 
         
          <IoMdCloseCircle size={30}  className="close-icon" onClick={handleTaskClose}/>
       </div>

      <h3 style={{ textAlign:'center'}}>Add Task</h3> 
      <input type="text" name="title" value={task.title}  style={{padding:'2%'}} onChange={handleInputChange} placeholder="Task title" />
      <textarea name="description" value={task.description} style={{padding:'6%'}}  onChange={handleInputChange} placeholder="Task description" />
      <input type="date" name="dueDate" value={task.dueDate} style={{padding:'2%'}}  onChange={handleInputChange} placeholder="Due date" />
      <button onClick={handleAddTodo}>Add Task</button>
    </div>
  );
}
  
const mapDispatchToProps = {
  addTodo,
};

export default connect(null, mapDispatchToProps)(TodoForm);
