<template >
	<view>
		<scroll-view :scroll-y="modalName==null" class="page" :class="modalName!=null?'show':''">
			<view class="cu-bar bg-white solid-bottom margin-top">
				<view class="action">
					<text class="cuIcon-title text-orange"></text> 维保安排
				</view>
				<view class="action">
					<!-- <button class="cu-btn bg-green shadow" @tap="showModal" data-target="menuModal">设置</button> -->
				</view>
			</view>
		
			<view class="cu-list menu" :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']">
				
				<view class="cu-item" :class="menuArrow?'arrow':''"   
				v-for="(item,index) in datalist"
				:key="index"
				>
					<view class="content">
						<text class="cuIcon-btn text-green"></text>
						<text class="text-grey">{{item.date}}</text>
						<text class="text-grey" style="margin-left: 30rpx;">{{item.unit}}</text>
					</view>
					<view class="action">
						<button class="cu-btn round bg-green shadow" @click="clickupload(item.date)">
							<text class="cuIcon-upload"></text> 提交</button>
					</view>
				</view>
				
			</view>
			<view class="cu-list menu" :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']">
				
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
				
			</view>
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
				datalist:[
					{
						date:"4月10 周日",
						unit:"广发1-3#	湖滨餐梯  龙飞12-10#	刘姐	航哥  "
					},
					{
						date:"4月11 周一",
						unit:"牡丹5栋	牡丹9栋	乐华园"
					},
					{
						date:"4月12 周二",
						unit:"端州医院1-4#	"
					},
					{
						date:"4月12 周三",
						unit:"丹霞苑9#，15#	桂雨苑8#	桂雨苑16#	"
					},
					{
						date:"4月13 周四",
						unit:"西湖新筑1-3栋				"
					},{
						date:"4月14 周五",
						unit:"李文	刘俊	郭晓仙	吴桂玲	"
					},{
						date:"4月15 周六",
						unit:"检察院1#	检查院2#	"
					},{
						date:"4月16 周日",
						unit:"值班"
					},{
						date:"4月17 周一",
						unit:"人行天桥	世道 5栋	时代6栋"
					},{
						date:"4月18 周二",
						unit:"林虎	石佩玲	"
					},{
						date:"4月19 周三",
						unit:"海逸花园1-8#		南洋集团1#"
					},{
						date:"4月20 周四",
						unit:"御城名轩A栋		御城名轩B栋"
					},{
						date:"4月21 周五",
						unit:"御城名轩C栋		御城名轩D栋"
					},{
						date:"4月22 周六",
						unit:"值班"
					},{
						date:"4月23 周日",
						unit:"广发1#	广发2#	广发3#	湖滨餐梯"
					},{
						date:"4月24 周一",
						unit:"牡丹5栋	牡丹9栋	乐华园"
					}
				],
				faillist:[{
					No:1,
					name:"湖滨餐梯"
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
			clickupload(date){
				uni.navigateTo({
					url:'../dailysecurity/singledaysecure'
				}),
				uni.setStorage({
					key:"securityday",
					data:date
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
