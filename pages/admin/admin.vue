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
				
					<view class="cu-list menu" :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']">
						
						<view class="cu-item" :class="menuArrow?'arrow':''"   
						v-for="(item,index) in IDlist"
						:key="index"
						>
							<view class="content">
								<text class="cuIcon-btn text-green"></text>
								<text class="text-grey">{{item.name}}</text>
								<text class="text-grey" style="margin-left: 30rpx;">{{item.accout}}</text>
							</view>
							<view class="action">
								<button class="cu-btn round bg-green shadow" @click="clickchangeID(item.accout)">
									<text class="cuIcon-upload"></text> 修改</button>
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
		data() {
			return {
				funclist:[
					"新增账号","账号查看"
				],
				TabCur: 0,
				scrollLeft: 0,
				index: -1,
				IDlist:[
					{
						name:"孙福杰",
						accout:15521447381,
						psw:123,
					},
					{
						name:"黄宇勤",
						accout:1123123381,
						psw:123,
					}
				],
				
				
				modalName: null,
				textareaAValue: '',
				textareaBValue: ''
			};
		},
		methods: {
			clickchangeID(account){
				uni.navigateTo(
				{
					url:'./changeID'
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
