/**
 * This example server code from the `TryGhost/ghost` wiki page
 * "Using Ghost as an npm module": https://git.io/v1p4C
 */
const path = require('path')
const ghost = require('ghost')

ghost({
  config: path.join(__dirname, 'config.js')
}).then((ghostServer) => ghostServer.start())
