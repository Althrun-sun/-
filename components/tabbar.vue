<template>
	<view >
		<view >
			<view 
			v-for="(item,index) in tabbaritem"
			:key="index"
			>
				{{item.title}}
			</view>
		</view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				tabbaritem:[
					{title:"首页"},
					{title:"任务打卡"},
					{title:"维保/年审"},
				]
			}
		}
	}
</script>

<style>
</style>
