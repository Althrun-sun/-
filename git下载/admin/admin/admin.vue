<template>
	<view class="">
		<view class="cu-bar bg-white margin-top solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-orange"></text> 新增账号/查看修改
			</view>
		</view>
		<view class="box">
			<view class="cu-bar btn-group">
				<button class="cu-btn bg-green shadow-blur round" @click="clickcreateID()">新建账号</button>
				<button class="cu-btn bg-blue shadow-blur round" @click="AddGroup()">新建小组</button>
			</view>
		</view>
		<!--弹窗-->
		<modal v-if="showPop" title="输入新小组名" confirm-text="确定" cancel-text="取消" @cancel="cancelPop"
			@confirm="confirmPop">
			<input type='text' placeholder="请输入密码" v-model="newgroupname" />
		</modal>
		<!-- 	<scroll-view scroll-x class="bg-white nav text-center">
			<view class="cu-item" :class="index==TabCur?'text-blue cur':''" 
			v-for="(item,index) in funclist" :key="index" @tap="tabSelect" :data-id="index">
				{{item}}
			</view>
		</scroll-view> -->

		<!-- 列表显示 -->
		<view>
			<form>
				<scroll-view :scroll-y="modalName==null" class="page" :class="modalName!=null?'show':''">
					<view class="cu-bar bg-white solid-bottom margin-top">
						<view class="action">
							<text class="cuIcon-title text-orange"></text> 账号列表
						</view>
						<view class="action">
							<!-- <button class="cu-btn bg-green shadow" @tap="showModal" data-target="menuModal">设置</button> -->
						</view>
					</view>
					<view v-for="(group,index) in grouplist" :key="index">
						<view class="cu-bar bg-white solid-bottom margin-top">
							<text class=" " style="position: absolute;left: 50rpx;size: 40rpx;font-weight: 600;"></text>
							{{group.name}}
							<view class="action">
								<button class="cu-btn round bg-green shadow" style="background-color: #A5673F;"
									@click="deletegroup(group.name)">
									<text></text> 删除</button>
							</view>
						</view>
						<view class="cu-list menu"
							:class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']">



							<view class="cu-item" :class="menuArrow?'arrow':''" v-for="(item,index) in IDlist"
								:key="index" v-if="item.group==group.name">
								<view class="content">
									<text class="cuIcon-btn text-green"></text>
									<text class="text-grey">{{item.name}}</text>
									<text class="text-grey" style="margin-left: 30rpx;">{{item.account}}</text>
								</view>
								<view class="action">
									<button class="cu-btn round bg-green shadow" style="background-color: #880000;"
										@click="clickdelete(item._id)">
										<text></text> 删除</button>
								</view>
								<view class="action">
									<button class="cu-btn round bg-green shadow"
										@click="clickchangeID(item._id,item.account,item.name,item.psw,item.group)">
										<text></text> 编辑</button>
								</view>
							</view>
						</view>
					</view>


					<!-- <view class="box">
			<view class="cu-bar btn-group">
				<button class="cu-btn bg-green shadow-blur round lg" @click="clickcreateID()">新建账号</button>
			</view>

		</view> -->

				</scroll-view>

			</form>
		</view>
	</view>
</template>
<script>
	export default {
		//初始化数据
		data() {
			return {
				groupIDlist: [],
				newgroupname: "",
				showPop: false, //弹窗
				grouplist: [],
				groupnow: "none",
				funclist: [
					"新增账号", "账号查看"
				],
				TabCur: 0,
				scrollLeft: 0,
				index: -1,
				IDlist: [],
				// IDlist:[

				// ],
				// [{
				// 	name:"孙福杰",
				// 	accout:15521447381,
				// 	psw:123,
				// },
				// {
				// 	name:"黄宇勤",
				// 	accout:1123123381,
				// 	psw:123,
				// }]


				modalName: null,
				textareaAValue: '',
				textareaBValue: ''
			};
		},
		onShow() {
			// 取组
			wx.cloud.callFunction({
					name: 'getData',
					data: {
						databaseName: 'group',
						order: 'name'
					}
				})
				.then(res => {
					this.grouplist = res.result.data
					console.log('分组结果', res.result.data)
				})
				.catch(err => {
					console.log('分组结果请求失败', err)
				})

			wx.cloud.callFunction({
					name: 'getData',
					data: {
						databaseName: 'admin',
						order: 'name'
					}
				})
				.then(res => {
					console.log('管理员列表请求成功', res)
					this.IDlist = res.result.data;
				})
				.catch(err => {
					console.log('管理员列表请求失败', err)
				})
		},

		methods: {
			//增加分组
			AddGroup() {
				wx.showModal({
					cancelColor: 'cancelColor',
					title: "新增分组",
					placeholderText: "请输入新增分组的名称",
					editable: true,
					success(res) {
						if (res.confirm == true) {
							wx.cloud.database().collection('group').add({
								data: {
									name: res.content
								}
							})
						}
						console.log('新增分组信息', res)
						uni.reLaunch({
							url: './admin'
						})
					}
				})

			},
			//删除分组
			deletegroup(name) {
				let that = this
				wx.showModal({
					cancelColor: 'cancelColor',
					title: "是否确定删除",
					content: "删除分组会删除对应员工，请确认所有员工已迁移到其他分组后再进行删除",
					success(res) {
						if (res.confirm == true) {
							console.log('点击确认删除分组', res)
							wx.cloud.callFunction({
									name: 'removeData',
									data: {
										databaseName: 'group',
										name: name,
										flag: parseInt(1)
									}
								})
								.then(res => {
									console.log(res);
								}).catch(err => {
									console.log(err);
								})
							uni.reLaunch({
								url: './admin'
							})
						} else if (res.cancel == true) {
							console.log('点击取消', res)
						}
					}
				})
			},
			clickcreateGroup() {
				this.showPop = !this.showPop;
			},
			//弹窗
			confirmPop() { //确认
				console.log('点击了确定')
				this.showPop = false
				wx.cloud.database().collection('group').add({
					// data 字段表示需新增的 JSON 数据
					data: {
						// _id: 'todo-identifiant-aleatoire', // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了

						name: this.newgroupname

					},
					success: function(res) {
						// res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
						console.log(res)
						uni.navigateTo({
							url: 'admin'
						})
					}
				})
			},
			cancelPop() { //取消
				console.log('点击了取消')
				this.showPop = false
			},
			// 删除
			clickdelete(id) {
				wx.showModal({
					cancelColor: 'cancelColor',
					title: "是否确定删除",
					content: "删除后数据不可恢复，您确定要删除该用户吗？",
					success(res) {
						if (res.confirm == true) {
							console.log('点击确认删除用户', res)
							wx.cloud.callFunction({
								name: 'removeData',
								data: {
									databaseName: 'admin',
									id: id,
									flag: parseInt(2)
								}
							}).then(res => {
								console.log(res);
							}).catch(err => {
								console.log(err);
							})
							uni.reLaunch({
								url: './admin'
							})
						} else if (res.cancel == true) {
							console.log('点击取消', res)
						}
					}
				})
			},
			clickchangeID(id, ac, name_db, psw_db, group) {
				uni.navigateTo({
					url: './changeID'
				})
				uni.setStorage({
					key: "change_id",
					data: id
				})
				uni.setStorage({
					key: "change_ac",
					data: ac
				})
				uni.setStorage({
					key: "change_name",
					data: name_db
				})
				uni.setStorage({
					key: "change_psw",
					data: psw_db
				})
				uni.setStorage({
					key: "change_group",
					data: group
				})

			},
			clickcreateID() {
				uni.navigateTo({
					url: './createID'
				})
			},
			PickerChange(e) {
				this.index = e.detail.value
			},


			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
				console.log(this.TabCur)
			},
			textareaAInput(e) {
				this.textareaAValue = e.detail.value
			},
		}
	}
</script>

<style>
</style>
