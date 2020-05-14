<template>
	<div class="tag">
		<el-card class="box-card">
			<div slot="header" class="d-flex align-items-center">
				<img class="card-icon" src="../assets/biaoqian.png" />
				<span>种类</span>
				<el-button class="ml-auto" style="padding: 3px 0" type="text">
		    	<router-link to="/apply" tag="span">获取更多<i class="el-icon-d-arrow-right"></i></router-link>
		    </el-button>
			</div>
			<div class="text item fonts" v-for="item in tag" :key="item.id">
				<el-collapse>
  					{{item.name}}
				</el-collapse>
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
				]
			}
		},
		name: 'types',
		created(){
			const _this = this
			 axios.get('http://localhost:8081/type/findAll').then(function(resp){
				// console.log(resp)
				_this.tag = resp.data
				
			 })
		},
		methods: {
			
		}
	}
</script>

<style scoped>
.fonts{
	 font-family: sans-serif;
    text-align: center;
    color: brown;
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