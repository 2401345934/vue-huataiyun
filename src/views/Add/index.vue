<template>
  <div class="app">
    <!--头部-->
    <div class="top">
      <p>新增设备</p>
      <span @click="$router.back()"><a-icon type="close"/></span>
    </div>
    <!--水平线-->
    <div class="hr"></div>
    <!--设备名称-->
    <div class="username" style="margin-top: 8px;">
      <p><i>*</i>设备名称</p> <input type="text" required placeholder="请输入设备名称">
      <div class="err">
        设备名称已存在
      </div>
    </div>


    <!--通讯设备下拉-->

    <div class="username">
      <p><i>*</i>通讯设备</p>
      <a-select :defaultValue="list[0]" style="width: 120px" @change="handleChange">
        <a-select-option :value="item" v-for="(item,index) in list">{{item}}</a-select-option>
      </a-select>
      <div class="err">
        请选择设备类型
      </div>
    </div>

    <!--设备类型下拉-->

    <div class="username">
      <p><i>*</i>设备类型</p>
      <a-select :defaultValue="listTwo[0]" style="width: 120px" @change="handleChangeTwo">
        <a-select-option :value="item" v-for="(item,index) in listTwo">{{item}}</a-select-option>
      </a-select>
      <div class="err">
        请选择设备类型
      </div>
    </div>


    <!--BoxID-->

    <div class="username" style="margin-top: 0.4rem;">
      <p style="padding-left:19px">BoxID</p> <input type="text">
      <div class="err">
        BoxID仅能包含字母,数字 , 长度为17位字符
      </div>
    </div>

    <!--Box名称-->

    <div class="username">
      <p style="padding-left:19px">Box名称/密码</p> <input type="text">
      <div class="err">
        Box名称/密码仅能包含字母,数字 , 长度为17位字符
      </div>
    </div>

    <!--寄存器定位地址-->

    <div class="username">
      <p style="padding-left:19px">寄存器定位地址</p>
      <input type="text" class="inp2">
      <input type="number" placeholder="请输入正或负整数" class="inp3">
      <div class="err">
        BoxID仅能包含字母,数字 , 长度为17位字符
      </div>
    </div>


    <!--设备信息-->

    <div class="wrap">
      <p style="padding-left: 13px;margin-bottom: 5px">设备信息</p>
      <div class="list" >
        <div class="item" v-for="item in addList" :key="item.id">
          <input type="text" placeholder="名称">
          <input type="text" placeholder="值">
          <div @click="handlerRemove">删除</div>
        </div>
      </div>
      <div class="btn" @click="handlerClick">
        <span><a-icon type="plus"/></span>
        <span>添加一行</span>
      </div>
    </div>


    <!--底部按钮-->

    <div class="footer">
      <div class="div2"><i><a-icon type="check-circle" /></i><span>保存</span></div>
      <div class="div1"><i><a-icon type="close-circle" /></i><span>取消</span></div>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from "vuex";

  export default {
    name: "index",
    data() {
      return {
        list: ["请选择", "4GBOX", "4GDTU"],
        listTwo: ["请选择", "XC", "XD/X", "HMl", "Modbus RTU"],
        addList: []
      };
    },
    methods: {
      ...mapMutations("app", ["setIsApp"]),
      handleChange(value) {
        console.log(value);
      },
      handleChangeTwo(value) {
        console.log(value);
      },
      handlerClick() {
        let obj = { txt: "删除" };
        this.addList.push(obj);

      },
      handlerRemove() {
        this.addList = [];
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


  .footer {

    margin-bottom: 0.10rem;
    overflow: hidden;
    .div1 {
      width: 0.90rem;
      height: 0.40rem;
      line-height: 0.40rem;
      border-radius: 0.04rem;
      background-color: rgba(167, 167, 167, 1);
      color: rgba(255, 255, 255, 1);
      font-size: 0.14rem;
      text-align: center;
      font-family: Microsoft Yahei;
      border: 1px solid rgba(187, 187, 187, 1);
      float: right;
    }

    i {
      margin-right: 0.03rem;
    }

    .div2 {
      width: 0.90rem;
      float: right;
      height: 0.40rem;
      margin: 0 0.12rem 0 0.30rem;
      line-height: 0.40rem;
      border-radius: 0.04rem;
      background-color: rgba(19, 152, 149, 1);
      color: rgba(255, 255, 255, 1);
      font-size: 0.14rem;
      text-align: center;
      font-family: Microsoft Yahei;
      border: 1px solid rgba(187, 187, 187, 1);
    }
  }

  .wrap {
    margin-top: 0.36rem;
    padding: 0 0.10rem;
    p {
      color: rgba(16, 16, 16, 1);
      font-size: 0.14rem !important;
      text-align: left;
      font-family: SourceHanSansSC-regular;
    }

    .list {
      .item {
        height: 0.3rem;
        line-height: 0.3rem;
        margin-bottom: 0.1rem;
        transition: 1s;
        input {
          border: none;
          height: 0.3rem;
          border-radius: 0.05rem;
          margin-left: 7px;
          width: 1.4rem;
          padding-left: 0.05rem;
        }
        div {
          float: right;
          line-height: 0.3rem;
          height: 0.3rem;
          border: 1px solid #ccc;
          width: 0.50rem;
          text-align: center;
        }
      }

    }

    .btn {
      width: 2.15rem;
      height: 0.35rem;
      line-height: 0.35rem;
      text-align: center;
      border: 1px dashed rgba(187, 187, 187, 1);
      margin-top: 0.05rem;
      margin-bottom: 0.45rem;
      span {
        font-size: 0.18rem;
        i {
          margin-right: 0.08rem;
        }
      }

    }
  }

  .username {
    height: 0.5rem;
    position: relative;
    margin-top: 0.30rem;

    .ant-select {
      width: 3.55rem !important;
      margin: 0 0.10rem;
    }

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
      left: 0.1rem;
      color: red;
    }

    p {
      color: rgba(16, 16, 16, 1);
      font-size: 0.14rem !important;
      text-align: left;
      font-family: SourceHanSansSC-regular;
      i {
        color: red;
        padding-right: 0.05rem;
        padding-left: 0.1rem;
        position: relative;
        top: 2px;
      }
    }
    input {
      border: none;
      padding-left: 0.08rem;
      height: 0.3rem;
      display: block;
      margin: 0 0.10rem;
      width: 3.55rem;
      border-radius: 0.05rem;
      position: relative;
      top: 0.03rem;
    }

    .inp2 {
      width: 1.3rem;
      float: left;
    }

    .inp3 {
      width: 2rem;
      float: right;
    }
  }

  .hr {
    border: 1px solid rgba(187, 187, 187, 1);
    margin-bottom: 0.08rem;
  }

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.12rem;
    height: 0.46rem;
    p {
      color: rgba(16, 16, 16, 1);
      font-size: 0.16rem;
      position: relative;
      top: -3px;
      font-family: SourceHanSansSC-regular;
    }
    span {
      i {
        font-size: 0.22rem;
        font-weight: bold;
      }
    }
  }
</style>