/*var PromiseFtp = require('promise-ftp');
  
  var ftp = new PromiseFtp();
  ftp.connect({
	host: "ftp://ftp1.thechennaisilks.com:5022", 
	user: "ituser", 
	password: "S0ft@369"
	}).then(function (serverMessage) {
    console.log('Server message: '+serverMessage);
    return ftp.list('/');
  }).then(function (list) {
    console.log('Directory listing:');
    console.dir(list);
    return ftp.end();
  });
  FtpConnectionError();
  
  var Client = require('ftp');

  var c = new Client();
  c.on('ready', function() {
    c.list(function(err, list) {
      if (err) throw err;
      console.dir(list);
      c.end();
    });
  });
  // connect to localhost:21 as anonymous
  c.connect();*/
  const ftp = require("basic-ftp");
const fs = require("fs");
var date = new Date();

example();

async function example() {
    const client = new ftp.Client()
    client.ftp.verbose = true
    try {
        await client.access({
            host: "172.16.0.159",
            user: "ituser",
            password: "S0ft@369"
			// port:5022,
           
        });
        console.log(await client.list());
		console.log(date.getDate()+"TESTING");
        //await client.upload(fs.createReadStream("README.md"), "README.md")
    }
    catch(err) {
        console.log(err);
    }
    client.close();
}