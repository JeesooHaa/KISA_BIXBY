module.exports.function = function postGift(postgiftstructure) {
  const http = require('http')
  const target_url = 'https://message-234234234-server.herokuapp.com/api/v1/send/'
  let meassge = ''
  const params = {
    name: postgiftstructure.name,
    url: postgiftstructure.url,
    targetphone: postgiftstructure.targetphone
  }
  // const res = http.postUrl(target_url, params, { format: 'json' })
  const res = http.postUrl(target_url, { format: 'json' })

  if (res) {
    message = '성공적으로 선물을 보냈습니다.'
  } else {
    message = '선물보내기가 실패하였습니다.'
  }
  return message
}
