import React from "react";

const Socials = () => {
  return (
    <div className='Header-socials'>
      <ul>
        <li><a href="#">GitHub</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Snapchat</a></li>
      </ul>
    </div>
  )
}

const Header = () => {
  return (
    <div className='App-header'>
      <ul className="Header-list">
        <li><h1>Mikko Rajakorpi</h1></li>
        <li><Socials /></li>
      </ul>
    </div>
  )
}

export default Header