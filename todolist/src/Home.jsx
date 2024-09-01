import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios'
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from 'react-icons/bs';


function Home() {
    const[todos, setTodos] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/get')
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))
    },[])

const handleEdit = (id) => {
    axios.put('http://localhost:3001/update/' + id)
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err))
}

const handleDelete = (id) =>{
    axios.delete('http://localhost:3001/delete/' + id)
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err))
}

  return (
    <div className='flex flex-col justify-center items-center'>
        <h2 className='text-3xl font-bold mb-5'>Todo List</h2>
        <Create/>
        {
            todos.length === 0 ?
            <div className='flex justify-center items-center'>
                <h2 className='text-xl mt-5 font-bold'> No Record</h2></div>
                :
                todos.map(todo => (
                    <div className='flex justify-between gap-2 mt-2 w-full p-2 bg-black text-white'>
                        <div 
                        className='flex gap-2'
                        onClick={() => handleEdit(todo._id)}
                        >
                            {todo.done ? <BsFillCheckCircleFill></BsFillCheckCircleFill>: <BsCircleFill/>}
                            
                            <p className={todo.done ? 'line-through' : ''}>{todo.task}</p>
                        </div>
                        <div><BsFillTrashFill
                            onClick={() => handleDelete(todo._id)}
                        /></div>
                    </div>
                ))
        }

    </div>
  )
}

export default Home