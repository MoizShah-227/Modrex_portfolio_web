import React, { useRef,useState,useEffect} from 'react';
import { collection, getDocs, query } from "firebase/firestore";
import { db} from './Config';
import './Portfolio.css';

const Portfolio = () => {
  const [dataArray, setDataArray] = useState([]);

  
  const fetchAllData = async () => {
    try {
      const dataRef = collection(db, "product");
      const q = query(dataRef);
      const snapshot = await getDocs(q);

      const newDataArray = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setDataArray(newDataArray);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []); // Trigger the fetch on component mount

  



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
        {
          
          dataArray.map((item)=>{

                return(
                  <a href={item.projectLink} target="_blank" key={item.id}>
                  <div className='box'>
                         <div className='inner-box'>
                             <img src={item.imgurl} width={400}/>
                             <h5 className='tagline mt-4'>Project Name: {item.ProjectName}</h5> 
                         </div>
                     </div>
                     </a>
                  );
          })
        }
       

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
