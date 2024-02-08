import React from 'react'
import { Link } from 'react-router-dom'
import '../components/Navbar.css';
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg   py-3 fixed-top">
      <div class="container">
        <h1 href="#" class="navbar-brand"><span>M</span>odrex</h1>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navmenu">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a href="" class="nav-link home">Home</a>
            </li>
            <li class="nav-item">
              <a href="#about" class="nav-link">About us</a>
            </li>
            <li class="nav-item">
              <a href="#portfolio" class="nav-link">Portfolio</a>
            </li>
            <li class="nav-item">
              <a href="#contact" class="nav-link">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
