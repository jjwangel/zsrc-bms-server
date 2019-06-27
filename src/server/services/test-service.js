const Mock = require('mockjs')
const mockTpl = require('../mock/template')
const path = require('path')
const fs = require('fs')
const selectOpt = require('../mock/selectOption')

module.exports = {
  async getSelectOpt (fromData) {
    let result = {}
    selectOpt.getSelectOptMap().forEach((val, key, map) => {
      if(fromData.includes(key)){
        result[key] = val
      }
    })
    
    return result;
  },
  
  async getInstEmpList (fromData) {
  
    let result = [
      {
        title: '总行',
        expand: true,
        is_emp: false,
        num: '000',
        children: [
          {
            title: '科技部',
            expand: true,
            is_emp: false,
            num: '001',
            children: [
              {
                title: '简嘉文',
                is_emp: true,
                num: 'T013803'
              },
              {
                title: '刘思敏',
                is_emp: true,
                num: 'T014803'
              }
            ]
          },
          {
            title: '办公室',
            expand: true,
            is_emp: false,
            num: '002',
            children: [
              {
                title: '黎爱华',
                is_emp: true,
                num: 'T015803'
              },
              {
                title: '陈丽丽',
                is_emp: true,
                num: 'T016803'
              }
            ]
          }
        ]
      }
    ]
  
    return result;
  },
  
  async loginSys (fromData) {
    let result = {};
  
    result = {
      "data": {
          "firstLogin": false,
          "needModifyPassword": false,
          "purview": [
              {
                  "code": "bms_employeemng_infoimport_annualincome",
                  "flag": "annualincome",
                  "level": 3,
                  "name": "本行的年收入",
                  "seq": 1
              },
              {
                  "code": "bms_employeemng_infoimport_outlinepoint",
                  "flag": "outlinepoint",
                  "level": 3,
                  "name": "违规积分信息",
                  "seq": 2
              },
              {
                  "code": "bms_employeemng_infoimport_weightyoutline",
                  "flag": "weightyoutline",
                  "level": 3,
                  "name": "严重违规信息",
                  "seq": 3
              },
              {
                  "code": "bms_employeemng_infoimport_bussinfo",
                  "flag": "bussinfo",
                  "level": 3,
                  "name": "经商信息",
                  "seq": 4
              },
              {
                  "code": "bms_employeemng_infoimport_suspectlawsuit",
                  "flag": "suspectlawsuit",
                  "level": 3,
                  "name": "涉诉信息",
                  "seq": 5
              },
              {
                  "code": "bms_employeemng_infoimport_homevisit",
                  "flag": "homevisit",
                  "level": 3,
                  "name": "家访信息",
                  "seq": 6
              },
              {
                  "code": "bms_employeemng_infoimport_economicpunish",
                  "flag": "economicpunish",
                  "level": 3,
                  "name": "经济处罚",
                  "seq": 7
              },
              {
                  "code": "bms_employeemng_credconfirm",
                  "flag": "credconfirm",
                  "level": 2,
                  "name": "征信信息确认",
                  "seq": 2
              },
              {
                  "code": "bms_employeemng_infoquery",
                  "flag": "infoquery",
                  "level": 2,
                  "name": "员工信息查询",
                  "seq": 3
              },
              {
                  "code": "bms_employeemng_focusadjust",
                  "flag": "attetionadjust",
                  "level": 2,
                  "name": "调整关注类别",
                  "seq": 4
              },
              {
                  "code": "bms_myinfo_personalfill",
                  "flag": "personalfill",
                  "level": 2,
                  "name": "个人信息填报",
                  "seq": 1
              },
              {
                  "code": "bms_myinfo_personalquery",
                  "flag": "personalquery",
                  "level": 2,
                  "name": "个人信息查询",
                  "seq": 2
              },
              {
                  "code": "bms_statquery_risklevel",
                  "flag": "risklevel",
                  "level": 2,
                  "name": "风险级别统计",
                  "seq": 1
              },
              {
                  "code": "bms_statquery_toauditcred",
                  "flag": "toauditcred",
                  "level": 2,
                  "name": "待审核征信统计",
                  "seq": 2
              },
              {
                  "code": "bms_statquery_focusperson",
                  "flag": "focusperson",
                  "level": 2,
                  "name": "关注人员情况统计",
                  "seq": 3
              },
              {
                  "code": "bms_modelmng_focusperson_parammaintain",
                  "flag": "parammaintain",
                  "level": 2,
                  "name": "参数维护",
                  "seq": 1
              },
              {
                  "code": "bms_modelmng_model1",
                  "flag": "model1",
                  "level": 2,
                  "name": "模型1",
                  "seq": 1
              },
              {
                  "code": "bms_modelmng_model2",
                  "flag": "model2",
                  "level": 2,
                  "name": "模型2",
                  "seq": 2
              },
              {
                  "code": "bms_modelmng_model3",
                  "flag": "model3",
                  "level": 2,
                  "name": "模型3",
                  "seq": 3
              },
              {
                  "code": "bms_systemmng",
                  "flag": "systemmng",
                  "level": 1,
                  "name": "系统管理",
                  "seq": 5
              }
          ],
          "token": "0ff1a7ad0fbe91729eb517554393e6014d3ef30444dff5fb18515e86ca8098933df365b02edfb0dd"
      }
  }
    
    return result;
  },
  async getUserInfo (fromData) {
    let result = {};
  
    result.data = {
      access: ["admin"],
      avator: "https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png",
      user_id: "99999",
      user_name: "bms_admin"
    }
  
    return result;
  },
  async logoutSys () {
    return {
      data : ''
    }
  },
  
  
  
  
  
  // 获取违规积分列表数据-----------------------------------------------------------------------
  async getIntegralList (fromData) {
    let result = {};
  
    result.data = Mock.mock(mockTpl.integralListTpl).data;
  
    return result;
  },
  // 获取经济处罚列表数据
  async getEconomicList (fromData) {
    let result = {};
  
    result.data = Mock.mock(mockTpl.economicListTpl).data;
  
    return result;
  },  
  // 获取违规违纪列表数据
  async getDisciplineList (fromData) {
    let result = {};
  
    result.data = Mock.mock(mockTpl.disciplineListTpl).data;
  
    return result;
  },
  
  
  
  
  // 获取员工综合查询数据------------------------------------------------------------------------
  async getEmpIntegratedList (fromData) {
    let result = {};
  
    result.data = Mock.mock(mockTpl.empIntegratedListTpl).data;
  
    return result;
  },
  // 员工综合查询-个人基本信息
  async getEmpSelfBaseInfo (fromData) {
    let result = {};
  
    result.data = Mock.mock(mockTpl.empSelfBaseInfoTpl);
  
    return result;
  },
  // 员工综合查询-员工亲属关系
  async getEmpKinsfolkList (fromData) {
    let result = {};
  
    result.data = Mock.mock(mockTpl.empKinsfolkListTpl).data;
  
    return result;
  },
  // 员工综合查询-员工出入境
  async getEmpEEList (fromData) {
    let result = {};
  
    result.data = Mock.mock(mockTpl.empEEListTpl).data;
  
    return result;
  },
  // 员工综合查询-员工银行账号信息
  async getEmpBankAcctList (fromData) {
    let result = {};
  
    result.data = Mock.mock(mockTpl.empBankAcctListTpl).data;
  
    return result;
  },
  // 员工综合查询-员工经商信息
  async getEmpBusinessList (fromData) {
    let result = {};
  
    result.data = Mock.mock(mockTpl.empBusinessListTpl).data;
  
    return result;
  },
  // 员工综合查询-员工涉诉信息
  async getEmpLitigationList (fromData) {
    let result = {};
  
    result.data = Mock.mock(mockTpl.empLitigationListTpl).data;
  
    return result;
  },
  // 员工综合查询-员工汽车信息
  async getEmpCarList (fromData) {
    let result = {};
    
    result.data = Mock.mock(mockTpl.empCarPropertyListTpl).data;  
    
    return result;
  },
  // 员工综合查询-员工房产地产信息
  async getEmpHouseLandList (fromData) {
    let result = {};
    
    if (fromData.hdAssType === "1") {
      result.data = Mock.mock(mockTpl.empHousePropertyListTpl).data;  
    } else {
      result.data = Mock.mock(mockTpl.empLandPropertyListTpl).data;
    }
    return result;
  },
  // 员工综合查询-员工投资信息
  async getEmpInvestList (fromData) {
    let result = {};
    
    if (fromData.capType === "1") {
      result.data = Mock.mock(mockTpl.empCapitalListTpl).data;  
    } else {
      result.data = Mock.mock(mockTpl.empInvestListTpl).data;
    }
    return result;
  },
  // 员工综合查询-征信信息（主表）
  async getEmpCreditInfo (fromData) {
    let result = {};
  
    result.data = Mock.mock(mockTpl.empCreditInfoTpl);
  
    return result;
  },
  // 员工综合查询-征信信息（员工负债信息）
  async getEmpDebtList (fromData) {
    let result = {};
  
    result.data = Mock.mock(mockTpl.empDebtListTpl).data;
    return result;
  },
  // 员工综合查询-征信信息（员工不良记录信息）
  async getEmpBadrecList (fromData) {
    let result = {};
  
    result.data = Mock.mock(mockTpl.empBadrecListTpl);
  
    return result;
  },
  // 员工综合查询-征信信息（员工对外担保信息）
  async getEmpAssuList (fromData) {
    let result = {};
  
    result.data = Mock.mock(mockTpl.empAssuListTpl).data;
  
    return result;
  },
  // 员工综合查询-征信信息（员工存在被强制执行信息）
  async getEmpForceList (fromData) {
    let result = {};
  
    result.data = Mock.mock(mockTpl.empForceListTpl).data;
  
    return result;
  },
  // 员工综合查询-家访列表数据
  async getEmpFamilyVisitList (fromData) {
    let result = {};
  
    result.data = Mock.mock(mockTpl.empFamilyVisitListTpl).data;
  
    return result;
  },
  
  
  
  
  
  // 员工信息导入-导入主表列表数据-----------------------------------------------------------
  async getEmpMainImportList (fromData) {
    let result = {};

    result.data = Mock.mock(mockTpl.empMainImportTpl).data;

    return result;
  },
  // 员工信息导入-导入批量新增文件
  async uploadImportFile (fromData) {
    let result = {};
    
    // 上传单个文件
    const file = fromData.files.file; // 获取上传文件
    // 创建可读流
    const reader = fs.createReadStream(file.path);
    let filePath = path.join(__dirname, '../../static/importfiles') + `/${file.name}`;
    // 创建可写流
    const upStream = fs.createWriteStream(filePath);
    // 可读流通过管道写入可写流
    reader.pipe(upStream);
  
    result.data = {
      batNum: 'qw201900001',
      impDate: '2019-04-17',
      impName: '简嘉文',
      impStatus_: '处理中',
    }

    return result;
  },
  // 员工信息导入-删除家访记录
  async deleteEmpFamilyVisit (fromData) {
    let result = {};
    
    return result;
  },
  // 员工信息导入-修改家访记录
  async modifyEmpFamilyVisit (fromData) {
    let result = {};

    return result;
  },
  
  
  
  
  
  // 我的信息-个人信息填报-获取员工其他收入数据-----------------------------------------------------------
  async getEmpOtherIncomeInfo (fromData) {
    let result = {};

    result.data = Mock.mock(mockTpl.empOtherIncomeTpl);

    return result;
  },
  // 我的信息-个人信息填报-修改员工其他收入数据
  async modifyEmpOtherIncome (fromData) {
    let result = {};

    return result;
  },
  // 我的信息-个人信息填报-新增员工其他收入数据
  async addEmpOtherIncome (fromData) {
    let result = {};
    result.data = Mock.mock(mockTpl.empOtherIncomeNewTpl);
    return result;
  },
  
  // 我的信息-个人信息填报-批量删除员工房地产数据
  async deleteEmpHouseLandByBatch (fromData) {
    let result = {};
    
    return result;
  },
  // 我的信息-个人信息填报-修改员工房地产数据
  async modifyEmpHouseLandInfo (fromData) {
    let result = {};

    return result;
  },
  // 我的信息-个人信息填报-新增员工房地产数据
  async addEmpHouseLandInfo (fromData) {
    let result = {};
    result.data = Mock.mock(mockTpl.empHouseLandInfoNewTpl);
    return result;
  },
  
  // 我的信息-个人信息填报-批量删除员工汽车数据
  async deleteEmpCarByBatch (fromData) {
    let result = {};
    
    return result;
  },
  // 我的信息-个人信息填报-修改员工汽车数据
  async modifyEmpCarInfo (fromData) {
    let result = {};

    return result;
  },
  // 我的信息-个人信息填报-新增员工汽车数据
  async addEmpCarInfo (fromData) {
    let result = {};
    result.data = Mock.mock(mockTpl.empCarInfoNewTpl);
    return result;
  },
  
  // 我的信息-个人信息填报-批量删除员工股金投资数据
  async deleteEmpSIByBatch (fromData) {
    let result = {};
    
    return result;
  },
  // 我的信息-个人信息填报-修改员工股金投资数据
  async modifyEmpSIInfo (fromData) {
    let result = {};

    return result;
  },
  // 我的信息-个人信息填报-新增员工股金投资数据
  async addEmpSIInfo (fromData) {
    let result = {};
    result.data = Mock.mock(mockTpl.empSIInfoNewTpl);
    return result;
  },
  
  // 我的信息-个人信息填报-批量删除员工银行账号数据
  async deleteEmpBankByBatch (fromData) {
    let result = {};
    
    return result;
  },
  // 我的信息-个人信息填报-修改员工银行账号数据
  async modifyEmpBankInfo (fromData) {
    let result = {};

    return result;
  },
  // 我的信息-个人信息填报-新增员工银行账号数据
  async addEmpBankInfo (fromData) {
    let result = {};
    result.data = Mock.mock(mockTpl.empBankInfoNewTpl);
    return result;
  },
  
  // 我的信息-个人信息填报-个人征信报告列表数据
  async getEmpCreditByManualList (fromData) {
    let result = {};

    result.data = Mock.mock(mockTpl.empCreditByManualTpl).data;

    return result;
  },
  // 我的信息-个人信息填报-删除个人征信报告数据
  async deleteEmpCreditByManual (fromData) {
    let result = {};
    
    return result;
  },
  // 我的信息-个人信息填报-新增个人征信报告数据
  async addCreditByManual (fromData) {
    let result = {};

    result.data = Mock.mock(mockTpl.empAddCreditByManualTpl);

    return result;
  },
  
  // 我的信息-个人信息填报-批量删除员工负债数据
  async deleteEmpDebtByBatch (fromData) {
    let result = {};
    
    return result;
  },
  
  // 我的信息-个人信息填报-修改员工负债数据
  async modifyEmpDebtInfo (fromData) {
    let result = {};

    return result;
  },
  // 我的信息-个人信息填报-新增员工负债数据
  async addEmpDebtInfo (fromData) {
    let result = {};
    result.data = Mock.mock(mockTpl.empDebtInfoNewTpl);
    return result;
  },
  
  // 我的信息-个人信息填报-修改员工不良记录数据
  async modifyEmpBadRecInfo (fromData) {
    let result = {};

    return result;
  },
  
  // 我的信息-个人信息填报-批量删除员工对外担保数据
  async deleteEmpAssuByBatch (fromData) {
    let result = {};
    
    return result;
  },
  // 我的信息-个人信息填报-修改员工对外担保数据
  async modifyEmpAssuInfo (fromData) {
    let result = {};

    return result;
  },
  // 我的信息-个人信息填报-新增员工对外担保数据
  async addEmpAssuInfo (fromData) {
    let result = {};
    result.data = Mock.mock(mockTpl.empAssuInfoNewTpl);
    return result;
  },
  
  // 我的信息-个人信息填报-批量删除员工被强制执行数据
  async deleteEmpForceByBatch (fromData) {
    let result = {};
    
    return result;
  },
  // 我的信息-个人信息填报-修改员工被强制执行数据
  async modifyEmpForceInfo (fromData) {
    let result = {};

    return result;
  },
  // 我的信息-个人信息填报-新增员工被强制执行数据
  async addEmpForceInfo (fromData) {
    let result = {};
    result.data = Mock.mock(mockTpl.empForceInfoNewTpl);
    return result;
  },
  
  // 员工管理-征信信息确认-获取征信信息列表数据
  async getEmpCreditByVerifyList (fromData) {
    let result = {};

    result.data = Mock.mock(mockTpl.empCreditByVerifyTpl).data;

    return result;
  },
  // 员工管理-征信信息确认-审核征信报告并上传文件
  async uploadCreditFile (fromData) {
    let result = {};
    
    // 上传单个文件
    const file = fromData.files.file; // 获取上传文件
    // 创建可读流
    const reader = fs.createReadStream(file.path);
    let filePath = path.join(__dirname, '../../static/creditfiles') + `/${file.name}`;
    // 创建可写流
    const upStream = fs.createWriteStream(filePath);
    // 可读流通过管道写入可写流
    reader.pipe(upStream);
  
    result.data = {
      fileName: file.name,
      loadName: '简嘉文',
      loadDatetime: '2019-04-30',
      filePath: `creditfiles/${file.name}`
    }

    return result;
  },
  
  // 员工管理-调整员工关注类别-获取员工关注类别数据
  async getEmpAttentionInfo (fromData) {
    let result = {};
  
    result.data = Mock.mock(mockTpl.empAttentionInfoTpl);
  
    return result;
  },
  // 员工管理-调整员工关注类别-调整员工关注类别数据
  async modifyAttentionInfo (fromData) {
    let result = {};

    return result;
  },
  
  
  // 统计查询-风险级别统计报表-风险级别统计报表列表数据--------------------------------------------------
  async getRptRiskLevelList (fromData) {
    let result = {};

    result.data = Mock.mock(mockTpl.rptRiskLevelTpl).data;

    return result;
  },
  
  // 统计查询-待审核征信统计报表-待审核征信机构统计查询
  async getRptAwaitCreditInstList (fromData) {
    let result = {};

    result.data = Mock.mock(mockTpl.rptAwaitCreditInstTpl).data;

    return result;
  },
  // 统计查询-待审核征信统计报表-待审核征信明细查询
  async getRptAwaitCreditDetailList (fromData) {
    let result = {};

    result.data = Mock.mock(mockTpl.rptAwaitCreditDetailTpl).data;

    return result;
  },
  
  // 统计查询-关注人员情况统计表-关注人员情况机构查询
  async getRptAttentionInstList (fromData) {
    let result = {};

    result.data = Mock.mock(mockTpl.rptAttentionInstTpl).data;

    return result;
  },
  // 统计查询-关注人员情况统计表-关注人员情况二级机构查询
  async getRptAttentionInst2List (fromData) {
    let result = {};

    result.data = Mock.mock(mockTpl.rptAttentionInst2Tpl).data;

    return result;
  },
  // 统计查询-关注人员情况统计表-关注人员情况是明细查询
  async getRptAttentionDetailList (fromData) {
    let result = {};

    result.data = Mock.mock(mockTpl.rptAttentionDetailTpl).data;

    return result;
  },
}

    // for (let i=0;i<9999;i++) {
    //   console.log(i)
    // }