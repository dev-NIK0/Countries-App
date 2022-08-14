const {Router} = require('express');
const router = Router();

const {Country} = require('../db');

router.get('/continents', async (req,res) => {
    const search = await Country.findAll({attributes: ['continent']})
    try {
        let object = {};
        const continents = await search.filter((e) => object[e.continent] ? false : object[e.continent] = true);

        return res.status(202).json(continents);
    } catch (error) {
        return res.status(404).send(error)
    }
})

module.exports = router;