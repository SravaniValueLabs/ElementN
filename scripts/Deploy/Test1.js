/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var pbsb=require("pubsub");
return pbsb.listChannels();			