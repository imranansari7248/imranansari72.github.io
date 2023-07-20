import React from 'react';
import heroLeft from '../../assets/images/heroleft.jpg';

const HeroLeft = () => {
  return (
    <div className='hidden absolute -bottom-0 -right-32 md:right-0 md:bottom-0 md:flex'>
        <img src={heroLeft} alt="" className='opacity-70' />
    </div>
  )
}

export default HeroLeft