<template>
  <div class="login">
    <div class="from">
      <van-form @submit="onSubmit">
        <van-field
                input-align="center"
                label-width="50"
                left-icon="manager"
                v-model="username"
                name="用户名"
                label="用户名"
                placeholder="用户名"
        />
        <div class="user" v-show="isUser">
          用户名不存在
        </div>
        <van-field
                label-width="40"
                input-align="center"
                v-model="password"
                left-icon="bag"
                type="password"
                name="密码"
                label="密码"
                placeholder="密码"
        />
        <div class="pass" v-show="isPass">
          密码不正确
        </div>

        <div class="footer">
          <van-checkbox v-model="checkedOne" shape="square" checked-color="#139895">记住密码</van-checkbox>
          <van-checkbox v-model="checkedTwo" shape="square" checked-color="#139895">自动登陆</van-checkbox>
        </div>
        <div>
          <van-button round block type="info" native-type="submit">
            登陆
          </van-button>
        </div>

        <div class="div">
          <a class="p1" href="javascript:;" @click="isSj=true">
            忘记用户名/密码?
          </a>
          <transition-group name="fade">
            <span v-if="isSj" key="1" class="span">请联系管理员</span>
            <p v-if="isSj" key="2"></p>
          </transition-group>
        </div>
      </van-form>
    </div>


  </div>
</template>

<script>
  import Vue from "vue";
  import { Form, Button, Field, Checkbox, CheckboxGroup } from "vant";
  import { mapMutations } from "vuex";

  Vue.use(Checkbox);
  Vue.use(CheckboxGroup);
  Vue.use(Field);
  Vue.use(Button);
  Vue.use(Form);
  export default {
    name: "index",
    data() {
      return {
        username: "",  //用户名
        password: "",  //密码
        isUser: false,
        isPass: false,
        checkedOne: false,
        checkedTwo: false,
        isSj: false   //初始小三角显示吗
      };
    },
    methods: {
      ...mapMutations("app", ["setIsApp"]),
      onSubmit(values) {
        console.log("submit", values);
      }
    },
    created() {
      this.setIsApp(false);
    },
    destroyed() {
      this.setIsApp(true);
    }
  };
</script>

<style scoped lang="scss">

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .div {
    position: relative;
    margin-top: 0.41rem;

    p {
      position: absolute;
      width: 0;
      height: 0;
      border: 7px solid transparent;
      border-top-color: black;
      opacity: .5;
      top: -0.06rem;
      left: 1.5rem;
    }

    .p1 {
      color: rgba(31, 159, 156, 1);
      font-size: 15px;
      text-align: left;
      font-family: Helvetica-regular;
      display: inline-block;
      cursor: pointer;
      text-decoration: rgba(31, 159, 156, 1) !important;
    }

    .span {
      width: 1.3rem;
      line-height: 0.35rem;
      text-align: center;
      height: 0.35rem;
      opacity: .5;
      position: absolute;
      top: -0.41rem;
      left: 1.2rem;
      background: #000;
    }
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.28rem;
  }

  .from {
    position: relative;
    left: 0.30rem;
    top: 2.41rem;
    width: 3.00rem;
    height: 0.45rem;
    border-radius: 0.04rem;
    background-color: rgba(255, 255, 255, 1);
    color: rgba(167, 167, 167, 1);
    font-size: 0.16rem;
    text-align: center;
    font-family: Microsoft Yahei;
    border: 1px solid rgba(200, 205, 208, 1);
  }

  .van-field {
    margin-bottom: 0.46rem;
  }

  .user {
    color: rgba(237, 64, 20, 1);
    font-size: 13px;
    text-align: left;
    font-family: SourceHanSansSC-regular;
    position: relative;
    top: -0.4rem;
  }

  .pass {
    color: rgba(237, 64, 20, 1);
    font-size: 13px;
    text-align: left;
    font-family: SourceHanSansSC-regular;
    position: relative;
    top: -0.4rem;
  }
</style>