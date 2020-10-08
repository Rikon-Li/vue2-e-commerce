<template>
  <div id="login">
    <h1>登录</h1>
    <template>
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
        @submit="handleSubmit"
      >
        <a-form-item>
          <a-input
            v-decorator="[
              'userName',
              {
                rules: [
                  { required: true, message: 'Please input your username!' },
                ],
              },
            ]"
            placeholder="Username"
          >
            <a-icon
              slot="prefix"
              type="user"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
              'password',
              {
                rules: [
                  { required: true, message: 'Please input your Password!' },
                ],
              },
            ]"
            type="password"
            placeholder="Password"
          >
            <a-icon
              slot="prefix"
              type="lock"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-checkbox
            v-decorator="[
              'remember',
              {
                valuePropName: 'checked',
                initialValue: true,
              },
            ]"
          >
            Remember me
          </a-checkbox>
          <a-button type="primary" html-type="submit" class="login-form-button">
            Log in
          </a-button>
        </a-form-item>
      </a-form>
    </template>
    <!-- <input type="text" placeholder="用户名" v-model="username" />
    <input type="password" placeholder="密码" v-model="password" />
    <button @click="loginAction">登录</button> -->
  </div>
</template>

<script>
import axios from "axios";
import { Form, Input, Icon, Checkbox, Button } from "ant-design-vue";
export default {
  components: {
    [Form.name]: Form,
    [Form.Item.name]: Form.Item,
    [Input.name]: Input,
    [Icon.name]: Icon,
    [Checkbox.name]: Checkbox,
    [Button.name]: Button,
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  methods: {
    // 登录
    loginAction() {
      axios
        .post("/api/user/login", {
          username: this.username,
          password: this.password,
        })
        .then((data) => {
          console.log(data);
          if (data.data.code === 0) {
            //登录成功
            this.$store.dispatch("user/changeLoginAction", true);
            this.$router.push({ name: "home" });
            // 查询用户信息
            this.$store.dispatch("user/requestUserInfo");
          } else {
            // 登录失败
            alert(data.data.message);
          }
        })
        .catch((error) => {
          console.log(error);
          alert("登录失败");
        });
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });

      axios
        .post("/api/user/login", {
          username: this.form.getFieldValue("userName"),
          password: this.form.getFieldValue("password"),
        })
        .then((data) => {
          if (data.data.code === 0) {
            //登录成功
            this.$store.dispatch("user/changeLoginAction", true);
            this.$router.push({ name: "home" });
            // 查询用户信息
            this.$store.dispatch("user/requestUserInfo");
          } else {
            // 登录失败
            alert(data.data.message);
          }
        })
        .catch((error) => {
          console.log(error);
          alert("登录失败");
        });
    },
  },
};
</script>

<style>
#login {
  width: 500px;
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translateX(-50%) translateY(-50%);
}
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>