import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contactpage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/')}>Back</button>
    </div>
  )
}

export default Contactpage