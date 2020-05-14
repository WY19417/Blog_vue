<template>
  <div style="height:100%">
    <div style="margin-top: 15px; width:50%;">
    <div style="width:80%;display:inline-block">
      <el-input placeholder="请输入内容" @input="change($event)" class="input-with-select">
        <el-select v-model="select[0].name" slot="prepend" placeholder="请选择" @change="chose(data.name)">
          <el-option v-for="item in select" :key="item.id" :label="item.name" :value="item.name"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
      <el-button type="success" plain style="displap:inline-block;float:right">新增博客</el-button>
    </div>
        <br/>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="id" label="编号" width="50"></el-table-column>
      <el-table-column prop="title" label="标题" width="120"></el-table-column>
      <el-table-column prop="firstPicture" label="首图" width="120"></el-table-column>
      <el-table-column prop="flag" label="创作方式" width="120"></el-table-column>
      <el-table-column prop="views" label="观看数" width="120"></el-table-column>
      <el-table-column prop="createTime" label="创作时间" width="120"></el-table-column>
      <el-table-column prop="description" label="描述" width="120"></el-table-column>
      <el-table-column prop="updateTime" label="更改时间" width="120"></el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <el-button @click="edit(scope.row)" type="text" size="small">修改</el-button>
          <el-button @click="deleteBook(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>


    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="pageSize"
      :total="total"
      @current-change="page"
    ></el-pagination>

    <el-dialog title="编辑信息" :visible.sync="dialogFormVisible">
      <el-form :model="ruleForm">
        <el-form-item label="标题" :label-width="formLabelWidth">
          :
          <el-input v-model="ruleForm.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="首图地址" :label-width="formLabelWidth">
          :
          <el-input v-model="ruleForm.firstPicture" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="创作方式" :label-width="formLabelWidth">
          :
          <el-input v-model="ruleForm.flag" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<style>
.el-select .el-input {
    width: 130px;
  }
</style>
<script>
export default {
    name:'a4',
  methods: {
    deleteBook(row) {
      const _this = this;
      axios
        .delete("http://localhost:8081/book/deleteById/" + row.id)
        .then(function(resp) {
          _this.$alert("《" + row.name + "》删除成功！", "消息", {
            confirmButtonText: "确定",
            callback: action => {
              window.location.reload();
            }
          });
        });
    },
    edit(row) {
      this.dialogFormVisible = true;
      const _this = this;
      console.log(row);
      axios
        .get("http://localhost:8081/admin/findone?id=" + row.id)
        .then(function(resp) {
          _this.ruleForm = resp.data;
        });
      //   this.$router.push({
      //     path: "/Modal"
      //   });
    },
    page(currentPage) {
      const _this = this;
      axios
        .get("http://localhost:8081/admin/findAll/" + currentPage + "/6")
        .then(function(resp) {
          console.log(resp);
          _this.tableData = resp.data.content;
          _this.pageSize = resp.data.size;
          _this.total = resp.data.totalElements;
        });
    },
    change(){
        this.$forceUpdate()
      },
    typedata(){
      const _this = this;
      axios.get("http://localhost:8081/type/findAll").then(function(resp){
        console.log(resp.data)
        _this.select = resp.data
    })
    },
    chose(row){
      console.log(row)
      // this.inputs = event.target.value
    }
  },

  data() {
    return {
      pageSize: "1",
      total: "11",
      dialogFormVisible: false,
      inputs:'类别',
      tableData: [
        {
          id: 1,
          name: "解忧杂货店",
          author: "东野圭吾"
        },
        {
          id: 2,
          name: "追风筝的人",
          author: "卡勒德·胡赛尼"
        },
        {
          id: 3,
          name: "人间失格",
          author: "太宰治"
        }
      ],
      select:[
          {
            name:1,
            id:1
          },{
            name:2,
            id:1
          }
      ],
      ruleForm: {
        title: "1",
        firstPicture: "2",
        flag: "3"
      }
    };
  },
  created() {
    const _this = this;
    axios.get("http://localhost:8081/admin/findAll/1/6").then(function(resp) {
      console.log(resp);
      _this.tableData = resp.data.content;
      _this.pageSize = resp.data.size;
      _this.total = resp.data.totalElements;
    });
    this.typedata()
  },
  filters:{
    ellipsis (value){
     			 if (!value) return ''
    			 if (value.length > 8) {
       			 return value.slice(0,32) + '...'
     			 }
     				 return value
   				 }
  }
};
</script>