var ftpClient = require("ftp-client");
var config = { 
    host: "172.16.0.159",
    user: "ituser",
    password: "S0ft@369",
    port:5022,
};
var options = {
    logging:"basic"
};
console.log(ftpClient);
var client =new ftpClient(config); 
var ftpStatus = client.connect();
console.log(ftpStatus);
if(ftpStatus){
    console.log("connected");
} else{
    console.log("Disconnected");
}