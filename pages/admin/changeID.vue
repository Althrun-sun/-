<template>
	<view class="">
		<view class="cu-bar bg-white margin-top solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-orange"></text> 账号修改
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
				<view class="title">原账号</view>
				<!-- <input placeholder="请输入姓名" name="input"></input> -->
				<text class="text-grey" style="margin-left: 30rpx;">{{ex_name}}</text>
			</view>
			<!-- <view class="content">
				<text class="cuIcon-btn text-green"></text>
				<text class="text-grey">原账号</text>
				<text class="text-grey" style="margin-left: 30rpx;">{{IDlist[0].accout}}</text>
			</view> -->
			<view class="cu-form-group">
				<view class="title">姓名</view>
				<input v-model="db_name" class="inputbox" type="text" placeholder="请输入姓名" placeholder-class="placeclass"
					focus="true" />
				<!-- 	<input placeholder="请输入姓名" name="input" v-model="name"></input> -->
			</view>
			<view class="cu-form-group">
				<view class="title">账号</view>
				<input v-model="db_ac" class="inputbox" type="text" placeholder="请输入账号" placeholder-class="placeclass"
					focus="true" />
				<!-- <input placeholder="请输入账号" name="input" v-model="accout"></input> -->
			</view>
			<view class="cu-form-group">
				<view class="title">密码</view>
				<input v-model="db_psw" class="inputbox" type="text" placeholder="请输入账号" placeholder-class="placeclass"
					focus="true" />
				<!-- <input placeholder="请输入密码" name="input" v-model="psw"></input> -->
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">重新分派小组</view>
				<picker @change="PickerChange" :value="index" :range="picker">
					<view class="picker">
						{{db_group}}
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
			wx.cloud.callFunction({
					name: 'getData',
					data: {
						databaseName: 'group',
						order: 'name'
					}
				}).then(res => {
					console.log('管理员列表请求成功', res)
					console.log("res is" + res.data)
					let temp = res.result.data;
					let templist = []
					for (let item of temp) {
						templist.push(item.name)
					}
					this.picker = templist
				})
				.catch(err => {
					console.log('管理员列表请求失败', err)
				})

			uni.getStorage({
				key: "change_id",
				success: (res) => {
					this.db_id = res.data
					console.log("the id is" + this.db_id)
				}
			})
			uni.getStorage({
				key: "change_ac",
				success: (res) => {
					this.db_ac = res.data

					console.log("the ac is" + this.db_ac)
				}
			})
			uni.getStorage({
				key: "change_name",
				success: (res) => {
					this.db_name = res.data
					this.ex_name = res.data
					console.log("the ac is" + this.db_name)
				}

			})
			uni.getStorage({
				key: "change_psw",
				success: (res) => {
					this.db_psw = res.data
					console.log("the ac is" + this.db_psw)
				}
			})
			uni.getStorage({
				key: "change_group",
				success: (res) => {
					this.db_group = res.data
					console.log("the ac is" + this.db_group)
				}
			})

		},
		data() {
			return {
				groupchoose: "",
				picker: [],
				ex_name: "",
				db_id: "",
				db_ac: "",
				db_name: "",
				db_psw: "",
				db_group: "",
				funclist: [
					"新增账号", "账号查看"
				],
				TabCur: 0,
				scrollLeft: 0,
				index: -1,



				modalName: null,
				textareaAValue: '',
				textareaBValue: ''
			};
		},
		methods: {
			PickerChange(e) {
				this.index = e.detail.value
				this.db_group = this.picker[this.index]
				// console.log(this.groupchoose)
			},
			Update() {
				wx.cloud.callFunction({
						name: 'updateData',
						data: {
							databaseName: 'admin',
							account: this.db_ac,
							name: this.db_name,
							psw: this.db_psw,
							group: this.db_group,
							id: this.db_id
						}
					}).then(res => {
						console.log('更新请求成功', res)
					})
					.catch(err => {
						console.log('更新请求失败', err)
					})
				uni.navigateTo({
					url: './admin'
				})
			}


		}
	}
</script>

<style>
</style>
