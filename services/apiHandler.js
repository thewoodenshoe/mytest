const request = require('request')
const Authorization = require('../utils/authorization')
const relativeUrl = require('./relativeUrl')

function download (relativeUrlResult) {
    const baseUrl = 'https://api.dev.cofc.edu/StudentApi/api/'
    const url = `${baseUrl}${relativeUrlResult}`
    const options = {
      method: 'GET',
      url: url,
      headers: { 'accept': 'application/json', 
                 'authorization': Authorization.getApiPassword() 
               }
    }
    return new Promise (function(resolve, reject) {
        request.get(options, function(error, response, body) {
            if (error) {
                reject(err)
            } else {
                resolve(JSON.parse(body))
            }
        })       
    })
}

module.exports = {
    getData: function (studentId, apiName) {
        relativeUrlResult = relativeUrl.get(apiName, studentId)
        var downloadPromise = download(relativeUrlResult)
        downloadPromise.then(function(result) {
            myResult = result
            // console hieronder werkt! output wordt gegeven
            console.log(myResult)
            return myResult
        })
    }
} 