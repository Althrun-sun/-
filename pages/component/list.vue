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
						<button class="cu-btn round bg-green shadow" @click="clickupload">
							<text class="cuIcon-upload"></text> 提交</button>
					</view>
				</view>
				
			</view>

		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				datalist:[
					{
						date:"周日",
						unit:"广发1-3#	湖滨餐梯  龙飞12-10#	刘姐	航哥  "
					},
					{
						date:"周一",
						unit:"牡丹5栋	牡丹9栋	乐华园"
					},
					{
						date:"周二",
						unit:"端州医院1-4#	"
					},
					{
						date:"周三",
						unit:"丹霞苑9#，15#		桂雨苑8#	桂雨苑16#	"
					},
					{
						date:"周四",
						unit:"西湖新筑1-3栋				"
					},{
						date:"周五",
						unit:"李文	刘俊	郭晓仙	吴桂玲	"
					},{
						date:"周六",
						unit:"检察院1#	检查院2#	"
					},{
						date:"周日",
						unit:"值班"
					},{
						date:"周一",
						unit:"人行天桥	世道 5栋	时代6栋"
					},{
						date:"周二",
						unit:"林虎	石佩玲	"
					},{
						date:"周三",
						unit:"海逸花园1-8#		南洋集团1#"
					},{
						date:"周四",
						unit:"御城名轩A栋		御城名轩B栋"
					},{
						date:"周五",
						unit:"御城名轩C栋		御城名轩D栋"
					},{
						date:"周六",
						unit:"值班"
					},{
						date:"周日",
						unit:"广发1#	广发2#	广发3#	湖滨餐梯"
					},{
						date:"周一",
						unit:"牡丹5栋	牡丹9栋	乐华园"
					}
				],
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
			clickupload(){
				uni.navigateTo({
					url:'../dailysecurity/singledaysecure'
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
