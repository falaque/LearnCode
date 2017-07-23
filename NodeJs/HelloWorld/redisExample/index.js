console.log('starting...')
var redis = require('redis');

//connecting to redis @localhost:6379
var client = redis.createClient(6379, 'localhost', {no_ready_check:true});

client.on('error', function(err){
	console.log('Error:'+err);
});

function on_redis_connect(){
	console.log('connected to redis');
	client.set('temp1','value1',redis.print);
	client.get('temp1',function(err,reply){
		console.log('value from redis:'+reply);
	});
	client.quit(redis.print);
}

client.on('connect',on_redis_connect);