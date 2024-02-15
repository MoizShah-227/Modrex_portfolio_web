import React from 'react'
import './Hero.css'
import rightimg from '../img/Rightside.svg'
const Hero = () => {
  return (
    <div className='hero-main mt-3'>
      <div className='container'>
        <div className='row'> 
            <div className='left col-lg-6 mt-5 pt-5'>
                <h1>We Develop Highly</h1>
                <h1><span>Efficient </span>And</h1>
                <h1>Amazing Websites!</h1>
                <button className=' mt-2 mx-2 btn'><a href='https://drive.google.com/file/d/1mLlfdIDVIQICUL76fmiWst5b7s2tanFs/view?usp=sharing' target="blank">My Resume</a></button>
            </div>
            <div className='right col-lg-6 '>
            <img className='right-side-img' src={rightimg}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
