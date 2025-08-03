import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='justify-center '>
      <h1 className='text-blue-600  text-3*1 font-bold '>Joy Ezenwoke</h1>
       <br></br>
      <h2 className='justify-center text-purple-400 text-2*1 font-semi-bold'>Software Developer </h2>

      <p className='justify-center text-white text-x1 font-medium'>I’m a passionate software developement student learning to building web applications using modern technologies. I enjoy solving problems through clean, efficient code. I’m committed to continuous learning and creating impactful digital solutions.</p>
    </div>
  )
}

export default App
