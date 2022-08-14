const {Router} = require('express');
const router = Router();
const {Op} = require('sequelize') ;

const {Country,Activities} = require('../db');

router.get('/countries/:id' , async (req,res) => {
    const {id} = req.params;
   
    try{
      if(id){
         const getCountry= await Country.findAll({where:{ id:{
          [Op.iLike]:id}},include:{
            model:Activities,
            attributes:['ID','name','difficulty','duration','season'],
            through:{
              attributes:[]
            }
          }})
        if(getCountry.length == 0) return res.status(404).send(error)
        return  res.status(202).json(getCountry) 
      }
        
    }catch (error){
      return  res.status(404).send(`Error: El id "${id}" no existe.`)
    }
})


module.exports = router;