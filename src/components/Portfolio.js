import React, { useRef,useState,useEffect} from 'react';
import './Portfolio.css';
import arrowright from '../img/arrow-right.svg'
import arrowleft from '../img/arrow-left.svg'
import img1 from '../img/Screenshot (5).png';
import img2 from '../img/Screenshot (8).png';
import img3 from '../img/Screenshot (9).png';

const Portfolio = () => {
    const containerRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
  
    const handleScrollLeft = () => {
      setScrollPosition((prevPosition) => Math.max(prevPosition - 200, 0));
    };
  
    const handleScrollRight = () => {
      setScrollPosition((prevPosition) => Math.min(prevPosition + 200, containerRef.current.scrollWidth - containerRef.current.clientWidth));
    };

    useEffect(() => {
        containerRef.current.scrollLeft = scrollPosition;
      }, [scrollPosition, containerRef]);
    
  return (
    <div className='portfolio-page mt-5 pt-5' id='portfolio'>
      <div className='container mt-5'>
        <h1 className='heading'>Portfolio</h1>
        
        <div className='slider mt-5 pt-5'>
        <button onClick={handleScrollLeft} className='btn btn-light'><i class="bi bi-chevron-left"></i></button>
      <div className='contain-slider' ref={containerRef} style={{ overflowX: 'hidden' }}>
        {/* START */}
        <a href='https://www.w3schools.com/html/html_links.asp' target="_blank">
     <div className='box'>
            <div className='inner-box'>
                <img src={img1} width={400}/>
                <h5 className='tagline mt-4'>Project Name: Monkey</h5> 
            </div>
        </div>
        </a>

        <a href='https://www.w3schools.com/html/html_links.asp' target="_blank">
     <div className='box'>
            <div className='inner-box'>
                <img src={img1} width={400}/>
                <h5 className='tagline mt-4'>Project Name: Monkey</h5> 
            </div>
        </div>
        </a>
        <a href='https://www.w3schools.com/html/html_links.asp' target="_blank">
     <div className='box'>
            <div className='inner-box'>
                <img src={img1} width={400}/>
                <h5 className='tagline mt-4'>Project Name: Monkey</h5> 
            </div>
        </div>
        </a>
        <a href='https://www.w3schools.com/html/html_links.asp' target="_blank">
     <div className='box'>
            <div className='inner-box'>
                <img src={img1} width={400}/>
                <h5 className='tagline mt-4'>Project Name: Monkey</h5> 
            </div>
        </div>
        </a>
        {/* END */}
      </div>
      <button onClick={handleScrollRight} className='btn btn-light'><i class="bi bi-chevron-right"></i></button>
        </div> 
        {/* END */}
      </div>
    </div>
  );
}

export default Portfolio;
