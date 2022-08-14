import React from 'react';
import { useState} from 'react';
import { useDispatch  } from 'react-redux';
import {Link} from 'react-router-dom'
import {countryParam, getCountries} from '../actions';

import '../styles/SearchBar.css'


export default function SearchBar({setPage}){

    const dispatch = useDispatch();

    const [input,setInput] = useState('');

    function handleSearch(e){
        e.preventDefault();
        setInput('')
        dispatch(countryParam(input)) 
        
    }

    function handleChange(e){
        e.preventDefault();
        setInput(e.target.value)
    }
    function reloadCountries(e){
        e.preventDefault();
        dispatch(getCountries())
        setPage(1)
    }


    return (
        <div id='SearchBar'>
            <button className='btnSearchBar' type='button' onClick={e => reloadCountries(e)}>Show All Countriers </button>
            <button className='btnSearchBar' type='button' onClick={e => handleSearch(e)}>Search</button>
            <input id='inputSearchBar' type="search" value={input} placeholder="Country" onChange={e => handleChange(e)} pattern="[a-zA-Z]{2,254}" title="Example: 'Argentina'"/>
            <button type='button' id='btnCreateActivity'>
                    <Link to={`/home/create-activity`}>
                        Create Activity
                    </Link>
            </button>
        </div>  
    )
}