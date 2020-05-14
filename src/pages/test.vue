/* eslint-disable */
<template lang="html" v-model="content">
  <sui-comment-group>
    <h3 is="sui-header" dividing>评论列表</h3>

    <sui-comment v-for="item in content">
      <sui-comment-avatar :src="content[0].avatar" />
      <sui-comment-content>
        <a is="sui-comment-author">{{item.nickname}}</a>
        <sui-comment-metadata>
          <div>{{item.createTime|formatDate}}</div>
        </sui-comment-metadata>
        <sui-comment-text>{{item.content}}</sui-comment-text>
        <sui-comment-actions>
          <sui-comment-action>回复</sui-comment-action>
        </sui-comment-actions>
      </sui-comment-content>
       <sui-comment-group v-for="item2 in item.replyComments">
        <sui-comment>
          <sui-comment-avatar :src="item2.avatar" />
          <sui-comment-content>
            <a is="sui-comment-author">{{item.nickname}}@{{item2.nickname}}</a>
            <sui-comment-metadata>
              <div>{{item.createTime|formatDate}}</div>
            </sui-comment-metadata>
            <sui-comment-text>
              {{item2.content}}
            </sui-comment-text>
            <sui-comment-actions>
              <sui-comment-action>回复</sui-comment-action>
            </sui-comment-actions>
          </sui-comment-content>
        </sui-comment>
      </sui-comment-group>
    </sui-comment>

    <!-- <sui-comment v-for="item in content" :key="item.id">
      <sui-comment-avatar :src="item.avatar"/>
      <sui-comment-content>
        <a is="sui-comment-author">{{item.nickname}}</a>
        <sui-comment-metadata>
          <div>{{item.createTime|formatDate}}</div>
        </sui-comment-metadata>
        <sui-comment-text>
          <p>{{item.content}}</p>
        </sui-comment-text>
        <sui-comment-actions>
          <sui-comment-action>回复</sui-comment-action>
        </sui-comment-actions>
      </sui-comment-content>
      <sui-comment-group>
        <sui-comment>
          <sui-comment-avatar :src="content[0].parentComment.avatar" />
          <sui-comment-content>
            <a is="sui-comment-author">Jenny Hess</a>
            <sui-comment-metadata>
              <div>Just now</div>
            </sui-comment-metadata>
            <sui-comment-text>
              Elliot you are always so right :)
            </sui-comment-text>
            <sui-comment-actions>
              <sui-comment-action>Reply</sui-comment-action>
            </sui-comment-actions>
          </sui-comment-content>
        </sui-comment>
      </sui-comment-group>
    </sui-comment> -->

    <!-- <sui-comment>
      <sui-comment-avatar :src="content[2].avatar" />
      <sui-comment-content>
        <a is="sui-comment-author">Joe Henderson</a>
        <sui-comment-metadata>
          <div>5 days ago</div>
        </sui-comment-metadata>
        <sui-comment-text>
          Dude, this is awesome. Thanks so much
        </sui-comment-text>
        <sui-comment-actions>
          <sui-comment-action>Reply</sui-comment-action>
        </sui-comment-actions>
      </sui-comment-content>
    </sui-comment> -->

  </sui-comment-group>
</template>

<script>
import dateFormat from "../assets/js/Date";
export default {
  name: "test",
  props:{
      content:{
        type:Array,required:true
      }
  },
  data() {
    return {
        content:[
          {
            
          }
        ]
    };
  },
  filters: {
    formatDate(time) {
      let date = new Date(time);
      return dateFormat.formatDate(
        date,
        "yyyy" + "年" + "MM" + "月" + "dd" + "日"
      );
    }
  },created(){
   
  }
};
</script>
<style scoped>
.reply {
  float: right;
}
</style>