<template>
<div class="f-footer">
	<el-main class="main">
		<el-row>
			<el-col :span="4" class="item-col">
				<img src="../images/wechat.png" style="width:110px;height:110px">
			</el-col>
			<el-col :span="7" class="item-col">
				<div class="title" style="text-align:center">最新博客</div>
				<div class="item" style="text-align:center"  v-for="item in blog.content" :key="item.id"><a href="#" class="out-link">{{item.title}}</a></div>
			</el-col>
			<el-col :span="7" class="item-col">
				<div class="title" style="text-align:center">联系我</div>
				<div class=""><a href="#" class="out-link">Email：wantseeqiu@foxmail.com</a></div>
				<div class=""><a href="#" class="out-link">QQ:2212048372</a></div>
			</el-col>
			<el-col :span="6" class="item-col weside">
				<div class="item" style="text-align:center">
					Blog
				</div>
				<div class="item">
					这是我的个人博客、会分享关于编程、写作、思考相关的任何内容，希望可以给来到这儿的人有所帮助...
				</div>
			</el-col>
		</el-row>
	</el-main>
</div>
</template>

<script>
export default {
  name: 'footer',
  data() {
	  return {
		  blog:[
			  {}
		  ]
	  }
	  
  },
  created() {
	  const _this = this;
		axios.get('http://localhost:8081/admin/findtop').then(function(resp){
			//  const  c=	this.formatStartTime(tableData)
			 console.log(resp)
        _this.blog = resp.data
				
      })
  },
}
</script>

<style scoped>
.f-footer{
	padding: 20px;
	text-align: center;
	color: #fff;
	background-color: #555;
}
.main{
	width: 70%;
	margin: 0 auto;
	color: #ccc;
}
.out-link{
	text-decoration: none;
	color: #ccc;
}
.out-link:hover{
	color: #ffffff;
}
.item-col{
	text-align: left;
}
.item-col.weside{
	font-size: 14px;
}
.item-col .title{
	color: #ddd;
	margin-bottom: 10px;
}
.item span{
	margin-right: 5px;
}
</style>