<template>
	<view style="">
		<view style="width: 100%;height: 700rpx;border-radius: 20rpx;">
			<view style="width: 100%;height: 50rpx;padding-top: 20rpx;padding-left: 20rpx;font-size: 40rpx;	margin-bottom: 20rpx;">
				工作任务发布	
			</view>
			
			<view style="height: 600rpx;width: 95%;margin-left: 20rpx;">
				<scroll-view scroll-y="true" style="height: 600rpx;">
					<!-- 紧急任务通知 -->
					<view v-for="(item,index) in massion"
					style="height: 180rpx;width: 100%;margin-bottom: 20rpx;border-bottom: 3rpx #C0C0C0 solid;position: relative;"
					:key="'urgen'+index" v-if="item.urgen=='紧急'">
						<view  class="urgen"  >
							紧急任务
						</view>
						<view style="margin-top:8rpx;">
							负责人员：{{item.people}}小组
						</view>
							
						<view >
							截止时间：{{item.date}}
						</view>
						<view style="width: 400rpx;height: 150rpx;position: absolute;left: 300rpx;top: 10rpx;word-break: break-word; /* 文本行的任意字内断开 */ word-wrap: break-word; /* IE */white-space: -moz-pre-wrap; /* Mozilla */">
							{{item.title}}
						</view>
						<view >
							地点：{{item.loacation}}
						</view>
					</view>
					<!-- 行政任务通知 -->
					<view v-for="(item,index) in massion"
					style="height: 180rpx;width: 100%;margin-bottom: 20rpx;border-bottom: 3rpx #C0C0C0 solid;position: relative;"
					:key="'admin'+index" v-if="item.type=='行政通知'">
						<view  class="notic"  >
							{{item.statues}}
						</view>
						<view style="margin-top:8rpx;">
							人员：{{item.people}}
						</view>
							
						<view >
							时间：{{item.date}}
						</view>
						<view style="width: 400rpx;height: 150rpx;position: absolute;left: 300rpx;top: 10rpx;word-break: break-word; /* 文本行的任意字内断开 */ word-wrap: break-word; /* IE */white-space: -moz-pre-wrap; /* Mozilla */">
							{{item.title}}
						</view>
						<view >
							地点：{{item.loacation}}
						</view>
					</view>
					<!-- 超期任务 -->
					<view v-for="(item,index) in massion"
					style="height: 220rpx;width: 100%;margin-bottom: 20rpx;border-bottom: 3rpx #C0C0C0 solid;position: relative;"
					:key="'fix'+index" v-if="item.statues=='超 期'">
						<view  class="notic"  >
							{{item.type}}
						</view>
						<view  class="statues-finished" v-if="item.statues=='完成'" >
							状态：{{item.statues}}
						</view>
						<view  class="statues-unfinished" v-if="item.statues=='未完成'" >
							状态：{{item.statues}}
						</view>
						<view  class="fail" v-if="item.statues=='超 期'" >
							状态：{{item.statues}}
						</view>
						<view style="margin-top:8rpx;">
							人员：{{item.people}}
						</view>
							
						<view >
							时间：{{item.date}}
						</view>
						<view style="width: 400rpx;height: 150rpx;position: absolute;left: 300rpx;top: 10rpx;word-break: break-word; /* 文本行的任意字内断开 */ word-wrap: break-word; /* IE */white-space: -moz-pre-wrap; /* Mozilla */">
							{{item.title}}
						</view>
						<view >
							地点：{{item.loacation}}
						</view>
					</view>
					<!-- 维修整改任务通知 -->
					<view v-for="(item,index) in massion"
					style="height: 220rpx;width: 100%;margin-bottom: 20rpx;border-bottom: 3rpx #C0C0C0 solid;position: relative;"
					:key="'fix'+index" v-if="item.type=='维修整改'&&item.statues!='超 期'">
						<view  class="notic"  >
							{{item.type}}
						</view>
						<view  class="statues-finished" v-if="item.statues=='完成'" >
							状态：{{item.statues}}
						</view>
						<view  class="statues-unfinished" v-if="item.statues=='未完成'" >
							状态：{{item.statues}}
						</view>
						<view  class="fail" v-if="item.statues=='超 期'" >
							状态：{{item.statues}}
						</view>
						<view style="margin-top:8rpx;">
							人员：{{item.people}}
						</view>
							
						<view >
							时间：{{item.date}}
						</view>
						<view style="width: 400rpx;height: 150rpx;position: absolute;left: 300rpx;top: 10rpx;word-break: break-word; /* 文本行的任意字内断开 */ word-wrap: break-word; /* IE */white-space: -moz-pre-wrap; /* Mozilla */">
							{{item.title}}
						</view>
						<view >
							地点：{{item.loacation}}
						</view>
					</view>
					<!-- 年审整改任务通知 -->
					<view v-for="(item,index) in massion"
					style="height: 220rpx;width: 100%;margin-bottom: 20rpx;border-bottom: 3rpx #C0C0C0 solid;position: relative;"
					:key="'fix'+index" v-if="item.type=='年审整改'&&item.statues!='超 期'">
						<view  class="notic"  >
							{{item.type}}
						</view>
						<view  class="statues-finished" v-if="item.statues=='完成'" >
							状态：{{item.statues}}
						</view>
						<view  class="statues-unfinished" v-if="item.statues=='未完成'" >
							状态：{{item.statues}}
						</view>
						<view  class="fail" v-if="item.statues=='超 期'" >
							状态：{{item.statues}}
						</view>
						<view style="margin-top:8rpx;">
							人员：{{item.people}}
						</view>
							
						<view >
							时间：{{item.date}}
						</view>
						<view style="width: 400rpx;height: 150rpx;position: absolute;left: 300rpx;top: 10rpx;word-break: break-word; /* 文本行的任意字内断开 */ word-wrap: break-word; /* IE */white-space: -moz-pre-wrap; /* Mozilla */">
							{{item.title}}
						</view>
						<view >
							地点：{{item.loacation}}
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
					title:"劳动节公司聚餐！马上集合,集合集合集合集合集合集合集合集合集合集合集合集合",
					loacation:"榕树头鸡煲",
					people:"全体员工",
					type:"行政通知",
					date:"11月22日",
					urgen:"非紧急",
					statues:"行政通知",
				},
				{
					title:"2号梯需要整改，马上联系业主",
					loacation:"百花园1号22栋4号梯",
					people:"东区",
					type:"维修整改",
					date:"11月12日",
					urgen:"紧急",
					statues:"未完成",
				},
				{
					title:"3号维修整改",
					loacation:"百花园2号小区22栋4号梯",
					type:"维修整改",
					people:"鼎湖",
					statues:"超 期",
					date:"11月22日",
					urgen:"非紧急",
				},
				{
					title:"百花园年审整改",
					loacation:"百花园1号小区22栋4号梯",
					people:"高要",
					statues:"未完成",
					date:"11月22日",
					urgen:"非紧急",
					type:"年审整改",
				},
				
				{
					title:"西区年审整改",
					loacation:"百花园1号小区22栋4号梯",
					people:"西区",
					statues:"未完成",
					date:"11月22日",
					urgen:"非紧急",
					type:"年审整改",
				}
				],
			}
		}
	}
</script>

<style>
	.urgen{
		border: 6rpx  #E43D33 	solid;
		border-radius: 10rpx;
		width: 160rpx;
		color: #E43D33;
		font-weight: 600;
	}
	.notic{
		border: 3rpx  #007AFF 	solid;
		border-radius: 10rpx;
		width: 130rpx;
		color: #007AFF;
		
	}
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
