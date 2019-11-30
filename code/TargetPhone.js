module.exports.function = function TargetPhone(targetphone) {
  const http = require('http')
  const console = require('console')
  const target_url = 'https://message-234234234-server.herokuapp.com/api/v1/send/'
  let message = ''
  const params = {
    targetphone: targetphone
  }
  // const res = http.postUrl(target_url, params, { format: 'json' })
  // console.log(res)


  if (true) {
    message = '성공적으로 선물을 보냈습니다.'
  } else {
    message = '선물보내기가 실패하였습니다.'
  }
  // {
  //   targetphone: message,
  //   name: "name",
  //   url: "url"
  // }
  return message

}
