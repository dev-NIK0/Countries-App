import React from 'react';
import {useEffect} from 'react';
import { useDispatch , useSelector } from 'react-redux';

import SearchBar from './SearchBar';
import '../styles/NavBar.css'

import { getActivities,getContinents, filterContinents , filterActivities, filterAlfabetico,
    filterPopulation , getCountries } from '../actions';

export default function NavBar({setPage}){
    const dispatch = useDispatch();
    const continents = useSelector(state => state.continents);
    const activities = useSelector(state => state.activities);

    function filterContinent(e){
        e.preventDefault();
        if(e.target.value === 'Ninguno'){
            return dispatch(getCountries())
        }else{
            dispatch(filterContinents(e.target.value))
            setPage(1)  
        }
            
        
    }

    function filterActivity(e){
        e.preventDefault();
        if(e.target.value === 'Ninguno'){
           return dispatch(getCountries())
        }else{
            dispatch(filterActivities(e.target.value))
            setPage(1)
        }
        // console.log("Filter", e.target.value)
        
    }
    function filterAlfabetic(e){
        e.preventDefault();
        if(e.target.value === 'Ninguno'){
            return dispatch(getCountries())
        }else{
             dispatch(filterAlfabetico(e.target.value))
        setPage(1) 
        }
      
    }
    
    function filterPopulations(e){
        e.preventDefault();
        if(e.target.value === 'Ninguno'){
            return dispatch(getCountries());
        }else{
            dispatch(filterPopulation(e.target.value));
       setPage(1)
        }
       
    }



    useEffect(() => {
        dispatch(getActivities())
        dispatch(getContinents())
    }, [dispatch]);

    useEffect(() => {
         return () => {
            continents.pop()
        };
    }, [continents]);

   
    return (
        <div>
            <SearchBar setPage={setPage}/>
            <div id='NavBar' >
                <div className='filter'>
                    <h2 className='h2Filter'>Continent </h2>
                    <select onChange={(e) => filterContinent(e)} className='select'>
                        <option value="Ninguno">Ninguno</option>
                        {
                            continents?.map((e,i) => {
                                return (
                                    <option key={i} value={e.continent}>{e.continent}</option>
                                )
                            })
                        }
                    </select>
                </div>
            <div className='filter'>
                <h2 className='h2Filter'>Activities </h2>
                    <select onChange={(e) => filterActivity(e)} className='select'>
                    <option value="Ninguno">Ninguno</option>
                    {
                        activities?.map((e,i) => {
                            return (
                                <option key={i} value={e.name}>{e.name}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className='filter'>
                <h2 className='h2Filter'>Alphabetic </h2>
                <select onChange={(e) => filterAlfabetic(e)} className='select'>
                    <option value="Ninguno">Ninguno</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>       
            </div> 
            <div className='filter'>
                <h2 className='h2Filter'>Population </h2>
                <select onChange={(e) => filterPopulations(e)} className='select'>
                    <option value="Ninguno">Ninguno</option>
                    <option value="Mayor Poblacion">Mayor Poblacion</option>
                    <option value="Menor Poblacion">Menor Poblacion</option>
                </select>
            </div>
        </div>
    </div>    
    )
}