<template>
	<div class="tag">
		<el-card class="box-card">
			<div slot="header" class="d-flex align-items-center">
				<img class="card-icon" src="../assets/biaoqian.png" />
				<span>最新评论</span>
			</div>
			<div class="text item fonts" v-for="item in comment.content" :key="item.id">
				
				<el-collapse>
  					<p class="avt">{{item.nickname}}说:</p>{{item.content|ellipsis}}
				</el-collapse>
			</div>
		</el-card>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				comment:[
					{
						id:1,
						name:1
					}
				]
			}
		},
		name: 'comment',
		created(){
			const _this = this
			 axios.get('http://localhost:8081/comment/findtop').then(function(resp){
				// console.log(resp)
				_this.comment = resp.data
				
			 })
		},
		methods: {
			
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
	}
</script>

<style scoped>	
	.avt{
		color: cornflowerblue;
	}
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
</style>