import { AnimatePresence } from 'framer-motion'
import Aboutpage from '../pages/Aboutpage'
import Contactpage from '../pages/Contactpage'
import Experiencepage from '../pages/Experiencepage'
import Homepage from '../pages/Homepage'
import Projectpage from '../pages/Projectpage'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'

const App = () => {
  const location = useLocation();

  return (
    <>
      {/* <BrowserRouter> */}
      <AnimatePresence mode='wait'>
        <Routes key={location.pathname} location={location}>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/about' element={<Aboutpage/>}/>
          <Route path='/experience' element={<Experiencepage/>}/>
          <Route path='/projects' element={<Projectpage/>}/>
          <Route path='/contact' element={<Contactpage/>}/>
        </Routes>
      </AnimatePresence>
      {/* </BrowserRouter> */}
    </>
  )
}

export default App
