import React from 'react';
import {Link} from 'react-router-dom';
import { useState,useEffect  } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/CreateActivity.css'
import { getCountries , createCountry} from '../actions';

const validar = (input) => {
    let errores = {}
    if(!input.name){
       errores.name = 'NAME IS REQUIRED'
    } 
    if(!input.difficulty){
        errores.difficulty = 'DIFFICULTY IS REQUIRED'
    } 
    if(!input.duration){
        errores.duration =  'DURATION IS REQUIRED'
    } 
    if(!input.season){
        errores.season = 'SEASON IS REQUIRED'
    } 
    if(!input.country.length){
       errores.country =  'COUNTRY IS REQUIRED'
    }
    return errores;
}


export default function CreateActivity(){

    const dispatch = useDispatch()
    const countries = useSelector(state => state.countries)
    const [errores,setErrores] = useState({});
    const [error,setError] = useState('');

    const [input,setInput] = useState({
        name: '',
        difficulty: 0,
        duration: 0 + ' Hours',
        season: '',
        country: [],
    })

    function handleChange(e){
        e.preventDefault()  
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setErrores(validar({
            ...input,
            [e.target.name] : e.target.value
        }))
    }
    function handleCountry(e){
        e.preventDefault()
        setInput({
            ...input,
            country :  [...input.country,e.target.value]
        }) 
        setErrores(validar({
            ...input,
           country : e.target.value
        }))
        countryRep(e.target.value)
    }

    useEffect(() => {
       dispatch(getCountries())
    }, [dispatch])

    const deleteCountry = (pais) => {
       setInput({
         ...input,
         country: input.country.filter((e) => e !== pais)
       })

    }

    const countryRep = (pais) => {
        let rep = input.country.includes(pais)
        if(pais === 'none'){
            setError("Error: 'NO SE PUEDE PONER LA OPCION NINGUNO'")
        }else if (!rep){
            input.country.push(pais)
        }else{
            setError("Error: 'NO SE PUEDEN REPETIR PAISES'")
        }
        setInput({
            ...input,
            country : [...input.country]
        })
    }
    const [resolve,setResolve] = useState('')
    
    function handleSelect(e){
        e.preventDefault()
        if(input.name && input.difficulty && input.duration && input.season && input.country.length){
            dispatch(createCountry(input))
            setResolve(`Was created the activity ${input.name}`)
            setInput({
                name: '',
                difficulty: 0,
                duration: 0, 
                season: '',
                country: []
            }) 
        }
        
    }


    return (
        <div id='createActivity'>
            <a href='/home' >
                <button type="submit" id='btnAtras'>
                    Volver Atras
                </button>
            </a>
        <form onSubmit={(e) => handleSelect(e)} required id='formCreate'>
            {resolve && <p className='resolve'>{resolve}</p>} 
                <div className='form'>
                    <h4 className='h4'>Name </h4><br/>       
                    <input className='inputName' type='text' required={true} name="name"  value={input.name} onChange={(e) => handleChange(e)} placeholder='Name' pattern="[a-zA-Z]{2,254}" title="Example: 'Ski' or 'Rafting'"/><br/>
                    {errores.name && <p className='error'>{errores.name}</p>}
                </div>
                <div className='form'>
                    <h4 className='h4'>Difficulty </h4><br/>
                    <input className='inputDuration' type='range' required={true} name="difficulty" value={input.difficulty} onChange={(e) => handleChange(e)} min="1" max="5" list="options" placeholder='Hours'/><span className='span'>{input.difficulty}</span>
                    <datalist id="options" required={true}>
                        <option value="1" required={true}/>   
                        <option value="2" required={true} />
                        <option value="3" required={true}/>
                        <option value="4" required={true}/>
                        <option value="5" required={true}/>
                    </datalist>
                    {errores.difficulty && <p  className='error'>{errores.difficulty}</p>}
                </div>
                <div className='form'>
                    <h4 className='h4'>Duration </h4><br/>
                    <input  className='input' type='number' required={true} name="duration" value={input.duration}  placeholder='Hours' min={1} max={10} pattern="[0-9]" title="Example: '2 Hours'" onChange={(e) => handleChange(e)}/><p> Hours</p>
                    {errores.duration && <p  className='error'>{errores.duration}</p>}
                </div>
                <div className='form'>
                    <h4 className='h4'>Season</h4>
                        <input type="radio"  required={true} value="Summer" id="Summer" name="season" onChange={(e) => handleChange(e)}/>
                        <label htmlFor="Summer">Summer</label>

                        <input type="radio" required={true} value="Outumn" id="Outumn" name="season" onChange={(e) => handleChange(e)}/>
                        <label htmlFor="Outumn">Outumn</label>

                        <input type="radio" required={true} value="Winter" id="Winter" name="season" onChange={(e) => handleChange(e)}/>
                        <label htmlFor="Winter">Winter</label>

                        <input type="radio" required={true} value="Spring" id="Spring" name="season" onChange={(e) => handleChange(e)}/>
                        <label htmlFor="Spring">Spring</label>
                        {errores.season && <p className='error'>{errores.season}</p>}
                </div>
                <div className='form'>
                    <h4 className='h4'>Country </h4><br/>
                        <select className='selectCreate' required={true} onChange={(e) => handleCountry(e)} key={countries.id}>
                             <option className='option' value='none' >None</option>
                            {
                                countries?.map((e) => {
                                    return (
                                        <option className='option' value={e.id} key={e.id}>{e.name}</option>
                                    )
                                })
                            }
                        </select><br/>
                        <div>
                        {
                            input.country.map((e,i) => { 
                                return (
                                    <div key={i}>
                                     <p onChange={() => countryRep(e)}>{e}</p>
                                     <button onClick={() => deleteCountry(e)}>X</button>
                                    </div>
                                )
                            })
                        }
                        {error && <p className='error'>{error}</p>}
                        </div>
                        <br/>
                        {errores.country && <p className='error'>{errores.country}</p>}
                </div>
                <button id='btnCreate' type="submit">Create Activity</button>
            </form>
           
        </div>
    )
}         