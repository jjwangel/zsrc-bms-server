const T = [
  {
      "id": 1,
      "name": "通用角色1",
      "code": "USER002",
      "status": 0
  },
]

const A = T.map((val,idx,arr) => {
  return val.name
})

console.log(A)