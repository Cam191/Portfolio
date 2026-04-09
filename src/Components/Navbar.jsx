import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <span className="navbar-name">Cameron Allen</span>
      <button className="hamburger" onClick={() => setOpen(!open)}>
        {open ? '✕' : '☰'}
      </button>
      <div className={`navbar-links ${open ? 'open' : ''}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/cardgame" onClick={() => setOpen(false)}>Card Game</Link>
        <Link to="/group-database" onClick={() => setOpen(false)}>Group Database</Link>
        <Link to="/solo-database" onClick={() => setOpen(false)}>Solo Database</Link>
        <Link to="/website" onClick={() => setOpen(false)}>Shop Website</Link>
        <Link to="/phonegame" onClick={() => setOpen(false)}>Phone Game</Link>
      </div>
    </nav>
  )
}

export default Navbar