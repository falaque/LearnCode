// app/index.js
console.log("inside app")
var redis = require('redis');
var client = redis.createClient(6379,'localhost',{no_ready_check: true});

client.on('connect',function(){
    //console.log('connected  to redis');
    On_Connect();
});
client.on('error',function(err){
    console.log('Error:'+err);
});

function On_Connect(){
    console.log('connected to redis');
    client.set('temp','temp-val',redis.print);
    client.get('temp',redis.print);
    client.quit(redis.print);
}
//redis.print();
//console.log("end of app");