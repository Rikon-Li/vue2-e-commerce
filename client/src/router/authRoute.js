export default {
  path: "/auth",
  name: "Auth",
  redirect: "/auth/login",
  component: () => import("../views/auth/Index"),
  children: [
    {
      path: "login",
      name: "Login",
      component: () => import("../views/auth/Login"),
    },
    {
      path: "register",
      name: "Register",
      component: () => import("../views/auth/Register"),
    },
  ],
};
