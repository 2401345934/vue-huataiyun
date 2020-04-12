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
  {  //控制列表
    path: "/conlist",
    name: "Conlist",
    component: () => import("@/views/Conlist/index.vue")
  },
  {  //配置列表
    path: "/details",
    name: "Details",
    component: () => import("@/views/Details/index.vue")
  },
  {  //新增设备
    path: "/add",
    name: "Add",
    component: () => import("@/views/Add/index.vue")
  },
  {  //新增设备
    path: "/adduser",
    name: "Adduser",
    component: () => import("@/views/Adduser/index.vue")
  },
  {  //新增设备
    path: "/addrole",
    name: "Addrole",
    component: () => import("@/views/Addrole/index.vue")
  },
];

const router = new VueRouter({
  routes
});

export default router;
