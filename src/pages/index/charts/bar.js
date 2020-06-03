import { initChart } from '@utils'
import option from '../options/bar'

initChart('/home/chart1', 'bar', option, '600px', '400px', (data) => {
  option.series[0].data = data.data
  return option
})
