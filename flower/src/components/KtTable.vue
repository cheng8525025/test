<template>
  <div ref="tableBox" id='table' style='width:100%;overflow-x:auto;overflow-y:auto'>
    <!--表格栏-->
	    <!--分页栏-->
	<div class="toolbar" style="padding:10px;" v-if="showOperation">
	  <kt-button icon="fa fa-plus" :label="$t('action.add')"  type="danger" @click="handleAdd()" v-if="showAdd" />
	  <kt-button label="批量删除"  :size="size" type="danger" @click="handleBatchDelete()" 
	    :disabled="this.selections.length===0"  v-if="showBatchDelete "/>
	</div>
    <el-table v-if='flag==1' :data="data.data" :highlight-current-row="highlightCurrentRow" @selection-change="selectionChange" :height="height"
          @current-change="handleCurrentChange" v-loading="loading" element-loading-text="加载中..." :border="border" :stripe="stripe"
          :show-overflow-tooltip="showOverflowTooltip" :size="size" :align="align" style="width:100%;" >
      <el-table-column type="selection" width="50" v-if="showBatchDelete & showOperation"></el-table-column>
      <el-table-column v-for="column in columns" header-align="center" align="center"
        :prop="column.prop" :label="column.label" :width="column.width" :min-width="column.minWidth" 
        :fixed="column.fixed" :key="column.prop" :type="column.type" :formatter="column.formatter"
        :sortable="column.sortable==null?true:column.sortable">
      </el-table-column>
      <el-table-column label="操作" width="185" fixed="right" v-if="showLineOpt" header-align="center" align="center">
        <template slot-scope="scope">
          <kt-button icon="fa fa-edit" label="编辑"  :size="size" @click="handleEdit(scope.$index, scope.row)"  v-if="showEdit" />
          <kt-button icon="fa fa-trash" label="删除" :size="size" type="danger" @click="handleDelete(scope.$index, scope.row)" v-if="showDelete" />
        </template>
      </el-table-column>
    </el-table>
    <!--分页栏-->
    <div class="toolbar" style="padding:10px;">
      <el-pagination layout="total, prev, pager, next, jumper" @current-change="refreshPageRequest" 
        :current-page="pageRequest.pageNum" :page-size="pageRequest.pageSize" :total="data.totalSize" style="float:right;">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import KtButton from "@/components/KtButton.vue"
export default {
  name: 'KtTable',
  components:{
			KtButton
	},
  props: {
    columns: Array, // 表格列配置
    data: Object, // 表格分页数据
    permsEdit: String,  // 编辑权限标识
    permsDelete: String,  // 删除权限标识
    size: { // 尺寸样式
      type: String,
      default: 'mini'
    },
    align: {  // 文本对齐方式
      type: String,
      default: 'left'
    },
    // maxHeight: {  // 表格最大高度
    //   type: Number,
    //   //default: 420
    // },
    border: {  // 是否显示边框
      type: Boolean,
      default: false
    },
    stripe: {  // 是否显示斑马线
      type: Boolean,
      default: true
    },
    highlightCurrentRow: {  // // 是否高亮当前行
      type: Boolean,
      default: true
    },
    showOverflowTooltip: {  // 是否单行显示
      type: Boolean,
      default: true
    },
	showOperation: {  // 是否显示操作列
	  type: Boolean,
	  default: true
	},
	showAdd: {  // 是否显示新增
	  type: Boolean,
	  default: true
	},
	showEdit: {  // 是否显示编辑
	  type: Boolean,
	  default: true
	},
    showBatchDelete: {  // 是否显示批量删除
      type: Boolean,
      default: true
    },
	showLineOpt:{//是否显示每一列最后的操作栏（编辑 删除）
		type: Boolean,
		default: true
	},
	showDelete: {  // 是否显示删除
	  type: Boolean,
	  default: true
	}
  },
  data() {
    return {
      // 分页信息
     height: 0,
		pageRequest: {
			pageNum: 1,
			pageSize: 10
      },
      flag:0,
		loading: false,  // 加载标识
		selections: []  // 列表选中列
    }
  },
  methods: {
    // 分页查询
    findPage: function () {
        this.loading = true
        let callback = res => {
          this.loading = false
        }
      this.$emit('findPage', {pageRequest:this.pageRequest, callback:callback})
    },
    // 选择切换
    selectionChange: function (selections) {
      this.selections = selections
      this.$emit('selectionChange', {selections:selections})
    },
    // 选择切换
    handleCurrentChange: function (val) {
      this.$emit('handleCurrentChange', {val:val})
    },
    // 换页刷新
		refreshPageRequest: function (pageNum) {
      this.pageRequest.pageNum = pageNum
      this.findPage()
    },
	//新增
	handleAdd: function(){
		this.$emit('handleAdd')
	},
    // 编辑
	handleEdit: function (index, row) {
      this.$emit('handleEdit', {index:index, row:row})  //调用父组件的handleEdit方法，将index和传递给父组件
	},
    // 删除
	handleDelete: function (index, row) {
		this.delete(row.id)
	},
	// 批量删除
	handleBatchDelete: function () {
		let ids = this.selections.map(item => item.id).toString()
		if(!ids){
			this.$message({message: '请选择一条数据', type: 'warning'})
			return
		}
		this.delete(ids)
	},
	// 删除操作
	delete: function (ids) {
		this.$confirm('确认删除选中记录吗？', '提示', {
			type: 'warning'
		}).then(() => {
			let params = []
			let idArray = (ids+'').split(',')
			for(var i=0; i<idArray.length; i++) {
				params.push({'id':idArray[i]})
			}
			this.loading = true
			let callback = res => {
			  if(res.code == 200) {
				this.$message({message: '删除成功', type: 'success'})
				this.findPage()   //删除成功刷新
			  } else {
				this.$message({message: '操作失败, ' + res.msg, type: 'error'})
			  }
			  this.loading = false
			}
			this.$emit('handleDelete', {params:params, callback:callback})  //调用父组件的删除方法
				}).catch(() => {})
	}
  },
  mounted() {
    let _this = this
    this.$nextTick(() => {
      let tableBox = _this.$refs.tableBox
      let a = tableBox.getBoundingClientRect().top+110
      console.log(tableBox.getBoundingClientRect())
      _this.height = `calc(100vh - ${a}px)`
      _this.flag = 1
      _this.refreshPageRequest(1)
    })
  }
}
</script>

<style scoped>

</style>