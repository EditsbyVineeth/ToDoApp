import React, { useState } from 'react';
import { connect } from 'react-redux';
import { MdDelete, MdOutlineDone } from "react-icons/md";
import { deleteTask } from '../../StateManagement/actionTypes'

function TaskList({ todos, deleteTask }) {
  const [completedTasks, setCompletedTasks] = useState([]);
  const [done, setDone]= useState(false)
  

  const handleComplete = (index) => {
    if (completedTasks.includes(index)) {
      // Task is already completed, remove from completed tasks
      setCompletedTasks(completedTasks.filter(taskIndex => taskIndex !== index));
    } else {
      // Task is not completed, mark as completed
      setCompletedTasks([...completedTasks, index]);
    }

    setDone(!done)

  };
  console.log(done)

  const handleDelete = (index) => {
    deleteTask(index);
  };

  return (
    <>
      {todos.map((todo, index) => (
        <div className={`taskListBar  ${completedTasks.includes(index) ? 'completed ' : ''}`} key={index}>

          <div className='taskbar_operation'>
            <div className='mark_completed'>
              <MdOutlineDone className='markTick' onClick={() => handleComplete(index)} />
            </div>
            <MdDelete onClick={() => handleDelete(index)} />
          </div>
          <div>
            <h4>{todo.title}</h4>
            <div>{todo.description}</div>
            {todo.dueDate && <div style={{ fontWeight: 'lighter' }}>Due on: {todo.dueDate}</div>}
          </div>
        </div>
      ))}
    </>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  deleteTask: (index) => dispatch(deleteTask(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
