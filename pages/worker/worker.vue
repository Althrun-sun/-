<template>
	<view >
		<notic></notic>
		<!-- 日常任务 -->
		<view style="width: 100%;height: 50rpx;padding-top: 20rpx;padding-left: 20rpx;font-size: 40rpx;	margin-bottom: 20rpx;">
			日常任务
		</view>
		<view style="height: 300rpx;width: 100%;position: relative;display: flex;flex-direction: row;">
			
			<view class="fix-judg-box" style="background: url(../../static/image/index/fix.jpg);
		background-size: 100% 100%;
		background-repeat: no-repeat;"> 
				<view style="position: absolute;top: 20rpx;font-size: 40rpx;left: 120rpx;">
					维保
				</view>
				<view class="box-unfinish">
					未完成：{{dailynum[0].unfinish}}
				</view>
				<view class="box-finish">
					已完成：{{dailynum[0].finished}}
				</view>
				<view class="box-fail" v-if="dailynum[0].fail!=0">
					超期：{{dailynum[0].fail}}
				</view>
			</view>
			<view class="fix-judg-box" 
			style="background: url(../../static/image/index/check.jpg);
		background-size: 100% 100%;
		background-repeat: no-repeat;">
				<view style="position: absolute;top: 20rpx;font-size: 40rpx;left: 120rpx;">
					年审
				</view>
				<view class="box-unfinish">
					未完成：{{dailynum[1].unfinish}}
				</view>
				<view class="box-finish">
					已完成：{{dailynum[1].finished}}
				</view>
				<view class="box-fail" v-if="dailynum[1].fail!=0">
					超期：{{dailynum[1].fail}}
				</view>
			</view>
		</view>
		<view style="width: 100%;height: 50rpx;padding-top: 20rpx;padding-left: 20rpx;font-size: 40rpx;	margin-bottom: 20rpx;">
			我的任务
		</view>
		<view style="height: 120rpx;width: 92%;margin-left: 30rpx;display: flex;flex-direction: row;border-bottom: 3rpx #909399 solid;border-top: 3rpx #909399 solid;">
			<view style="height: 120rpx;width: 33%;position: relative;" 
			v-for="(item,index) in mymission"
			:key="index"
			>
				<view style="position: absolute;left: 50rpx;font-size: 30rpx;">
					{{item.title}}
				</view>
				<view style="position: absolute;left: 70rpx;font-size: 30rpx;top: 50rpx;font-size: 40rpx;">
					{{item.num}}
				</view>
			</view>
		</view>
		<!-- 底部导航栏 -->
		<!-- <tabbar></tabbar> -->
	</view>
</template>

<script>
	import tabbar from '../../components/tabbar.vue'
	import notic from '../../components/notic.vue'
	export default{
		components:{
			notic,
			tabbar
		},
		data(){
			return{
				dailynum:[
					{
						unfinish:3,
						finished:2,
						fail:1,
					},
					{
						unfinish:1,
						finished:2,
						fail:0,
					}
				],
				mymission:
					[
						{
							title:"已完成",
							num:3
						},
						{
							title:"未完成",
							num:2
						},
						{
							title:"超期",
							num:0
						},
						
					]
				
				
			}
		}
	}
</script>

<style>
	.fix-judg-box{
		height: 100%;width: 45%;margin-right: 20rpx;background-color: #DCDCDC;
		margin-left: 20rpx;border-radius: 20rpx;position: relative;
		
	}
	.box-unfinish{
		position: absolute;top: 80rpx;left: 30rpx;font-size: 40rpx;
	}
	.box-finish{
		position: absolute;top: 130rpx;left: 30rpx;font-size: 40rpx;
	}
	.box-fail{
		position: absolute;top: 180rpx;left: 30rpx;color: #E43D33;font-size: 40rpx;
	}
</style>
