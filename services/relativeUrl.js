module.exports = {
    get: function (apiName, studentId) {
        if (apiName == 'personIdentifications') {
            return `person-identifications?bannerId=${studentId}`
        }
        else if (apiName == 'studentGrades') {
            return `students/${studentId}/grades`
        }
        else if (apiName == 'gpaAcademicStandings') {
           return `students/${studentId}/gpa-academic-standings`
       }
}
}