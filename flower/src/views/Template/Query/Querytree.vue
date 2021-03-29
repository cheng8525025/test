<template>
	<div class="querytree">
		<el-row :gutter="0" class="leftone">
			 <el-col :span="4" >
				 <el-tree
				 class="lefttree"
				   :data="data"
				   show-checkbox
				   node-key="id"
				   :default-expanded-keys="[2, 3]"
				   :default-checked-keys="[5]"
				   :props="defaultProps">
				 </el-tree>
			</el-col>
			<el-col :span="20">
				<!--工具栏-->
				<div class="toolbar" style="float:left;padding-top:10px;padding-left:15px;">
					<el-form :inline="true" :model="filters" :size="size">
						<el-form-item>
							<el-input v-model="filters.name" placeholder="用户名"></el-input>
						</el-form-item>
						<el-form-item>
							<el-date-picker
							  v-model="filters.startDate"
							  type="date"
							  placeholder="选择日期">
							</el-date-picker>
						</el-form-item>
						<el-form-item>
							<el-select v-model="filters.type" placeholder="请选择活动区域">
							  <el-option label="区域一" value="shanghai"></el-option>
							  <el-option label="区域二" value="beijing"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item>
							<kt-button icon="fa fa-search" :label="$t('action.search')"  type="danger" @click="findPage(null)"/>
						</el-form-item>
						<el-form-item>
							
						</el-form-item>
					</el-form>
				</div>
				<!--表格内容栏-->
				<kt-table permsEdit="sys:user:edit"  :showOperation="showOperation" :showAdd="showAdd" 
					:showEdit="showEdit"  :showDelete="showDelete" :showLineOpt="showLineOpt"
					:data="pageResult" :columns="filterColumns" ref="tbl" @handleAdd="handleAdd"  
					@findPage="findPage" @handleEdit="handleEdit" @handleDelete="handleDelete">
				</kt-table>
					</el-col>
				</el-row>
		
		<el-dialog :title="operation?'新增':'编辑'" width="40%" :visible.sync="dialogVisible" :close-on-click-modal="false">
			<el-form :model="dataForm" label-width="80px" :rules="dataFormRules" ref="dataForm" :size="size"
				label-position="right">
				<el-row :gutter="20">
					 <el-col :span="12">
						<el-form-item label="姓名" prop="name">
							<el-input v-model="dataForm.name" auto-complete="off"></el-input>
						</el-form-item>  
					 </el-col>
					 <el-col :span="12">
						<el-form-item label="手机号" prop="phone">
							<el-input v-model="dataForm.phone"  auto-complete="off"></el-input>
						</el-form-item>
					 </el-col>
				</el-row>
				<el-row :gutter="20">
					 <el-col :span="12">
						<el-form-item label="邮箱" prop="email">
							<el-input v-model="dataForm.email" auto-complete="off"></el-input>
						</el-form-item>  
					 </el-col>
					 <el-col :span="12">
						<el-form-item label="住址" prop="address">
							<el-input v-model="dataForm.address"  auto-complete="off"></el-input>
						</el-form-item>
					 </el-col>
				</el-row>
				<el-row :gutter="20">
					 <el-col :span="12">
						<el-form-item label="用户名" prop="uname">
							<el-input v-model="dataForm.uname" auto-complete="off"></el-input>
						</el-form-item>
					 </el-col>
					 <el-col :span="12">
						<el-form-item label="密码" prop="upass">
							<el-input v-model="dataForm.upass" type="password" auto-complete="off"></el-input>
						</el-form-item>
					 </el-col>
				</el-row>
				<el-row :gutter="20">
					 <el-col :span="24">
						<el-form-item label="爱好" prop="deptName">
							<el-select v-model="dataForm.like" filterable placeholder="请选择">
								<el-option
								  v-for="item in options"
								  :key="item.value"
								  :label="item.label"
								  :value="item.value">
								</el-option>
						  </el-select>
						</el-form-item>
					 </el-col>
				</el-row>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button :size="size" @click.native="dialogVisible = false">{{'取消'}}</el-button>
				<el-button :size="size" type="primary" @click.native="submitForm" :loading="editLoading">{{'提交'}}</el-button>
			</div>
		</el-dialog> 
	</div>
</template>

<script>
import KtTable from "@/components/KtTable"
import KtButton from "@/components/KtButton"
import TableColumnFilterDialog from "@/components/TableColumnFilterDialog"
const userJSon = require('../../../dataMock/userData.json');
	export default {
	  name: 'querytree',
	  components:{
		  KtTable,
		  KtButton,
		  TableColumnFilterDialog
	  },
	  data() {
		return {
			showOperation:true,//是否显示操作列（新增  批量删除）
			showLineOpt:true,//是否显示每一列最后的操作栏（编辑 删除）
			showBatchDelete:true,//是否显示批量删除
			showAdd:true,//是否显示新增
			showEdit:true,//是否显示编辑
			showDelete:true,//是否显示删除
			size: 'small',
			filters: {
				name: '',
				type:'',
				startDate:'',
			},
			opts: {
			
			},
			options: [{
				  value: '选项1',
				  label: '黄金糕'
				}, {
				  value: '选项2',
				  label: '双皮奶'
				}, {
				  value: '选项3',
				  label: '蚵仔煎'
				}, {
				  value: '选项4',
				  label: '龙须面'
				}, {
				  value: '选项5',
				  label: '北京烤鸭'
				}],
			columns: [],
			filterColumns: [],
			pageRequest: { pageNum: 1, pageSize: 10 },
			pageResult: {},
		
			operation: false, // true:新增, false:编辑
			dialogVisible: false, // 新增编辑界面是否显示
			editLoading: false,
			dataFormRules: {
				name: [
					{ required: true, message: '请输入用户名', trigger: 'blur' }
				]
			},
			// 新增编辑界面数据
			dataForm: {
				id: 0,
				name: '',//姓名
				like:'',//爱好
				address:'',//地址
				uname:'',//用户名
				upass: '',//密码
				email: '',//邮箱
				phone:'' //手机号
			},
			data: [{
			  id: 1,
			  label: '一级 1',
			  children: [{
				id: 4,
				label: '二级 1-1',
				children: [{
				  id: 9,
				  label: '三级 1-1-1'
				}, {
				  id: 10,
				  label: '三级 1-1-2'
				}]
			  }]
			}, {
			  id: 2,
			  label: '一级 2',
			  children: [{
				id: 5,
				label: '二级 2-1'
			  }, {
				id: 6,
				label: '二级 2-2'
			  }]
			}, {
			  id: 3,
			  label: '一级 3',
			  children: [{
				id: 7,
				label: '二级 3-1'
			  }, {
				id: 8,
				label: '二级 3-2'
			  }]
			}],
			defaultProps: {
			  children: 'children',
			  label: 'label'
			}
			
		}
    },
	methods: {
		// 获取分页数据
		findPage: function (data) {
			let res = userJSon;  //获取静态数据 
			this.pageResult = res;
			console.log('父组件参数',data);
			if(res && res.code == 'S'){
				this.$refs.tbl.loading = false; 
			}
		},
		// 显示新增界面
		handleAdd: function () {
			this.dialogVisible = true  //弹框显示
			this.operation = true     //表示新增
			this.dataForm = {
				id: 0,
				name: '', //姓名
				email: '',//邮箱
				phone: '',//手机号
				address:'',//住址
				uname:'', //用户名称
				upass: ''  //密码
			}
		},
		// 编辑
		handleEdit: function (data) {  //该方法给子组件条用
		console.log('当行内容',data);
			this.dialogVisible = true  //弹框显示
			this.operation = false     //表示新增
			this.dataForm = {
				id: data.row.id,
				name: data.row.name, //姓名
				email: data.row.email,//邮箱
				phone: data.row.phone,//手机号
				address:data.row.address,//住址
				uname:data.row.uname, //用户名称
				upass: data.row.upass  //密码
			}
		},
		handleDelete: function (data) { //删除
			console.log('删除的参数',data);
			let delArr = data.params;  //删除的id
				//axios进行批量删除（或者单个删除）
				
				//在这里虚拟的组装删除成功的参数
				var resp = {
					code : '200',
					msg:'删除成功',
				}
				data.callback(resp); //删除的回调方法，入参由接口返回			
		},
		submitForm: function () {
			this.$refs.dataForm.validate((valid) => {
				if (valid) {
					this.$confirm('确认提交吗？', '提示', {}).then(() => {
						this.editLoading = true
						let params = Object.assign({}, this.dataForm)  //拿到form的数据
						//在这里发出axios请求  //根据operate判断是新增还是编辑
						this.dialogVisible = false 
						this.editLoading = false
						
					})
				}
			})
		},
		// 获取部门列表
		findDeptTree: function () {
			this.$api.dept.findDeptTree().then((res) => {
				this.deptData = res.data
			})
		},
		// 菜单树选中
      	deptTreeCurrentChangeHandle (data, node) {
        	this.dataForm.deptId = data.id
        	this.dataForm.deptName = data.name
		},
		// 时间格式化
      	dateFormat: function (row, column, cellValue, index){
          	return format(row[column.property])
      	},
		// 处理表格列过滤显示
      	displayFilterColumnsDialog: function () {
			this.$refs.tableColumnFilterDialog.setDialogVisible(true)
      	},
		// 处理表格列过滤显示
      	handleFilterColumns: function (data) {
			this.filterColumns = data.filterColumns
			this.$refs.tableColumnFilterDialog.setDialogVisible(false)
      	},
		// 处理表格列过滤显示
      	initColumns: function () {
	// 			{
	// 	"id":"2",
	// 	"name":"超神王",
	// 	"phone":"18681474661",
	// 	"email":"wangwei@qq.com",
	// 	"address":"湖北省宜昌市",
	// 	"uname":"123456",
	// 	"upass":"123456"
	// }
			this.columns = [
				{prop:"id", label:"ID", minWidth:50},
				{prop:"name", label:"姓名", minWidth:120},
				{prop:"phone", label:"手机号码", minWidth:120},
				{prop:"email", label:"邮箱", minWidth:120},
				{prop:"address", label:" 住址", minWidth:100},
				{prop:"uname", label:"用户名", minWidth:100},
				{prop:"upass", label:"密码", minWidth:70}
			]
			this.filterColumns = JSON.parse(JSON.stringify(this.columns));
      	}
	},
	mounted() {
		//this.findDeptTree()
		this.initColumns()  //初始化需要显示的列元素
	}
}
</script>

<style lang="less">
	.querytree{
		.leftone{
			display: flex;
		.lefttree{
			padding-top: 10px;
		}		
		}
		
	}
</style>
