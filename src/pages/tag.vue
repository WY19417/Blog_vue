<template>
	<div class="tag">
		<el-card class="box-card">
			<div slot="header" class="d-flex align-items-center">
				<img class="card-icon" src="../assets/biaoqian.png" />
				<span>标签</span>
			</div>
			<div class="text item">
				<el-tag size="mini" class="tag-item" v-for="item in tag"  :key="item.id" :value="item.name" @click="change(item.name)">{{item.name}}<span>[{{item.blogs.length}}]</span></el-tag>
			</div>
		</el-card>

		<el-col :span="24" style="margin-top: 31px;" v-model="tag">
			<h3>这是{{tagtitle}}种类下的博客</h3>
        <el-row class="art-item">
          <el-card shadow="hover" v-for="item in tagmsg" :key="item">
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
                  <router-link to="/article" tag="span">
                    <el-button plain @click="read(item.id)">阅读全文</el-button>
                  </router-link>
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
      </el-col>
		
	</div>
</template>

<script>
	export default {
		data(){
			return{
				tag:[
					{
						id:1,
						name:"",
						blog:[],
					}
				],
				tableData:[],
				tagtitle:"springboot",
				tagmsg:"",
			}
		},
		name: 'tag',
		created(){
			const _this = this
			 axios.get('http://localhost:8081/tag/findAll').then(function(resp){
				console.log(resp)
				_this.tag = resp.data
				_this.tagmsg = resp.data[0].blogs
			 })
		},
		methods: {
			change(name){
				for(var i in this.tag){
					if(this.tag[i].name == name){
						this.tagtitle = this.tag[i].name,
						this.tagmsg = this.tag[i].blogs
					}
				}
			}
		}
	}
</script>

<style scoped>
	.box-card .item:hover {
		color: #409EFF;
		cursor: pointer;
	}
	
	.box-card span {
		font-weight: bold;
	}
	
	.card-icon {
		width: 20px;
		height: 20px;
		margin-right: 10px;
	}
	
	.tag-item {
		margin-right: 10px;
	}
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