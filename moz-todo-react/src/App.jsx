import './App.css'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()

  const onViewClick = () => {
    navigate('view')
  }

  const onEnterClick = () => {
    navigate('enter')
  }

  return (
    <>
      <header>
        <h1>Welcome to Student Survey for SWE645!</h1>
        <button className="mainOption" onClick={onEnterClick}>Enter a Survey</button>
        <button className="mainOption" onClick={onViewClick}>View Entries</button>
      </header>
    </>
  )
}

export default App
