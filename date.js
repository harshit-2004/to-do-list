
// console.log(module);
exports.getDate = 

function (){
  var today = new Date();
  var option = {
    weekday:"long",
    day:"numeric",
    month:"long",
    year:"numeric"
  };
var day = today.toLocaleDateString("en-US",option);

return day;

}
