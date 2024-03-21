import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header'
import "../node_modules/bootstrap/dist/css/bootstrap.css"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
      </BrowserRouter>
    </div>
  )
}

export default App
