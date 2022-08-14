const {Router} = require('express');
const router = Router();

const {Activities , Country} = require('../db');

router.post('/activities', async (req,res) => {
    const {name,difficulty, duration,season,country} = req.body;
      if(!name || !difficulty || !duration || !season || !country){
            return res.status(404).send('Faltan Datos');
        }
        
    try {
        const activityCreated = await Activities.create({...req.body})
        if(country){
           activityCreated.addCountry(country); 
        }
        return res.status(202).json(activityCreated);
    } catch (error) {
        return res.status(404).send("Erroor")
    }
})
router.get('/activities', async (req,res) =>{
    const {name} = req.query;

    try {
        
        if(name){
            const activity = await Country.findAll({include:Activities})
            const activityFilter = await activity.filter((e) => {
                for (let a = 0; a < e.activities.length ; a++) {
                    if(e.activities[a].name === name){
                        return true
                    }
                }
            })

            if(activityFilter.length){
                res.status(202).json(activityFilter)
            }else{
                res.status(202).send("Are not activities")
            }
            
        }else{
            const activityDb = await Activities.findAll({})
            res.status(202).json(activityDb)
        }
        
    } catch (error) {
        return res.status(404).send("Doesn't exist activities")
    }
})

module.exports = router;