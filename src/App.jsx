import './Style/App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Events from './Pages/Events.jsx'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/passe-jeune-prog/" element={<Home/>}/>
          <Route path="/passe-jeune-prog/events" element={<Events/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}


