//添加数据
// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
    env: cloud.DYNAMIC_CURRENT_ENV
  })

// 云函数入口函数
exports.main = async (event, context) => {
    cloud.database().collection(event.databaseName)
    	.add({
    		data: {
    			name: event.name,
    			account: parseInt(event.account),
    			psw: parseInt(event.psw),
				group:event.group
    		}
    	})
}