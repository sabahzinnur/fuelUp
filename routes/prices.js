const {Router} = require('express')
const router = Router()
const fuelUp = require('../services/FuelUp')
const api =  require('../api/fuelUpApi')

const dataService = new fuelUp(api)

router.get('/', async (req, res) => {
  const prices = await dataService.getPrices()
  res.render('prices', {
    prices,
    title: 'Prices page',
    isPrices: true
  })
})

module.exports = router
