import React, { useState } from 'react'
import './todolist.css'
import {GrCheckbox} from "react-icons/gr"
import {IoIosCheckbox} from "react-icons/io"
import {AiFillDelete} from "react-icons/ai"
import {BiEdit} from 'react-icons/bi'


 const TodoList = () => {
    const [inputVal,setInputVal] = useState('')
    const [inputArr,setInputArr] = useState([])
    const [completedTask, setCompletedTask] = useState('')
    const [completedArr, setCompletedArr] = useState([])
    const [isChecked, setIsChecked] = useState(false);
    const [checked, setChecked] = useState(false)
 
    const addTask = (e) => {
        e.preventDefault()
        if(!inputVal){
            alert('Please, input valid task')
        } else{
            setInputArr([...inputArr,inputVal])
            setInputVal('')
        }
    }
    const completeTask = (id) => {
        const completedTask = inputArr[id];
        setInputArr((prevInputArr) => prevInputArr.filter((task, idx) => idx !== id));
        setCompletedArr((prevCompletedArr) => [...prevCompletedArr, completedTask]);
      }
    const deleteTask = (id) => {
        const newArr = inputArr.filter((task,idx)=> {
            return idx !== id 
        })
        setInputArr(newArr)
    }
    const deleteComplTask = (id) => {
        const newArr = completedArr.filter((task,idx) => {
            return idx !== id
        })
        setCompletedArr(newArr)
    }
    const deleteAllTasks = () => {
        setInputArr([])
    }
    const deleteComplTasks = () => {
        setCompletedArr([])
    }
    const switchBox = () => {
        setChecked(!checked)
    }
      
    const editTask = () => {
        setInputVal()
    }


        
  return (
    <article>
        <div className='input-wraper'>
             <h1 className='h1'>To do list</h1>
             <p>Please, input and submit your task</p>
            <input className='input'
                   type="text"
                   value={inputVal}
                   onChange={(e)=> {setInputVal(e.target.value)}}>
                   </input>
            <button className='subBut'
                    onClick={addTask}>Submit task</button>
                    </div>

        <div className='todos'> 
                <button className='deleteAllTaskTbtn'
                onClick={deleteAllTasks}>Delete all tasks</button>
        <ul>
            {inputArr.map((task,idx)=> {
              return <li className='task' key={idx}>{task}
                <button className='deleteBtn' onClick={()=>deleteTask(idx)}>delete</button>
                <button className='completedBtn' onClick={()=>completeTask(idx)}>Complete</button>
            </li>})}
        </ul>
     </div>

       <div className='completed-tasks'>
            <h3>Completed</h3>
            <p>Here are your completed tasks:</p>
            <button className='deleteComplBTN'
            onClick={deleteComplTasks}>Delete all completed tasks</button>
        <ul>
        {completedArr.map((complTask,idx) => {
        return <li className='compltask' key={idx}><del>{complTask}</del>
        <div className='deleteCheckBtn'>
        <div className='deletecomptask' onClick={() => deleteComplTask(idx)}><AiFillDelete/></div>
        <div className='checkBox' onClick={switchBox}>{checked ?<IoIosCheckbox/> : <GrCheckbox/> }</div>
        <div className='editBtn' onClick={()=>editTask}><BiEdit/></div>
            </div>
            </li>})}
        </ul>
     </div>
</article>
  )
}


export default TodoList
