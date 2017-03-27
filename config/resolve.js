const {resolve} = require('path')

module.exports = {
  alias: {
    Actions:    resolve(process.cwd(), 'src/state/actions'),
    Components: resolve(process.cwd(), 'src/components'),
    State:      resolve(process.cwd(), 'src/state'),
    Scenes:     resolve(process.cwd(),  'src/scenes'),
    Services:   resolve(process.cwd(),  'src/services'),
    Static:     resolve(process.cwd(), 'src/static'),
    Style:     resolve(process.cwd(), 'src/style'),
    Utils:      resolve(process.cwd(), 'src/utils.js'),
  }
}
