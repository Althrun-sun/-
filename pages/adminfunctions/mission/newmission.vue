<template>
	<view class="">
		<view class="cu-bar bg-white margin-top solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-orange"></text> 新增账号
			</view>
		</view>
	<!-- 	<scroll-view scroll-x class="bg-white nav text-center">
			<view class="cu-item" :class="index==TabCur?'text-blue cur':''" 
			v-for="(item,index) in funclist" :key="index" @tap="tabSelect" :data-id="index">
				{{item}}
			</view>
		</scroll-view> -->
		<!-- 新增品牌 -->
		<view >
			<view class="cu-form-group">
				<view class="title">主题</view>
				<input  v-model="title" class="inputbox" type="text"  placeholder="请输入主题" placeholder-class="placeclass" />
			</view>
			<view class="cu-form-group">
				<view class="title">内容</view>
				<input  v-model="content" class="inputbox" type="text"  placeholder="请输入内容" placeholder-class="placeclass" />
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">任务类别</view>
				<picker @change="PickerChange" :value="index" :range="picker">
					<view class="picker">
						{{index>-1?picker[index]:'请选择任务类型'}}
					</view>
				</picker>
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
				groupchoose:"",
				picker: ['行政通知','维修整改','年审整改'],
				
				TabCur: 0,
				scrollLeft: 0,
				index: -1,
				content:"",
				date:"",
				type:"",
				title:"",
				
				modalName: null,
				textareaAValue: '',
				textareaBValue: ''
			};
		},
		methods: {
			create(){
				var myDate = new Date();
				// myDate.getYear();        //获取当前年份(2位)
				// myDate.getFullYear();    //获取完整的年份(4位,1970-????)
				// myDate.getMonth();       //获取当前月份(0-11,0代表1月)
				// myDate.getDate();        //获取当前日(1-31)
				// myDate.getDay();         //获取当前星期X(0-6,0代表星期天)
				// myDate.getTime();        //获取当前时间(从1970.1.1开始的毫秒数)
				// myDate.getHours();       //获取当前小时数(0-23)
				// myDate.getMinutes();     //获取当前分钟数(0-59)
				// myDate.getSeconds();     //获取当前秒数(0-59)
				// myDate.getMilliseconds();    //获取当前毫秒数(0-999)
				// myDate.toLocaleDateString();     //获取当前日期
				// var mytime=myDate.toLocaleTimeString();     //获取当前时间
				// myDate.toLocaleString( );        //获取日期与时间
				// myDate.getMonth();       //获取当前月份(0-11,0代表1月)
				myDate.getDate();        //获取当前日(1-31)
				var tMonth = myDate.getMonth();
				var today =myDate.getDate()
				this.date= (tMonth+1) +"月" +(today)+"日"
			
				if(this.title!=""&&this.content!=""&&this.index!=-1&&this.date!="")
				{
					wx.cloud.database().collection('mission').add({
					  // data 字段表示需新增的 JSON 数据
					  data: {
					    // _id: 'todo-identifiant-aleatoire', // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
					   
							title:this.title,
							content:this.content,
							type:this.type,
							date:this.date
					   
					  },
					  success: function(res) {
					    // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
					    console.log(res)
						uni.navigateTo({
							url:'mission'
						})
					  }
					})
				}
				else{
					uni.showToast({
						title:"请填写完整！"
					})
				}
			},
			PickerChange(e) {
				this.index = e.detail.value
				this.type=this.picker[this.index]
				// console.log(this.groupchoose)
			},

			textareaAInput(e) {
				this.textareaAValue = e.detail.value
			},
		}
	}
</script>

<style>
</style>
