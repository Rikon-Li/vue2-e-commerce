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
      <h3>*****「 账号：admin | 密码：admin 」*****</h3>
    </template>
  </div>
</template>
<script>
import { http, api } from "../../request";
import axios from "axios";
import { Form, Input, Icon, Checkbox, Button } from "ant-design-vue";
import { log } from "@antv/g2plot/lib/utils";

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
    async confirmAction(values) {
      const data = await http.post(api.LOGIN_API, {
        username: values.userName,
        password: values.password,
      });
      //登录成功
      localStorage.setItem("token", data.token);
      this.$router.push("/");
    },

    handleSubmit(e) {
      e.preventDefault();

      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
        this.confirmAction(values);
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
  top: 35%;
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