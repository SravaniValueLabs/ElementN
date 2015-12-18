/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var mpush=require("mobile-push");

var message = '{"Content":"Get back to Julien when you get this notification."}';  
var arrayDevices = ["eNN8LT1W8w8:APA91bGBArTuZYSiHOx5Ip3FeIBCtp_lzAacjBubopV4li91B1iNmKLJi6rlmkfX-t5gNaTyxyVyxeEjmPNf7JE5OQYYVpVuB20APA3qkjzBazCNc1meA0D9E9-52Cz6we77j8Gy32ql"];

mpush.addToGroup("ad", arrayDevices);

return mpush.listGroups();			