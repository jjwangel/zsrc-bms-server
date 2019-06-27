const testService = require('../services/test-service')

module.exports = {
  async getSelectOpt (ctx) {
    let bodyData = Object.values(ctx.request.query)
  
    if (Array.isArray(bodyData[0]))
    {
      bodyData = bodyData[0]
    } else {
      bodyData = [bodyData[0]]
    }
    
    let result = {};
    let selectOpt = await testService.getSelectOpt(bodyData);
    result.code = '000000'
    result.message = '操作成功'
    result.data = selectOpt
    ctx.body = result;
  },
  
  async getInstEmpList (ctx) {
    let result = {};
    let instEmpList = await testService.getInstEmpList();
    result.code = '000000'
    result.message = '操作成功'
    result.data = instEmpList
    ctx.body = result;
  },
  
  async loginSys (ctx) {
    // console.log(ctx.cookies.get('name111'))
    let bodyData = ctx.request.body;
    let fromData = {
      user_acct: 'T013803',
      user_pwd: 'pasword',
    };
    let result = {};
    let userInfo = await testService.loginSys(fromData);
    result = userInfo;
    result.code = '000000'
    result.message = '操作成功'

    // ctx.cookies.set(
    //   'username', 'zyb'
    // )
    
    ctx.body = result;
  },
  async getUserInfo (ctx) {
    let queryData = ctx.request.query;
    let fromData = {
      str1: queryData.str1,
      str2: queryData.str2
    }
    let result = {};
    let str = await testService.getUserInfo(fromData);
    result.data = str.data;
    result.code = '000000'
    result.message = '操作成功'
    ctx.body = result;
  },
  async logoutSys (ctx) {
    let result = {};
    let str = await testService.logoutSys();
    result.code = '000000'
    result.message = '操作成功'
    result.data = str.data
    ctx.body = result;
  },
  
  
  
  
  
  
  
  // 获取违规违纪列表数据---------------------------------------------------------------------
  async getDisciplineList (ctx) {
    let result = {};
    let res = await testService.getDisciplineList();
    result.code = '000000'
    result.message = '操作成功'
    result.data = res.data
    ctx.body = result;
  },
  // 获取经济处罚列表数据
  async getEconomicList (ctx) {
    let result = {};
    let res = await testService.getEconomicList();
    result.code = '000000'
    result.message = '操作成功'
    result.data = res.data
    ctx.body = result;
  },
  // 获取违规积分列表数据
  async getIntegralList (ctx) {
    let result = {};
    let res = await testService.getIntegralList();
    result.code = '000000'
    result.message = '操作成功'
    result.data = res.data
    ctx.body = result;
  },
  // 获取员工综合查询列表数据
  async getEmpIntegratedList (ctx) {
    let result = {};
    let res = await testService.getEmpIntegratedList();
    result.code = '000000'
    result.message = '操作成功'
    result.data = res.data
    ctx.body = result;
  },
  // 员工综合查询-个人基本信息
  async getEmpSelfBaseInfo (ctx) {
    let result = {};
    let res = await testService.getEmpSelfBaseInfo();
    result.code = '000000'
    result.message = '操作成功'
    result.data = res.data
    ctx.body = result;
  },
  // 员工综合查询-员工亲属关系
  async getEmpKinsfolkList (ctx) {
    let result = {};
    let res = await testService.getEmpKinsfolkList();
    result.code = '000000'
    result.message = '操作成功'
    result.data = res.data
    ctx.body = result;
  },
  // 员工综合查询-员工出入境信息
  async getEmpEEList (ctx) {
    let result = {};
    let res = await testService.getEmpEEList();
    result.code = '000000'
    result.message = '操作成功'
    result.data = res.data
    ctx.body = result;
  },
  // 员工综合查询-员工银行账号信息
  async getEmpBankAcctList (ctx) {
    let result = {};
    let res = await testService.getEmpBankAcctList();
    result.code = '000000'
    result.message = '操作成功'
    result.data = res.data
    ctx.body = result;
  },
  // 员工综合查询-员工经商信息
  async getEmpBusinessList (ctx) {
    let result = {};
    let res = await testService.getEmpBusinessList();
    result.code = '000000'
    result.message = '操作成功'
    result.data = res.data
    ctx.body = result;
  },
  // 员工综合查询-员工涉诉信息
  async getEmpLitigationList (ctx) {
    let result = {};
    let res = await testService.getEmpLitigationList();
    result.code = '000000'
    result.message = '操作成功'
    result.data = res.data
    ctx.body = result;
  },
  // 员工综合查询-员工汽车信息
  async getEmpCarList (ctx) {
    let result = {};
    let res = await testService.getEmpCarList();
    result.code = '000000'
    result.message = '操作成功'
    result.data = res.data
    ctx.body = result;
  },
  // 员工综合查询-员工房产地产信息
  async getEmpHouseLandList (ctx) {
    let result = {};
    let res = await testService.getEmpHouseLandList(ctx.request.query);
    result.code = '000000'
    result.message = '操作成功'
    result.data = res.data
    ctx.body = result;
  },
  // 员工综合查询-员工投资信息
  async getEmpInvestList (ctx) {
    let result = {};
    let res = await testService.getEmpInvestList(ctx.request.query);
    result.code = '000000'
    result.message = '操作成功'
    result.data = res.data
    ctx.body = result;
  },
  // 员工综合查询-征信信息（主表）
  async getEmpCreditInfo (ctx) {
    let result = {};
    let res = await testService.getEmpCreditInfo();
    result.code = '000000'
    result.message = '操作成功'
    result.data = res.data
    ctx.body = result;
  },
  // 员工综合查询-征信信息（员工负债信息）
  async getEmpDebtList (ctx) {
    let result = {};
    let res = await testService.getEmpDebtList();
    result.code = '000000'
    result.message = '操作成功'
    result.data = res.data
    ctx.body = result;
  },
  // 员工综合查询-征信信息（员工不良记录信息）
  async getEmpBadrecList (ctx) {
    let result = {};
    let res = await testService.getEmpBadrecList();
    result.code = '000000'
    result.message = '操作成功'
    result.data = res.data
    ctx.body = result;
  },
  // 员工综合查询-征信信息（员工对外担保信息）
  async getEmpAssuList (ctx) {
    let result = {};
    let res = await testService.getEmpAssuList();
    result.code = '000000'
    result.message = '操作成功'
    result.data = res.data
    ctx.body = result;
  },
  // 员工综合查询-征信信息（员工存在被强制执行信息）
  async getEmpForceList (ctx) {
    let result = {};
    let res = await testService.getEmpForceList();
    result.code = '000000'
    result.message = '操作成功'
    result.data = res.data
    ctx.body = result;
  },
  // 员工综合查询-家访列表数据
  async getEmpFamilyVisitList (ctx) {
    let result = {};
    let res = await testService.getEmpFamilyVisitList();
    result.code = '000000'
    result.message = '操作成功'
    result.data = res.data
    ctx.body = result;
  },
  
  
  
  
  
  // 员工信息导入-导入主表列表数据-----------------------------------------------------------
  async getEmpMainImportList (ctx) {
    let result = {};
    let res = await testService.getEmpMainImportList();
    result.code = '000000'
    result.message = '操作成功'
    result.data = res.data
    ctx.body = result;
  },
  // 员工信息导入-导入批量新增文件
  async uploadImportFile (ctx) {
    console.log(ctx)
    let result = {};
    let res = await testService.uploadImportFile(ctx.request);
    result.code = '000000'
    result.message = '操作成功'
    result.data = res.data
    ctx.body = result;
  },
  // 员工信息导入-删除家访记录
  async deleteEmpFamilyVisit (ctx) {
    let result = {};
    let res = await testService.deleteEmpFamilyVisit();
    result.code = '000000'
    result.message = '操作成功'
    ctx.body = result;
    return result;
  },
  // 员工信息导入-修改家访记录
  async modifyEmpFamilyVisit (ctx) {
    let result = {};
    let res = await testService.modifyEmpFamilyVisit();
    result.code = '000000'
    result.message = '操作成功'
    ctx.body = result;
    return result;
  },
  
  
  
  
  
  // 我的信息-个人信息填报-获取员工其他收入数据-----------------------------------------------------------
  async getEmpOtherIncomeInfo (ctx) {
    let result = {};
    let res = await testService.getEmpOtherIncomeInfo();
    result.code = '000000'
    result.message = '操作成功'
    result.data = res.data
    ctx.body = result;
  },
  // 我的信息-个人信息填报-修改员工其他收入数据
  async modifyEmpOtherIncome (ctx) {
    let result = {};
    let res = await testService.modifyEmpOtherIncome();
    result.code = '000000'
    result.message = '操作成功'
    ctx.body = result;
    return result;
  },
  // 我的信息-个人信息填报-新增员工其他收入数据
  async addEmpOtherIncome (ctx) {
    let result = {};
    let res = await testService.addEmpOtherIncome();
    result.code = '000000'
    result.message = '操作成功'
    result.data = res.data
    ctx.body = result;
  },
  
  // 我的信息-个人信息填报-批量删除员工房地产数据
  async deleteEmpHouseLandByBatch (ctx) {
    let result = {};
    let res = await testService.deleteEmpHouseLandByBatch();
    result.code = '000000'
    result.message = '操作成功'
    ctx.body = result;
    return result;
  },
  // 我的信息-个人信息填报-修改员工房地产数据
  async modifyEmpHouseLandInfo (ctx) {
    let result = {};
    let res = await testService.modifyEmpHouseLandInfo();
    result.code = '000000'
    result.message = '操作成功'
    ctx.body = result;
    return result;
  },
  // 我的信息-个人信息填报-新增员工房地产数据
  async addEmpHouseLandInfo (ctx) {
    let result = {};
    let res = await testService.addEmpHouseLandInfo();
    result.code = '000000'
    result.message = '操作成功'
    result.data = res.data
    ctx.body = result;
  },
  
  // 我的信息-个人信息填报-批量删除员工汽车数据
  async deleteEmpCarByBatch (ctx) {
    let result = {};
    let res = await testService.deleteEmpCarByBatch();
    result.code = '000000'
    result.message = '操作成功'
    ctx.body = result;
    return result;
  },
  // 我的信息-个人信息填报-修改员工汽车数据
  async modifyEmpCarInfo (ctx) {
    let result = {};
    let res = await testService.modifyEmpCarInfo();
    result.code = '000000'
    result.message = '操作成功'
    ctx.body = result;
    return result;
  },
  // 我的信息-个人信息填报-新增员工汽车数据
  async addEmpCarInfo (ctx) {
    let result = {};
    let res = await testService.addEmpCarInfo();
    result.code = '000000'
    result.message = '操作成功'
    result.data = res.data
    ctx.body = result;
  },
  
// 我的信息-个人信息填报-批量删除员工股金投资数据
  async deleteEmpSIByBatch (ctx) {
    let result = {};
    let res = await testService.deleteEmpSIByBatch();
    result.code = '000000'
    result.message = '操作成功'
    ctx.body = result;
    return result;
  },
  // 我的信息-个人信息填报-修改员工股金投资数据
  async modifyEmpSIInfo (ctx) {
    let result = {};
    let res = await testService.modifyEmpSIInfo();
    result.code = '000000'
    result.message = '操作成功'
    ctx.body = result;
    return result;
  },
  // 我的信息-个人信息填报-新增员工股金投资数据
  async addEmpSIInfo (ctx) {
    let result = {};
    let res = await testService.addEmpSIInfo();
    result.code = '000000'
    result.message = '操作成功'
    result.data = res.data
    ctx.body = result;
  },
  
  // 我的信息-个人信息填报-批量删除员工银行账号数据
  async deleteEmpBankByBatch (ctx) {
    let result = {};
    let res = await testService.deleteEmpBankByBatch();
    result.code = '000000'
    result.message = '操作成功'
    ctx.body = result;
    return result;
  },
  // 我的信息-个人信息填报-修改员工银行账号数据
  async modifyEmpBankInfo (ctx) {
    let result = {};
    let res = await testService.modifyEmpBankInfo();
    result.code = '000000'
    result.message = '操作成功'
    ctx.body = result;
    return result;
  },
  // 我的信息-个人信息填报-新增员工银行账号数据
  async addEmpBankInfo (ctx) {
    let result = {};
    let res = await testService.addEmpBankInfo();
    result.code = '000000'
    result.message = '操作成功'
    result.data = res.data
    ctx.body = result;
  },
  
  // 我的信息-个人信息填报-个人征信报告列表数据
  async getEmpCreditByManualList (ctx) {
    let result = {};
    let res = await testService.getEmpCreditByManualList();
    result.code = '000000'
    result.message = '操作成功'
    result.data = res.data
    ctx.body = result;
    return result;
  },
  // 我的信息-个人信息填报-删除个人征信报告数据
  async deleteEmpCreditByManual (ctx) {
    let result = {};
    let res = await testService.deleteEmpCreditByManual();
    result.code = '000000'
    result.message = '操作成功'
    ctx.body = result;
    return result;
  },
  // 我的信息-个人信息填报-新增个人征信报告数据
  async addCreditByManual (ctx) {
    let result = {};
    let res = await testService.addCreditByManual();
    result.code = '000000'
    result.message = '操作成功'
    result.data = res.data
    ctx.body = result;
  },
  
  // 我的信息-个人信息填报-批量删除员工负债数据
  async deleteEmpDebtByBatch (ctx) {
    let result = {};
    let res = await testService.deleteEmpDebtByBatch();
    result.code = '000000'
    result.message = '操作成功'
    ctx.body = result;
    return result;
  },
  // 我的信息-个人信息填报-修改员工负债数据
  async modifyEmpDebtInfo (ctx) {
    let result = {};
    let res = await testService.modifyEmpDebtInfo();
    result.code = '000000'
    result.message = '操作成功'
    ctx.body = result;
    return result;
  },
  // 我的信息-个人信息填报-新增员工负债数据
  async addEmpDebtInfo (ctx) {
    let result = {};
    let res = await testService.addEmpDebtInfo();
    result.code = '000000'
    result.message = '操作成功'
    result.data = res.data
    ctx.body = result;
  },
  
  // 我的信息-个人信息填报-修改员工不良记录数据
  async modifyEmpBadRecInfo (ctx) {
    let result = {};
    let res = await testService.modifyEmpBadRecInfo();
    result.code = '000000'
    result.message = '操作成功'
    ctx.body = result;
    return result;
  },
  
  // 我的信息-个人信息填报-批量删除员工对外担保数据
  async deleteEmpAssuByBatch (ctx) {
    let result = {};
    let res = await testService.deleteEmpAssuByBatch();
    result.code = '000000'
    result.message = '操作成功'
    ctx.body = result;
    return result;
  },
  // 我的信息-个人信息填报-修改员工对外担保数据
  async modifyEmpAssuInfo (ctx) {
    let result = {};
    let res = await testService.modifyEmpAssuInfo();
    result.code = '000000'
    result.message = '操作成功'
    ctx.body = result;
    return result;
  },
  // 我的信息-个人信息填报-新增员工对外担保数据
  async addEmpAssuInfo (ctx) {
    let result = {};
    let res = await testService.addEmpAssuInfo();
    result.code = '000000'
    result.message = '操作成功'
    result.data = res.data
    ctx.body = result;
  },
  
  // 我的信息-个人信息填报-批量删除员工被强制执行数据
  async deleteEmpForceByBatch (ctx) {
    let result = {};
    let res = await testService.deleteEmpForceByBatch();
    result.code = '000000'
    result.message = '操作成功'
    ctx.body = result;
    return result;
  },
  // 我的信息-个人信息填报-修改员工被强制执行数据
  async modifyEmpForceInfo (ctx) {
    let result = {};
    let res = await testService.modifyEmpForceInfo();
    result.code = '000000'
    result.message = '操作成功'
    ctx.body = result;
    return result;
  },
  // 我的信息-个人信息填报-新增员工被强制执行数据
  async addEmpForceInfo (ctx) {
    let result = {};
    let res = await testService.addEmpForceInfo();
    result.code = '000000'
    result.message = '操作成功'
    result.data = res.data
    ctx.body = result;
  },
  
  // 员工管理-征信信息确认-获取征信信息列表数据
  async getEmpCreditByVerifyList (ctx) {
    let result = {};
    let res = await testService.getEmpCreditByVerifyList();
    result.code = '000000'
    result.message = '操作成功'
    result.data = res.data
    ctx.body = result;
    return result;
  },
  // 员工管理-征信信息确认-审核征信报告并上传文件
  async uploadCreditFile (ctx) {
    let result = {};
    let res = await testService.uploadCreditFile(ctx.request);
    result.code = '000000'
    result.message = '操作成功'
    result.data = res.data
    ctx.body = result;
  },
  
  // 员工管理-调整员工关注类别-获取员工关注类别数据
  async getEmpAttentionInfo (ctx) {
    let result = {};
    let res = await testService.getEmpAttentionInfo();
    result.code = '000000'
    result.message = '操作成功'
    result.data = res.data
    ctx.body = result;
  },
  // 员工管理-调整员工关注类别-调整员工关注类别数据
  async modifyAttentionInfo (ctx) {
    let result = {};
    let res = await testService.modifyAttentionInfo();
    result.code = '000000'
    result.message = '操作成功'
    ctx.body = result;
  },
  
  
  // 统计查询-风险级别统计报表-风险级别统计报表列表数据--------------------------------------------------
  async getRptRiskLevelList (ctx) {
    let result = {};
    let res = await testService.getRptRiskLevelList();
    result.code = '000000'
    result.message = '操作成功'
    result.data = res.data
    ctx.body = result;
    return result;
  },
  
  // 统计查询-待审核征信统计报表-待审核征信机构统计查询
  async getRptAwaitCreditInstList (ctx) {
    let result = {};
    let res = await testService.getRptAwaitCreditInstList();
    result.code = '000000'
    result.message = '操作成功'
    result.data = res.data
    ctx.body = result;
    return result;
  },
  // 统计查询-待审核征信统计报表-待审核征信明细查询
  async getRptAwaitCreditDetailList (ctx) {
    let result = {};
    let res = await testService.getRptAwaitCreditDetailList();
    result.code = '000000'
    result.message = '操作成功'
    result.data = res.data
    ctx.body = result;
    return result;
  },
  
  // 统计查询-关注人员情况统计表-关注人员情况机构查询
  async getRptAttentionInstList (ctx) {
    let result = {};
    let res = await testService.getRptAttentionInstList();
    result.code = '000000'
    result.message = '操作成功'
    result.data = res.data
    ctx.body = result;
    return result;
  },
  // 统计查询-关注人员情况统计表-关注人员情况二级机构查询
  async getRptAttentionInst2List (ctx) {
    let result = {};
    let res = await testService.getRptAttentionInst2List();
    result.code = '000000'
    result.message = '操作成功'
    result.data = res.data
    ctx.body = result;
    return result;
  },
  // 统计查询-关注人员情况统计表-关注人员情况是明细查询
  async getRptAttentionDetailList (ctx) {
    let result = {};
    let res = await testService.getRptAttentionDetailList();
    result.code = '000000'
    result.message = '操作成功'
    result.data = res.data
    ctx.body = result;
    return result;
  },
}


