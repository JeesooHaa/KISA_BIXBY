module.exports.function = function travel(travelinput, insureinput, goalinput) {
  const data = require('./db.js').travel
  const console = require('console')

  let res = []
  for(i in data) {
    var temp = {
      name:data[i]['name'],
      kind: data[i]['kinds'],
      fee: data[i]['fee'],
      contents: '',
      url: data[i]['url']
    }

    let temp_con = []
    let idx = 0
    for(j in data[i]['보장내용']) {
      temp_con.push({
        name: Object.keys(data[i]['보장내용'])[idx],
        amt: data[i]['보장내용'][j],
      })
      idx++
    }

    temp.contents = temp_con
    res.push(temp)
  }
  console.log(res)


  return {
    travelset: res
  }
}
