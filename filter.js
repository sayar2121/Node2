const app1 = require('./app1')
const arr =[2,4,5,7,8,1,3];
let result = arr.filter((item)=>{return item == 3})
let result1 = arr.filter((item)=>{return item >= 4})
console.warn(result)
console.warn(result1)