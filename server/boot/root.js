'use strict';
var p = require('../../package.json'),
  version = p.version,
  name = p.name;

module.exports = function (server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/', (req, res) => { res.send({ 'author': 'Aluxe Team', 'site': 'http://aluxe.io' }); });
  router.get('/version', (req, res) => { res.send({ 'name': name, 'version': version }); });
  server.use(router);
};
