import React from 'react'
import './Trending.css'
import Heading from '../heading/Heading';
import { trending } from '../../constant';
const Trending = () => {
  return (
    <div>
      <Heading name="Trending" title="Trending Images"/>
      <div className='app__trending'>
      <div className='app__trending-groupA'>
        <img src={trending[0].image} alt="image" />
        <h3>{trending[0].title}</h3>
        <p>{trending[0].info}</p>
      </div>
      <div className='app__trending-groupB'>
      <div className='app__trending-groupB-img'>
        <img src={trending[1].image} alt="image" />
        <h3>{trending[1].title}</h3>
        <p>{trending[1].info}</p>

      </div>
      <div className='app__trending-groupB-img'>
        <img src={trending[2].image} alt="image" />
        <h3>{trending[2].title}</h3>
        <p>{trending[2].info}</p>

      </div>
      <div className='app__trending-groupB-img'>
        <img src={trending[3].image} alt="image" />
        <h3>{trending[3].title}</h3>
        <p>{trending[3].info}</p>
      
      </div>
      <div className='app__trending-groupB-img'>
        <img src={trending[4].image} alt="image" />
        <h3>{trending[4].title}</h3>
        <p>{trending[4].info}</p>
   
      </div>
      </div>
      </div>
    </div>
  )
}

export default Trending
