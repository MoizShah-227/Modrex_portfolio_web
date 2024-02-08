import React from 'react';
import './Footer.css';
import img from '../img/profile.jpg'
import logo1 from '../img/fiverr-icon.png'
import logo2 from '../img/upwork-icon.png'
import logo3 from '../img/linkedin_3536505.png'
import logo4 from '../img/github.png'
import logo5 from '../img/instagram.png'
const Footer = () => {
  return (
    <div className='contact mt-5' id='contact'>
      <div className='container pt-5'>
        <h1 className='heading'>Contact us</h1>
        <div className='row'>
            <div className='left col-lg-6 mt-5'>
                <div className='profile'>
                    <img className='profile-img' src={img} />
                    <h3>Moiz Shah</h3>
                </div>
                <p>I am a highly proficient full-stack web developer with expertise in React.js. Additionally, I possess strong skills in Java, C++, data structures and algorithms (DSA), SQL databases, Firebase, and MongoDB.</p>
            </div>


            <div className='right col-lg-6  mt-5 pt-4'>
                <h3>Social</h3>
                <div className='row'>
                    <ul>
                    <li><a href='https://www.fiverr.com/users/moizhs' target="blank"   ><img src={logo1} width={30} /></a></li>
                    <li><a href='https://www.upwork.com/freelancers/~0118fe5bc63e508e23' target="blank"  ><img src={logo2} width={30} /></a></li>
                    <li><a href='https://www.linkedin.com/in/syed-moiz-hassan-253236215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target="blank"  ><img src={logo3} width={30} /></a></li>
                    <li><a href='https://github.com/MoizShah-227' target="blank"  ><img src={logo4} width={30} /></a></li>  
                    <li><a href='https://www.instagram.com/moiz.shah.75286?igsh=YzljYTk1ODg3Zg==' target="blank"  ><img src={logo5} width={30} /></a></li>

                    </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
