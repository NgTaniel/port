import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'

const root = document.getElementById('root')

// createRoot(document.getElementById('root')).render(
//   <Router>
    
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   </Router>
// )
if (root) {
  createRoot(root).render(
    <StrictMode>
      <Router>
        <App />
      </Router>
    </StrictMode>
  );
}
