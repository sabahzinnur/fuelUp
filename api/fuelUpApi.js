const $axios = require('axios')
const API_URL = process.env.FUELUP_API_URL + process.env.FUELUP_API_PREFIX
const API_KEY = process.env.FUELUP_API_KEY


async function getStations() {
  return await $axios.get(`${API_URL}/station`, {
      params: {apikey: API_KEY}
    }
  )
}

async function getPrices() {
  return await $axios.get(`${API_URL}/price`, {
      params: {apikey: API_KEY}
    }
  )
}

module.exports = {
  getStations,
  getPrices
}
