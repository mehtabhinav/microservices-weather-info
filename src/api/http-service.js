const fetch = require('node-fetch');

exports.fetchCall = function(url, reqParams) {
    return fetch(url, reqParams)
            .then(function(res) {
                statusCode = res.status;
                return res.text()
            })
            .then(function(data){
                return {status: statusCode, body: data};
            });
}
