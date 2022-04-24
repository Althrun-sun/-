<template>
	<view>
		<scroll-view :scroll-y="modalName==null" class="page" :class="modalName!=null?'show':''">
			<view class="cu-bar bg-white solid-bottom margin-top">
				<view class="action">
					<text class="cuIcon-title text-orange"></text> {{"技术资料"}} 
				</view>
				<view class="action">
					<!-- <button class="cu-btn bg-green shadow" @tap="showModal" data-target="menuModal">设置</button> -->
				</view>
			</view>

			<view class="cu-list menu" :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']" style="margin-bottom: 40rpx;">
				<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content" >
							<text class="cuIcon-btn text-green"></text>
							<text class="text-grey display-font " style="margin-left: 30rpx;font-size: 35rpx;">品牌: </text>
							
						</view>
						<view class="action">
							<button class="cu-btn round bg-green shadow" @click="clickuploadbrand()">
								<text class="cuIcon-upload"></text> 添加品牌
							</button>
						</view>
				</view>
			</view>
			<view class="nav-list" >
				<navigator hover-class="none" :url="'/pages/basics/' + item.name" class="nav-li" navigateTo :class="'bg-'+item.color"
				 :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]"
				 
				  v-for="(item,index) in elements" :key="index"
				   @click="gotobox(item.tourl)"
				  >
					<view class="nav-title">{{item.title}}</view>
					<view class="nav-name">{{item.name}}</view>
					<!-- <text :class="'cuIcon-' + item.cuIcon"></text> -->
				</navigator >
			</view>
			<!-- <view class="cu-tabbar-height"></view> -->
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-title text-green"></text>
					<text>上传/下载技术文档</text>
				</view>
			</view>
			<view class="box">
				
			
				<view class="cu-bar btn-group">
					<button class="cu-btn bg-green shadow-blur round">上传</button>
					<button class="cu-btn bg-blue shadow-blur round">下载</button>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		
		onShow() {
		
				
			
				
		},
		data() {
			return {
				elements: [{
						title: '西子',
						name: 'xizi',
						color: 'cyan',
						cuIcon: 'newsfill',
						tourl:"../dailysecurity/dailysecurity"
					},
					{
						title: '三菱',
						name: 'sanling',
						color: 'blue',
						cuIcon: 'colorlens',
						tourl:"../fix/fix"
					},
					{
						title: '日立',
						name: 'rili',
						color: 'purple',
						cuIcon: 'font',
						tourl:"../document/document"
					},
					{
						title: '通力',
						name: 'tongli',
						color: 'mauve',
						cuIcon: 'cuIcon'
					},
					{
						title: '富士',
						name: 'fushi',
						color: 'pink',
						cuIcon: 'btn'
					},
					{
						title: '迅达',
						name: 'xunda',
						color: 'brown',
						cuIcon: 'tagfill'
					},	
				],
				
				
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
			clickuploadbrand() {
				uni.navigateTo({
					url: './inputbrand'
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
	.block-display{
		display: block;
	}
	.display-font{
		font-size: 30rpx;
	}
</style>
