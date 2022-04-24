<template>
	<view>
		
		<form>
			<view class="cu-form-group margin-top">
				<view class="title">完成人</view>
				<picker @change="PickerChange" :value="index" :range="picker">
					<view class="picker">
						{{index>-1?picker[index]:'啊标'}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">完成日期</view>
				<picker mode="date" :value="date" start="2015-09-01" end="2020-09-01" @change="DateChange">
					<view class="picker">
						{{date}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">完成时间</view>
				<picker mode="time" :value="time" start="09:01" end="21:01" @change="TimeChange">
					<view class="picker">
						{{time}}
					</view>
				</picker>
			</view>
		
			<view class="cu-form-group">
				<view class="title">打卡地址</view>
				<input placeholder="" name="input"></input>
				<text class='cuIcon-locationfill text-orange'></text>
			</view>
		
		
			<view class="cu-bar bg-white margin-top">
				<view class="action">
					工作图片上传
				</view>
				<view class="action">
					{{imgList.length}}/4
				</view>
			</view>
			<view class="cu-form-group">
				<view class="grid col-4 grid-square flex-sub">
					<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
					 <image :src="imgList[index]" mode="aspectFill"></image>
						<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
							<text class='cuIcon-close'></text>
						</view>
					</view>
					<view class="solids" @tap="ChooseImage" v-if="imgList.length<4">
						<text class='cuIcon-cameraadd'></text>
					</view>
				</view>
			</view>
		
			<!-- !!!!! placeholder 在ios表现有偏移 建议使用 第一种样式 -->
			<view class="cu-form-group margin-top">
				<textarea maxlength="-1" :disabled="modalName!=null" @input="textareaAInput" placeholder="工作备注"></textarea>
			</view>
			
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: -1,
				picker: ['喵喵喵', '汪汪汪', '哼唧哼唧'],
				multiArray: [
					['无脊柱动物', '脊柱动物'],
					['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'],
					['猪肉绦虫', '吸血虫']
				],
				objectMultiArray: [
					[{
							id: 0,
							name: '无脊柱动物'
						},
						{
							id: 1,
							name: '脊柱动物'
						}
					],
					[{
							id: 0,
							name: '扁性动物'
						},
						{
							id: 1,
							name: '线形动物'
						},
						{
							id: 2,
							name: '环节动物'
						},
						{
							id: 3,
							name: '软体动物'
						},
						{
							id: 3,
							name: '节肢动物'
						}
					],
					[{
							id: 0,
							name: '猪肉绦虫'
						},
						{
							id: 1,
							name: '吸血虫'
						}
					]
				],
				multiIndex: [0, 0, 0],
				time: '12:01',
				date: '2018-12-25',
				region: ['广东省', '广州市', '海珠区'],
				switchA: false,
				switchB: true,
				switchC: false,
				switchD: false,
				radio: 'A',
				checkbox: [{
					value: 'A',
					checked: true
				}, {
					value: 'B',
					checked: true
				}, {
					value: 'C',
					checked: false
				}],
				imgList: [],
				modalName: null,
				textareaAValue: '',
				textareaBValue: ''
			};
		},
		methods: {
			PickerChange(e) {
				this.index = e.detail.value
			},
			MultiChange(e) {
				this.multiIndex = e.detail.value
			},
			MultiColumnChange(e) {
				let data = {
					multiArray: this.multiArray,
					multiIndex: this.multiIndex
				};
				data.multiIndex[e.detail.column] = e.detail.value;
				switch (e.detail.column) {
					case 0:
						switch (data.multiIndex[0]) {
							case 0:
								data.multiArray[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'];
								data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
								break;
							case 1:
								data.multiArray[1] = ['鱼', '两栖动物', '爬行动物'];
								data.multiArray[2] = ['鲫鱼', '带鱼'];
								break;
						}
						data.multiIndex[1] = 0;
						data.multiIndex[2] = 0;
						break;
					case 1:
						switch (data.multiIndex[0]) {
							case 0:
								switch (data.multiIndex[1]) {
									case 0:
										data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
										break;
									case 1:
										data.multiArray[2] = ['蛔虫'];
										break;
									case 2:
										data.multiArray[2] = ['蚂蚁', '蚂蟥'];
										break;
									case 3:
										data.multiArray[2] = ['河蚌', '蜗牛', '蛞蝓'];
										break;
									case 4:
										data.multiArray[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物'];
										break;
								}
								break;
							case 1:
								switch (data.multiIndex[1]) {
									case 0:
										data.multiArray[2] = ['鲫鱼', '带鱼'];
										break;
									case 1:
										data.multiArray[2] = ['青蛙', '娃娃鱼'];
										break;
									case 2:
										data.multiArray[2] = ['蜥蜴', '龟', '壁虎'];
										break;
								}
								break;
						}
						data.multiIndex[2] = 0;
						break;
				}
				this.multiArray = data.multiArray;
				this.multiIndex = data.multiIndex;
			},
			TimeChange(e) {
				this.time = e.detail.value
			},
			DateChange(e) {
				this.date = e.detail.value
			},
			RegionChange(e) {
				this.region = e.detail.value
			},
			SwitchA(e) {
				this.switchA = e.detail.value
			},
			SwitchB(e) {
				this.switchB = e.detail.value
			},
			SwitchC(e) {
				this.switchC = e.detail.value
			},
			SwitchD(e) {
				this.switchD = e.detail.value
			},
			RadioChange(e) {
				this.radio = e.detail.value
			},
			CheckboxChange(e) {
				var items = this.checkbox,
					values = e.detail.value;
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					items[i].checked = false;
					for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
						if (items[i].value == values[j]) {
							items[i].checked = true;
							break
						}
					}
				}
			},
			ChooseImage() {
				uni.chooseImage({
					count: 4, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						if (this.imgList.length != 0) {
							this.imgList = this.imgList.concat(res.tempFilePaths)
						} else {
							this.imgList = res.tempFilePaths
						}
					}
				});
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			DelImg(e) {
				uni.showModal({
					title: '召唤师',
					content: '确定要删除这段回忆吗？',
					cancelText: '再看看',
					confirmText: '再见',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(e.currentTarget.dataset.index, 1)
						}
					}
				})
			},
			textareaAInput(e) {
				this.textareaAValue = e.detail.value
			},
			textareaBInput(e) {
				this.textareaBValue = e.detail.value
			}
		}
	}
</script>

<style>
	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}
</style>

