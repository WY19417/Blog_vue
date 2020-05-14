<template>
  <div>
    <el-input v-model="dataForm.title" placeholder="请输入博客标题" class="input-with-select">
      <el-select v-model="dataForm.flag.name" slot="prepend" placeholder="请选择">
        <el-option v-for="item in dataForm.flag" :key="item.name" :label="item.name" id="flag" :value="item.name"></el-option>
      </el-select>
    </el-input>
    <mavon-editor v-model="dataForm.content" />
    <div class="f1">
      <div class="f2">
          <p class="f2-1">请选择种类:</p>
          <el-select  v-model="dataForm.type.name" slot="prepend" placeholder="请选择">
            <el-option  v-for="item in dataForm.type" :key="item.id" :label="item.name" :value="item.name"></el-option>
          </el-select>
        
      </div>
      <div class="f2">
          <p class="f2-1">请选择标签:</p>
          <template>
          <el-select multiple filterable allow-create v-model="tagvalue" slot="prepend" placeholder="请选择">
            <el-option v-for="item in dataForm.tag" :key="item.id" :label="item.name" :value="item.name"></el-option>
          </el-select>
          </template>
      </div>
    </div>
    <div class="f1">
      <el-input placeholder="请输入首图地址" v-model="dataForm.first_picture" class="input-with-select">
        <!-- <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option v-for="item in select" :key="item.id" :label="item.name" :value="item.name"></el-option>
        </el-select> -->
      </el-input>
    </div>
    <p class="ft">博客描述:</p><el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="dataForm.description"></el-input>
    <div class="f3">
        <el-checkbox-group v-model="dataForm.checkList">
        <el-checkbox  label="published">推荐</el-checkbox>
        <el-checkbox  label="recommend">赞赏</el-checkbox>
        <el-checkbox  label="share_statement">评论</el-checkbox>
        <el-checkbox  label="commentabled">转载</el-checkbox>
        </el-checkbox-group>
    </div>
    <div class="f4">
        <el-button type="warning" @click="test()">返回</el-button>
        <el-button type="info" plain @click="submit()">保存</el-button>
        <el-button type="success">发布</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "edit",
  data() {
    return {
      defaultData: "preview",
      dataForm:{
        title:"",
        first_picture:"",
        description:"",
        id:"333",
        select: [
        {
          name: 1
        },
        {
          name: 2
        }
      ],
      content: "",
      flag:[
        {
          id:1,
          name:"原创"
        },
        {
          id:2,
          name:"转载"
        },
        {
          id:3,
          name:"翻译"
        }
      ],
      type:
        {
          id:1,
          name:"java"
        }
      ,
      tag:[
        {
          id:1,
          name:"c++"
        },
        {
          id:2,
          name:"php"
        },
      ],
      checkList:[
        'published',//推荐
        'recommend',//赞赏
        'share_statement',//转载
        'commentabled'//是否开启评论
      ],
      msg:"",
      },
      tagvalue:[

      ],
    };
  },
  created(){
    const _this = this;
    axios.get('http://localhost:8081/type/findAll').then(function(resp){
      _this.dataForm.type = resp.data
    });
    axios.get('http://localhost:8081/tag/findAll').then(function(resp){
      _this.dataForm.tag = resp.data
    });
    
    },
    methods:{
        submit(){
          const _this = this;
          var flag = document.getElementById("flag");
          let blog ={
            title:_this.dataForm.title,
            // select:_this.dataForm.select,
            content:_this.dataForm.content,
            flag:_this.dataForm.flag.name,
            type:{
              id:2,
              name:"算法集成",
            },
            tags:[
              {
              id:13,
              name:"springboot"
              },
              {
              id:14,
              name:"java"
              }
            ],
            checkList:_this.dataForm.checkList,
            description:_this.dataForm.description,
            firstPicture:_this.dataForm.first_picture
          }
          console.log(blog)
          axios.put('http://localhost:8081/admin/save',blog).then(function(resp){
            if(resp.data=='success'){
              alert('保存成功')
            }else{
              alert('保存失败')
            }
          })
          e.preventDefault();
          
        },
      test(){
        Console.log(dataForm)
      }
        
    }
    
};
</script>
<style scoped>
.f1 {
  display: inline-block;
  width: 100%;
  margin-top: 6px;
}
.f2 {
  width: 50%;
  display: inline-block;
}
.ft{
   padding: 0;
    color: darkslategray;
    font-size: large;
    font-family: initial;
    margin-top: 20px;
    margin-bottom: 20px;
}
.f3{
    margin: 12px;
}
.f4{
    text-align: right;
}
.f2-1{
  display: inline-block;
    font-size: larger;
    font-style: italic;
    font-family: initial;
}
</style>