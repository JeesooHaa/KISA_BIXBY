module.exports.function = function postGift (name, url) {
  const http = require('http')
  const target_url = ''
  let meassge = 'https://message-234234234-server.herokuapp.com/api/v1/send/'
  const res = http.getUrl(target_url)

  if(res) {
    message = '성공적으로 선물을 보냈습니다.'
  } else {
    message = '선물보내기가 실패하였습니다.'
  }
  return message
}
