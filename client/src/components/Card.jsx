import React from 'react';
import '../styles/Card.css'

export default function Card({id,name,continent,flag}){
    return (
        <div id='Card'>
            <h1 className='props'>{name}</h1>
            <img src={flag} alt='img' className='imgCard'/>
            <h3 className='props'>{continent}</h3>
        </div>
    )
}