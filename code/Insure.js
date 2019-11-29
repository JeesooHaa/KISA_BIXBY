module.exports.function = function insure(caetgory, insureinput, goalinput) {
  const db = require('./db.js').data // 카테고리분기 준비
  const console = require('console')

  let res = []
  for (let i in db) {
    let rate_min = []
    const rm = Object.keys(db[i]['최저이율'])
    let idx = 0
    // console.log(typeof i)
    for (j in db[i]['최저이율']) {
      console.log(Number(i))
      rate_min.push({
        name: rm[Number(i)],
        rate: db[i]['최저이율'][j]
      })
      idx += 1
    }
    const insureset = {
      rate: db[i]["공시이율"],
      rate_min: rate_min,
      TR: db[i]['해지환급금'],
      TR_rate: db[i]['환급률']
    }

    res.push(insureset)
  }

  console.log(res)

  return {
    insureset: res
  }
}
