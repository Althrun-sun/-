// 更新值入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 更新值云函数入口函数
exports.main = async (event, context) => {

	return cloud.database().collection(event.databaseName).doc(event.id)
	.update({
		data:{
			name:event.name,
			psw:event.psw,
			group:event.group,
			account:this.account
		}
	})
		
}
