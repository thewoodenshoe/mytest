module.exports = {
   getUrl: function (urlParam ) {
      const studentApiUrl = 'https://api.dev.cofc.edu/StudentApi/api/'
      const studentId = urlParam.studentId
      const apiService = urlParam.apiService
      const myIndexOf = apiService.indexOf('#')
      if (myIndexOf > -1) {
         const part1 = apiService.substring(0,myIndexOf)
         const part2 = apiService.substring(myIndexOf+1)
         var result = `${studentApiUrl}${part1}/${studentId}/${part2}`
      }
      else {
         var result = `${studentApiUrl}${apiService}/${studentId}`
      }
      return result
   }
}
