const routers = require('koa-router')();
const baseinfo = require('../../controllers/baseinfo-ctrl');

routers.get('baseinfo', baseinfo.getSystemInfo);

module.exports = routers;