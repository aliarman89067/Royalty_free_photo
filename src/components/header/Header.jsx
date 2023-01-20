import React from 'react'
import './Header.css'
import { logo, search } from '../../assets'
const Header = () => {
  return (
    <div className='app__header'>
    <div className='app__header-content'>
      <h1>Stunning Pictures</h1>
      <p>Perfect for commercial and personal projects</p>
      <div className='app__header-search'>
      <input type="text" placeholder='Seach Images' />
        <img src={search} alt="Search" />
      </div>
      <div className='app__header-tags'>
        <p style={{fontWeight:'600', cursor:'unset'}}>Trending</p>
        <p>flowers, </p>
        <p>wallpaper, </p>
        <p>background, </p>
        <p>happy, </p>
        <p>love</p>
      </div>
    </div>
    </div>
  )
}

export default Header
