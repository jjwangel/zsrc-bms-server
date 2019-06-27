const routers = require('koa-router')();
const test = require('../../controllers/test-ctrl');

routers.get('test/menum/multi', test.getSelectOpt);
routers.get('test/deptemployee/tree', test.getInstEmpList);

routers.post('test/login', test.loginSys);
routers.get('test/loginuser', test.getUserInfo);
routers.get('test/logout', test.logoutSys);

// 获取违规违纪列表数据
routers.get('test/empoutlinelayinfos', test.getDisciplineList);
// 获取经济处罚列表数据
routers.get('test/emppushinfos', test.getEconomicList);
// 获取违规积分列表数据
routers.get('test/empoutlinegeninfos', test.getIntegralList);


// 获取员工综合查询列表数据
routers.get('test/empmaininfos', test.getEmpIntegratedList);
// 员工综合查询-个人基本信息
routers.get('test/empbasicinfo', test.getEmpSelfBaseInfo);
// 员工综合查询-员工亲属关系
routers.get('test/empconinfos', test.getEmpKinsfolkList);
// 员工综合查询-员工出入境信息
routers.get('test/empinoucoms', test.getEmpEEList);
// 员工综合查询-员工银行账号信息
routers.get('test/empacctinfos', test.getEmpBankAcctList);
// 员工综合查询-员工经商信息
routers.get('test/empbussinfos', test.getEmpBusinessList);
// 员工综合查询-员工涉诉信息
routers.get('test/empwadeinfos', test.getEmpLitigationList);
// 员工综合查询-员工汽车信息
routers.get('test/empcarinfos', test.getEmpCarList);
// 员工综合查询-员工房产地产信息
routers.get('test/emphdinfos', test.getEmpHouseLandList);
// 员工综合查询-员工投资信息
routers.get('test/empcapinfos', test.getEmpInvestList);
// 员工综合查询-征信信息（主表）
routers.get('test/empcredstau', test.getEmpCreditInfo);
// 员工综合查询-征信信息（员工负债信息）
routers.get('test/empdebtinfos', test.getEmpDebtList); 
// 员工综合查询-征信信息（员工不良记录信息）
routers.get('test/empbadrecinfos', test.getEmpBadrecList);
// 员工综合查询-征信信息（员工对外担保信息）
routers.get('test/empassuinfos', test.getEmpAssuList);
// 员工综合查询-征信信息（员工存在被强制执行信息）
routers.get('test/empforceinfos', test.getEmpForceList);
// 员工综合查询-家访列表数据
routers.get('test/emphocainfos', test.getEmpFamilyVisitList);


// 员工信息导入-导入主表列表数据
routers.get('test/empimpstaus', test.getEmpMainImportList);
// 员工信息导入-导入批量新增文件
routers.post('test/file/import/yearinfo', test.uploadImportFile);
// 员工信息导入-删除家访记录
routers.delete('test/emphocainfo/:id', test.deleteEmpFamilyVisit);
// 员工信息导入-修改家访记录
routers.put('test/emphocainfo', test.modifyEmpFamilyVisit);


// 我的信息-个人信息填报-获取员工其他收入列表数据
routers.get('test/empothincos', test.getEmpOtherIncomeInfo);
// 我的信息-个人信息填报-修改员工其他收入数据
routers.put('test/empothinco', test.modifyEmpOtherIncome);
// 我的信息-个人信息填报-新增员工其他收入数据
routers.post('test/empothinco', test.addEmpOtherIncome);

// 我的信息-个人信息填报-批量删除员工房地产数据
routers.delete('test/emphdinfo/batch', test.deleteEmpHouseLandByBatch);
// 我的信息-个人信息填报-修改员工房地产数据
routers.put('test/emphdinfo', test.modifyEmpHouseLandInfo);
// 我的信息-个人信息填报-新增员工房地产数据
routers.post('test/emphdinfo', test.addEmpHouseLandInfo);

// 我的信息-个人信息填报-批量删除员工汽车数据
routers.delete('test/empcarinfo/batch', test.deleteEmpCarByBatch);
// 我的信息-个人信息填报-修改员工汽车数据
routers.put('test/empcarinfo', test.modifyEmpCarInfo);
// 我的信息-个人信息填报-新增员工汽车数据
routers.post('test/empcarinfo', test.addEmpCarInfo);

// 我的信息-个人信息填报-批量删除员工股金投资数据
routers.delete('test/empcapinfo/batch', test.deleteEmpSIByBatch);
// 我的信息-个人信息填报-修改员工股金投资数据
routers.put('test/empcapinfo', test.modifyEmpSIInfo);
// 我的信息-个人信息填报-新增员工股金投资数据
routers.post('test/empcapinfo', test.addEmpSIInfo);

// 我的信息-个人信息填报-批量删除员工银行账号数据
routers.delete('test/empacctinfo/batch', test.deleteEmpBankByBatch);
// 我的信息-个人信息填报-修改员工银行账号数据
routers.put('test/empacctinfo', test.modifyEmpBankInfo);
// 我的信息-个人信息填报-新增员工银行账号数据
routers.post('test/empacctinfo', test.addEmpBankInfo);

// 我的信息-个人信息填报-个人征信报告列表数据
routers.get('test/empcredstau/creditmanuallist', test.getEmpCreditByManualList);
// 我的信息-个人信息填报-删除个人征信报告数据
routers.delete('test/empcredstau/creditmanual/:id', test.deleteEmpCreditByManual);
// 我的信息-个人信息填报-新增个人征信报告数据
routers.post('test/empcredstau', test.addCreditByManual);
// 我的信息-个人信息填报-复制个人征信报告数据
routers.post('test/empcredstau/copycreditmanual', test.addCreditByManual);

// 我的信息-个人信息填报-批量删除员工负债数据
routers.delete('test/empdebtinfo/batch', test.deleteEmpDebtByBatch);
// 我的信息-个人信息填报-修改员工负债数据
routers.put('test/empdebtinfo', test.modifyEmpDebtInfo);
// 我的信息-个人信息填报-新增员工负债数据
routers.post('test/empdebtinfo', test.addEmpDebtInfo);

// 我的信息-个人信息填报-修改员工不良记录数据
routers.put('test/empbadrecinfo', test.modifyEmpBadRecInfo);

// 我的信息-个人信息填报-批量删除员工对外担保数据
routers.delete('test/empassuinfo/batch', test.deleteEmpAssuByBatch);
// 我的信息-个人信息填报-修改员工对外担保数据
routers.put('test/empassuinfo', test.modifyEmpAssuInfo);
// 我的信息-个人信息填报-新增员工对外担保数据
routers.post('test/empassuinfo', test.addEmpAssuInfo);

// 我的信息-个人信息填报-批量删除员工被强制执行数据
routers.delete('test/empforceinfo/batch', test.deleteEmpForceByBatch);
// 我的信息-个人信息填报-修改员工被强制执行数据
routers.put('test/empforceinfo', test.modifyEmpForceInfo);
// 我的信息-个人信息填报-新增员工被强制执行数据
routers.post('test/empforceinfo', test.addEmpForceInfo);

// 员工管理-征信信息确认-获取征信信息列表数据
routers.get('test/empcredstaus/creditverifylist', test.getEmpCreditByVerifyList);
// 员工管理-征信信息确认-审核征信报告并上传文件
routers.post('test/creditimportfile', test.uploadCreditFile);
// 员工管理-调整员工关注类别-获取员工关注类别数据
routers.get('test/empattention', test.getEmpAttentionInfo);
// 员工管理-调整员工关注类别-调整员工关注类别数据
routers.put('test/empattention', test.modifyAttentionInfo);

// 统计查询-风险级别统计报表-风险级别统计报表列表数据
routers.get('test/rpt/risklevels', test.getRptRiskLevelList);
// 统计查询-待审核征信统计报表-待审核征信机构统计查询
routers.get('test/rpt/awaitcredits', test.getRptAwaitCreditInstList);
// 统计查询-待审核征信统计报表-待审核征信明细查询
routers.get('test/rpt/awaitcreditdetails', test.getRptAwaitCreditDetailList);
// 统计查询-关注人员情况统计表-关注人员情况机构查询
routers.get('test/rpt/attentioninsts', test.getRptAttentionInstList);
// 统计查询-关注人员情况统计表-关注人员情况二级机构查询
routers.get('test/rpt/attentioninst2s', test.getRptAttentionInst2List);
// 统计查询-关注人员情况统计表-关注人员情况是明细查询
routers.get('test/rpt/attentiondetails', test.getRptAttentionDetailList);

module.exports = routers;