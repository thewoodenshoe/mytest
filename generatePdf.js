const PDFDocument = require('pdfkit')
const fs = require('fs')

module.exports = {
    Generate: function (studentId, jsonBody) {

    //    var company = _ref.company;
    //    var customer = _ref.customer;
    //    var items = _ref.items;

    // Initialize the PDF
    let pdf = new PDFDocument({
        size: 'LEGAL',
        info: {
          Title: `Transscript for student ${studentId}`,
          Author: 'College of Charleston',
        },
    })

    // Add text to the PDF
    pdf.fontSize(20).text('Transcript');
    pdf.fontSize(20).text(jsonBody[0].fullName);
    pdf.fontSize(10).text('Student id: ' +jsonBody[0].bannerId)
    
    // Write the PDF to the filesyste and create the filename
    var date = new Date();
    createdAt = date.getFullYear() + date.getMonth() + date.getDay() 
    filename = `output_${studentId}_${createdAt}.pdf`

    pdf.pipe(
    fs.createWriteStream(filename)
    )
    .on('finish', function () {
    console.log('PDF closed');
    });
    
    // close the PDF
    pdf.end()

    return 'Done generating'
        

    }
}
  