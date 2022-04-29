<template>
	<view class="">
		<!-- 标题 -->
		
		<view style="height: 100rpx;width: 80%;margin-left: auto;margin-right: auto;position: relative;">
			<!-- <view style="text-align: center ">
				电梯维保系统登陆界面
			</view> -->
		</view>
		<!-- 输入框 -->
		<view style="position: relative;">
			<text style="position: absolute;top: 20rpx;left: 80rpx;font-size: 40rpx;">账号:</text>
			<text style="position: absolute;top: 100rpx;left: 80rpx;font-size: 40rpx;">密码:</text>
		<view style="position: absolute;left: 200rpx;height: 400rpx;width: 100%;">
			
			<input  v-model="account" class="inputbox" type="text"  placeholder="请输入账号" placeholder-class="placeclass" focus="true"/>
			
			
			<input  v-model="password" class="inputbox" type="text" password="true"  placeholder="请输入密码" placeholder-class="placeclass" focus="true"/>
		</view>
		</view>
		
		<!-- 登录按钮 -->
		<view @click="login()" style="width: 300rpx;height: 100rpx;position: absolute;top: 300rpx;border-radius: 30rpx;left: 220rpx;text-align: center;border: 3rpx #303133 solid;">
			<text style="position: absolute;top: 10rpx; left: 90rpx;font-size: 60rpx;">登录</text>
		</view>
		
		
		
		<!-- 管理员 -->
		<radio-group style="position: absolute;top: 500rpx;left: 100rpx;" @change="radiochange">
			<label class="radio" style="margin-left: 40rpx;">
				<radio value="worker" /><text class="radioclass">员工登陆</text>
			</label>
			
			<label class="radio" style="margin-left: 40rpx;">
				<radio value="admin" /><text class="radioclass">管理员登陆</text>
			</label>
		</radio-group>
	</view>
</template>

<script>
	export default{
		// onLoad: function() {
		// 	  wx.cloud.callFunction({
		// 	    name: 'logincheck'
		// 	  }).then((res) => {
		// 		  console.log(res)
		// 	  })
		// },
		data() {
			return {
				account:"",
				password:"",
				typeto:""
				
			}
		},
			
		methods:{
			radiochange :function(evt){
				let typeto=evt.detail.value
				 this.typeto=typeto
				 
				console.log(typeto)
			},
	
			login(){
				console.log(typeto)
				let account=this.account;
				let password=this.password;
				let typeto=this.typeto;
				if(account=="123"&&password=="123")
				{
					if(typeto=="worker")
					{
						uni.reLaunch({
							url:'../index/index'
						})
						console.log("login")
					}
					else if(typeto=="admin")
					{
						// uni.reLaunch({
						// 	url:'../admin/admin'
						// })
						uni.navigateTo({
							url:'../adminhome/adminhome'
						})
					}
					
				}
				else{
					uni.showToast({
						title:"登录失败请检查账号密码"
					})
				}
			}
		}
	}
</script>

<style>
	.inputbox{
		border: 3rpx #555555 solid;
		margin-top: 30rpx;
		height: 50rpx;
		width: 60%;
		border-radius: 20rpx;
	}
	.placeclass{
		font-size: 30rpx;
		margin-left: 20rpx;
	}
	.radioclass{
		font-size: 30rpx;
		
	}
</style>
