<template name="basics">
	<view>
		<scroll-view scroll-y class="page">
			
			 <image src="../../static/image/index/index.jpg"
			  mode="widthFix" class="response" style="margin-bottom: 20rpx;"></image>
			<view class="nav-list" >
				<navigator hover-class="none" :url="'/pages/basics/' + item.name" class="nav-li" navigateTo :class="'bg-'+item.color"
				 :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]"
				 
				  v-for="(item,index) in elements" :key="index"
				   @click="gotobox(item.tourl)"
				  >
					<view class="nav-title">{{item.title}}</view>
					<view class="nav-name">{{item.name}}</view>
					<text :class="'cuIcon-' + item.cuIcon"></text>
				</navigator >
			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "basics",
		data() {
			return {
				elements: [{
						title: '维保',
						name: 'security',
						color: 'cyan',
						cuIcon: 'newsfill',
						tourl:"../dailysecurity/dailysecurity"
					},
					{
						title: '维修整改',
						name: 'fix',
						color: 'blue',
						cuIcon: 'colorlens',
						tourl:"../fix/fix"
					},
					{
						title: '技术资料',
						name: 'document',
						color: 'purple',
						cuIcon: 'font',
						tourl:"../document/document"
					},
					{
						title: '信息发布',
						name: 'information',
						color: 'mauve',
						cuIcon: 'cuIcon'
					},
					{
						title: '作业指导',
						name: 'instruction',
						color: 'pink',
						cuIcon: 'btn'
					},
					{
						title: '数据库',
						name: 'database',
						color: 'brown',
						cuIcon: 'tagfill'
					},
					
					
					
				],
			};
		},
		onShow() {
			console.log("success")
		},
		methods:{
			gotobox(url){
				uni.navigateTo({
					url
				})
			}
		}
	}
</script>

<style>
	.page {
		height: 100vh;
	}
</style>
