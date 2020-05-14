<template>
    <div id="app">
    <el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']" default-active="'1-2">

      <el-submenu index="1">
        <template slot="title"><i class="el-icon-setting"></i>后台管理</template>
          <el-menu-item index="1-1"><router-link class="font" to="/a1">首页面</router-link></el-menu-item>
          <el-menu-item index="1-2"><router-link class="font" to="/a2">标签管理</router-link></el-menu-item>
          <el-menu-item index="1-2"><router-link class="font" to="/a3">种类管理</router-link></el-menu-item>
           <el-menu-item index="1-2"><router-link class="font" to="/a4">博客管理</router-link></el-menu-item>
           <el-menu-item index="1-2"><router-link class="font" to="/edit">新增博客</router-link></el-menu-item>
        </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
       
      <!-- <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar>
      <span>王小虎</span> -->
    </el-header>
    
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>

  </div>
</template>
<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
  .font{
        font-size: 17px;
       text-decoration: none;
  }
  .router-link-active{
        background: gray;
  }
</style>

<script>
  import edit from '../pages/edit'
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
          tableData: Array(20).fill(item),
          squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      }

    },
    components:{
        edit    
    }
  };
</script>
