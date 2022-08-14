// import React from 'react';
// import {useEffect, useState} from 'react';
// import { useDispatch , useSelector } from 'react-redux';
// import {Link} from 'react-router-dom'
// import {getCountries} from '../actions/index';
// import Card from './Card';
// import '../styles/Cards.css'
// import Paginado from './Paginado';

// export default function Cards(){
//     const dispatch = useDispatch()
//     const countryParam = useSelector(state => state.countryParam);
//     const countries = useSelector(state => state.copyCountries);
//     // ---------------- PAGINADO ----------------
//       const [page, setPage] = useState(1);      
//         const [country, setCountry] = useState(10);
//         const lastIndex = page * country;          
//         const firstIndex = lastIndex - country ;  
//         const allCountries = countries.slice(firstIndex,lastIndex);
//    const paginado = (numPage) => {                           
//             setPage(numPage)                                    
//         } 
//     useEffect(() => {
//         dispatch(getCountries())
//     }, [dispatch]);

//     return (
//         <div id='Cards'>
//                 {   
//                     countryParam.length ? countryParam.map((e,i) => {
//                         return(
//                             <div key={i}>
//                                 <Link to={`/home/${e.id}`}>
//                                     <Card id={e.id} name={e.name} flag={e.flag} continent={e.continent} population={e.population} />
//                                 </Link>  
//                             </div>
//                         )  
//                     }):  allCountries.map((e,i) => {
//                         return(
//                             <div key={i}>
//                                 <Link to={`/home/${e.id}`}>
//                                     <Card id={e.id} name={e.name} flag={e.flag} continent={e.continent} population={e.population} />
//                                 </Link>
//                             </div>
//                         )
//                     })
                    
//                 }
           
                
            
//         </div>
//     )
// }
//  <div><br/>
//             <Paginado country={country} countries={countries.length} paginado={paginado}/>
//             </div>