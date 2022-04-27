<template name="components">
	<view>
		<scroll-view scroll-y class="page">
			<image src="/static/componentBg.png" mode="widthFix" class="response"></image>
			<view class="nav-list">
				<navigator hover-class='none' :url="'/pages/component/' + item.name" class="nav-li" navigateTo :class="'bg-'+item.color"
				 :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]" v-for="(item,index) in elements" :key="index">
					<view class="nav-title" @click="toadmin(item.url)">{{item.title}}</view>
					<view class="nav-name">{{item.name}}</view>
					<text :class="'cuIcon-' + item.cuIcon"></text>
				</navigator>
			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				elements: [{
						title: '账号管理',
						name: 'account',
						color: 'purple',
						cuIcon: 'vipcard',
						url:'../admin/admin'
					},
					{
						title: '任务发布',
						name: 'mission',
						color: 'red',
						cuIcon: 'formfill',
						url:'../adminfunctions/mission/mission'
					},
					{
						title: '维保排班',
						name: 'security',
						color: 'mauve',
						cuIcon: 'formfill',
						url:'../adminfunctions/elevatorDB/elevatorDB'
					},
					{
						title: '年审排班',
						name: 'check',
						color: 'pink',
						cuIcon: 'list',
						url:'../adminfunctions/checkplan/checkplan'
					},
					{
						title: '电梯数据库',
						name: 'database',
						color: 'brown',
						cuIcon: 'newsfill',
						url:'../adminfunctions/elevatorDB/elevatorDB'
					},
					
				],
			};
		},
		methods:{
			toadmin(url){
				uni.navigateTo({
					url:url
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
