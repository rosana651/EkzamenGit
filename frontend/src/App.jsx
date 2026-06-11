import { useState } from 'react'
import NavBar from './components/NavBar'
import FirstSection from './components/FirstSection'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <FirstSection />
    </>
  )
}

export default App
