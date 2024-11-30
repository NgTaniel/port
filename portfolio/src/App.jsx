import Aboutpage from '../pages/Aboutpage'
import Contactpage from '../pages/Contactpage'
import Experiencepage from '../pages/Experiencepage'
import Homepage from '../pages/Homepage'
import Projectpage from '../pages/Projectpage'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/about' element={<Aboutpage/>}/>
          <Route path='/experience' element={<Experiencepage/>}/>
          <Route path='/projects' element={<Projectpage/>}/>
          <Route path='/contact' element={<Contactpage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
