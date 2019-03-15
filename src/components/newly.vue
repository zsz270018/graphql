<template>
  <div>
    <el-dialog title="新增" :visible.sync="addFormVisible" :close-on-click-modal="false">
      <el-form :model="addForm" label-width="120px" ref="addForm">
        <el-form-item label="机构名称" prop="name">
          <el-input v-model="addForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="组织机构代码" prop="code">
          <el-input v-model="addForm.code" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="法定人姓名" prop="statutory">
          <el-input v-model="addForm.statutory" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="企业人电话" prop="phone">
          <el-input v-model="addForm.phone" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="开户银行" prop="open">
          <el-input v-model="addForm.open" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="银行账户" prop="account">
          <el-input v-model="addForm.account" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="全国连锁店数" prop="chain">
          <el-input v-model="addForm.chain" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="从业人员数量" prop="staff">
          <el-input v-model="addForm.staff" auto-complete="off"></el-input>
        </el-form-item>
      </el-form> 
      <!-- 上传图片 -->
       <input @change="fileChange($event)" type="file" id="upload_file" multiple style="display: none" />
      <div class="add" @click="chooseType">
        <div class="add-image" align="center">
          <img src="../assets/xiangji.png" alt="" class="xiangji">
          <p class="font13">添加图片</p>
        </div>
      </div>
      <div class="add-img" v-show="imgList.length">
        <p class="font14">图片(最多6张，还可上传<span v-text="6-imgList.length"></span>张)</p>
        <ul class="img-list">
          <li v-for="(url,index) in imgList" :key="index">
            <img class="del" @click.stop="delImg(index)" />
            <img :src="url.file.src" style="width:150px;height:150px;">
          </li>
        </ul>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="addFormVisible = false">取消</el-button>
        <el-button type="primary" @click.native="addSubmit" :loading="addLoading" v-model="addFormVisible">提交</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data(){
    return {
      imgList: [],
      addLoading: false,
      addFormVisible: true,//新增界面是否显示
      addForm: {
        name: '',
        code: '',
        statutory: '',
        phone: '',
        open:'',
        account: '',
        chain: '',
        staff: ''
      },
    }
  },
  methods: {
    //新增确定按钮
    addSubmit: function () {
      this.addForm = {
        name: this.addForm.name,
        code: this.addForm.code,
        statutory: this.addForm.statutory,
        phone: this.addForm.phone,
        open:this.addForm.open,
        account: this.addForm.account,
        chain: this.addForm.chain,
        staff: this.addForm.staff
      }
      //console.log(this.addForm)
      this.list.list.push(this.addForm)
      this.addFormVisible = false;
    },
    //上传图片
    chooseType() {
      document.getElementById('upload_file').click();
    },
    fileChange(el) {
      if (!el.target.files[0].size) return;
      this.fileList(el.target);
      el.target.value = ''
    },
    fileList(fileList) {
      let files = fileList.files;
      for (let i = 0; i < files.length; i++) {
        //判断是否为文件夹
        if (files[i].type != '') {
          this.fileAdd(files[i]);
        } else {
          //文件夹处理
          this.folders(fileList.items[i]);
        }
      }
    },
    //文件夹处理
    folders(files) {
      let _this = this;
      //判断是否为原生file
      if (files.kind) {
        files = files.webkitGetAsEntry();
      }
      files.createReader().readEntries(function (file) {
        for (let i = 0; i < file.length; i++) {
          if (file[i].isFile) {
            _this.foldersAdd(file[i]);
          } else {
            _this.folders(file[i]);
          }
        }
      });
    },
    foldersAdd(entry) {
      let _this = this;
      entry.file(function (file) {
        _this.fileAdd(file)
      })
    },
    fileAdd(file) {
      if (this.limit !== undefined) this.limit--;
      if (this.limit !== undefined && this.limit < 0) return;
      //总大小
      this.size = this.size + file.size;
      //判断是否为图片文件
      if (file.type.indexOf('image') == -1) {
        this.$dialog.toast({ mes: '请选择图片文件' });
      } else {
        let reader = new FileReader();
        let image = new Image();
        let _this = this;
        reader.readAsDataURL(file);
        reader.onload = function () {
          file.src = this.result;
          image.onload = function () {
            let width = image.width;
            let height = image.height;
            file.width = width;
            file.height = height;
            _this.imgList.push({
              file
            });
            // console.log( _this.imgList);
          };
          image.src = file.src;
        }
      }
    },
    delImg(index) {
      this.size = this.size - this.imgList[index].file.size;//总大小
      this.imgList.splice(index, 1);
      if (this.limit !== undefined) this.limit = 6 - this.imgList.length;
    },
  }
}
</script>
<style>

</style>

