const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();


const countries = require('../controllers/Countries');
const countriesId = require('../controllers/CountriesId');
const activities = require('../controllers/Activities');
const continents = require('../controllers/Continents');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries',countries);
router.use(countriesId);
router.use(activities);
router.use(continents);


module.exports = router;
