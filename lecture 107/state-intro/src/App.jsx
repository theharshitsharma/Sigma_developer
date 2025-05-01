import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(3)

  return (
    <>
     the count is {count}
     <button onClick={()=>{setCount(count*2)}}>update count</button>
     
     </>
  )
}

export default App
