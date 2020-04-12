<template>
  <div id="app">
    <!--头部-->
    <div class="top" v-show="isApp">
      <div @click="topClick">
        <van-icon name="wap-nav" v-show="!isNav"/>
        <van-icon name="cross" v-show="isNav"/>
      </div>
      <div class="cur">{{currentName}}</div>
      <div class="top-r">
        <van-icon name="user-o" @click="isTopr = !isTopr"/>
        <a-icon type="caret-up"/>
        <!--个人设置-->
        <transition name="topFade">
          <div class="top-r-b" v-show="isTopr">
            <a-icon type="caret-up" class="ssj"/>
            <ul>
              <li>欢迎您,xxxx</li>
              <li @click="handlerSet">设置</li>
              <li @click="$router.push('/login')">退出登陆</li>
            </ul>
          </div>
        </transition>
      </div>
    </div>

    <transition name="topFade">
      <van-overlay :show="show" @click="show = false , isNav=false"/>
    </transition>
    <!--左侧nav-->
    <transition name="fade" v-show="isApp">
      <div class="nav" v-show="isNav">
        <a-switch
                defaultChecked
                unCheckedChildren="light"
        />
        <br/>
        <br/>
        <a-menu
                style="width: 222px"
                :defaultSelectedKeys="['1']"
                :defaultOpenKeys="['sub1']"
                mode="inline"
                :selectedKeys="[current]"
                @click="handleClick"
        >
          <template v-for="(item,index) in navList">
            <a-menu-item :key="item.meta.name" v-if="!item.children" @click="handlerPush(item)">
              <a-icon type="mail"/>
              {{item.meta.name}}
            </a-menu-item>
          </template>
          <a-sub-menu key="sub1">
          <span slot="title">
            <a-icon type="appstore"/>
            <span>用户及权限</span>
          </span>
            <a-menu-item :key="item.meta.name" v-for="(item,index) in childList" @click="handlerPush(item)">
              <a-icon type="mail"/>
              {{item.meta.name}}
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </div>
    </transition>


    <router-view></router-view>

  </div>
</template>

<script>
  import Vue from "vue";
  import { Icon, Sidebar, SidebarItem, Overlay } from "vant";
  import { mapState , mapGetters , mapMutations } from "vuex";

  Vue.use(Overlay);
  Vue.use(Sidebar);
  Vue.use(SidebarItem);
  Vue.use(Icon);
  export default {
    name: "app",
    data() {
      return {
        activeKey: 0,
        navList: [],
        isNav: false,
        childList: [],
        current: "1",
        show: false,
        isTopr: false  //点击右上角显示
      };
    },
    computed: {
      ...mapState("app", ["isApp",]),
      ...mapGetters("app", ["currentName",])
    },
    methods: {
      ...mapMutations("app", ["setCurrentName"]),
      handlerSet() {
        this.$router.push("/setuse");
        this.setCurrentName("用户设置")
        this.isTopr = false;
      },
      handleClick(e) {
        console.log("click ", e);
        this.current = e.key;
        this.setCurrentName(e.key)
      },
      handlerPush(item) {
        this.$router.push(item.path);
        this.isNav = false;
        this.show = this.isNav;
      },
      topClick() {
        this.isNav = !this.isNav;
        this.show = this.isNav;
      }
    },

    mounted() {
      this.navList = this.$router.options.routes[1].children;
      this.childList = this.navList[3].children;
    }
  };
</script>


<style lang="scss" scoped>

  .cur {
    position: relative;
    top: -4px;
  }

  .topFade-enter-active, .topFade-leave-active {
    transition: opacity .5s !important;
  }

  .topFade-enter, .topFade-leave-to {
    opacity: 0 !important;
  }

  .top-r {
    position: relative;
  }

  .top-r-b {

    position: absolute;
    left: -1.18rem;
    top: 0.40rem;
    z-index: 9;

    .ssj {
      position: absolute;
      z-index: 9;
      right: -0.12rem;
      top: -0.21rem;
      font-size: .3rem;
      color: gray;
    }
    ul {

      li {
        width: 1.5rem;
        background: #000;
        margin-bottom: .01rem;
        opacity: .7;
        height: 0.44rem;
        line-height: 0.44rem;
      }
    }
  }

  .top {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 0.52rem;
    z-index: 10;
    line-height: 0.29rem;
    background-color: rgba(19, 152, 149, 1);
    color: rgba(255, 255, 255, 1);
    font-size: 0.20rem;
    text-align: center;
    font-family: Roboto;
    border: 1px solid rgba(19, 152, 149, 1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.05rem 0 0.12rem;
  }

  .nav {
    color: #eee !important;
  }

</style>
