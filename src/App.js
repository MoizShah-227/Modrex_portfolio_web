import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/Aboutus'
function App() {
  return (
  <div className='contain-components'>
  <Navbar/>
  <Hero/>
  <About/>
  </div>   
  );
}

export default App;
