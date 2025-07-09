import logo from './logo.svg';
import React,{useEffect, useState} from 'react'
import { MdDeleteOutline  } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import './App.css';

function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [allTodos, setTodos] = useState([])
  const [newTitle, setNewTitle] = useState();
  const [newDesc, setNewDesc] = useState();

  const addDailyTodo = () => {
    let newTodoItem = {
      title:newTitle,
      desc:newDesc
    }

    let updatedTodoItems = [...allTodos];
    updatedTodoItems.push(newTodoItem);
    setTodos(updatedTodoItems);
    localStorage.setItem('todolist',JSON.stringify(updatedTodoItems));
  };

  const deleteDailyTodo = (index) => {
    console.log(index);
    let reducedTodo = [...allTodos];
    reducedTodo.splice(index);
    localStorage.setItem('todolist',JSON.stringify(reducedTodo));
    setTodos(reducedTodo);
  };

  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem('todolist'));
    if(savedTodo) {
      setTodos(savedTodo);
    }
  },[])

  return (
    <div className="App">
      <div className="todo-wrapper">
        <h1>Daily TODO</h1>
        <div className="todo-input">

          <div className="todo-input-item">
            <label>Title</label>
            <input type="text" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} placeholder="Task's Title"/>
          </div>

          <div className="todo-input-item">
            <label>Description</label>
            <input type="text" value={newDesc} onChange={(e)=>setNewDesc(e.target.value)} placeholder="Task's Description"/>
          </div>

          <div className="todo-input-item">
            <button type="button" className="primaryBtn" onClick={addDailyTodo}>Add</button>
          </div>

        </div>

        <div className="btn-area">
          <button className={`secondaryBtn ${isCompleteScreen===false && 'active'}`} onClick={()=>setIsCompleteScreen(false)}>TODO</button>
          <button className={`secondaryBtn ${isCompleteScreen===true && 'active'}`} onClick={()=>setIsCompleteScreen(true)}>Completed</button>
        </div>

        <div className="todo-list">

         {allTodos.map((item, index)=> {
          return (
            <div className="todo-list-item" key={index}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>

              <div>
                <MdDeleteOutline className="icon delete" onClick={()=>deleteDailyTodo(index)}/>
                <FaCheck className='icon check'/>
              </div>
          </div>


          )
         })}

        </div>

      </div>
    </div>
  );
}

export default App;
