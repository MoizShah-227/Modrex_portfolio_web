import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/Aboutus'
import Portfolio from './components/Portfolio'
function App() {
  return (
  <div className='contain-components'>
  <Navbar/>
  <Hero/>
  <About/>
  <Portfolio/>
  </div>   
  );
}

export default App;
