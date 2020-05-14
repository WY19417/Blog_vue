<template>
	<div class="tag">
		<el-card class="box-card">
			<div slot="header" class="d-flex align-items-center">
				<img class="card-icon" src="../assets/biaoqian.png" />
				<span>标签</span>
			</div>
			<div class="text item">
				<el-tag size="mini" class="tag-item" v-for="item in tag"  :key="item.id">{{item.name}}<span>[{{item.blogs.length}}]</span></el-tag>
			</div>
		</el-card>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				tag:[
					{
						id:1,
						name:1
					}
				],
			}
		},
		name: 'tag',
		created(){
			const _this = this
			 axios.get('http://localhost:8081/tag/findAll').then(function(resp){
				console.log(resp)
				_this.tag = resp.data
				
			 })
		},
		methods: {
			
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
</style>