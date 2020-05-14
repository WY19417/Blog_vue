<template>
	<div class="archive">
	   <div v-for="(item,key) in tableData" :key="item.id">
		<div class="count"><span>{{key}}年共</span>{{item.length}}篇</div>
		<el-timeline>
			<el-timeline-item v-for="(activity, index) in item" :key="index" :color="activity.color" :timestamp="activity.updateTime|formatDate"  placement="top" @mouseenter="hoverLine(activity)">
				<div class="line-item">
					<router-link to="/article" tag="span">{{activity.title}}</router-link>
				</div>
			</el-timeline-item>
		</el-timeline>
	   </div>
	</div>
</template>

<script>
  import dateFormat from '../assets/js/Date.js'
	export default {
		name: 'archive',
		data() {
			return {
				activities: [{
					content: 'springBoot整合Redis',
					timestamp: '2018-04-15'
				}, {
					content: 'Activiti工作流',
					timestamp: '2018-04-13'
				}, {
					content: 'Vue路由',
					timestamp: '2018-04-11'
				}],
				tableData:[],	
 				datakey:[
					 2019,2018,2017
				 ],//存放key
			};
		},
		methods: {
			hoverLine(activity) {
				activity.color = "#409eff"
			}
			
		},created(){
			const _this = this;
			axios.get('http://localhost:8081/archive/findAll').then(function(resp){
				// console.log(resp);
				_this.tableData = resp.data
			})
		},
		filters:{
			formatDate(time) {
             let date = new Date(time);
             return dateFormat.formatDate(date, "yyyy"+"年"+"MM"+"月"+"dd"+"日"+" hh:mm:ss");
         }
    },
	}
</script>

<style scoped>
	.line-item {
		display: inline-block;
	}
	
	.line-item:hover {
		cursor: pointer;
		color: #409EFF;
	}
	
	.count {
		margin-bottom: 20px;
		font-size: 20px;
		color: #E6A23C;
	}
</style>