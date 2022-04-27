<template>
	<view class="">
		<view class="cu-bar bg-white margin-top solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-orange"></text> 新增电梯
			</view>
		</view>
		<view >
			<view class="cu-form-group" v-for="(item,index) in param" :key="index">
				<view class="title">{{item}}</view>
				<input  :v-model="item" class="inputbox" type="text" placeholder="请输入" placeholder-class="placeclass" focus="true"/>
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
			
		},
		data() {
			return {
				
				param:[
					"使用单位：",
					"使用单位地址：",
					"使用单位信用代码：",
					"设备使用地址：",
					"设备代码：",
					"登记证编号：",
					"产品编号：",
					"设备型号：",
					"设备制造日期：",
					"设备制造单位：",
					"设备层站：",
					"设备梯速：",
					"控制方式（集选/并联）：",
					"设备内部编号（楼号）：",
					"电梯管理人员（或联系人）：",
					"限速器制造单位：",
					"限速器型号：",
					"限速器出厂日期:",
					"限速器出厂编号:",
					"电梯验收日期：",
					"电梯保险有效日期：",
					"电梯使用标志有效日期：",
					"125%载重项目检验日期：",
					"维保合同有效日期：",					
				],
				
				TabCur: 0,
				scrollLeft: 0,
				index: -1,
				newIDlist:[],
				name:"",
				account:"",
				psw:"",
				
				modalName: null,
			
			};
		},
		methods: {
			create(){
				
				if(this.name!=""&&this.account!=""&&this.index!=-1&&this.psw!="")
				{
					wx.cloud.database().collection('lift').add({
					  // data 字段表示需新增的 JSON 数据
					  data: {
					    // _id: 'todo-identifiant-aleatoire', // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
						   
					  },
					  success: function(res) {
					    // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
					    console.log(res)
						uni.navigateTo({
							url:'admin'
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
