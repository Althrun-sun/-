<template>
	<view >
		<!-- <uni-search-bar class="uni-mt-10" radius="100" placeholder="请输入搜索" clearButton="none" cancelButton="none" @confirm="search" />
		<view style="height: 600rpx;width: 95%;margin-left: 20rpx;display: flex;flex-direction: row;flex-wrap: wrap;position: relative;">
			<view style="background-color: #E4E7ED;height: 300rpx;width: 310rpx;position: relative;margin-left: 30rpx;margin-top: 30rpx;border-radius: 20rpx;"  v-for="(item,index) in mainboxlist"
			:key="index"
				
			>
				<view style="position: absolute;font-size: 50rpx;top: 100rpx;text-align: center;height: 50rpx;width: 200rpx;left: 50rpx;">
					{{item.title}}
				</view>
			</view>
		</view>
		<view style="width: 100%;height: 10rpx;background-color: #D8D8D8;position: absolute;top: 1100rpx;">
			
		</view>
		<view style="height: 200rpx;width: 100%;top: 1150rpx;position: absolute;display: flex;flex-direction: row;">
			<view style="background-color: #E4E7ED;height: 150rpx;width: 150rpx;margin-left: 35rpx;border-radius: 50%;position: relative;"
			v-for="(item,index) in smallboxlist"
			:key="index"
			>
				<view style="position: absolute;top: 50rpx;left: 10rpx;font-size: 40rpx;text-align:match-parent;margin-left: 10rpx;">
					{{item.title}}
				</view>
				
			</view>
		</view> -->
		<basics></basics>
	</view>
</template>

<script>
	
	
	export default {
		
		data() {
			return {
				mainboxlist:[
					{title:"维保"},
					{title:"维修整改"},
					{title:"技术资料"},
					{title:"信息发布"},
					{title:"作业指导	"},
				],
				smallboxlist:[
					{title:"数据库"},
					{title:"年审"},
					{title:"合同"},
					{title:"保险"},
				]
			}
		},
		onLoad() {

		},
		methods: {
			search(){
				
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
