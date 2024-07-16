import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import './App.css';
import Home from './components/Home';
import CubeModel from './components/CubeModel';
import Pic from './components/Pic';
import ThirdPage from './components/ThirdPage';
import Fourth from './components/Fourth';
import Footer from './components/Footer';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [rotation, setRotation] = useState([0, 0, 0]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const rotationX = (clientY / window.innerHeight) * Math.PI * 1.5;
      const rotationY = (clientX / window.innerWidth) * Math.PI * 1.5;
      setRotation([rotationX, rotationY, 0]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // Simulating loading delay for demo purposes
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust as needed

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <Loader setLoading={setLoading} />;
  }

  return (
    <div>
      <Home />
      <div className="cube-container">
        <CubeModel rotation={rotation} scale={[1, 1, 1]} gltfPath="/src/assets/cube.glb" />
        <CubeModel rotation={rotation} scale={[0.5, 0.5, 0.5]} gltfPath="/src/assets/cube1.glb" />
        <CubeModel rotation={rotation} scale={[0.7, 0.7, 0.7]} gltfPath="/src/assets/cube3.glb" />
        <CubeModel rotation={rotation} scale={[1.2, 1.2, 1.2]} gltfPath="/src/assets/cube4.glb" />
      </div>
      <div className="sc"><p>SCROLL</p></div>
      <Pic />
      <ThirdPage />
      <Fourth />
      <Footer />
    </div>
  );
};

export default App;
