
const selectOptMap = new Map()

selectOptMap.set("HD_PRO",{
  "1": "员工本人",
  "2": "夫妻共有",
  "3": "其他",
})

selectOptMap.set("HD_SOUR",{
  "1": "购买",
  "2": "转让",
  "3": "继承",
  "4": "赠与",
  "5": "其他",
})

selectOptMap.set("HD_USE",{
  "1": "居住",
  "2": "出租",
  "3": "投资出售",
  "4": "商铺自用",
  "5": "住宅用地",
  "6": "商业用地",
  "7": "工业用地",
  "8": "其他",
})

selectOptMap.set("HD_H_TYPE",{
  "1": "商品房",
  "2": "商铺",
  "3": "公寓",
  "4": "别墅",
  "5": "自建房",
  "6": "其他",
})

selectOptMap.set("HD_A_STAUS",{
  "1": "自用",
  "2": "出租",
  "3": "闲置",
  "4": "其他",
})

selectOptMap.set("CAP_INVE_TYPE",{
  "1": "股票",
  "2": "基金",
  "3": "债券",
  "4": "期货",
  "5": "期权",
  "6": "证券组合投资",
  "7": "其他",
})

selectOptMap.set("DEBT_TYPE",{
  "1": "信用卡透支",
  "2": "个人消费贷款",
  "3": "按揭/住房公积金贷款",
  "4": "汽车贷款",
  "5": "个人经营性贷款",
  "6": "其他一般性贷款",
})

selectOptMap.set("ASSU_MODE",{
  "1": "抵押",
  "2": "质押",
  "3": "保证",
})

selectOptMap.set("LOAN_5STA",{
  "1": "正常",
  "2": "关注",
  "3": "次级",
  "4": "可疑",
  "5": "损失"
})

selectOptMap.set("ASSU_STAU",{
  "1": "未解除",
  "2": "已解除",
})

selectOptMap.set("FORCE_STATU",{
  "1": "执行中",
  "2": "已结案",
})
module.exports = {
  getSelectOptMap () {
    return selectOptMap
  }
}