// import logo from './logo.svg';
import './App.css';
import { Suspense } from 'react'

import { Canvas } from '@react-three/fiber';
// import { ambientLight } from '@react-three/drei';
import Cube from './Models/cube';
import { Environment, OrbitControls } from '@react-three/drei'
import Experience from './Experience/Experience';


function App() {
  return (
    <div className="App">
      <Experience />

        {/* <directionalLight  intensity={0.1} position={[0,0,2]}/> */}
        {/* <ambientLight intensity={0.7} color="white"/> */}
        {/* <pointLight position={[10, 10, 10]} /> */}
        {/* <Box position={[-1.2, 0, 0]} /> */}
        {/* <Suspense fallback={null}> */}
          {/* <Cube /> */}
          {/* <Environment preset="sunset" background /> */}
        {/* </Suspense> */}
        {/* <OrbitControls/> */}
    </div>
  );
}

export default App;
