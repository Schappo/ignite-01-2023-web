import { useState } from 'react'
import { Habit } from './components/Habit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Habit completed={1} />
      <Habit completed={2} />
      <Habit completed={3} />
      <Habit completed={4} />
      <Habit completed={444} />
      <Habit completed={1111} />
      <Habit completed={12222} />
    </>
  )
}

export default App
