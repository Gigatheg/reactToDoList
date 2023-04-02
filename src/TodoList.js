import React, { useState } from 'react'
import './todolist.css'

 const TodoList = () => {
    const [inputVal,setInputVal] = useState('')
    const [inputArr,setInputArr] = useState([])
 
    const addTask = (e) => {
        e.preventDefault()
        if(!inputVal){
            alert('Please, input valid task')
        } else{
            setInputArr([...inputArr,inputVal])
            setInputVal('')
        }
    }

    const deleteTask = (id) => {
        const newArr = inputArr.filter((task,idx)=> {
            return idx !== id 
        })
        setInputArr(newArr)
    }

  return (
    <article>
    <div className='input-wraper'>
        <h1 className='h1'>To do list</h1>
        <p>Please, input and submit your task</p>
        <input className='input'
         type="text"
         value={inputVal}
         onChange={(e)=> {setInputVal(e.target.value)}}
         >
         </input>
        <button className='subBut'
        onClick={addTask}>Submit task</button>
    </div>
    <div className='todos'>
        <ul>{inputArr.map((task,idx)=> {
            return <li className='task' key={idx}>{task}
            <button className='deleteBtn' onClick={()=>deleteTask(idx)}>Complete</button>
            </li>  
        })}</ul>
    </div>
    </article>
  )
}


export default TodoList
