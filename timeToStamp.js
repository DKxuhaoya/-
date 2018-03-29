var date = new Date();
// console.log(date); //date为标准时间格式xxxx-xx-xxTxx:xx:xx.zzzZ
// 转成时间戳
function toTimeStamp (standardTime) { 
  return Date.parse(new Date(standardTime))/1000;
}
console.log(toTimeStamp(date));

