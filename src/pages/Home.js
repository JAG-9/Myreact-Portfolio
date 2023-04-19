import React from 'react'
import homeImg from '..//images/1643046473893.jpeg';
import "../styles/Home.css";
import Typed from "typed.js";

function Home() {
  const title = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(title.current, {
      strings: ['DEVELOPER', 'WEB DESIGNER' , 'CODER'],
      typeSpeed: 200,
      loop: false,
    });

    return () => {
     
      typed.destroy();
    };
  }, []);

  const quote = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(quote.current, {
      strings: ['(Hello World!)', '(I enjoy CODING!)'],
      typeSpeed: 100,
      loop: true,
    });

    return () => {
     
      typed.destroy();
    };
  }, []);

  return (
    <div className='home'>
            <div className='introContainer'>
               <h1 className='introHome'>Welcome to my portfolio! I'm Jose</h1><span className='spanHome' ref={title} />

              </div>
        <div>
              <div className='homeContainer'>
                <img src={homeImg} className='imgHome' alt="portfolio_profile_picture" /> 
              </div>

      </div>
    </div>
  )
}


export default Home