<template>
  <div class="app">
    <div style="height: 0.63rem;"></div>
    <div class="list">
      <div class="list-t">
        <p class="p1">设备1名称</p>
        <p class="p2" @click="tiao"><a-icon type="double-right" /></p>
      </div>

      <div class="hr"></div>

      <div class="list-c">
        <ul>
          <li>
            <span class="span1">设备名称属性</span>
            <span class="span2">设备属性值</span>
          </li>
          <li>
            <span class="span1">设备名称属性</span>
            <span class="span2">设备属性值</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    methods: {
      tiao(){
        this.$router.push('/conlist')
      }
    }
  };
</script>

<style scoped lang="scss">

  .list-c {

    ul {

      li {


        .span1 {
          margin-right: 0.38rem;
          margin-left: 0.14rem;
        }
      }
    }
  }


 .hr {
    width: 3.15rem;
    position: relative;
    top: -5px;
    margin: 0  auto;
    border: 1px solid rgba(187, 187, 187, 1);
  }

  .list-t {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;

    .p2 {

      i {
        font-size: 0.2rem ;
        color: rgba(19, 152, 149, 1) ;
      }

    }
  }

  .list {
    width: 3.39rem;
    height: 157px;
    margin: 0 auto;
    line-height: 20px;
    border-radius: 5px;
    border: 1px solid rgba(187, 187, 187, 1);
  }

</style>