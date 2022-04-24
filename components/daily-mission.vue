<template>
	<view style="">
		<view style="width: 100%;height: 700rpx;border-radius: 20rpx;">
			<view style="width: 100%;height: 50rpx;padding-top: 20rpx;padding-left: 20rpx;font-size: 40rpx;	">
				任务公告栏	
			</view>
			<view style="height: 500rpx;width: 95%;margin-left: 20rpx;">
				<scroll-view scroll-y="true" style="height: 500rpx;">
					<!-- 显示超期 -->
					<view v-for="(item,index) in massion"
					style="height: 120rpx;width: 100%;margin-bottom: 20rpx;border-bottom: 3rpx #C0C0C0 solid;position: relative;"
					:key="'k1'+index" v-if="item.statues=='超 期'">
						<view  class="fail"  >
							状态：{{item.statues}}
						</view>
						<view style="margin-top: 10rpx;">
							负责人：{{item.people}}
						</view>
						<view style="width: 500rpx;height: 50rpx; position: absolute;left: 250rpx;bottom: 15rpx; ">
							点击查看任务
						</view>
						<view style="width: 500rpx;height: 50rpx;position: absolute;left: 250rpx;top: 5rpx;">
							截止时间：{{item.date}}
						</view>
					</view>
					<!-- 显示未完成 -->
					<view v-for="(item,index) in massion"
					style="height: 120rpx;width: 100%;margin-bottom: 20rpx;border-bottom: 3rpx #C0C0C0 solid;position: relative;"
					:key="'k'+index" v-if="item.statues=='未完成'">
						<view :class= "[item.statues=='完成'?  'statues-finished' : 'statues-unfinished'] "   >
							状态：{{item.statues}}
						</view>
						<view style="margin-top: 10rpx;">
							负责人：{{item.people}}
						</view>
						<view style="width: 500rpx;height: 50rpx; position: absolute;left: 250rpx;bottom: 15rpx; ">
							点击查看任务
						</view>
						<view style="width: 500rpx;height: 50rpx;position: absolute;left: 250rpx;top: 5rpx;">
							截止时间：{{item.date}}
						</view>
					</view>
					<!-- 显示完成 -->
					<view v-for="(item,index) in massion"
					style="height: 120rpx;width: 100%;margin-bottom: 20rpx;border-bottom: 3rpx #C0C0C0 solid;position: relative;"
					:key="'k'+index" v-if="item.statues=='完成'">
						<view :class= "[item.statues=='完成'?  'statues-finished' : 'statues-unfinished'] "   >
							状态：{{item.statues}}
						</view>
						<view style="margin-top: 10rpx;">
							负责人：{{item.people}}
						</view>
						<view style="width: 500rpx;height: 50rpx; position: absolute;left: 250rpx;bottom: 15rpx; ">
							点击查看任务
						</view>
						<view style="width: 500rpx;height: 50rpx;position: absolute;left: 250rpx;top: 5rpx;">
							截止时间：{{item.date}}
						</view>
					</view>
				</scroll-view>
			</view>
				
			
			
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				massion : [
					{
					title:"电梯1号需要修理",
					loacation:"百花园1号小区22栋4号梯",
					people:"啊标",
					statues:"未完成",
					date:"11月22日"
				},
				{
					title:"电梯2号需要修理",
					loacation:"百花园1号小区22栋4号梯",
					people:"孙福平",
					statues:"完成",
					date:"11月12日"
				},
				{
					title:"电梯1号需要修理",
					loacation:"百花园1号小区22栋4号梯",
					people:"啊标",
					statues:"超 期",
					date:"11月22日"
				},
				{
					title:"电梯1号需要修理",
					loacation:"百花园1号小区22栋4号梯",
					people:"啊标",
					statues:"未完成",
					date:"11月22日"
				},
				{
					title:"电梯1号需要修理",
					loacation:"百花园1号小区22栋4号梯",
					people:"啊标",
					statues:"未完成",
					date:"11月22日"
				},
				{
					title:"电梯1号需要修理",
					loacation:"百花园1号小区22栋4号梯",
					people:"啊标",
					statues:"未完成",
					date:"11月22日"
				}
				],
			}
		}
	}
</script>

<style>
	.statues-unfinished{
		border: 3rpx  #E43D33 	solid;
		border-radius: 10rpx;
		width: 180rpx;
		color: #E43D33;
	}
	.statues-finished{
		border: 3rpx  #18BC37 solid;
		border-radius: 10rpx;
		width: 150rpx;
		color:#18BC37 ;
	}
		
	.fail{
		border: 6rpx  #E43D33 	solid;
		border-radius: 10rpx;
		width: 160rpx;
		color: #E43D33;
		font-weight: 600;
	}
</style>

