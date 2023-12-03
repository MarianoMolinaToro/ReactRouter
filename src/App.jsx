import { useState } from 'react'

import './App.css'
import AppRoutes from './routes/AppRoutes'
import Navigation from './components/Navigation'



function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        <Navigation/>
        <AppRoutes />
        
    
      </div>
 
  )
}

export default App
