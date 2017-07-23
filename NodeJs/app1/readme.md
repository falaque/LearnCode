

Redis:
------
```bash
# start redis
$ docker run --name my-redis6 -d -p 6379:6379 redis 
# start redis-cli to connect to some-redis instace of redis (prompt  will change to redis:6379>
$ `docker run -it --link my-redis6:redis --rm redis redis-cli -h redis -p 6379`

#run set/get in redis cli:
redis:6379>set test test-val
redis:6379>get test
redis:6379> exit #exit the redis cli

```