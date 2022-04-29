<template>
	<view class="">
		<view class="cu-bar bg-white margin-top solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-orange"></text> 新增电梯
			</view>
		</view>
		<view >
			<view class="cu-form-group" v-for="(item,index) in paramout.param" :key="index">
				<view class="title">{{item.chi}}</view>
				<input  v-model="paramout.obj[item.eng]" class="inputbox" type="text" placeholder="请输入" placeholder-class="placeclass" focus="true"/>
			</view>
		
			
			<view class="box">
				<view class="cu-bar btn-group">
					<button class="cu-btn bg-green shadow-blur round lg" @click="create()">新增</button>
				</view>
				
			</view>
		</view>
		
		</view>
	</view>
</template>
<script>
	
	export default {
		onShow(){
			// 读取电梯指标中英文
			wx.cloud.database().collection('lift_index').get()
				.then(res => {
					console.log('管理员列表请求成功', res)
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
						obj:{}
					}
					// console.log("templist"+ this.param)	
				})
				.catch(err => {
					console.log('管理员列表请求失败', err)
				})
			
		},
		data() {
			return {
				
				// unit_name:"",
				// unit_locate:"",
				// unit_creditcode:"",
				// device_locate:"",
				// device_code:"",
				// reg_code:"",
				// product_code:"",
				// equip_code:"",
				// manufact_day:"",
				// manufact_unit:"",
				// device_floor:"",
				// lift_speed:"",
				// control_method:"",
				// building_code:"",
				// manager_name:"",
				// speedlim_unit:"",
				// speedlim_type:"",
				// speedlim_makeday:"",
				// speedlim_makecode:"",
				// liftaccept_day:"",
				// insurrance_effectday:"",
				// icon_effectday:"",
				// project125_testday:"",
				// security_contractday:"",
				paramout:{},
				param:[
								
				],
				
				TabCur: 0,
				scrollLeft: 0,
				index: -1,
				
			
				
				modalName: null,
			
			};
		},
		methods: {
			create(){
				console.log(this.unit_name)
				if(this.paramout.obj!={})
				{
					wx.cloud.database().collection('lift').add({
					  // data 字段表示需新增的 JSON 数据
					  data: 
					    // _id: 'todo-identifiant-aleatoire', // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
						  this.paramout.obj
					  ,
					  success: function(res) {
					    // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
					    console.log(res)
						uni.navigateTo({
							url:'elevatorDB'
						})
					  }
					})
				}
				else{
					uni.showToast({
						title:"请填写完整！"
					})
				}
			
			
			
			
			
		}
		}
	}
</script>

<style>
</style>
