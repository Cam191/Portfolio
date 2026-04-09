import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CardGame from './pages/CardGame'
import PhoneGame from './pages/PhoneGame'
import GroupDatabase from './pages/GroupDatabase'
import SoloDatabase from './pages/SoloDatabase'
import Website from './pages/ShopWebsite'
import Navbar from './Components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardgame" element={<CardGame />} />
        <Route path="/phonegame" element={<PhoneGame />} />
        <Route path="/group-database" element={<GroupDatabase />} />
        <Route path="/solo-database" element={<SoloDatabase />} />
        <Route path="/website" element={<Website />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
