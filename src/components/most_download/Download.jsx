import React from 'react'
import Heading from '../heading/Heading'
import { download } from '../../constant'
import './Download.css'
const Download = () => {
  return (
    <div>
      <Heading margin={'10rem'} name="Most Download" title="Most Download Images" />
      <div className='app__download-container'>
      <div className='app__download-small_container'>
      <div className='app__download-small_box'>
      <img src={download[0].image} alt="image" />
      <h3>{download[0].title}</h3>
      <p>{download[0].info}</p>
      </div>
      <div className='app__download-small_box'>
      <img src={download[1].image} alt="image" />
      <h3>{download[1].title}</h3>
      <p>{download[1].info}</p>
      </div>
      <div className='app__download-small_box'>
      <img src={download[2].image} alt="image" />
      <h3>{download[2].title}</h3>
      <p>{download[2].info}</p>
      </div>
      <div className='app__download-small_box'>
      <img src={download[3].image} alt="image" />
      <h3>{download[3].title}</h3>
      <p>{download[3].info}</p>
      </div>
      </div>
      <div className='app__download-big_box'>
      <img src={download[4].image} alt="" />
      <h3>{download[4].title}</h3>
      <p>{download[4].info}</p> 
      </div>
      </div>
    </div>
  )
}

export default Download
