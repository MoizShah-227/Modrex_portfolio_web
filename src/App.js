import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/Aboutus'
import Portfolio from './components/Portfolio'
// import Upload  from './components/Upload';
function App() {
  return (
  <div className='contain-components'>
  <Navbar/>
  <Hero/>
  <About/>
  <Portfolio/>
  {/* This is for upload data to firebase */}
  {/* <Upload/>    */}

  </div>   
  );
}

export default App;
