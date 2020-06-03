import option from '../options/earth'
import 'echarts-gl'

function getAirportCoord (data, idx) {
  return [data.airports[idx][3], data.airports[idx][4]]
}

axios.get('/home/flights')
  .then(function (res) {
    const routes = res.data.routes.map(function (airline) {
      return [
        getAirportCoord(res.data, airline[1]),
        getAirportCoord(res.data, airline[2])
      ]
    })
    option.series.data = routes
    const myChart = echarts.init(document.getElementById('map-3D'))
    myChart.setOption(option)
  })
