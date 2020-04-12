<template>
  <div class="app">
    <div style="height: 0.52rem;"></div>

    <!--搜索框-->
    <van-row class="search">
      <van-col span="6">搜索设备</van-col>
      <van-col span="16">
         <a-input-search class="input"  placeholder="ASD" style="width: 256px" @search="onSearch" />
      </van-col>
    </van-row>

    <!--全选按钮 刷新按钮  新增设备-->
    <div class="buttons">
      <a-button ><a-icon type="delete" style="color: red" /></a-button>
      <a-button ><a-icon type="redo" /></a-button>
      <a-button type="primary" class="btn1" @click="$router.push('/add')">新增设备</a-button>
    </div>

    <!--分割线-->
    <hr>

    <!--渲染的数据-->
    <div class="list">
      <div class="list-t">
        <input type="checkbox"><span>设备1名称</span>
      </div>
      <div class="list-c" @click="$router.push('/details')">
        <a-icon type="arrow-right" class="right" />
      </div>
      <div class="list-b">
        <span class="span1">
            <a-icon type="delete"  />
        </span>
        <span class="span2">
            <a-icon type="edit" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Search ,Col, Row ,RadioGroup, Radio} from 'vant';
  import { Button } from 'vant';

  Vue.use(Radio);
  Vue.use(RadioGroup);
  Vue.use(Button);
  Vue.use(Col);
  Vue.use(Row);
  Vue.use(Search);
  export default {
    name: "index",
    data(){
      return {

      }
    },
    methods: {
      //search 的方法 value 是input 的值
      onSearch(value) {
        console.log(value);
      },
    },
  };
</script>

<style scoped lang="scss">

  .list {
    position: relative;
    width: 3.39rem;
    height: 0.94rem;
    line-height: 0.20rem;
    border-radius: 0.05rem;
    margin: 0 auto;
    border: 1px solid rgba(187, 187, 187, 1);
    .list-t {
      margin-top: 0.08rem;
      color: rgba(51, 51, 51, 1);
      font-size: 0.16rem;
      padding-left: 0.15rem;
      font-family: SourceHanSansSC-regular;
      span {
        position: relative;
        top: -4px;
        left: 3px;
      }
      input {
        width: 0.16rem;
        height: 0.16rem;
      }
    }

    .list-c {
      position: absolute;
      right: 0.35rem;
      .right {
        color:rgba(19, 152, 149, 1) ;
        font-size: 0.34rem;
        font-weight: 700;
      }
    }

    .list-b {
      margin-top: 0.1rem;
      margin-left: 0.39rem;
      .span1 {
        display: inline-block;
        width: 0.35rem;
        height: 0.35rem;
        line-height: 0.35rem;
        background-color: rgba(237, 64, 20, 1);
        text-align: center;
        border: 1px solid rgba(237, 64, 20, 1);
        border-radius: 50%;
        margin-right: 0.09rem;
      }

      i {
        position: relative;
        font-size: 0.2rem;
        color: #fff;
        left: 1px;
      }

      .span2 {
        display: inline-block;
        width: 0.35rem;
        height: 0.35rem;
        line-height: 0.35rem;
        background-color: rgba(19, 152, 149, 1);
        text-align: center;
        border: 1px solid rgba(19, 152, 149, 1);
        border-radius: 50%;
      }
    }
  }

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