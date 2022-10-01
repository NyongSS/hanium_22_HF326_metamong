//controller에서는 request를 처리해서 
//response를 보내주는 역할이다. 
///default에는 서버를 실행해서 localhost:3000에 들어가면 
//"Express Lambda Example Server"를 출력해주도록 하였다.

const service = require('../services/service')

exports.default = (req, res) => {
    res.send('express lambda example server')
}
