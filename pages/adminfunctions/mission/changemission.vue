<template>
	<view class="">
		<view class="cu-bar bg-white margin-top solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-orange"></text> 任务信息修改
			</view>
		</view>
		<!-- 	<scroll-view scroll-x class="bg-white nav text-center">
			<view class="cu-item" :class="index==TabCur?'text-blue cur':''" 
			v-for="(item,index) in funclist" :key="index" @tap="tabSelect" :data-id="index">
				{{item}}
			</view>
		</scroll-view> -->
		<!-- 新增品牌 -->
		<view>
			<view class="cu-form-group">
				<view class="title">原任务标题</view>
				<!-- <input placeholder="请输入姓名" name="input"></input> -->
				<text class="text-grey" style="margin-left: 30rpx;">{{missionTitle}}</text>
			</view>
			<!-- <view class="content">
				<text class="cuIcon-btn text-green"></text>
				<text class="text-grey">原账号</text>
				<text class="text-grey" style="margin-left: 30rpx;">{{IDlist[0].accout}}</text>
			</view> -->
			<view class="cu-form-group">
				<view class="title">标题</view>
				<input v-model="title" class="inputbox" type="text" placeholder="请输入标题" placeholder-class="placeclass"
					focus="true" />
				<!-- 	<input placeholder="请输入姓名" name="input" v-model="name"></input> -->
			</view>
			<view class="cu-form-group margin-top">
				<textarea maxlength="-1" :disabled="modalName!=null" @input="textareaAInput" placeholder="任务内容" v-model="content"></textarea>
			</view>
		
			
			<view class="cu-form-group margin-top">
				<view class="title">任务类别</view>
				<picker @change="PickerChange" :value="index" :range="picker">
					<view class="picker">
						{{index>-1?picker[index]:'请选择任务类型'}}
					</view>
				</picker>
			</view>
			<view class="box">
				<view class="cu-bar btn-group">
					<button class="cu-btn bg-green shadow-blur round lg" @click="Update()">修改</button>
				</view>
			</view>
		</view>

	</view>
	</view>
</template>
<script>
	export default {
		onShow() {
			// 云函数
			// wx.cloud.callFunction({
			// 		name: 'getData',
			// 		data: {
			// 			databaseName: 'group',
			// 			order: 'name'
			// 		}
			// 	}).then(res => {
			// 		console.log('管理员列表请求成功', res)
			// 		console.log("res is" + res.data)
			// 		let temp = res.result.data;
			// 		let templist = []
			// 		for (let item of temp) {
			// 			templist.push(item.name)
			// 		}
			// 		this.picker = templist
			// 	})
			// 	.catch(err => {
			// 		console.log('管理员列表请求失败', err)
			// 	})
		
			
			uni.getStorage({
				key: "changemissionID",
				success: (res) => {
					this.missionID = res.data
					console.log("the id is" + this.missionID)
				}
			})
			uni.getStorage({
				key: "changemissionTile",
				success: (res) => {
					this.missionTitle = res.data
					this.title=this.missionTitle
					console.log("the title is" + this.missionTitle)
				}
			})
			uni.getStorage({
				key: "changemissionContent",
				success: (res) => {
					this.content = res.data
					console.log("the title is" + this.content)
				}
			})
			

		},
		data() {
			return {
				missionID:"",
				missionTitle:"",
				title:"",
				date:"",
				content:"",
				type:"",
				picker: ["行政通知","维修整改","年审整改"],
				index: -1,
				modalName: null,
				
			};
		},
		methods: {
			textareaAInput(e) {
				this.content = e.detail.value
			},
			PickerChange(e) {
				this.index = e.detail.value
				this.type= this.picker[this.index]
				// console.log(this.groupchoose)
			},
			// 云函数
			// Update() {
			// 	wx.cloud.callFunction({
			// 			name: 'updateData',
			// 			data: {
			// 				databaseName: 'admin',
			// 				account: this.db_ac,
			// 				name: this.db_name,
			// 				psw: this.db_psw,
			// 				group: this.db_group,
			// 				id: this.db_id
			// 			}
			// 		}).then(res => {
			// 			console.log('更新请求成功', res)
			// 		})
			// 		.catch(err => {
			// 			console.log('更新请求失败', err)
			// 		})
			// 	uni.navigateTo({
			// 		url: './admin'
			// 	})
			// }
			
			// 调试函数
			Update(){
				var myDate = new Date();
				myDate.getDate();        //获取当前日(1-31)
				var tMonth = myDate.getMonth();
				var today =myDate.getDate()
				this.date= (tMonth+1) +"月" +(today)+"日"
					wx.cloud.database().collection('mission').doc(this.missionID).update({
					  		data:{
								title:this.title,
								content:this.content,
								date:this.date,
								type:this.type
							}
					   	}).then(res=>{
					    	console.log(res)
							uni.navigateTo({
								url:'mission'
							})
					   	})
				
				
					
				
			}

		}
	}
</script>

<style>
</style>
