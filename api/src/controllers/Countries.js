const {Router} = require('express');
const router = Router();
const {Op} = require('sequelize')

const {Country,Activities} = require('../db');
const {getCountries} = require('./Logica');

router.get('/', async (req,res) => {
    const {name} = req.query;
     
    // const countries = await getCountries();
    // const db = await Country.findAll({})
    // !db.length ? Country.bulkCreate(countries) : 'Ya existen paises en la db'
    
    if(name){
        try {
            const nameCountry= await Country.findAll({where:{ name:{
            [Op.iLike]:"%" + name + "%"}},include:{
              model:Activities,
              attributes:['ID','name','difficulty','duration','season'],
              through:{
                attributes:[]
              }
            }})
          if(nameCountry.length == 0){
            return res.status(404).send(error)
          }
          return res.status(202).json(nameCountry);
        } catch (error) {
          return res.status(404).send(`Error: El nombre "${name}" no existe.`)
      }        
  }else{
    try { 
        const countriesDb  = await Country.findAll({include:{
            model:Activities,
            attributes:['ID','name','difficulty','duration','season'],
            through:{
              attributes:[]
            }
        }})

        return res.status(202).json(countriesDb);
      } catch (error) {
        return res.status(404).send("Error: Country not exists")
    }
  }
})

module.exports = router;