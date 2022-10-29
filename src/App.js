import "./styles.css";
import TodoList from "./TodoList";
import TodoListHeader from "./TodoListHeader";
import Form from "./Form";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import {useEffect, useState} from 'react'
// import {useEffect, useState} from 'react';
import ContextLanguage from "./Context/Context";

export default function App() {
  const [language,setLanguage]=useState(
    {
      placeholder:'Enter task ...',
      submit: 'submit',
      made: 'made by MindX',
      switch:'Available on',
      test1:'You have',
      test2:'tasks left!'
    },)
  const [display,setDisplay]=useState(true)
  return (
    <div className="App">
      <ContextLanguage.Provider value={{language:language,setLanguage:setLanguage,display,setDisplay}}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </ContextLanguage.Provider>
    </div>
  );
}

const Home = () => {
  const [iscomplete,setIsComplete]=useState(false)
  const [todos,setTodos]=useState([
  ])
  const [taskLeft,setTaskLeft]=useState(0)
  const listData=[
        {id:1,task: 'Build some websites', complete:false},
    {id:2,task:'Do excercises', complete:false},
    {id:3,task:'Go shopping', complete:false},
    {id:4, task:'House cleaning', complete:false}
  ]
  const [test,setTest]=useState([])
  useEffect(()=>{
    setTodos(listData)
    setTest(listData)

    const t=(()=>{
      console.log(test)
    })
t()
  },[])

  useEffect(()=>{
    let count =0;
    for (let i=0;i<test.length;i++){
      if(test[i].complete==false){
        count++
      }
    }
    setTaskLeft(count)
  },[todos])





  const addTodo=(task)=>{
    const newTodos=[...todos, {task}];
    setTodos(newTodos)
    console.log(newTodos)
  }
const completeTodo=index=>{
  
  const newTodos=[...todos];
  newTodos[index].complete=!newTodos[index].complete
  setTodos(newTodos)
  setTest(newTodos)
}
const filterChecked=()=>{
        const newTodos2=[...test]
  const tat=newTodos2.filter((t)=>t.complete===true)
  setTodos(tat)
}

const filterNotCheck=(()=>{
  const newTodos2=[...test]
  const tat=newTodos2.filter((t)=>t.complete===false)
  setTodos(tat)
})
const filterFull=(()=>{
  const newTodos2=[...test]
  setTodos(newTodos2)
})

const sortTask=(()=>{
 
  const a=[...test];
 
  const t=a.sort((a,b)=> a>b? 1:-1)
  setTodos(t)
})


  return (
    <div className="App">
      <div className="container">
        <TodoListHeader filterCheck={filterChecked} filterNotCheck={filterNotCheck} filterFull={filterFull} t={taskLeft} sortTask={sortTask} />
        <div className="todo-list-container">
        {todos.map((todo,index)=>{
          return(
          <>
          <TodoList todo={todo} key={index} index={index}  completeTodo={completeTodo} />
          </>)})}
          </div>
        <Form props={addTodo}/>
      </div>
      <Footer />
    </div>
  );
};