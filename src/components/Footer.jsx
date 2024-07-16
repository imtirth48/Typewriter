// import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <p>EMAIL</p>
        <a
          className="mail"
          href="mailto:tirthshah.1848@gmail.com"
        >
          tirthshah.1848@gmail.com
        </a>
        <div className="sec-elem">
        <h1>TYPEWRITER</h1>
         </div> 
         <div className='thi-elem'>
            <a className="inst" href="https://www.instagram.com/tiirrrtthh?igsh=cmt4dmk4NnJnN3B3&utm_source=qr">INSTAGRAM </a>
            <a className="git1" href="https://github.com/imtirth48">GITHUB</a>
         </div>
         <p>@all rights reserved to TirthShah</p>
      </div> 
    </div>
  );
}

export default Footer;
