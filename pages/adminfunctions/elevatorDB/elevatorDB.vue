<template>
	<view class="">
		<view class="cu-bar bg-white margin-top solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-orange"></text> 新增电梯/查看修改
			</view>
		</view>
		<view class="box">
			<view class="cu-bar btn-group">
				<button class="cu-btn bg-green shadow-blur round" @click="createlift()">新增电梯信息</button>
			</view>
		</view>
		<!--弹窗-->	
				<modal v-if="showPop" title="输入新小组名" confirm-text="确定" cancel-text="取消" @cancel="cancelPop" @confirm="confirmPop"> 
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
							<text class="cuIcon-title text-orange"></text> 电梯目录
						</view>
						<view class="action">
							<!-- <button class="cu-btn bg-green shadow" @tap="showModal" data-target="menuModal">设置</button> -->
						</view>
					</view>
			
						
						<view class="cu-list menu"
							:class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']">
							<view class="cu-item" :class="menuArrow?'arrow':''" v-for="(item,index) in liftlist"
								:key="index" >
								<view class="content">
									<text class="cuIcon-btn text-green"></text>
									<text class="text-grey">{{item.unit_name}}</text>
									<text class="text-grey" style="margin-left: 30rpx;">{{item.credit_code}}</text>
								</view>
								<view class="action">
									<button class="cu-btn round bg-green shadow" style="background-color: #880000;"
										@click="deletelift(item._id)">
										<text class=""></text> 删除</button>
								</view>
								<view class="action">
									<button class="cu-btn round bg-green shadow"
										@click="changelift(item._id)">
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
			wx.cloud.database().collection('lift').get()
				.then(res => {
					console.log('管理员列表请求成功', res)
					console.log("res is" + res.data)
					let temp = res.data;
					let templist=[];
					
					for(let item of temp)
					 {
						templist.push(item)
					 }
					this.liftlist=templist
					console.log("templist"+ this.liftlist)	
				})
				.catch(err => {
					console.log('管理员列表请求失败', err)
				})
			console.log("getlist")
		
		},
		data() {
			return {
				liftlist:[],
				newgroupname:"",
				showPop:false, //弹窗
				grouplist: [],
				groupnow: "none",
				funclist: [
					"新增账号", "账号查看"
				],
				TabCur: 0,
				scrollLeft: 0,
				index: -1,
				IDlist: [],
				modalName: null,
				textareaAValue: '',
				textareaBValue: ''
			};
		},
		methods: 
		{
			createlift(){
				uni.navigateTo({
					url:'./newlift'
				})
			},
			changelift(id){
				console.log(id)
				uni.navigateTo({
					url:'./changelift'
				})
				uni.setStorage({
					key:'changeliftID',
					data:id
				})
				console.log("电梯修改id存储为"+id)
			},
			deletelift(id){
				
			}
		}
	}
</script>

<style>
</style>
