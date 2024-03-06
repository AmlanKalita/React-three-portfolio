// import logo from './logo.svg';
import './App.css';

import Experience from './Experience/Experience';
import Hero from './Homepage/Hero';
import Demo from './Homepage/Demo';
function App() {
  return (
    <div className="App">
      
      <div className='experience'>
          <Experience />
      </div>
      <Demo/>
    </div>
  );
}

export default App;
