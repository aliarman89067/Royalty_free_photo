import React from 'react'
import './Resolution.css'
import { resolution } from '../../constant'
import Heading from '../heading/Heading'
const Resolution = () => {
  return (
    <div>
      <Heading margin={'10rem'} name="4K Resolution" title="4K Resolution Images" />
      <div className='app__trending'>
      <div className='app__trending-groupA'>
        <img src={resolution[2].image} alt="image" style={{width:'150%'}} />
        <h3>{resolution[2].title}</h3>
        <p>{resolution[2].info}</p>
      </div>
      <div className='app__trending-groupB'>
      <div className='app__trending-groupB-img'>
        <img src={resolution[1].image} alt="image" />
        <h3>{resolution[1].title}</h3>
        <p>{resolution[1].info}</p>

      </div>
      <div className='app__trending-groupB-img'>
        <img src={resolution[0].image} alt="image" />
        <h3>{resolution[0].title}</h3>
        <p>{resolution[0].info}</p>

      </div>
      <div className='app__trending-groupB-img'>
        <img src={resolution[3].image} alt="image" />
        <h3>{resolution[3].title}</h3>
        <p>{resolution[3].info}</p>
      
      </div>
      <div className='app__trending-groupB-img'>
        <img src={resolution[4].image} alt="image" />
        <h3>{resolution[4].title}</h3>
        <p>{resolution[4].info}</p>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Resolution
