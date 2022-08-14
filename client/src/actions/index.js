import axios from 'axios';
import {
    GET_COUNTRIES,
    GET_ACTIVITIES,
    GET_CONTINENTS,
    FILTER_CONTINENTS,
    FILTER_ACTIVITIES,
    FILTER_ALFABETICO,
    FILTER_POPULATION,
    COUNTRY_PARAM,
    COUNTRY_ID,
} from './constantes';

// --------------- ME TRAE LOS COUNTRIES DEL BACK ------------------

export function getCountries(){
    return async function (dispatch){
        const countries = await axios('http://localhost:3001/countries',{})
        return dispatch({
            type: GET_COUNTRIES,
            payload: countries.data
        })
    }
}

// --------------- ME TRAE LAS ACTIVIDADES DEL BACK  ------------------

export function getActivities(){
    return async function (dispatch){
        const activities = await axios('http://localhost:3001/activities',{})
        return dispatch({
            type: GET_ACTIVITIES,
            payload: activities.data
        })
    }
}

// --------------- ME TRAE LOS CONTINENTES DEL BACK  ------------------

export function getContinents(){
    return async function(dispatch){
        const continents = await axios('http://localhost:3001/continents',{})
        return dispatch({
            type: GET_CONTINENTS,
            payload: continents.data
        })
    }
}
 
// --------------- FILTRO POR LOS CONTINENTES  ------------------

export function filterContinents(payload){
    return {
        type: FILTER_CONTINENTS,
        payload
    }
}

// --------------- FILTRO POR ACTIVITIES  ------------------

export function filterActivities(name){
    // console.log("Payload", name)
    return async function(dispatch) {
        const activities = await axios(`http://localhost:3001/activities?name=${name}`,{})
        return dispatch({
            type: FILTER_ACTIVITIES,
            payload: activities.data
        })
        
    }
}

// --------------- FILTRO POR ORDEN ALFABETICO  ------------------

export function filterAlfabetico(payload){
    return {
        type: FILTER_ALFABETICO,
        payload
    }
}

// --------------- FILTRO POR POBLACION  ------------------

export function filterPopulation(payload){
    return {
        type: FILTER_POPULATION,
        payload
    }
}


// --------------- BUSCO PAIS POR NOMBRE  ------------------

export function countryParam(payload){
    return async (dispatch) => {
        try {
            
            const param = await axios(`http://localhost:3001/countries?name=${payload}`)
            // console.log("Countries Param", param.data)
            const countriesParam = param.data.map((e) => e)
            return dispatch({
                type: COUNTRY_PARAM,
                payload: countriesParam
            })
        } catch (error) {
            return (alert(`Error: Country '${payload}' not Exists`))
        }
    }
}

// --------------- BUSCO PAIS POR ID  ------------------

export function countryId(id){
    return async (dispatch) =>{ 
        try {
            const country = await axios.get(`http://localhost:3001/countries/${id}`); 
            // console.log("CountryId",country)
            return dispatch({
                type: COUNTRY_ID,
                payload: country.data
            })
        } catch (error) {
            return ("Error: Country not Exists by id")
        }
    }
}

// --------------- CREACION DEL PAIS  ------------------

export function createCountry(payload){
    return async function(){
       const posteo =  await axios.post('http://localhost:3001/activities',payload)
    //    console.log("Payload",posteo.data)
       return posteo.data
        
    }
}