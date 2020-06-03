//** env api */
function env(app) {
  /* 获取配置信息 */
  app.get('/env', (req, res) => {
    res.json(require('../../env'))
  })
}

module.exports = { env }
