<template>
	<div class="dialogdemo">	
		<div class="flexone">
			  <div>message消息提示</div>
			  <el-button :plain="true" @click="open2">成功</el-button>
			  <el-button :plain="true" @click="open3">警告</el-button>
			  <el-button :plain="true" @click="open1">消息</el-button>
			  <el-button :plain="true" @click="open4">错误</el-button>
		</div>
		<div class="flexone">
			<div>对话框</div>
			<el-button type="text" @click="opend">点击打开 Message Box</el-button>
		</div>
		<div class="flexone">
			<div>全局的消息通知</div>
			<el-button   plain @click="open11"> 成功</el-button>
			  <el-button plain @click="open22">警告</el-button>
			  <el-button plain @click="open33">消息</el-button>
			  <el-button plain @click="open44">错误</el-button>
		</div>
	</div>
</template>

<script>
	export default {
	  name: 'dialogdemo',
	  data() {
		return {}
    },
	  mounted(){

	  },
	  methods: {
		  open1() {
        this.$message('这是一条消息提示');
		  },
		  open2() {
			this.$message({
			  message: '恭喜你，这是一条成功消息',
			  type: 'success'
			});
		  },

		  open3() {
			this.$message({
			  message: '警告哦，这是一条警告消息',
			  type: 'warning'
			});
		  },

		  open4() {
			this.$message.error('错了哦，这是一条错误消息');
		  },
		 opend() {
				this.$confirm('检测到未保存的内容，是否在离开页面前保存修改？', '确认信息', {
				  distinguishCancelAndClose: true,
				  confirmButtonText: '保存',
				  cancelButtonText: '放弃修改'
				})
				  .then(() => {
					this.$message({
					  type: 'info',
					  message: '保存修改'
					});
				  })
				  .catch(action => {
					this.$message({
					  type: 'info',
					  message: action === 'cancel'
						? '放弃保存并离开页面'
						: '停留在当前页面'
					})
				  });
			  },
			     open11() {
        this.$notify({
          title: '成功',
          message: '这是一条成功的提示消息',
          type: 'success'
        });
      },

      open22() {
        this.$notify({
          title: '警告',
          message: '这是一条警告的提示消息',
          type: 'warning'
        });
      },

      open33() {
        this.$notify.info({
          title: '消息',
          message: '这是一条消息的提示消息'
        });
      },

      open44() {
        this.$notify.error({
          title: '错误',
          message: '这是一条错误的提示消息'
        });
      }
	  },
	  mounted: () => {
	  	
	  }
	 }
</script>

<style lang="less">
	.dialogdemo{
		.flexone{
			margin-top: 30px;
		}
		
		
	}
</style>
