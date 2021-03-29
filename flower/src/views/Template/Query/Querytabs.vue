<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-row>
          <el-col :span="12">
            <el-form-item label="活动名称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="活动区域" prop="region">
              <el-select size="2" v-model="ruleForm.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="活动时间" required>
              <el-col :span="11">
                <el-form-item prop="date1">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="ruleForm.date1"
                    style="width: 100%;"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-form-item prop="date2">
                  <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
                </el-form-item>
              </el-col>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="即时配送" prop="delivery">
              <el-switch v-model="ruleForm.delivery"></el-switch>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="活动性质" prop="type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-check" @click="submitForm('ruleForm')">提交</el-button>

          <el-button type="primary" icon="el-icon-yx-loop2" @click="resetForm('ruleForm')">重置</el-button>
          <el-button type="primary" icon="el-icon-yx-undo2" @click="close()">取消</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="配置管理" name="second">
      <kt-table
        permsEdit="sys:user:edit"
        permsDelete="sys:user:delete"
        :data="pageResult"
        :columns="filterColumns"
        ref="tbl"
        @findPage="findPage"
        @handleEdit="handleEdit"
        @handleDelete="handleDelete"
      ></kt-table>
    </el-tab-pane>
    <el-tab-pane label="角色管理" name="third">
		
		角色管理
		<div class="flexcenter">
			<div class="flexone">1</div>
			<div class="flexone">2</div>
			<div class="flexone">3</div>
		</div>
		
		
		
		
	</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
</template>
<script>
import KtTable from "@/components/KtTable";
import KtButton from "@/components/KtButton";
import TableColumnFilterDialog from "@/components/TableColumnFilterDialog";
// import { format } from "@/utils/datetime"

const userJSon = require("@/dataMock/userData.json");

export default {
  components: {
    KtTable,
    KtButton,
    TableColumnFilterDialog
  },
  data() {
    return {
      activeName: "second",
      size: "small",
      filters: {
        name: ""
      },
      columns: [],
      filterColumns: [],
      pageRequest: { pageNum: 1, pageSize: 10 },
      pageResult: {},

      operation: false, // true:新增, false:编辑
      dialogVisible: false, // 新增编辑界面是否显示
      editLoading: false,
      dataFormRules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }]
      },
      // 新增编辑界面数据
      dataForm: {
        id: 0,
        name: "",
        password: "123456",
        deptId: 1,
        deptName: "",
        email: "test@qq.com",
        mobile: "13889700023",
        status: 1,
        userRoles: []
      },
      deptData: [],
      deptTreeProps: {
        label: "name",
        children: "children"
      },
      roles: [],
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },

  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    findPage: function(data) {
      let res = userJSon; //获取静态数据
      this.pageResult = res;
      console.log("父组件参数", data);
      if (res && res.code == "S") {
        this.$refs.tbl.loading = false;
      }
    },
    handleEdit: function(data) {},
    handleDelete: function(data) {},
    // 批量删除

    // 显示新增界面
    handleAdd: function() {
      this.dialogVisible = true;
      this.operation = true;
      this.dataForm = {
        id: 0,
        name: "",
        password: "",
        deptId: 1,
        deptName: "",
        email: "test@qq.com",
        mobile: "13889700023",
        status: 1,
        userRoles: []
      };
    },

    // 编辑
    submitForm: function() {
      this.$refs.dataForm.validate(valid => {
        if (valid) {
          this.$confirm("确认提交吗？", "提示", {}).then(() => {
            this.editLoading = true;
            let params = Object.assign({}, this.dataForm);
            let userRoles = [];
            for (let i = 0, len = params.userRoles.length; i < len; i++) {
              let userRole = {
                userId: params.id,
                roleId: params.userRoles[i]
              };
              userRoles.push(userRole);
            }
            params.userRoles = userRoles;
            this.$api.user.save(params).then(res => {
              this.editLoading = false;
              if (res.code == 200) {
                this.$message({ message: "操作成功", type: "success" });
                this.dialogVisible = false;
                this.$refs["dataForm"].resetFields();
              } else {
                this.$message({
                  message: "操作失败, " + res.msg,
                  type: "error"
                });
              }
              this.findPage(null);
            });
          });
        }
      });
    },
    // 获取部门列表
    findDeptTree: function() {
      this.$api.dept.findDeptTree().then(res => {
        this.deptData = res.data;
      });
    },
    // 菜单树选中
    deptTreeCurrentChangeHandle(data, node) {
      this.dataForm.deptId = data.id;
      this.dataForm.deptName = data.name;
    },
    // 时间格式化
    dateFormat: function(row, column, cellValue, index) {
      return format(row[column.property]);
    },
    // 处理表格列过滤显示
    displayFilterColumnsDialog: function() {
      this.$refs.tableColumnFilterDialog.setDialogVisible(true);
    },
    // 处理表格列过滤显示
    handleFilterColumns: function(data) {
      this.filterColumns = data.filterColumns;
      this.$refs.tableColumnFilterDialog.setDialogVisible(false);
    },
    // 处理表格列过滤显示
    initColumns: function() {
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
        { prop: "id", label: "ID", minWidth: 50 },
        { prop: "name", label: "姓名", minWidth: 120 },
        { prop: "phone", label: "手机号码", minWidth: 120 },
        { prop: "email", label: "邮箱", minWidth: 120 },
        { prop: "address", label: " 住址", minWidth: 100 },
        { prop: "uname", label: "用户名", minWidth: 100 },
        { prop: "upass", label: "密码", minWidth: 70 }
        // {prop:"createBy", label:"创建人", minWidth:120},
        // {prop:"createTime", label:"创建时间", minWidth:120, formatter:this.dateFormat}
        // {prop:"lastUpdateBy", label:"更新人", minWidth:100},
        // {prop:"lastUpdateTime", label:"更新时间", minWidth:120, formatter:this.dateFormat}
      ];
      this.filterColumns = JSON.parse(JSON.stringify(this.columns));
    }
  },
  mounted() {
    //this.findDeptTree()
    this.initColumns(); //初始化需要显示的列元素
  }
};
</script>
<style scoped lang="less">
	.flexcenter{
		display: flex;
		justify-content: center;
		align-items: center;	
	}
	.flexone{
		margin: 10px 15px;
		flex: 1;
		border: 1px solid #333;
	}
	
</style>