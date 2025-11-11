var express = require('express');
var Converter = require("csvtojson").Converter;
var app = express();


app.set('port', (process.env.PORT || 5000));

app.get('/convert/csv/to/json', function(request, response) {
    var q = request.query.q;

    var converter = new Converter({ constructResult: true }); //for big csv data 
    //record_parsed will be emitted each csv row being processed 
    converter.on("end_parsed", function(jsonObj) {
            response.send(jsonObj);
        
    });
    require("request").get(q).pipe(converter);
});

if (require.main === module) {
    app.listen(app.get('port'), function() {
        console.log('Node app is running on port', app.get('port'));
    });
}

module.exports = app;
