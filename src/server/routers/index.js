/**    
 * 整合所有子路由
 */
const routers = require('koa-router')();

const test = require('./test')

routers.use('/', test.routes(), test.allowedMethods());

module.exports = routers;