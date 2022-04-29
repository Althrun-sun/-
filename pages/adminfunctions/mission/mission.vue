<template>
	<view class="">
		<view class="cu-bar bg-white margin-top solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-orange"></text> 任务管理
			</view>
		</view>
		<view class="box">
			<view class="cu-bar btn-group">
				<button class="cu-btn bg-green shadow-blur round" @click="createmission()">发布任务</button>
			</view>
		</view>
		

		<!-- 列表显示 -->
		<view>
			<form>
				<scroll-view :scroll-y="modalName==null" class="page" :class="modalName!=null?'show':''">
					<view class="cu-bar bg-white solid-bottom margin-top">
						<view class="action">
							<text class="cuIcon-title text-orange"></text> 已发布任务
						</view>
						<view class="action">
							<!-- <button class="cu-btn bg-green shadow" @tap="showModal" data-target="menuModal">设置</button> -->
						</view>
					</view>
			
						
						<view class="cu-list menu"
							:class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']">
							<view class="cu-item" :class="menuArrow?'arrow':''" v-for="(item,index) in missionlist"
								:key="index">
								<view class="content">
									<text class="cuIcon-btn text-green"></text>
									<text class="text-grey">{{item.date}}</text>
									<text class="text-grey" style="margin-left: 10rpx;">{{item.type}}</text>
									<text class="text-grey" style="margin-left: 30rpx;">{{item.title}}</text>
								</view>
								<view class="action">
									<button class="cu-btn round bg-green shadow" style="background-color: #880000;"
										@click="deletemission(item._id)">
										<text class=""></text> 删除</button>
								</view>
								<view class="action">
									<button class="cu-btn round bg-green shadow"
										@click="changemission(item._id,item.title,item.content)">
										<text class=""></text> 编辑</button>
								</view>
							</view>
						</view>
		</scroll-view>

		</form>
	</view>
	</view>
</template>
<script>
	export default {
		onShow() {
			// 取组
			wx.cloud.database().collection('mission').get()
				.then(res => {
					console.log('管理员列表请求成功', res)
					console.log("res is" + res.data)
					let temp = res.data;
					this.missionlist=temp
					console.log("templist"+ this.missionlist)	
				})
				.catch(err => {
					console.log('管理员列表请求失败', err)
				})
			console.log("getlist")
		
		},
		data() {
			return {
				missionlist:[],
			
				textareaAValue: '',
				textareaBValue: ''
			};
		},
		methods: 
		{
			createmission(){
				uni.navigateTo({
					url:'newmission'
				})
			},
			deletemission(id){
				
			},
			changemission(id,title,content){
				uni.setStorage({
					key:"changemissionTile",
					data:title
				});
				uni.setStorage({
					key:"changemissionID",
					data:id
				});
				uni.setStorage({
					key:"changemissionContent",
					data:content
				});
				uni.navigateTo({
					url:'./changemission'
				});
				
			}
		}
	}
</script>

<style>
</style>
