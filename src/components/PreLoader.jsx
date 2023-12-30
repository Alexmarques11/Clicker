import React, { useEffect } from 'react'
import './preloader.css'
import { preLoaderAnim } from '../animations/index'

const PreLoader = () => {

    useEffect(() => {
        preLoaderAnim();
    }, []);

  return (
    <div className="preloader">
        <div className="texts-container">
            <span>How does</span>
            <span> Darth Vader</span>
            <span> like his toast?</span>
            <span>                </span>
            <span>                </span>
            <span>On the dark side.</span>
        </div>
        <p>
        Game created by <strong>Alexandre Marques</strong> & <strong>André Cerqueira</strong> & <strong>Nuno Fernandes</strong>
    </p>
    </div>
  )
}

export default PreLoader;