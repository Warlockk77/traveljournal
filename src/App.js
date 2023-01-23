
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import data from './data';

function App() {

  const travelEl = data.map(item => {
    return <Hero 
    {...item}

    
    
    
    
    
    />

    
  })



  return (
    <div className="App">
     <Navbar />
     {/* <Hero /> */}
     {travelEl}
    </div>
  );
}

export default App;
