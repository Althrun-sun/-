<template>
	<view class="content">
		<button @click="tryAdd">尝试添加</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello'
		};
	},
	onLoad() {
  },
	methods: {
    tryAdd() {
      let db = wx.cloud.database({evn:'cloud1-8glmwstl21667946'})
      let userBaseCollection = db.collection('user_base')
      userBaseCollection.add({
        data:{
          name:'哈哈哈'
        },
        success: (res) => {
          console.log(`这个是成功的回复`);
          console.log(res);
        }
      })
    }
  }
};
</script>

