const baseinfoService = require('../services/baseinfo-service');
const logUtil = require('../utils/log_util')

module.exports = {
  /**
   * @description 获取系统档案数据
   * @author Michael Jian
   * @param {any} ctx 上下文
   */
  async getSystemInfo(ctx) {
    let queryData = ctx.request.query;
    let result = {
      data: {
        values: [],
      }
    };

    try {
      let baseInfo = await baseinfoService.getBaseInfo(queryData.getinfo, queryData.objectid);
      if (baseInfo === null) {
        result.retrun_code = "BUS0001";
      } else {
        result.retrun_code = "000000";
        result.data.values = baseInfo.data.values;
      }
    } catch (err) {
      logUtil.logErrorApp.error(err);
      result.retrun_code = "SYS0001";
    }
    ctx.body = result;
  },

}