const initialState = {
    countries: [],
    copyCountries: [],
    activities: [],
    continents: [],
    countryParam: [],
    detailCountry: []
}
const rootReducer = ( state = initialState, action) => {
    switch(action.type){
        case 'GET_COUNTRIES': 
            return {...state , countries: action.payload , copyCountries: action.payload }
        case 'GET_ACTIVITIES':
            return {...state , activities: action.payload}
        case 'GET_CONTINENTS':
            return {...state , continents: action.payload}
        case 'FILTER_CONTINENTS':
            const copy = state.countries;
            const result = action.payload === 'Ninguno' ? copy : copy.filter((e) => e.continent === action.payload);
            console.log("Copy", copy  ,"Result",result)
                return {...state , copyCountries: result}
        case 'FILTER_ACTIVITIES':
                // console.log("A",action.payload)
                return {...state , copyCountries: action.payload}
        case 'FILTER_ALFABETICO':
            let copyAlfabetico = state.countries;
                if(action.payload === 'Ninguno'){
                    return {...state, copyCountries : copyAlfabetico}
                }else if(action.payload === 'Descendente'){
                    copyAlfabetico = state.copyCountries.flat(2).sort((a,b) => {
                        if(a.name < b.name) return   1
                        if(a.name > b.name) return  -1
                        return 0
                    })
                }else if(action.payload === 'Ascendente'){
                    copyAlfabetico = state.copyCountries.flat(2).sort((a,b) => {
                        if(a.name < b.name) return -1
                        if(a.name > b.name) return  1
                        return 0
                    })
                }
            return {...state, copyCountries: copyAlfabetico}

        case 'FILTER_POPULATION':
            let copyPopulation = state.countries;
            if(action.payload === 'Ninguno'){
                return {...state, copyCountries : copyPopulation}
            }else if(action.payload === 'Menor Poblacion'){
                copyPopulation = state.copyCountries.flat(2).sort((a,b) => {
                    if(a.population > b.population) return   1
                    if(a.population < b.population) return  -1
                    return 0
                })
            }else if(action.payload === 'Mayor Poblacion'){
                copyPopulation = state.copyCountries.flat(2).sort((a,b) => {
                    if(a.population > b.population) return -1
                    if(a.population < b.population) return  1
                    return 0
                })
            }
            return {...state, copyCountries: copyPopulation}
        case 'COUNTRY_PARAM':
            return {...state, copyCountries: action.payload}
        case 'COUNTRY_ID':
            return {...state, detailCountry: action.payload}
        default:
            
            return state
    }
}

export default rootReducer;
