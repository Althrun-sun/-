<template>
	<view class="">
		<view class="cu-bar bg-white margin-top solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-orange"></text> 新增账号/查看修改
			</view>
		</view>
	<!-- 	<scroll-view scroll-x class="bg-white nav text-center">
			<view class="cu-item" :class="index==TabCur?'text-blue cur':''" 
			v-for="(item,index) in funclist" :key="index" @tap="tabSelect" :data-id="index">
				{{item}}
			</view>
		</scroll-view> -->
		
		<!-- 列表显示 -->
		<view  >
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
				<view
				v-for="(group,index) in grouplist"
				:key="index">
				<view class="cu-bar bg-white solid-bottom margin-top">
					<text class=" " style="position: absolute;left: 50rpx;size: 40rpx;font-weight: 600;" ></text> {{group}}
				</view>
					<view class="cu-list menu" :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']">
					
							
					
							<view class="cu-item" :class="menuArrow?'arrow':''"
							v-for="(item,index) in IDlist"
							:key="index"
							v-if="item.group==group"
							>
								<view class="content">
									<text class="cuIcon-btn text-green"></text>
									<text class="text-grey">{{item.name}}</text>
									<text class="text-grey" style="margin-left: 30rpx;">{{item.account}}</text>
								</view>
								<view class="action">
									<button class="cu-btn round bg-green shadow" style="background-color: #880000;" @click="clickdelete(item._id)">
										<text class="cuIcon-upload"></text> 删除</button>
								</view>
								<view class="action">
									<button class="cu-btn round bg-green shadow" @click="clickchangeID(item._id,item.account,item.name,item.psw,item.group)">
										<text class="cuIcon-upload"></text> 编辑</button>
								</view>
							</view>
						</view>
						</view>
						
					</view>
					<view class="box">
						<view class="cu-bar btn-group">
							<button class="cu-btn bg-green shadow-blur round lg" @click="clickcreateID()">新建账号</button>
						</view>
						
					</view>
				
				</scroll-view>
				
			</form>
		</view>
	</view>
</template>
<script>
	export default {
		onShow(){
			// 取组
			wx.cloud.database().collection('group').get()
				.then(res => {
					console.log('管理员列表请求成功', res)
					 console.log("res is"+ res.data)
					 let temp =res.data;
					 for(let item of temp)
					 {
						  this.grouplist.push(item.name)
					 }
					
					 
				})
				.catch(err => {
					console.log('管理员列表请求失败', err)
				})
			console.log("getlist")
			wx.cloud.database().collection('admin').get()
				.then(res => {
					console.log('管理员列表请求成功', res)
					 console.log(res.data)
					 let temp =res.data;
					 this.IDlist=temp;
					 // console.log("IDlist now is" + this.IDlist)
				})
				.catch(err => {
					console.log('管理员列表请求失败', err)
				})
			console.log("launched")
		},
		data() {
			return {
				grouplist:[],
				groupnow:"none",
				funclist:[
					"新增账号","账号查看"
				],
				TabCur: 0,
				scrollLeft: 0,
				index: -1,
				IDlist:[],
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
		methods: {
			// 删除
			clickdelete(id)
			{
				
			},
			clickchangeID(id,ac,name_db,psw_db,group){
				uni.navigateTo(
				{
					url:'./changeID'
				})
				uni.setStorage({
					key:"change_id",
					data:id
				})
				uni.setStorage({
					key:"change_ac",
					data:ac
				})
				uni.setStorage({
					key:"change_name",
					data:name_db
				})
				uni.setStorage({
					key:"change_psw",
					data:psw_db
				})
				uni.setStorage({
					key:"change_group",
					data:group
				})
			
			},
			clickcreateID(){
				uni.navigateTo(
				{
					url:'./createID'
				}
				)
			},
			PickerChange(e) {
				this.index = e.detail.value
			},
			MultiChange(e) {
				this.multiIndex = e.detail.value
			},
			
			TimeChange(e) {
				this.time = e.detail.value
			},
			DateChange(e) {
				this.date = e.detail.value
			},
			RegionChange(e) {
				this.region = e.detail.value
			},
			SwitchA(e) {
				this.switchA = e.detail.value
			},
			SwitchB(e) {
				this.switchB = e.detail.value
			},
			SwitchC(e) {
				this.switchC = e.detail.value
			},
			SwitchD(e) {
				this.switchD = e.detail.value
			},
			RadioChange(e) {
				this.radio = e.detail.value
			},
			CheckboxChange(e) {
				var items = this.checkbox,
					values = e.detail.value;
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					items[i].checked = false;
					for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
						if (items[i].value == values[j]) {
							items[i].checked = true;
							break
						}
					}
				}
			},
		
			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
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
