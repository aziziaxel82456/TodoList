import React from 'react'
import todo_icon from '../assets/todo_icon.png'
import Todoitems from './Todoitems'

const Todo = () => {
  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
     {/*--------------------title-------------------- */} 
    <div className='flex items-center mt-7 gap-2'>
      <img src={todo_icon} alt="todo icon" className='w-10'/>
      <h1 className='text-3xl font-bold font-montserrat'>To-Do List</h1>
    </div>
    {/*--------------------Input Box-------------------- */} 
    <div className="flex items-center my-7 bg-gray-200 rounded-full font-montserrat">
      <input type="text" placeholder='Add your task' className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600'/>
      <button className=' rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-bold cursor-pointer'>ADD +</button>
    </div>
    {/*--------------------Todo List-------------------- */}
    <div>
      <Todoitems text={"learning to code"}/>
      <Todoitems text={"Revision of Tcf Canada"}/>
    </div> 
    
    
    </div>
  )
}

export default Todo