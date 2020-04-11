<template>
  <div class="app">
    <!--占位符-->
    <div style="height: 0.52rem;"></div>
    <div class="top">
      <p>修改用户名</p>
      <hr>
      <div class="top-c">
        <div class="username">
          <p><i>*</i>用户名</p> <input type="text" required>
          <div class="err">
            <a-icon type="exclamation"/>
            用户名格式正确 或已存在
          </div>
        </div>
        <div class="username">
          <p><i>*</i>密码</p> <input :type="pass" required class="inp">
          <div class="err">
            <a-icon type="exclamation"/>
            密码不正确, 请重新输入
          </div>
          <div class="passYan" @click="handlerPass">
            <i class="iconfont" :class="passFlag ? 'icon-htmal5icon09': 'icon-htmal5icon08'"></i>
          </div>
        </div>
      </div>
      <!--修改用户名确定按钮-->
      <div class="kuai"> 修改用户名</div>
    </div>
    <div class="top">
      <p>修改密码</p>
      <hr>
      <div class="top-c">
        <div class="username">
          <p><i>*</i>原密码</p> <input :type="pass2" required class="inp">
          <div class="err">
            <a-icon type="exclamation"/>
            密码不正确, 请重新输入
          </div>
          <div class="passYan" @click="handlerTwoPass">
            <i class="iconfont" :class="passFlag2 ? 'icon-htmal5icon09': 'icon-htmal5icon08'"></i>
          </div>
        </div>
        <div class="username">
          <p><i>*</i>新密码</p> <input :type="pass3" required class="inp">
          <div class="err">
            <a-icon type="exclamation"/>
            密码不正确, 请重新输入
          </div>
          <div class="passYan" @click="handlerSheePass">
            <i class="iconfont" :class="passFlag3 ? 'icon-htmal5icon09': 'icon-htmal5icon08'"></i>
          </div>
        </div>
        <div class="username">
          <p><i>*</i>原密码</p> <input :type="pass4" required class="inp">
          <div class="err">
            <a-icon type="exclamation"/>
            密码不正确, 请重新输入
          </div>
          <div class="passYan" @click="handlerFowePass">
            <i class="iconfont" :class="passFlag4 ? 'icon-htmal5icon09': 'icon-htmal5icon08'"></i>
          </div>
        </div>
      </div>    

      <!--修改用户名确定按钮-->
      <div class="kuai"> 修改密码</div>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import { Button } from "vant";

  Vue.use(Button);
  export default {
    name: "index",
    data() {
      return {
        pass: "password",
        passFlag: true,
        pass2: "password",
        passFlag2: true,
        pass3: "password",
        passFlag3: true,
        pass4: "password",
        passFlag4: true
      };
    },
    methods: {
      handlerPass() {
        this.passFlag = !this.passFlag;
        this.passFlag ? this.pass = "password" : this.pass = "text";
      },
      handlerTwoPass() {
        this.passFlag2 = !this.passFlag2;
        this.passFlag2 ? this.pass2 = "password" : this.pass2 = "text";
      },
      handlerSheePass() {
        this.passFlag3 = !this.passFlag3;
        this.passFlag3 ? this.pass3 = "password" : this.pass3 = "text";
      },
      handlerFowePass() {
        this.passFlag4 = !this.passFlag4;
        this.passFlag4 ? this.pass4 = "password" : this.pass4 = "text";
      },
    }
  }
  ;
</script>

<style scoped lang="scss">


  .kuai {
    margin: 0.37rem auto 0.34rem;
    width: 3.17rem;
    height: 0.38rem;
    line-height: 0.36rem;
    border-radius: 5px;
    background-color: rgba(19, 152, 149, 1);
    color: rgba(255, 255, 255, 1);
    font-size: 0.18rem;
    text-align: center;
    font-family: Microsoft Yahei;
    border: 1px solid rgba(255, 255, 255, 0);
  }

  .username {
    height: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 0.25rem;
    position: relative;
    margin-top: 0.32rem;

    .passYan {
      z-index: 5;
      position: absolute;
      right: 0.40rem;
      top: 0.04rem;

      i {
        font-size: 0.2rem;
      }
    }

    .err {
      position: absolute;
      bottom: -0.3rem;
      left: 1.08rem;
      color: red;
    }

    p {
      color: rgba(16, 16, 16, 1);
      font-size: 14px !important;
      text-align: left;
      font-family: SourceHanSansSC-regular;
      i {
        color: red;
        padding-right: .08rem;
      }
    }
    input {
      border: none;
      height: 0.3rem;
      width: 2.49rem;
      border-radius: 5px;
      position: relative;
      top: 0.03rem;
    }
  }

  .top {

    .top-c {
      margin-top: -.25rem;
    }
    p {
      height: 26px;
      color: rgba(16, 16, 16, 1);
      font-size: 20px;
      text-align: left;
      font-family: Courier New-regular;
      margin: 0.2rem 0 0.1rem 0.18rem;
    }

    hr {
      width: 3.32rem;
    }
  }
</style>