import React from 'react';
import { useEffect , useState} from 'react';
import { useDispatch , useSelector} from 'react-redux';
import '../styles/Home.css'
import { Link } from 'react-router-dom'
import Paginado from './Paginado';
import NavBar from './NavBar';
import Card from './Card';
import {getCountries} from '../actions/index';
// import Card from './Cards';

import '../styles/Cards.css'

export default function Home(){
    const dispatch = useDispatch()
    const countries = useSelector(state => state.copyCountries);
    //Traigo del reducer el state que me trae los paises que viene del actions.
    const countryParam = useSelector(state => state.countryParam);
    // ---------------- PAGINADO ----------------
        const [page, setPage] = useState(1);      
        const [country, setCountry] = useState(10);
        const lastIndex = page * country;          
        const firstIndex = lastIndex - country ;
        const allCountries = countries.slice(firstIndex,lastIndex);

        const paginado = (numPage) => {                           
            setPage(numPage)                                    
        }                                                     
    // ----------------------------------------------------------     

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch]);
    
    return (
        <div id='Home'>
            <NavBar   setPage={setPage} />
            <div id='Cards'>
                {   
                    countryParam.length? countryParam.map((e,i) => {
                        return(
                            <div key={i}>
                                <Link to={`/home/${e.id}`}>
                                    <Card id={e.id} name={e.name} flag={e.flag} continent={e.continent} population={e.population} />
                                </Link>  
                            </div>
                        )  
                    }): 
                    allCountries.map((e,i) => {
                        return(
                            <div key={i}>
                                <Link to={`/home/${e.id}`}>
                                    <Card id={e.id} name={e.name} flag={e.flag} continent={e.continent} population={e.population} />
                                </Link>
                            </div>
                        )
                    })
                }  
           
            </div>
            <div>
                <Paginado country={country} countries={countries.length} paginado={paginado}/>
            </div>
            
       </div>
    )
}
    //    <SearchBar/>
    //  </div> <Cards />
    //         <Paginado country={country} countries={countries.length} setPage={setPage}/>
    //     
    // <Cards allCountries={allCountries}/>