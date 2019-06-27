const t5 = require('./test5');

module.exports={
  T6:async function(){
    let r={
      a:1,
    };
    t5.T().then(function resolve(){
      console.log(r);
    })
  }
}