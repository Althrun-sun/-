//删除数据
// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
	env: cloud.DYNAMIC_CURRENT_ENV
})

// 云函数入口函数
exports.main = async (event, context) => {
	db = cloud.database().collection(event.databaseName)
	//flag代表用哪一种方式进行查找，1用name，2用id
	if (event.flag == 1) {
		db.where({
			name: event.name
		}).remove()
	} else if (event.flag == 2) {
		db.doc(event.id).remove()
	}

}
