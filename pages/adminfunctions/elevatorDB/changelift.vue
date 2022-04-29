<template>
	<view class="">
		<view class="cu-bar bg-white margin-top solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-orange"></text> 修改电梯信息
			</view>
		</view>
		<view class="cu-bar bg-white margin-top solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-orange"></text> 修改{{beforelift.unit_name}}的信息
			</view>
		</view>
		<view >
			<view class="cu-form-group" v-for="(item,index) in paramout.param" :key="index">
				<view class="title">{{item.chi}}</view>
				<input  v-model="paramout.obj[item.eng]" class="inputbox" type="text" placeholder="请输入" placeholder-class="placeclass" focus="true"/>
			</view>
		
			
			<view class="box">
				<view class="cu-bar btn-group">
					<button class="cu-btn bg-green shadow-blur round lg" @click="change()">修改</button>
				</view>
				
			</view>
		</view>
		
		</view>
	</view>
</template>
<script>
	export default {
		onShow() {
			// this引用有问题所以干脆放进去了
			uni.getStorage({
				key:'changeliftID',
				success: (res) => {
					let that=this
					this.liftID = res.data
					console.log("电梯修改的ID读取 is that"+ this.liftID)
					// 读取原ID信息
					console.log("liftID is that" + this.liftID )
					wx.cloud.database().collection('lift').doc(this.liftID).get()
						.then(res => {
							console.log('原电梯信息请求成功', res)	
							that.beforelift=res.data	
							})
						.catch(err => {
							console.log('管理员列表请求失败', err)
						})	
						// 读取电梯指标中英文
						wx.cloud.database().collection('lift_index').get()
							.then(res => {
								console.log('电梯属性列表请求成功', res)
								console.log("res is" + res.data)
								let temp = res.data;
								let templist=[];
								for(let item of temp)
								 {
									 
									for(var keyitem of Object.keys(item))
									{
										if(keyitem!='_id')
										{
											let temobj={}
											temobj['eng']=keyitem
											temobj['chi']=item[keyitem]
											// console.log(temobj)
											templist.push(temobj)
										}
									}
								 }
								this.param=templist
								this.paramout={
									param:this.param,
									obj: this.beforelift
								}
								// console.log("templist"+ this.param)	
							})
							.catch(err => {
								console.log('管理员列表请求失败', err)
							});
				}
			});		
		},
		data() {
			return {

				beforelift:[],
				liftID:"",
				paramout:{},
				param:[
								
				],
				
				TabCur: 0,
				scrollLeft: 0,
				index: -1,
			
				
				
			
			};
		},
		computed:{
			
		},
		methods: {
			
			
			change(){
				delete this.paramout.obj._openid;
				delete this.paramout.obj._id;
				console.log(this.paramout.obj)
				console.log(this.paramout.obj)
				wx.cloud.database().collection('lift').doc(this.liftID).update({
				  		data:this.paramout.obj
				   	}).then(res=>{
				    	console.log(res)
						uni.navigateTo({
							url:'elevatorDB'
						})
				   	})
			
			
				
			}
			
			
		}
	}
</script>

<style>
</style>
