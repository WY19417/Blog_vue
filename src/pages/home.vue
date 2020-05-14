<template>
  <div class="home">
    <el-row id="artList" type="flex" justify="space-around">
      <el-col :span="16">
        <el-row class="art-item" v-model="tableData">
          <el-card shadow="hover" v-for="item in filterBlog" :key="item.id">
            <h5>
              <router-link to="/article" tag="span" class="art-title">{{ item.title }}</router-link>
            </h5>
            <el-row class="art-info d-flex align-items-center justify-content-start">
              <div class="art-time">
                <i class="el-icon-time"></i>
                {{item.createTime|formatDate}}
              </div>
              <div class="d-flex align-items-center" v-for="item2 in item.tags" :key="item2.id">
                <img class="tag" src="../assets/tag.png" />
                <el-tag size="mini">{{item2.name}}</el-tag>
              </div>
            </el-row>
            <el-row class="art-body">
              <div class="side-img hidden-sm-and-down">
                <img class="art-banner" :src="item.firstPicture" />
              </div>
              <div class="side-abstract">
                <div class="art-abstract">
                  {{item.description}}
                  <!-- Iconfont-国内功能很强大且图标内容很丰富的矢量图标库, 提供矢量图标下载、在快照 在小程序中使用阿里文字图标在小程序中使用阿里文字图标库前在小程序中使用阿里文字图标库前库前端开发的便捷工具 - AndrewNeo - CSDN博客 -->
                </div>
                <div class="art-more">
                  <span  tag="span">
                    <el-button plain @click="read(item.id)">阅读全文</el-button>
                  </span>
                  <div class="view">
                    <i class="el-icon-view"></i>
                    {{item.views}}
                  </div>
                </div>
              </div>
            </el-row>
          </el-card>
          <img class="star" src="../assets/star.png" />
        </el-row>
        <div class="block pagination">
          <el-pagination background="#f9f9f9" layout="prev, pager, next" :total="50"></el-pagination>
        </div>
      </el-col>
      <el-col :span="6" class="hidden-sm-and-down" id="side">
        <div class="item">
          <div style="margin-top: 15px;">
  					<el-input placeholder="请输入内容" v-model="searchinfo" class="input-with-select">
   					<el-button slot="append" icon="el-icon-search" @click="submit()"></el-button>
 					</el-input>
			</div>
        </div>
        <div class="item">
          <tag></tag>
        </div>
        <div class="item">
          <friend></friend>
        </div>
        <div class="item">
          <types></types>
        </div>
        <div class="item">
          <comments></comments>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
	import friend from '../components/friend'
  import tag from '../components/tag'
  import types from '../components/types'
  import dateFormat from '../assets/js/Date.js'
  import comments from '../components/comment'
	export default {
		data (){
			return{
				tableData:[
				{
					id:1,
					name:"框架搭建",
				},
				{
					id:2,
					name:"算法集成"
				},
				{
					id:3,
					name:"学习任务"
				}
        ],
        searchinfo:""
			}
		},
		created(){
			const _this = this;
			axios.get('http://localhost:8081/admin/findAll').then(function(resp){
			//  const  c=	this.formatStartTime(tableData)
			//  console.log(c)
        _this.tableData = resp.data
				
      })
      // ,
      // axios.get('http://localhost:8081/tag/findAll').then(function(resp){
			// //  const  c=	this.formatStartTime(tableData)
			//    console.log(resp)
			// 	_this.tag = resp.data
				
			// })
      
		},
		name: 'home',
		components: {
			friend,
      tag,
      types,
      comments
		},methods:{
      read(row) {
                this.$router.push({
                    path: '/article',
                    query:{
                        id:row
                    }
                })
                
            },
      submit(){
        const _this = this;
			axios.get('http://localhost:8081/admin/findone?id=18').then(function(resp){
			//  const  c=	this.formatStartTime(tableData)
			//  console.log(c)
        _this.tableData = resp.data
				
      })
      }
		},
		filters:{
			formatDate(time) {
             let date = new Date(time);
             return dateFormat.formatDate(date, "yyyy"+"年"+"MM"+"月"+"dd"+"日"+" hh:mm:ss");
         }
    },
    computed:{
      filterBlog:function(){
        return this.tableData.filter((item) =>{
          return item.title.match(this.searchinfo);
        })
      }
    }
	}
</script>

<style scoped>
#side .item {
  margin-bottom: 30px;
}

.art-item {
  margin-bottom: 30px;
  position: relative;
}

.art-item .star {
  width: 60px;
  height: 60px;
  position: absolute;
  top: 0;
  right: 0;
}

img.tag {
  width: 16px;
  height: 16px;
}

.art-title {
  border-left: 3px solid #f56c6c;
  padding-left: 5px;
  cursor: pointer;
}

.art-title:hover {
  padding-left: 10px;
  color: #409eff;
}

.art-time {
  margin-right: 20px;
}

.art-body {
  display: flex;
  padding: 10px 0;
}

.side-img {
  height: 150px;
  width: 270px;
  overflow: hidden;
  margin-right: 10px;
}

img.art-banner {
  width: 100%;
  height: 100%;
  transition: all 0.6s;
}

img.art-banner:hover {
  transform: scale(1.4);
}

.side-abstract {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.art-abstract {
  flex: 1;
  color: #aaa;
}

.art-more {
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.art-more .view {
  color: #aaa;
}
h5 {
  font-size: 18px;
}
.pagination {
  background-color: #f9f9f9;
}
</style>