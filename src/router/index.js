import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {  //设备
    path: "/",
    redirect: "/nav"
  },
  {
    path: "/nav",
    component: () => import("@/views/Layout/index.vue"),
    redirect:"/homepage",
    children: [
      {
        path: "/homepage",
        name: "Homepage",
        meta: {
          name: "首页",
          icon: "icon-fangzi"
        },
        component: () => import("@/views/Homepage/index.vue")
      },
      {  //设备
        path: "/equipment",
        name: "Equipment",
        meta: {
          name: "设备",
          icon: "icon-fangzi"
        },
        component: () => import("@/views/Equipment/index.vue")
      },

      {  //配置
        path: "/configure",
        name: "Configure",
        meta: {
          name: "配置",
          icon: "icon-fangzi"
        },
        component: () => import("@/views/Configure/index.vue")
      },
      { //用户和权限
        path: "/user",
        name: "User",
        meta: {
          name: "用户及权限",
          icon: "icon-fangzi"
        },
        children: [
          {
            path: "/admin",
            name: "admin",
            meta: {
              name: "用户管理",
              icon: "icon-fangzi"
            },
            component: () => import("@/views/User/Child/admin.vue")
          },
          {
            path: "/role",
            name: "role",
            meta: {
              name: "角色管理",
              icon: "icon-fangzi"
            },
            component: () => import("@/views/User/Child/role.vue")
          },
          {
            path: "/jurisdiction",
            name: "jurisdiction",
            meta: {
              name: "角色权限分配",
              icon: "icon-fangzi"
            },
            component: () => import("@/views/User/Child/jurisdiction.vue")
          }
        ],
        component: () => import("@/views/User/index.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login/index.vue")
  },
  {  //用户设置
    path: "/setuse",
    name: "Setuse",
    component: () => import("@/views/Setuse/index.vue")
  },

];

const router = new VueRouter({
  routes
});

export default router;
