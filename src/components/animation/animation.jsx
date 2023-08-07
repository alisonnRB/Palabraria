import React, {useState,useEffect} from 'react';
import './index.css';
import logo from'../../abacaxiWhite.png';

export default function Animation() {

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {

    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      setShowContent(true);

      document.body.style.overflow = '';
    }, 2000);
  }, []);


  return (
    <div className='fundoAnimação'>
        <div className='boxAnimação'>
        <img src={logo} className='logoAnimação' alt='logo abacaxi'></img>
        <ol className="palavraAnimação">
            <li className='letrasAnimação'>P</li>
            <li className='letrasAnimação'>A</li>
            <li className='letrasAnimação'>L</li>
            <li className='letrasAnimação'>A</li>
            <li className='letrasAnimação'>B</li>
            <li className='letrasAnimação'>R</li>
            <li className='letrasAnimação'>A</li>
            <li className='letrasAnimação'>R</li>
            <li className='letrasAnimação'>Í</li>
            <li className='letrasAnimação'>A</li>
        </ol>
        </div>
    </div>
  );
}

