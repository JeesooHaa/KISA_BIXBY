module.exports.function = function insure(rateinput, insureinput, goalinput) {
  const db = require('./db.js').rate // 카테고리분기 준비
  const console = require('console')

  let res = []
  for (let i in db) {
    var temp = {
      name: db[i].name,
      rate: db[i]["공시이율"],
      rate_min: [],
      TR: db[i]['해지환급금'],
      TR_rate: db[i]['환급률']
    }
    let kk = Object.keys(db[i]['최저이율'])
    let idx = 0
    for (j in db[i]['최저이율']) {
      temp.rate_min.push({
        name: kk[idx],
        rate: db[i]['최저이율'][j],
      })
      idx++
    }
    res.push(temp)
  }

  return {
    insureset: res
  }

}