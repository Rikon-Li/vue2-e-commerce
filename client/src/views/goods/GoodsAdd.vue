<template>
  <a-form
    :form="form"
    :label-col="{ span: 5 }"
    :wrapper-col="{ span: 12 }"
    @submit="handleSubmit"
  >
    <a-form-item label="商品名称">
      <a-input
        v-decorator="[
          'title',
          { rules: [{ required: true, message: '请输入商品名称!' }] },
        ]"
      />
    </a-form-item>
    <a-form-item label="商品类别">
      <a-input
        v-decorator="[
          'cate',
          { rules: [{ required: true, message: '请输入商品类别!' }] },
        ]"
      />
    </a-form-item>
    <a-form-item label="原价">
      <a-input
        v-decorator="[
          'originPrice',
          { rules: [{ required: true, message: '请输入商品原价!' }] },
        ]"
      />
    </a-form-item>
    <a-form-item label="现价">
      <a-input
        v-decorator="[
          'price',
          { rules: [{ required: true, message: '请输入商品现价!' }] },
        ]"
      />
    </a-form-item>
    <a-form-item label="库存">
      <a-input
        v-decorator="[
          'store',
          { rules: [{ required: true, message: '请输入商品库存!' }] },
        ]"
      />
    </a-form-item>
    <a-form-item label="邮费">
      <a-input v-decorator="['freight']" />
    </a-form-item>
    <a-form-item label="商品图片链接">
      <a-input v-decorator="['pic']" />
    </a-form-item>

    <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
      <a-button type="primary" html-type="submit"> 添加商品 </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import { Form, Input, Button } from "ant-design-vue";
import axios from "axios";
export default {
  components: {
    [Form.name]: Form,
    [Form.Item.name]: Form.Item,
    [Input.name]: Input,
    [Button.name]: Button,
  },
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" }),
    };
  },
  methods: {
    addGoods() {},
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
      // addGoods();
      axios
        .post("/api/product/add", {
          title: this.form.getFieldValue("title"),
          cate: this.form.getFieldValue("cate"),
          price: this.form.getFieldValue("price"),
          originPrice: this.form.getFieldValue("originPrice"),
          store: this.form.getFieldValue("store"),
          pic: this.form.getFieldValue("pic"),
          freight: this.form.getFieldValue("freight"),
        })
        .then((data) => {
          console.log(data);
        });
      this.form.resetFields();
    },
  },
};
</script>