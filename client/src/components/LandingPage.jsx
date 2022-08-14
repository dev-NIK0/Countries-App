import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/LandingPage.css';

export default function LandingPage(){
    return(
        <div id='Landing'>
        <Link to='/home'>
            <button type='submit' id='btnLanding'>Earth</button>
        </Link>   
        </div>
        
    )
}             