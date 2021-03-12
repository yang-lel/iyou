<template>
  <div id="plus">
     <nav-bar>
       <div slot="middle" class="middle">发作品</div>
       <div slot="right">
          <el-button type="primary" round>发表</el-button>
       </div>
     </nav-bar>
     <form action="">
       
      <el-input v-model="input" placeholder="请输入标题" @blur="test"></el-input>
       <div class="edit_container">
        <quill-editor 
            v-model.lazy="content" 
            ref="myQuillEditor" 
            :options="editorOption" 
            @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
            @change="onEditorChange($event)">
        </quill-editor>
    </div>

  <br>
       <el-upload
  action="#"
  list-type="picture-card"
  :auto-upload="false"
   ref="upload" >
    <i slot="default" class="el-icon-plus"></i>
    <div slot="file" slot-scope="{file}">
      <img
        class="el-upload-list__item-thumbnail"
        :src="file.url" alt=""
      >
      <span class="el-upload-list__item-actions">
        <span
          class="el-upload-list__item-preview"
          @click="handlePictureCardPreview(file)"
        >
          <i class="el-icon-zoom-in"></i>
        </span>
        <span
          v-if="!disabled"
          on-remove	
          class="el-upload-list__item-delete"
          @click="handleRemove(file)"
        >
          <i class="el-icon-delete"></i>
        </span>
      </span>
    </div>
</el-upload>
<!-- <el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog> -->

     </form>
  </div>
</template>

<script>
import NavBar from '../../components/commond/NavBar/NavBar'

import { quillEditor } from "vue-quill-editor"; //调用编辑器
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

export default {
  name : 'Puls',
  components:{
    NavBar,
    quillEditor
  },
  data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false,
        input : '',
        content: '',
        editorOption: {
              placeholder: "分享您的旅程...",
              modules:{
                toolbar:[
                          [ 'underline', 'strike'],    //加粗，斜体，下划线，删除线
                          ['blockquote'],     //引用，代码块
                          [{ 'header': 1 }, { 'header': 2 }],        // 标题，键值对的形式；1、2表示字体大小
                          [{ 'list': 'ordered'}, { 'list': 'bullet' }],     //列表
                          // [{ 'script': 'sub'}, { 'script': 'super' }],   // 上下标
                          [{ 'indent': '-1'}, { 'indent': '+1' }],     // 缩进
                          // [{ 'direction': 'rtl' }],             // 文本方向
                          [{ 'size': ['small', false, 'large', 'huge'] }], // 字体大小
                          // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],     //几级标题
                          [{ 'color': [] }],     // 字体颜色，字体背景颜色
                          // [{ 'font': [] }],     //字体
                          [{ 'align': [] }],    //对齐方式
                          ['clean'],    //清除字体样式
                          // ['image','video']    //上传图片、上传视频
                          ]
                      }
                },
      }
    },
  methods: {
    handleRemove(file) {
      console.log(file);
      let fileList = this.$refs.upload.uploadFiles;
      let index = fileList.findIndex( fileItem => {
    return fileItem.uid === file.uid
      })
      fileList.splice(index, 1)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    onEditorReady(editor) { // 准备编辑器
 
    },
    onEditorBlur(){}, // 失去焦点事件
    onEditorFocus(){}, // 获得焦点事件
    onEditorChange(){
      console.log(this.content);
    }, // 内容改变事件
    test(){
      console.log(this.input);
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    },
  },
  beforeCreate(){
    if(this.$store.state.user === null){
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
#plus{
  height: 100vh;
  overflow: hidden;
}
form{
  margin-top: 49px;
}
.middle{
  font-size: 16px;
  height: 44px;
  line-height: 44px;
  text-align: center;
  font-weight: bold;
  font-family: "微软雅黑",Georgia,Serif;
}

div /deep/.el-upload--picture-card{
  height: 100px;
  width: 100px;
  line-height: 100px;
}
div /deep/.el-upload-list__item{
  height: 100px;
  width: 100px;
  line-height: 100px;
}
div /deep/ .el-button--primary {
  position: absolute;
  right: 5px;
  top: 8px;
}
div /deep/ .el-button{
  padding: 6px 10px;
}
div /deep/.ql-editor{
  height: 200px;
}
div /deep/ .ql-container.ql-snow{
  border:  none;
}
div /deep/ .ql-toolbar.ql-snow{
  border:  none;
  border-bottom: 1px solid #ccc;
}
div /deep/ .quill-editor{
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
div /deep/.el-input__inner:focus{
  border:1px solid #C0C4CC;
}
</style>