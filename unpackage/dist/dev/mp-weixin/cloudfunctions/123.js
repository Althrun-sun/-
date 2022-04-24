// 云函数入口文件
const cloud = require('wx-server-sdk')
 
cloud.init()
 
// 云函数入口函数
exports.main = async (event, context) => {
  const { num1, num2 } = event
 
  return num1 + num2
}