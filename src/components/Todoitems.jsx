import React from 'react'
import tick from "../assets/tick.png"
import not_tick from "../assets/not_tick.png"
import delete_icon from "../assets/delete.png"
const Todoitems = ({text}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div className='flex flex-1 items-center cursor-pointer'>
            <img src={tick} alt="done" className='w-7' />
            <p className='text-slate-700 ml-4 font-montserrat text-base'>{text}</p>
        </div>
        <img src={delete_icon} alt="delete task" className='w-4 cursor-pointer'/>
    </div>
  )
}

export default Todoitems