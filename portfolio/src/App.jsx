import Contactpage from '../pages/Contactpage'
import Homepage from '../pages/Homepage'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/contact' element={<Contactpage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
