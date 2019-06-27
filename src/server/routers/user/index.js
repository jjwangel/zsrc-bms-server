
const routers = require('koa-router')();
const user = require('../../controllers/user-ctrl');

routers.post('user/VerifyUser', user.verifyUser);
routers.post('user/VerifyToken', user.verifyToken);
routers.post('user/ModifyUserPassword', user.modifyUserPwd);

module.exports = routers;