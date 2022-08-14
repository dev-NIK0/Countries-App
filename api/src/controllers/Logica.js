const axios = require('axios');
const {Country, Activities} = require('../db');
const {Op} = require('sequelize')

// --------- TRAIGO DE LA API LOS COUNTRIES Y GUARDO EN DB ----------

const getCountries = async () => {
    const api = await axios('https://restcountries.com/v3/all');
    const countries = await api.data.map((e) => {
        return {
            id: e.cca3,
            name: e.name.common,
            continent: e.continents? e.continents[0] :'Doesnt have Continent' ,
            flag: e.flags ? e.flags[1] : 'Doesnt have flag image',
            capital: e.capital ? e.capital[0] : 'Doesnt have capital',
            subregion: e.subregion,
            area: e.area,
            population: e.population
        }
    })
        const search = await Country.findAll({})
        console.log("search", search)
        const save = !search.length ? Country.bulkCreate(countries) :
           'Ya existen paises en la db'
        save.then(save).catch("Erroor")

    return save
}

module.exports= {
    getCountries
} 