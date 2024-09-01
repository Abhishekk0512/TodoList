import { useState } from 'react'
import './App.css'
import Home from './Home'

function App() {
  const[color, setColor] = useState("olive")
  return (
    <div className='flex flex-col justify-center items-center p-8'>
      <Home/>
    </div>
  )
}

export default App
