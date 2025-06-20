import logo from './logo.svg';
import React,{useState} from 'react'
import { MdDeleteOutline  } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import './App.css';

function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  return (
    <div className="App">
      <div className="todo-wrapper">
        <h1>Daily TODO</h1>
        <div className="todo-input">

          <div className="todo-input-item">
            <label>Title</label>
            <input type="text" placeholder="Task's Title"/>
          </div>

          <div className="todo-input-item">
            <label>Description</label>
            <input type="text" placeholder="Task's Description"/>
          </div>

          <div className="todo-input-item">
            <button type="button" className="primaryBtn">Add</button>
          </div>

        </div>

        <div className="btn-area">
          <button className={`secondaryBtn ${isCompleteScreen===false && 'active'}`} onClick={()=>setIsCompleteScreen(false)}>TODO</button>
          <button className={`secondaryBtn ${isCompleteScreen===true && 'active'}`} onClick={()=>setIsCompleteScreen(true)}>Completed</button>
        </div>

        <div className="todo-list">
          <div className="todo-list-item">
            <div>
              <h3>Task 1</h3>
              <p>Description</p>
            </div>

            <div>
              <MdDeleteOutline className="icon delete"/>
              <FaCheck className='icon check'/>
            </div>
              
          </div>
          

        </div>

      </div>
    </div>
  );
}

export default App;
