<template>
	<div class="tabsdemo">	
	  <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
		<el-radio-button label="top">top</el-radio-button>
		<el-radio-button label="right">right</el-radio-button>
		<el-radio-button label="bottom">bottom</el-radio-button>
		<el-radio-button label="left">left</el-radio-button>
	  </el-radio-group>

	  <el-tabs type="border-card" :tab-position="tabPosition" style="height: 200px;">
		<el-tab-pane label="用户管理">用户管理</el-tab-pane>
		<el-tab-pane label="配置管理">配置管理</el-tab-pane>
		<el-tab-pane label="角色管理">角色管理</el-tab-pane>
		<el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
	  </el-tabs>
	</div>
</template>

<script>
	export default {
	  name: 'orgTree',
	  data() {
		return {
			tabPosition: 'top'
		}
    },
	  mounted(){

	  },
	  methods: {
		  
		  
	  },
	 }
</script>

<style lang="less">
	.tabsdemo{
		
		
		
	}
</style>
