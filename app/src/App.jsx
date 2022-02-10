import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer'
import Home from './pages/Home'
import Auth from './components/Auth'
function App() {

  return (
    <div className="App">
<Auth />
      <Routes>
        <Route path={'/'} element={<Home />} />
      </Routes>
<Footer />
    </div>
  )
}

export default App
