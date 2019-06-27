const baseinfoModel = require('../models/baseinfo-model');
const logUtil = require('../utils/log_util')

module.exports = {
  /**
   * @description 获取系统档案数据
   * @author Michael Jian
   * @returns 成功返回档案数据，否则返回null
   */
  async getBaseInfo(info_type, objectid) {
    let result = {
      data: {
        values: [],
      }
    };

    try {
      let baseInfo = {};
      switch (info_type) {
        case 'system':
          {
            baseInfo = await baseinfoModel.getSystemInfo();
            break;
          }
        case 'level1':
          {
            baseInfo = await baseinfoModel.getLevel1Info(objectid);
            break;
          }
        case 'level2':
          {
            baseInfo = await baseinfoModel.getLevel2Info(objectid);
            break;
          }
        case 'theme':
          {
            baseInfo = await baseinfoModel.getThemeInfo(objectid);
            break;
          }
      }

      if (baseInfo === null) {
        return null;
      } else {
        let doc = await baseInfo.toArray();
        for ({
            _id,
            name
          } of doc) {
          result.data.values.push({
            objectid: _id,
            name: name,
          });
        }

        return result;
      }
    } catch (err) {
      throw err;
    }

  },

}