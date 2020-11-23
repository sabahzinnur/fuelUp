const {Router} = require('express')
const router = Router()
const fuelUp = require('../services/FuelUp')
const api =  require('../api/fuelUpApi')

const dataService = new fuelUp(api)

router.get('/', async (req, res) => {
  const stations = await dataService.getStations()
  res.render('stations', {
    stations,
    title: 'Station page',
    isStations: true
  })
})

module.exports = router
