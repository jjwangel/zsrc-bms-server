const mongodb = require('./db-provide/mongodb');
const ObjectID = require('mongodb').ObjectID;


async function haveRecord(docName, filterCondition) {

}

module.exports = {
  /**
   * @description 验证登录用户
   * @author Michael Jian
   * @param {any} {
   *     user_acct,登录账号
   *     user_pwd,登录密码
   *   } 
   * @returns 验证成功返回用户记录，否则返回null
   */
  async verifyUser({
    user_acct,
    user_pwd,
  }) {

    try {
      const collection = mongodb.AppDb.getDb().collection('users');
      return await collection.findOne({
        "user_acct": user_acct,
        "user_pwd": user_pwd,
      });
    } catch (err) {
      throw err;
    }
  },
  /**
   * @description 通过用户id获取用户信息 
   * @author Michael Jian
   * @param {any} {
   *     objectid, //用户id
   *   } 
   * @returns 成功返回用户信息，否则返回null
   */
  async getUserByid({
    objectid,
  }) {
    try {
      const collection = mongodb.AppDb.getDb().collection('users');
      return await collection.findOne({
        "_id": mongodb.AppDb.getObjectId(objectid),
      });
    } catch (err) {
      throw err;
    }
  },
  /**
   * @description 修改密码
   * @author Michael Jian
   * @param {any} {
   *     user_id,  用户id
   *     old_pwd,  旧密码
   *     new_pwd   新密码
   *   } 
   */
  async modifyUserPwd({
    user_id,
    old_pwd,
    new_pwd
  }) {
    try {
      let filter = {
        _id: mongodb.AppDb.getObjectId(user_id),
        user_pwd: old_pwd,
      }
      const collection = mongodb.AppDb.getDb().collection('users');
      let result = await collection.findOneAndUpdate(filter, {
        $set: {
          'user_pwd': new_pwd
        }
      });
      if (result && result.ok === 1 && result.lastErrorObject.updatedExisting === true) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      throw err;
    }
  }


}