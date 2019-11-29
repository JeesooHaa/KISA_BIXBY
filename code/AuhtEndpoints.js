module.exports.function = function authEndpoints(
  grantType, clientId, clientSecret, scope, authCode, redirectUri,
  refreshToken, codeVerifier
) {
  var base64 = require('base64')
  var http = require('http')

  var options = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      "Authorization": "Basic {" + base64.encode(clientId + ":" +
        clientSecret) + "}"
    },
    format: "json"
  };
  var params = {
    grant_type: "authorization_code",
    code: authCode,
    redirect_uri: redirectUri
  };
  var response = http.postUrl("https://api.myService.com/login/v3/oauth/access",
    params, options);
  return {
    'access_token': response.access_token,
    'expires_in': response.expires_in,
    'refresh_token': response.refresh_token
  }
}
