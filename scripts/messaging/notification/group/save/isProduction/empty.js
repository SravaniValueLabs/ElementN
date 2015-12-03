/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 var id = request.parameters["id"];
var platform = "iOS";

var update = request.parameters["update"];
var pushTokens = request.parameters["pushTokens"];
var lifetime = request.parameters["lifetime"];

var options = {
  "update": update,
  "pushTokens": pushTokens,
  "lifetime": lifetime
}

var log = require("log");
log.setLevel("DEBUG");

var messaging = require("messaging");
var result = messaging.notification.group.save(id, platform, options);
log.debug(JSON.stringify(result));

return result;   				   							