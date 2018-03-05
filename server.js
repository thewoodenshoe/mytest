const request = require('request')
const Authorization = require('./utils/authorization')

const express = require('express'),
    app = express()
const pdf = require('./generatePdf')
const apiHandler = require('./services/apiHandler')  

function getDataPromise(studentId, apiName) {
  return new Promise (function(resolve, reject) {
    if (error) {
       reject(err)
    } else {
      resolve(apiHandler.getData(studentId, apiName))
    }  
  })
}

app.get('/',function(req,res){
  console.log('No student id given')
  return res.send('Usage: /api/<studentid>');
})

app.get('/api/:nr',function(req,res){
  const studentId = req.params.nr
  console.log(`Student id given to api: ${studentId}`) 

  myArray = []
  /* 
  ***** RAMIRO
  Hieronder werkt niet. De console.log toont geen data (synchroom vs asynchroon).. ja ik snap het: welcome to node :)
  Als ik de request in de code hieronder uitvoer, krijg ik dus WEL data.
  Verhuis ik de request naar een module, in dit geval apiHandler, dan worden de stappen na de call gelijktijdig 
  uitgevoerd. Dus de console.log wordt uitgevoerd voordat de apiHandler klaar is. Ik heb een Promise gemaakt in
  de apiHandler. ik dacht dat dit het zou voorkomen????


  Vraag 2: mijn doel is om data van verschillende api calls te verzamelen. Met deze 3 calls wil ik een PDF genereren.
  Is wat ik doe het juiste? Dus in een array stoppen en de array uit eindelijk door sturen naar een "make pdf" module?
  *****
  */
  myArray.push(apiHandler.getData(studentId, 'personIdentifications'))
  myArray.push(apiHandler.getData(studentId, 'studentGrades'))
  myArray.push(apiHandler.getData(studentId, 'gpaAcademicStandings'))
  console.log('my array 0: ' +myArray[0])
  console.log('my array 1: ' +myArray[1])
  console.log('my array 2: ' +myArray[2])




/*
  const baseUrl = 'https://api.dev.cofc.edu/StudentApi/api'
  const studentGradesUrl = `${baseUrl}/person-identifications?bannerId=${studentId}`
  //const studentGradesUrl = `${baseUrl}/students/${studentId}/grades`
  //const studentGradesUrl `${baseUrl}/students/${studentId}/gpa-academic-standings`
  const options = {
    method: 'GET',
    url: studentGradesUrl,
    headers: { 'accept': 'application/json', 
               'authorization': Authorization.getApiPassword() 
             }
  }
  request(options, function (error, response, body) {
    const jsonBody = JSON.parse(body)
    pdf.Generate(studentId, jsonBody)
  })
*/
  res.send(`Done`) 
})

app.listen(3001, function () {
  console.log('Port 3001!')
})




