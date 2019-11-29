module.exports.function = function theCheat (phoneinput, goalinput) {
  const http = require('http')
  const console = require('console')

  const url = 'https://sandbox-apigw.koscom.co.kr/v1/thecheat/fraudsearch'
  const params = '{   "keyword":'+ phoneinput + ',"keyword_type":"phone",   "access_type":"user",   "add_info":""}'


  const options = {
     headers:{'Content-Type':'application/json; charset=utf-8', 'apikey':'l7xx06e4f10ec35145c8b0eec668ef51db77'},
     format: 'json'
  }

  const aa = http.postUrl(url, params ,options)
  const result = JSON.parse(aa.content).caution

  let res
  if(result === "Y") {
    res = "피해사례가 있습니다."
  } else {
    res = "피해사례가 없습니다."
  }

  return res
}
