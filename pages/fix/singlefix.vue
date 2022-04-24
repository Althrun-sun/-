<template>
	<view>
		<scroll-view :scroll-y="modalName==null" class="page" :class="modalName!=null?'show':''">
			<view class="cu-bar bg-white solid-bottom margin-top">
				<view class="action">
					<text class="cuIcon-title text-orange"></text> {{fixtoday}} 整改安排
				</view>
				<view class="action">
					<!-- <button class="cu-btn bg-green shadow" @tap="showModal" data-target="menuModal">设置</button> -->
				</view>
			</view>

			<view class="cu-list menu" :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']">

				<view class="cu-item" :class="menuArrow?'arrow':''"
				v-for="(item,index) in fixlist" :key="index"
				v-if="item.date==fixtoday"
					>
					
						<view class="content" >
							<text class="cuIcon-btn text-green"></text>
							<text class="text-grey display-font " style="margin-left: 30rpx;">期限: {{item.ddl}}</text>
							<text class="text-grey block-display display-font" style="margin-left: 30rpx;">发布人: {{item.people}}</text>
							<text class="text-grey block-display display-font" style="margin-left: 30rpx;">地点: {{item.locate}}</text>
							<text class="text-grey block-display display-font" style="margin-left: 30rpx;">内容: {{item.content}}</text>
							<text class="text-grey block-display display-font" style="margin-left: 30rpx;">备注要求: {{item.content}}</text>
						</view>

						
						<view class="action">
							<button class="cu-btn round bg-green shadow" @click="clickupload()">
								<text class="cuIcon-upload"></text> 上传
							</button>
						</view>
						
					</view>
					


				

			</view>

		</scroll-view>
	</view>
</template>

<script>
	export default {
		
		onShow() {
			console.log("show")
			
			uni.getStorage({
					key: "fixday",
					success: (res) => {
						console.log(res.data)
						this.fixtoday = res.data
						console.log("thistoday"+this.fixtoday)
						
					}
				});
				
				
			
				
		},
		data() {
			return {

				check: 0,
				fixtoday: "",
				singledaylist: [

				],
				statueslist:[
					1,0,1,0,1,0,1,0,1,0,1,1,0,0,1
				],
				fixlist:[
					{
						date:"2022/3/28",
						people:"孙月",
						locate:"广发银行1号梯",
						content:"整改井道护板",
						ddl:"4-30止"
					},
					{
						date:"2022/4/2",
						people:"李额",
						locate:"乐华园13",
						content:"监控失效",
						ddl:"无"
					},
					{
						date:"2022/4/10",
						people:"许渗水",
						locate:"端州医院",
						content:"年审整改",
						ddl:"4-20日止"
					}
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
			clickupload() {
				uni.navigateTo({
					url: './fix-upload'
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
