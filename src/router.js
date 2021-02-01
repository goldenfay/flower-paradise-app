import Vue from "vue";
import Router from "vue-router";
import Website from "./pages/website/index";
import Home from "./pages/website/Home";
import HelloWorld from "./components/HelloWorld";
import LoginAdmin from "./pages/admin/auth/Login";
import AdminLayout from "./pages/admin/dashboard/Layout";
import AdminDashboard from "./pages/admin/dashboard/Dashboard";

Vue.use(Router);

export const router = new Router({
  routes: [
    {
      path: "/website",
      name: "Website",
      component: Website,
      children: [
        {
          path: "/",
          name: "Home",
          component: Home
        }
      ]
    },
    {
      path: "/",
      name: "Admin",
      component: Website,
      children: [
        {
          path: "/login",
          name: "LoginAdmin",
          component: LoginAdmin
        },
        {
          path: "/",
          name: "DashboardAdmin",
          component: AdminLayout,
          children: [
            {
              path: "/",
              name: "Dashboard",
              component: AdminDashboard
            }
          ]
        }
      ]
    },

    // {
    //   path: '/auth',
    //   name: 'auth',
    //   component: AuthentificationComponent
    // },
    // {
    //   path: '/profile/:id',
    //   name: 'profile',
    //   component: ProfileComponent
    // },
    // {
    //   path: '/redirect',
    //   name: 'redirect',
    //   component: RedirectComponent
    // },
    { path: "*", redirect: "/" }
  ]
});

// router.beforeEach((to, from, next) => {
//   next();
// });
