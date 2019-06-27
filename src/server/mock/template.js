const Mock = require('mockjs')
module.exports = {
  // 违规违纪查询
  disciplineListTpl: {
    'data|3-10': [{
      'deptType|1': ["总行科技部", "总行零售事业务","总行办公室","东区支行","南区支行","火炬开发区支行"],
      'deptName|1': ["大涌综合部","大涌风险合规部","库充支行","南下支行","孙东支行"],
      'pushDate': '@date("yyyy-MM-dd")',
      'ouquQues|1': '@cword(10,50)',
      'partPush|1': '@cword(10,50)',
      'discPush|1': '@cword(10,50)',
      'humaDeal|1': '@cword(10,50)',
      'othDeal|1': '@cword(10,50)',
      'econDeal|1': '@cword(10,50)',
      'isFree_|1': ["是", "否"],
      'freeDate|1': '@date("yyyy-MM-dd")',
    }]
  },
  // 经济处罚查询
  economicListTpl: {
    'data|3-10': [{
      'deptType|1': ["总行科技部", "总行零售事业务","总行办公室","东区支行","南区支行","火炬开发区支行"],
      'deptName|1': ["大涌综合部","大涌风险合规部","库充支行","南下支行","孙东支行"],
      'pushDate': '@date("yyyy-MM-dd")',
      'pushBal|1': "@float(500, 5000, 2, 2)",
      'pushDesc|1': '@cword(10,50)',
      'pushAcc|1': '@cword(10,50)',
      'pushOrg|1': ["总行科技部", "总行零售事业务","总行办公室","东区支行","南区支行","火炬开发区支行"],
      'memo|1': '@cword(10,50)',
    }]
  },
  // 违规积分查询 
  integralListTpl: {
    'data|3-10': [{
      'deptType|1': ["总行科技部", "总行零售事业务","总行办公室","东区支行","南区支行","火炬开发区支行"],
      'deptName|1': ["大涌综合部","大涌风险合规部","库充支行","南下支行","孙东支行"],
      'inteDate': '@date("yyyy-MM-dd")',
      'inteCent|1': "@float(1, 100, 1, 1)",
      'exitIssu|1': '@cword(10,50)',
      'operType|1': '@cword(10,50)',
      'inteAcco|1': '@cword(10,50)',
      'checkName|1': '@cword(10,50)',
      'actuInst|1': ["总行科技部", "总行零售事业务","总行办公室","东区支行","南区支行","火炬开发区支行"],
      'memo|1': '@cword(10,50)',
    }]
  },
  
  
  
  
  // 员工综合查询信息-----------------------------------------------------------------------------
  empIntegratedListTpl: {
    'data|3-10': [{
      'employeeNo': '@string("lower", 5)',
      'name': '@cword(3, 3)',
      'year|1': ["2017", "2018", "2019"],
      'content|1': ["总行科技部", "总行零售事业务","总行办公室","东区支行","南区支行","火炬开发区支行"],
      'attenType|1': ["重点关注","一般关注","正常"],
      'geninfoYearCent': '@integer(1, 100)',
      'layinfoYearNum|1': '@integer(0, 10)',
      'pushYearBal|1': "@float(1, 1000, 1, 1)",
      'lastDebtBal|1': "@float(1, 1000, 1, 1)",
      'assuYearBal|1': "@float(1, 1000, 1, 1)",
      'bussType|1': ["是", "否"],
      'wadeType|1': ["是", "否"],
    }]
  },
  // 员工综合查询-个人基本信息
  empSelfBaseInfoTpl: {
    'employeeNo': '@string("lower", 5)',
    'idType|1': ["在职员工", "退休员工", "离职员工"],
    'name': '@cword(3, 3)',
    'sex|1': ["男", "女"],
    'year': '@integer(23, 60)',
    'deptType|1': ["总行科技部", "总行零售事业务","总行办公室","东区支行","南区支行","火炬开发区支行"],
    'deptName|1': ["大涌综合部","大涌风险合规部","库充支行","南下支行","孙东支行"],
    'busi|1': ["主管","一般员工"],
    'busiLev|1': ["一级","二级","三级"],
    'staName|1': ["质量管理岗","管理开发岗","网络安全岗"],
    'acctNo|1': ["XXXXXXXXXXXXXXXXXXXXXXX", "YYYYYYYYYYYYYYYYYYYYYYY","ZZZZZZZZZZZZZZZZZZZZZZZ"],
    'idNo': '@id',
    'crcd|1': ["本科","大专","中专"],
    'cmpDate': '@date("yyyy-MM-dd")',
    'wrkDate': '@date("yyyy-MM-dd")',
    'seqWorkTime': '@integer(1, 30)',
    'phone': '@integer(13800000000, 13899999999)',
    'deptDate': '@date("yyyy-MM-dd")',
    'brnPlc|1': ["中山市","广州市","深圳市"],
    'cenAddr': "'@county(true)'",
    'addr': "'@county(true)'",
    'staDate': '@date("yyyy-MM-dd")',
    'tellerNo': '@integer(6000000, 6999999)',
    'conType|1': ["已婚", "未婚"],
    'conName': '@cword(3, 3)',
    'empImg': Mock.Random.image('120x150', '#4A7BF7', '120x150'),
  },
  // 员工亲属关系
  empKinsfolkListTpl: {
    'data|1-3': [{
      'name': '@cword(3, 3)',
      'sex|1': ["男", "女"],
      'conRal|1': ["夫妻", "父子","父女"],
      'conCmp': '@cword(10, 20)',
    }]
  },
  // 员工出入境信息
  empEEListTpl: {
    'data|1-10': [{
      'deptType|1': ["总行科技部", "总行零售事业务","总行办公室","东区支行","南区支行","火炬开发区支行"],
      'deptName|1': ["大涌综合部","大涌风险合规部","库充支行","南下支行","孙东支行"],
      'incoAppDate': '@date("yyyy-MM-dd")',
      'incoBeginDate': '@date("yyyy-MM-dd")',
      'incoEndDate': '@date("yyyy-MM-dd")',
      'incoAddr|1': ["香港", "澳门", "日本","韩国"],
      'incoDays': '@integer(2,10)',
      'incoDesc': '@cword(5, 20)',
    }]
  },
  // 员工银行账号信息
  empBankAcctListTpl: {
    'data|1-5': [{
      'openOrgName|1': ["中山农商银行股份有限公司", "中国银行中山分公司","中国建设银行中山分公司","中国农业银行中山分公司","中国工商银行中山分公司","中国交通银行中山分公司"],
      'acctNo|1': ["XXXXXXXXXXXXXXXXXXXXXXX", "YYYYYYYYYYYYYYYYYYYYYYY","ZZZZZZZZZZZZZZZZZZZZZZZ"],
      'useDesc': '@cword(3, 20)',
    }]
  },
  // 员工经商信息
  empBusinessListTpl: {
    'data|1-5': [{
      'bussName': '@cword(5, 20)',
      'bussNo|1': ["XXXXXXXXXXXXXXXXXXXXXXX", "YYYYYYYYYYYYYYYYYYYYYYY","ZZZZZZZZZZZZZZZZZZZZZZZ"],
      'bussType|1': ["经营中", "已注销"],
    }]
  },
  // 员工涉诉信息
  empLitigationListTpl: {
    'data|1-5': [{
      'wadeType': '@cword(5, 10)',
      'wadeNo': '@integer(10000000,99999999)',
      'wadeDate': '@date("yyyy-MM-dd")',
      'wadeInst|1': ["地方人民法院", "中级人民法院","高级人民法院"],
      'wadeDesc': '@cword(10, 20)',
      'wadeMark': '@cword(10, 20)',
      'wadePer': '@cword(3, 4)',
    }]
  },
  // 员工汽车信息
  empCarPropertyListTpl: {
    'data|1-3': [{
      'id': '@integer(1,9999)',
      'carVar|1': ["本田", "日产","大众","长城","吉利"],
      'carType': '@string("lower", 5)',
      'carNo': '@string("lower", 5)',
      'carBuyDate': '@date("yyyy-MM-dd")',
      'carPrice': "@float(10000, 200000, 1, 1)",
      'carIsloan|1': [1, 2],
      'carIsloan_|1': ["是", "否"],
    }]
  },
  // 员工房产信息
  empHousePropertyListTpl: {
    'data|1-3': [{
      'id': '@integer(1,9999)',
      'hdHType|1': [1,2,3,4,5,6],
      'hdHType_|1': ["商品房", "商铺","公寓","别墅","自建房","其他"],
      'hdPro|1': [1,2,3],
      'hdPro_|1': ["员工本人", "夫妻共有","其他"],
      'hdSour|1': [1,2,3,4,5],
      'hdSour_|1': ["购买", "转让","继承","赠与","其他"],
      'hdUse|1': [1,2,3,4,8],
      'hdUse_|1': ["居住", "出租","投资出售","商铺自用","其他"],
      'hdIsloan|1': [1,2],
      'hdIsloan_|1': ["是", "否"],
      'hdArea': "@float(50, 200, 1, 1)",
      'hdPrice': "@float(500000, 3000000, 1, 1)",
      'hdBuyDate': '@date("yyyy-MM-dd")',
      'hdAddr': "'@county(true)'",
      'bz': '@cword(0, 20)',
    }]
  },
  // 员工地产信息
  empLandPropertyListTpl: {
    'data|1-3': [{
      'id': '@integer(1,9999)',
      'hdAStaus|1': [1,2,3,4],
      'hdAStaus_|1': ["自用", "出租","闲置","其他"],
      'hdPro|1': [1,2,3],
      'hdPro_|1': ["员工本人", "夫妻共有","其他"],
      'hdSour|1': [1,2,3,4,5],
      'hdSour_|1': ["购买", "转让","继承","赠与","其他"],
      'hdUse|1': [5,6,7,8],
      'hdUse_|1': ["住宅用地", "商业用地","工业用地","其他"],
      'hdArea': "@float(50, 200, 1, 1)",
      'hdPrice': "@float(500000, 3000000, 1, 1)",
      'hdBuyDate': '@date("yyyy-MM-dd")',
      'hdAddr': "'@county(true)'",
      'bz': '@cword(0, 20)',
    }]
  },
  // 员工持股金信息
  empCapitalListTpl: {
    'data|1-3': [{
      'id': '@integer(1,9999)',
      'capName': '@cword(5, 15)',
      'capNum': '@integer(10000,99999)',
      'capPrice': "@float(10000, 100000, 1, 1)",
    }]
  },
  // 员工证券投资信息
  empInvestListTpl: {
    'data|1-3': [{
      'id': '@integer(1,9999)',
      'capInveType|1': [1, 2,3,4,5,6,7],
      'capInveType_|1': ["股票", "基金","债券","期货","期权","证券组合投资","其他"],
      'capPrice': "@float(10000, 100000, 1, 1)",
      'capBz': '@cword(5, 20)',
    }]
  },
  // 员工征信报告信息
  empCreditInfoTpl: {
    'credDate': '@date("yyyy-MM-dd")',
    'fillDate': '@date("yyyy-MM-dd")',
    'loadDatetime': '@date("yyyy-MM-dd")',
    'fillId': '@string("lower", 5)',
    'fileName': '@cword(5, 10)',
    'filePath': '',
    'impNo': '@string("lower", 5)',
    'impName': '@cword(2, 4)',
    'credStatu': 1
  },
  // 员工负债信息
  empDebtListTpl: {
    'data|1-3': [{
      'id': '@integer(1,9999)',
      'debtType|1': [1,2,3,4,5,6],
      'debtType_|1': ["信用卡透支", "个人消费贷款","按揭/住房公积金贷款","汽车贷款","个人经营性贷款","其他一般性贷款"],
      'overOrgName': '@cword(5, 20)',
      'overDeptNum': '@integer(1,6)',
      'overDeptBal': "@float(0, 100000, 1, 1)",
    }]
  },
  // 员工不良记录信息
  empBadrecListTpl: {
    'id': '@integer(1,9999)',
    'credCardOverdueNum': '@integer(1,6)',
    'dyaOverdue1|1': [1,2],
    'dyaOverdue1_|1': ["是", "否"],
    'loanOverdueNum': '@integer(1,6)',
    'dyaOverdue2|1': [1,2],
    'dyaOverdue2_|1': ["是", "否"],
  },
  // 员工对外担保信息
  empAssuListTpl: {
    'data|1-3': [{
      'id': '@integer(1,9999)',
      'assuBal': "@float(1000, 100000, 1, 1)",
      'loanOrgName': '@cword(5, 20)',
      'assuMode|1': [1,2,3],
      'assuMode_|1': ["抵押", "质押","保证"],
      'assuName': '@cword(3, 4)',
      'assuRale': '@cword(3, 4)',
      'loan5sta|1': [1,2,3,4,5],
      'loan5sta_|1': ["正常","关注","次级","可疑","损失"],
      'loanOpenDate': '@date("yyyy-MM-dd")',
      'loanEndDate': '@date("yyyy-MM-dd")',
      'assuStau|1': [1,2],
      'assuStau_|1': ["未解除", "已解除"],
    }]
  },
  // 员工存在被强制执行信息
  empForceListTpl: {
    'data|1-3': [{
      'id': '@integer(1,9999)',
      'forceOrgName': '@cword(5, 20)',
      'forceDesc': '@cword(5, 20)',
      'forceStatu|1': [1,2],
      'forceStatu_|1': ["执行中", "已结案"],
    }]
  },
  // 员工家访信息
  empFamilyVisitListTpl: {
    'data|1-3': [{
      'id': '@integer(1,9999)',
      'employeeNo': '@string("lower", 5)',
      'batNum': '@integer(10000000,19999999)',
      'name': '@cword(3, 4)',
      'deptType|1': ["总行科技部", "总行零售事业务","总行办公室","东区支行","南区支行","火炬开发区支行"],
      'deptName|1': ["大涌综合部","大涌风险合规部","库充支行","南下支行","孙东支行"],
      'hocaDate': '@date("yyyy-MM-dd")',
      'hocaName': '@cword(3, 4)',
      'hocaCon': '@cword(3, 4)',
      'unconvType|1': [1,2],
      'unconvType_|1': ["是","否"],
      'unconvDesc': '@cword(5, 20)',
      'takeSept': '@cword(5, 20)',
      'recnCom': '@cword(5, 20)',
      'hocaRes': '@cword(5, 20)',
      'hocaAdu': '@cword(5, 20)',
      'hocaNameAdu': '@cword(5, 20)',
      'impDate': '@date("yyyy-MM-dd")',
      'impNo': '@string("lower", 5)',
      'impName': '@cword(3, 4)',
      'bz': '@cword(5, 20)',
      'lastUpdateName': '@cword(3, 4)',
      'lastUpdateNo': '@string("lower", 5)',
      'lastUpdateDt': '@date("yyyy-MM-dd")',
    }]
  },
  

  
  
  
  
  // 员工导入主表信息--------------------------------------------------------------------------------------
  empMainImportTpl: {
    'data|3-10': [{
      'employeeNo': '@string("lower", 5)',
      'batNum': '@integer(10000000,19999999)',
      'impDate': '@date("yyyy-MM-dd")',
      'impId': '@string("lower", 5)',
      'impName': '@cword(3, 4)',
      'impType|1': [1,2,3,4,5,6,7],
      'impStatus|1': [0,1,2],
      'impStatus_|1': ["处理中", "成功","失败"],
      'impRemark': 'template/失败清单.xlsx',
    }]
  },
  
  
  
  
  // 员工其他收入信息--------------------------------------------------------------------------------------
  empOtherIncomeTpl: {
    'id': '@integer(1,9999)',
    'year|1': ["2017", "2018", "2019"],
    'incoType':  '@cword(10, 50)',
    'incoTol': "@float(1000, 100000, 1, 1)",
  },
  // 员工其他收入信息（新增）
  empOtherIncomeNewTpl: {
    'id': '@integer(1,9999)'
  },
  
  // 员工房地产信息（新增）
  empHouseLandInfoNewTpl: {
    'id': '@integer(1,9999)'
  },
  
  // 员工汽车信息（新增）
  empCarInfoNewTpl: {
    'id': '@integer(1,9999)'
  },
  
  // 员工股金投资信息（新增）
  empSIInfoNewTpl: {
    'id': '@integer(1,9999)'
  },
  
  // 员工股金银行账号信息（新增）
  empBankInfoNewTpl: {
    'id': '@integer(1,9999)'
  },
  
  // 员工手工填报个人征信报告列表数据
  empCreditByManualTpl: {
    'data|2-5': [{
      'id': '@integer(1,9999)',
      'credDate': '@date("yyyy-MM-dd")',
      'dyaOverdue|1': ["是", "否"],
      'forceStatu|1': ["是", "否"],
      'credStatu|1': ["已审核", "未审核"],
      'assuBal': "@float(1000, 100000, 1, 1)",
      'overDeptBal': "@float(1000, 100000, 1, 1)",
    }]
  },
  // 员工手工填报个人征信报告列表数据
  empAddCreditByManualTpl: {
    'id': '@integer(1,9999)'
  },

  // 员工负债信息（新增）
  empDebtInfoNewTpl: {
    'id': '@integer(1,9999)'
  },
  
  // 员工对外担保信息（新增）
  empAssuInfoNewTpl: {
    'id': '@integer(1,9999)'
  },
  
  // 员工被强制执行信息（新增）
  empForceInfoNewTpl: {
    'id': '@integer(1,9999)'
  },
  
  // 员工管理-征信信息确认-获取征信信息列表数据
  empCreditByVerifyTpl: {
    'data|5-10': [{
      'id': '@integer(1,9999)',
      'employeeNo': '@string("lower", 5)',
      'name': '@cword(3, 4)',
      'deptType|1': ["总行科技部", "总行零售事业务","总行办公室","东区支行","南区支行","火炬开发区支行"],
      'deptName|1': ["大涌综合部","大涌风险合规部","库充支行","南下支行","孙东支行"],
      'credDate': '@date("yyyy-MM-dd")',
      'fillDate': '@date("yyyy-MM-dd")',
      'fileName': '',
      'loadDatetime': '@date("yyyy-MM-dd")',
      'impNo': '@string("lower", 5)',
      'impName': '@cword(3, 4)',
      'credStatu|1': [1,2],
      'credStatu_|1': ["已审核", "未审核"]
    }]
  },
  
  // 员工管理-调整员工关注类别-获取员工关注类别数据
  empAttentionInfoTpl: {
    'id': '@integer(1,9999)',
    'name': '@cword(3, 4)',
    'deptType|1': ["总行科技部", "总行零售事业务","总行办公室","东区支行","南区支行","火炬开发区支行"],
    'deptName|1': ["大涌综合部","大涌风险合规部","库充支行","南下支行","孙东支行"],
    'chgBefore|1': ["重点关注","一般关注","正常"],
    'chgAfter': "",
  },
  
  
  
  
  // 统计查询-风险级别统计报表-风险级别统计报表查询------------------------------------------------------------
  rptRiskLevelTpl: {
    'data|5-10': [{
      'instName|1': ["总行科技部", "总行零售事业务","总行办公室","东区支行","南区支行","火炬开发区支行"],
      'levelH': '@integer(0,10)',
      'levelM': '@integer(0,20)',
      'levelL': '@integer(0,50)',
      'levelTotal': '@integer(0,80)',
    }]
  },
  // 统计查询-待审核征信统计报表-待审核征信机构统计查询
  rptAwaitCreditInstTpl: {
    'data|5-10': [{
      'instName|1': ["总行科技部", "总行零售事业务","总行办公室","东区支行","南区支行","火炬开发区支行"],
      'awaitNum': '@integer(1,10)'
    }]
  },
  // 统计查询-待审核征信统计报表-待审核征信明细查询
  rptAwaitCreditDetailTpl: {
    'data|5-10': [{
      'employeeNo': '@string("lower", 5)',
      'name': '@cword(3, 4)',
      'deptType|1': ["总行科技部", "总行零售事业务","总行办公室","东区支行","南区支行","火炬开发区支行"],
      'deptName|1': ["大涌综合部","大涌风险合规部","库充支行","南下支行","孙东支行"],
      'credDate': '@date("yyyy-MM-dd")',
    }]
  },
  
  // 统计查询-关注人员情况统计表-关注人员情况机构查询
  rptAttentionInstTpl: {
    'data|3-5': [{
      'instName|1': ["总行科技部", "总行零售事业务","总行办公室","总行公司业务部","总行行政保卫部","总行审计部","民众支行","东区支行","南区支行","火炬开发区支行"],
      'emphasiNum': '@integer(1,10)',
      'commonNum': '@integer(10,100)',
      'normalNum': '@integer(100,2000)'
    }]
  },
  // 统计查询-关注人员情况统计表-关注人员情况二级机构查询
  rptAttentionInst2Tpl: {
    'data|5-20': [{
      'instName|1': ["总行科技部", "总行零售事业务","总行办公室","总行公司业务部","总行行政保卫部","总行审计部","民众支行","东区支行","南区支行","火炬开发区支行"],
      'emphasiNum': '@integer(1,10)',
      'commonNum': '@integer(10,100)'
    }]
  },
  // 统计查询-关注人员情况统计表-关注人员情况是明细查询
  rptAttentionDetailTpl: {
    'data|5-10': [{
      'employeeNo': '@string("lower", 5)',
      'name': '@cword(3, 4)',
      'deptType|1': ["总行科技部", "总行零售事业务","总行办公室","东区支行","南区支行","火炬开发区支行"],
      'deptName|1': ["大涌综合部","大涌风险合规部","库充支行","南下支行","孙东支行"],
      'attType|1': ["重点关注","一般关注"],
      'inteCent': '@integer(10,100)',
      'punishTimes': '@integer(10,100)',
      'economicPunish': "@float(500, 5000, 2, 2)",
      'debtBal': "@float(500, 5000, 2, 2)",
      'assuBal': "@float(500, 5000, 2, 2)",
      'isBuss|1': ["是", "否"],
      'isWade|1': ["是", "否"]
    }]
  },
}