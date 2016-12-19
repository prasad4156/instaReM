var express = require('express');
var Converter = require("csvtojson").Converter;
var app = express();


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
	/*var q=request.query.q;

  var converter = new Converter({constructResult:true}); //for big csv data 
//record_parsed will be emitted each csv row being processed 
converter.on("end_parsed", function (jsonObj) {
   //console.log(jsonObj); //here is your result json object 
   console.log("started");
 
 response.send(jsonObj);

});
require("request").get(q).pipe(converter);
});*/
response.send("welcome to world");
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


