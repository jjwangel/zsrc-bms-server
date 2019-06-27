const mongodb = require('./db-provide/mongodb');
const ObjectID = require('mongodb').ObjectID;
const util = require('../utils/util');

module.exports = {
  /**
   * @description 获取系统档案数据
   * @author Michael Jian
   * @returns 成功返回档案数据，否则返回null
   */
  async getSystemInfo() {
    try {
      const collection = mongodb.AppDb.getDb().collection('system_info');
      return await collection.find({});
    } catch (err) {
      throw err;
    }
  },
  /**
   * @description 获取level1档案数据
   * @author Michael Jian
   * @param {any} {
   *     objectid, 上级记录的_id
   *   } 
   * @returns 成功返回档案数据，否则返回null
   */
  async getLevel1Info(objectid) {
    try {
      // console.log(objectid);
      const collection = mongodb.AppDb.getDb().collection('level1_info');
      return await collection.find({
        "objectid_sys": mongodb.AppDb.getObjectId(objectid),
      });
    } catch (err) {
      throw err;
    }
  },
  /**
   * @description 获取level2档案数据
   * @author Michael Jian
   * @param {any} {
   *     objectid, 上级记录的_id
   *   } 
   * @returns 成功返回档案数据，否则返回null
   */
  async getLevel2Info(objectid) {
    try {
      const collection = mongodb.AppDb.getDb().collection('level2_info');
      return await collection.find({
        "objectid_level1": mongodb.AppDb.getObjectId(objectid),
      });
    } catch (err) {
      throw err;
    }
  },
  /**
   * @description 获取theme档案数据
   * @author Michael Jian
   * @param {any} {
   *     objectid, 上级记录的_id
   *   } 
   * @returns 成功返回档案数据，否则返回null
   */
  async getThemeInfo(objectid) {
    try {
      const collection = mongodb.AppDb.getDb().collection('theme_info');
      return await collection.find({
        "objectid_level2": mongodb.AppDb.getObjectId(objectid),
      });
    } catch (err) {
      throw err;
    }
  },


}