var fs = require('fs')
var express = require('express')
var app = express();

var str = fs.readFileSync('index.html').toString()
 
app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
 // response.send('Hello World hows it going!')
  response.send(str)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
