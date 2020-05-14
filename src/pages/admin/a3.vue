<template>
<div>
  <div style="magin-top:15px;width:50%">
     <el-input v-model="input" placeholder="请输入内容" @input="change($event)" style="width:52% !important"></el-input>
     <el-button type="primary" plain style="inline" @click="send(input)">搜索</el-button>
     <el-button type="success" plain style="inline" @click="getList()">新增</el-button>
  </div>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="ID"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px" type="success"><el-tag type="success">{{ scope.row.id }}</el-tag></span>
      </template>
    </el-table-column>
    <el-table-column
      label="博客分类"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>名称: {{ scope.row.name }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
    
  </el-table>
   <el-dialog title="编辑信息" :visible.sync="dialogFormVisible">
      <el-form :model="ruleForm">
        <el-form-item label="id" :label-width="formLabelWidth">
          :
          <el-input v-model="ruleForm.id" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="标签名" :label-width="formLabelWidth">
          :
          <el-input v-model="ruleForm.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="add(ruleForm)">确 定</el-button>
      </div>
    </el-dialog>
</div>
</template>

<script>
  export default {
      name:'a3',
    data() {
      return {
        dialogFormVisible: false,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
      ruleForm: {
        id: "",
        name: ""
      }
      }
    },
     created() {
         const _this = this
          axios.get('http://localhost:8081/type/findAll').then(function(resp){
              _this.tableData = resp.data
          })
      },
    methods: {
      handleEdit(index, row) {
         this.dialogFormVisible = true;
          const _this = this;
          console.log(row);
          axios
        .get("http://localhost:8081/type/find/" + row.id)
        .then(function(resp) {
          _this.ruleForm = resp.data;
        });
      },
      handleDelete(index, row) {
      // axios.delete("http://localhost:8081/type/delete/" + row.id).then(function() {
      //          _this.alert("删除成功");
      //         window.location.reload()
      //   });
          axios.delete('http://localhost:8081/type/delete/'+row.id).then(function(resp){
            alert("删除成功")
            window.location.reload();
          })
      },
      send(input){
        axios.get('http://localhost:8081/type/find/'+input).then(function(resp){
          // _this.tableData = resp.data
          // this.$forceUpdate()
        alert("你搜索到的数据是          "+resp.data.name)
        })
      },
      change(){
        this.$forceUpdate()
      },
      getList(){
        this.dialogFormVisible = true;
      },
      add(msg){
        const _this = this
        axios.put('http://localhost:8081/type/save?name='+msg.name).then(function(resp){
          if(resp.data=='success'){
            _this.dialogFormVisible = false;
            alert("添加成功")
            window.location.reload()
          }else{
            alert(resp.data)
            window.location.reload()
          }
        })
      },
      deleteBook(row) {
     
    },
    }
  }
</script>