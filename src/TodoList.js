import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import {useState} from 'react';
const TodoList = ({todo,index, completeTodo} ) => {

  return (
    <>
  
   <div className={todo.complete ? 'todo-item-container done': 'todo-item-container'}>
      <div className="todo-item-container">
       {todo.complete ? <FaRegCheckCircle className="item-done-button" color="#9a9a9a" onClick={()=>completeTodo(index)}/>: <FaRegCircle className="item-done-button" color="#9a9a9a" onClick={()=>completeTodo(index)}/>} 
        <div className="item-title"  >{todo.task} </div>
      </div>
</div>

    </>
  );
};

export default TodoList;
