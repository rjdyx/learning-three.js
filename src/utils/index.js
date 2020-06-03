/**
 * 初始化图表
 * @param {string} id 图表dom的id
 * @param {Object} option 图表的option
 * @param {number | string} width 图表dom的宽
 * @param {number | string} height 图表dom的高
 */
export function initChart (url, id, option, width = '100%', height = '100%', callback) {
  const el = document.getElementById(id)
  $(el).css({
    position: 'relative',
    width: width,
    height: height
  })
  const myChart = echarts.init(el)
  myChart.showLoading({
    maskColor: 'transparent',
    text: ''
  })
  if (!callback) {
    callback = () => option
  }
  axios.get(url)
    .then(res => {
      option = callback(res.data)
      myChart.hideLoading()
      myChart.setOption(option)
    })
}
