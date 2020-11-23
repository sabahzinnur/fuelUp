class FuelUp {

  constructor(api) {
    this.api = api
  }

  async getStations() {
    const response = await this.api.getStations()
    return response.data
  }

  async getPrices() {
    const response = await this.api.getPrices()
    const stations = await this.getStations()
    return response.data.map(item => {
      const station = stations.find(station => station.Id === item.StationId)
      if (station) {
        return Object.assign({}, item, {Name: station.Name})
      }
    })
  }
}

module.exports = FuelUp
