import React from 'react';

import '../styles/Paginado.css';

export default function Paginado({country,countries,paginado}){

    const numCountries = [];

    for (let i = 1; i <= Math.ceil(countries/country) ; i++) {
        numCountries.push(i)
    }
    return (
        <footer id='Paginado'>
            <ul id='ulPaginado'>
            {
                numCountries && numCountries.map((e,i) => ( 
                    <button type='submit' key={i} onClick={() => paginado(e)} id='btnPaginado'>{e}</button> 
                ))
            }
            </ul>
        </footer>
    )
} 
