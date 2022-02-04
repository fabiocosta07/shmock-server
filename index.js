var shmock = require('shmock');

//var mock = shmock(9000); // will use port 9000

var mock = shmock(9000, [function(req, res, next) {
    // do something with req/res then call next
    console.log(req.body)
    next();
  }, function(req, res, next) {
    // do something else with the request object
    next()
  }]);

mock.get("/foo").reply(200,{name:'blz'});
