<template >
	<view>
		<scroll-view :scroll-y="modalName==null" class="page" :class="modalName!=null?'show':''">
			<view class="cu-bar bg-white solid-bottom margin-top">
				<view class="action">
					<text class="cuIcon-title text-orange"></text> 维修整改
				</view>
				<view class="action">
					<!-- <button class="cu-btn bg-green shadow" @tap="showModal" data-target="menuModal">设置</button> -->
				</view>
			</view>
		
			<view class="cu-list menu" :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']">
				
				<view class="cu-item" :class="menuArrow?'arrow':''"   
				v-for="(item,index) in fixlist"
				:key="index"
				>
					<view class="content">
						<text class="cuIcon-btn text-green"></text>
						<text class="text-grey" style="font-size: 35rpx;">{{item.date}}</text>
						<text class="text-grey" style="margin-left: 30rpx;font-size: 30rpx;">地点：{{item.locate}} </text>
						<text class="text-grey" style="margin-left: 30rpx;display: block;font-size: 30rpx;">工作内容：{{item.content}}</text>
					</view>
					<view class="action">
						<button class="cu-btn round bg-green shadow" @click="clickuploadfix(item.date)">
							<text class="cuIcon-upload"></text> 提交</button>
					</view>
				</view>
				
			</view>
		<!-- 	<view class="cu-list menu" :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']">
				
				<view class="cu-item" :class="menuArrow?'arrow':''"   
				
				>
					<view class="content">
						<text class="cuIcon-btn text-green"></text>
						<text class="text-grey" style="color: red;">{{"逾期"}}</text>
						<text class="text-grey" style="margin-left: 30rpx;color: red;">{{faillist[0].name}}</text>
					</view>
					<view class="action">
						<button class="cu-btn round bg-green shadow" style="background-color: red;" >
							<text class="cuIcon-upload"></text> 补交</button>
					</view>
				</view>
				
			</view> -->
			<!-- <view class="content">
				<text class="cuIcon-btn text-green " style="color: #E43D33;"></text>
			
				<text class="text-grey" style="margin-left: 30rpx;color:#DD514C">逾期：{{faillist[0].name}}</text>
			</view>
			<view class="action">
				<button class="cu-btn round bg-green shadow" style="background-color: #E43D33;" >
					<text class="cuIcon-upload"></text> 补交</button>
			</view> -->

		</scroll-view>
	</view>
</template>

<script>
	
	// a
	export default {
		data() {
			return {
				fixlist:[
					{
						date:"2022/3/28",
						people:"孙月",
						locate:"广发银行1号梯",
						content:"整改井道护板"
					},
					{
						date:"2022/4/2",
						people:"李额",
						locate:"乐华园13",
						content:"监控失效"
					},
					{
						date:"2022/4/10",
						people:"许渗水",
						locate:"端州医院",
						content:"年审整改"
					}
				],
				faillist:[{
					No:1,
					name:"湖滨餐梯"
				}],
				cuIconList: [{
					cuIcon: 'cardboardfill',
					color: 'red',
					badge: 120,
					name: 'VR'
				}, {
					cuIcon: 'recordfill',
					color: 'orange',
					badge: 1,
					name: '录像'
				}, {
					cuIcon: 'picfill',
					color: 'yellow',
					badge: 0,
					name: '图像'
				}, {
					cuIcon: 'noticefill',
					color: 'olive',
					badge: 22,
					name: '通知'
				}, {
					cuIcon: 'upstagefill',
					color: 'cyan',
					badge: 0,
					name: '排行榜'
				}, {
					cuIcon: 'clothesfill',
					color: 'blue',
					badge: 0,
					name: '皮肤'
				}, {
					cuIcon: 'discoverfill',
					color: 'purple',
					badge: 0,
					name: '发现'
				}, {
					cuIcon: 'questionfill',
					color: 'mauve',
					badge: 0,
					name: '帮助'
				}, {
					cuIcon: 'commandfill',
					color: 'purple',
					badge: 0,
					name: '问答'
				}, {
					cuIcon: 'brandfill',
					color: 'mauve',
					badge: 0,
					name: '版权'
				}],
				modalName: null,
				gridCol: 3,
				gridBorder: false,
				menuBorder: false,
				menuArrow: false,
				menuCard: false,
				skin: false,
				listTouchStart: 0,
				listTouchDirection: null,
			};
		},
		methods: {
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			Gridchange(e) {
				this.gridCol = e.detail.value
			},
			Gridswitch(e) {
				this.gridBorder = e.detail.value
			},
			MenuBorder(e) {
				this.menuBorder = e.detail.value
			},
			MenuArrow(e) {
				this.menuArrow = e.detail.value
			},
			MenuCard(e) {
				this.menuCard = e.detail.value
			},
			SwitchSex(e) {
				this.skin = e.detail.value
			},

			// ListTouch触摸开始
			ListTouchStart(e) {
				this.listTouchStart = e.touches[0].pageX
			},

			// ListTouch计算方向
			ListTouchMove(e) {
				this.listTouchDirection = e.touches[0].pageX - this.listTouchStart > 0 ? 'right' : 'left'
			},

			// ListTouch计算滚动
			ListTouchEnd(e) {
				if (this.listTouchDirection == 'left') {
					this.modalName = e.currentTarget.dataset.target
				} else {
					this.modalName = null
				}
				this.listTouchDirection = null
			},
			clickuploadfix(todate){
				uni.navigateTo({
					url:'./singlefix'
				}),
				uni.setStorage({
					key:"fixday",
					data:todate
				})
			}
		}
	}
</script>

<style>
	.page {
		height: 100Vh;
		width: 100vw;
	}

	.page.show {
		overflow: hidden;
	}

	.switch-sex::after {
		content: "\e716";
	}

	.switch-sex::before {
		content: "\e7a9";
	}

	.switch-music::after {
		content: "\e66a";
	}

	.switch-music::before {
		content: "\e6db";
	}
</style>
