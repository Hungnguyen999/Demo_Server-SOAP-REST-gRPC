
var soap = require('soap');
var url = 'http://localhost:8081/wsdl?wsdl';    /// cái này phải trùng khớp với mấy cái bên app.js và cái address bên service của service.wsdl 

// Create client
soap.createClient(url, function (err, client) {
  if (err){
    throw err;
  }
  /* 
  * Parameters of the service call: they need to be called as specified
  * in the WSDL file
  */
  var args = {
    message: "id1:12:34:56:out42",
    splitter: ":"
  };
  // Cái này nó gọi service từ app.js 
  client.MessageSplitter(args, function (err, res) {
    if (err)
      throw err;
      // print the service returned result
    console.log(res); 
  });
});