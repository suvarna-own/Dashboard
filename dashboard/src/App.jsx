import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import MainContainer from './components/MainContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex font-semibold text-2xl">
      <Sidebar />
      <MainContainer />
    </div>
  )
}

export default App
