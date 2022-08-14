import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import '../styles/DetailCountry.css'

import {countryId} from '../actions/index';

export default function DetailCountry(){
    const dispatch = useDispatch();
    const idCountry = useSelector(state => state.detailCountry);
    const {id} = useParams();

    useEffect(() => {
        dispatch(countryId(id))
    }, [dispatch,id]);

    useEffect(() => {
        return () => {
            idCountry.pop()
        };
    }, [idCountry]);
    
    return (
        <div id='detail'>
                <button className='buttonVolverAtras'>
                    <Link to='/home' >Volver Atras</Link>
                </button>
            <div>
                {
                    idCountry.map((e,i) => {
                        return (
                            <div key={i} id='card'>
                                <div className='cardTail'> 
                                    <h1 className='Title'>{e.name}</h1>
                                    <img src={e.flag} alt='img' id='imgDetail'/>
                                    <h4 className='Title'>{e.id}</h4>
                                </div>
                                <div className='cardDetail'>
                                    <h4 className='Title'>Continent</h4>
                                    <p>{e.continent}</p>
                                </div>
                                <section id='section'>
                                 
                                <div className='cardDetail'>
                                    <h4 className='Title'>Capital</h4> 
                                    <p>{e.capital}</p>
                                </div>
                                <div className='cardDetail'>
                                    <h4 className='Title'>Subregion</h4>
                                    <p>{e.subregion}</p>
                                </div>
                                <div className='cardDetail'>
                                    <h4 className='Title'>Area</h4>
                                    <p>{e.area} Km</p>
                                </div>
                                <div className='cardDetail'>
                                    <h4 className='Title'>Population</h4>
                                    <p>{e.population}</p>
                                </div>
                                </section>
                                <div className='cardDetail'>
                                    <h4 className='Title'>Activities</h4>
                                    {e.activities.map((e,i) => { return (
                                        <div key={i}>
                                        <h4 className='Title4'>Name </h4>
                                            <p className='p'>{e.name}</p>
                                        <h4 className='Title4'>Difficulty</h4>
                                            <p className='p'>{e.difficulty}</p>
                                        <h4 className='Title4'>Duration</h4>
                                            <p className='p'>{e.duration}</p>
                                        <h4 className='Title4'>Season </h4>
                                            <p className='p'>{e.season}</p>
                                        </div>
                                    )})}
                                </div>
                                
                            </div>
                        )
                    })
                }
            </div>
        
        </div>
                
    )
}