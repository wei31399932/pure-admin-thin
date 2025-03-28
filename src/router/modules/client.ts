import type { RouteConfigsTable } from "/#/index";
const Layout = () => import("/@/layout/index.vue");

const clientRouter: RouteConfigsTable = {
  path: "/client",
  name: "client",
  component: Layout,
  redirect: "/client/clientHome",
  meta: {
    icon: "home-filled",
    title: "客户",
    rank: 10
  },
  children: [
    {
      path: "/clientHome",
      name: "ClientHome",
      component: () => import("/@/views/client/clientHome.vue"),
      meta: {
        title: "客户主页"
      }
    },
    {
      path: "/prospectiveCustomer",
      name: "ProspectiveCustomer",
      component: () => import("/@/views/client/prospectiveCustomer/index.vue"),
      meta: {
        title: "潜在客户"
      }
    }
  ]
};

export default clientRouter;
