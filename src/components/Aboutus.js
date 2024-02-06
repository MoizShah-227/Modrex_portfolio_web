import React from 'react'
import '../components/Aboutus.css'
import gif from '../img/showcase.svg'
const Aboutus = () => {
  return (
    <div className='about-page mt-5 pt-5' id='about'>
      <div className='container'>
        <h1 className='heading '>About us</h1>
        <div className='row mt-5 '>
            <div className='left col-lg-6'>
            <p>Turn your digital aspirations into tangible results with our top-notch software development services! Our team of seasoned developers is committed to creating tailored solutions that enhance your online visibility and foster expansion. <br/>Whether it's web and mobile applications or enterprise software, we excel at providing premium, SEO-enhanced solutions that set you apart in the digital arena. Allow us to bring your ideas to life and propel your business to unprecedented success through state-of-the-art technology and unmatched proficiency.</p>
            </div>
            <div className='right col-lg-6'>
            <img className='gif-img' src={gif} alt='loading...'/>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutus
