// import React from 'react';
import './Fourth.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';

const FourthPage = () => {
  return (
    <div className="four-container">
      <div className="shot-container">
        <img src={img1} alt="Image 1" className="shot" />
        <div className="shot-overlay">
          <div className="overlay-content">Image 1 Overlay</div>
        </div>
      </div>
      <div className="shot-container">
        <img src={img2} alt="Image 2" className="shot" />
        <div className="shot-overlay">
          <div className="overlay-content">Image 2 Overlay</div>
        </div>
      </div>
      <div className="shot-container">
        <img src={img3} alt="Image 3" className="shot" />
        <div className="shot-overlay">
          <div className="overlay-content">Image 3 Overlay</div>
        </div>
      </div>
      <div className="shot-container">
        <img src={img4} alt="Image 4" className="shot" />
        <div className="shot-overlay">
          <div className="overlay-content">Image 4 Overlay</div>
        </div>
      </div>
      
    </div>
  );
}

export default FourthPage;
