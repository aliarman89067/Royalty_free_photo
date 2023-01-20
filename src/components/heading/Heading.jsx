import React from 'react'
import './Heading.css'
const Heading = ({ margin, name, title, }) => {
  return (
    <div className='app__heading' style={{marginTop:`${margin}`}}>
      <h4>{name}</h4>
      <h1>{title}</h1>
      <div className='app__line' />
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
    </div>
  )
}

export default Heading