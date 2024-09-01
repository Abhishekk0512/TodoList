import React, { useState } from 'react'
import axios from 'axios'

function Create() {
    const[task, setTask] = useState()
    const handleAdd = () =>{
        axios.post('http://localhost:3001/add', {task: task})
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err))
    }
  return (
    <div>
        <input
        className='p-2 border border-black w-96 mb-5'
        type='text'
        placeholder='Enter Task'
        onChange={(e) => setTask(e.target.value)}
        />
        <button
        className='bg-black text-white p-2'
        type='button'
        onClick={handleAdd}
        >
            Add
        </button>
    </div>
  )
}

export default Create