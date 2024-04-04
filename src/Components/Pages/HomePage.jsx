import React,{useEffect} from 'react'
import Nav from './Nav'
import TaskTiles from '../CustomComponents/TaskTiles'
import cardImg1 from '../../Assets/16773c28-b83f-47a6-9d4c-b41a5b317ecf.jpg'
import cardImg2 from '../../Assets/3991540.jpg'
import cardImg3 from '../../Assets/4831473.jpg'
import { FiPlus } from "react-icons/fi";
import TaskList from '../CustomComponents/TaskList'
import { initTodo } from '../../StateManagement/actionTypes';
import store from '../../StateManagement/store'

function HomePage({addClicked}) {
    useEffect(() => {
        const todosFromLocalStorage = JSON.parse(localStorage.getItem('todos')) || [];
        store.dispatch(initTodo(todosFromLocalStorage));
      }, []); // Dispatch initTodo action on component mount
    
  return (
    <div>
        <Nav/>

        <section class="row" className='cardSection'>
          <h2 style={{ position:'absolute', color:'white'}}>Task Flow</h2>

          <img src ={cardImg1} className='welcomeImage' alt='bga'/>

          
        </section>
        {/* --------------------------------------- */}

                  {/* Task Add button */}

            <div className='taskButton'>     
                <button className='createTask bg-danger' onClick={addClicked}>
                    <FiPlus size={26}/> <br/>
                </button>
                 Add Task
            </div>

            {/* -------------------------------- */}

            <section className='taskListSection'>

                <TaskList/>
            </section>

      
    </div>
  )
}

export default HomePage
