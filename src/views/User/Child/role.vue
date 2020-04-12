<template>
  <div class="app">
    <div style="height: 0.52rem;"></div>

    <!--搜索框-->
    <van-row class="search">
      <van-col span="6">搜索角色</van-col>
      <van-col span="16">
        <a-input-search class="input" placeholder="输入关键字搜索..." style="width: 256px" @search="onSearch"/>
      </van-col>
    </van-row>
    <!--全选按钮 刷新按钮  新增设备-->
    <div class="buttons">
      <a-button>
        <a-icon type="delete" style="color: red"/>
      </a-button>
      <a-button>
        <a-icon type="redo"/>
      </a-button>
      <a-button type="primary" class="btn1" @click="$router.push('/addrole')">新增角色</a-button>
    </div>
    <!--分割线-->
    <hr>

  </div>
</template>

<script>
  import Vue from "vue";
  import { Search, Col, Row, RadioGroup, Radio } from "vant";
  import { Button } from "vant";

  Vue.use(Radio);
  Vue.use(RadioGroup);
  Vue.use(Button);
  Vue.use(Col);
  Vue.use(Row);
  Vue.use(Search);
  export default {
    name: "index",
    data() {
      return {};
    },
    methods: {
      //search 的方法 value 是input 的值
      onSearch(value) {
        console.log(value);
      }
    }
  };
</script>

<style scoped lang="scss">

  hr {
    width: 3.39rem;
    margin-bottom: 0.08rem;
  }

  .btn1 {
    border: 0;
  }

  .buttons {
    margin-top: 0.15rem;
    text-align: right;
    padding-right: 0.15rem;
  }

  .search {
    height: 0.3rem;
    line-height: 0.3rem;
    padding-left: 0.12rem;
    padding-right: 0.15rem;
    margin-top: 0.08rem;
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    font-family: SourceHanSansSC-regular;

  }
</style>