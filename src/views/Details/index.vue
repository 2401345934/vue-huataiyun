<template>
  <div class="app">
    <div style="height: 0.6rem;"></div>
    <div class="top">
      <a-icon type="rollback"/>
      <span @click="handlerClick"> 返回设备列表</span>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from "vuex";

  export default {
    name: "index",
    methods: {
      ...mapMutations("app", ["setCurrentName"]),
      handlerClick() {
        this.$router.push("/equipment");
        this.setCurrentName("设备");
      }
    }
  };
</script>

<style scoped lang="scss">
  .top {
    margin-top: 0.08rem;
    width: 1.43rem;
    height: 0.35rem;
    margin-left: 0.12rem;
    line-height: 0.30rem;
    border-radius: 0.10rem;
    background-color: rgba(19, 152, 149, 1);
    color: rgba(16, 16, 16, 1);
    font-size: 0.14rem;
    text-align: center;
    font-family: Roboto;
    border: 1px solid rgba(5, 5, 5, 0.08);

    i {
      color: #fff;
      font-size: 0.18rem;
      position: relative;
      left: -6px;
      font-weight: 700;

    }

    span {
      width: 0.98rem;
      font-weight: 700;
      height: 0.21rem;
      color: rgba(255, 255, 255, 1);
      font-size: 0.15rem;
      text-align: center;
      font-family: PingFangSC-regular;
    }
  }
</style>