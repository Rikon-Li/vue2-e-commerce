<template>
  <div>
    <h1>商品列表</h1>
    <template>
      <a-table
        :columns="columns"
        :data-source="dataSource"
        :loading="loading"
        :row-key="(record) => record._id"
      >
        <span slot="action" slot-scope="text, record">
          <a-button
            type="primary"
            @click="handeleEdit(record)"
            :style="{ marginRight: '8px' }"
          >
            编辑
          </a-button>

          <a-button type="danger" @click="handeleDelete(record)">
            清仓
          </a-button>
        </span>
      </a-table>
    </template>

    <template>
      <a-drawer
        title="修改商品数据"
        :width="720"
        :visible="visible"
        :body-style="{ paddingBottom: '80px' }"
        @close="onClose"
      >
        <a-form :form="form" layout="vertical" hide-required-mark>
          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-item label="商品名称">
                <a-input
                  v-decorator="[
                    'title',
                    {
                      rules: [
                        { required: true, message: 'Please enter user name' },
                      ],
                    },
                  ]"
                  placeholder="Please enter user name"
                />
              </a-form-item>
            </a-col>

            <a-col :span="12">
              <a-form-item label="商品类别">
                <a-input
                  v-decorator="[
                    'cate',
                    {
                      rules: [
                        { required: true, message: 'Please enter user name' },
                      ],
                    },
                  ]"
                  placeholder="Please enter user name"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-item label="原价">
                <a-input
                  v-decorator="[
                    'originPrice',
                    {
                      rules: [
                        { required: true, message: 'Please enter user name' },
                      ],
                    },
                  ]"
                  placeholder="Please enter user name"
                />
              </a-form-item>
            </a-col>

            <a-col :span="12">
              <a-form-item label="现价">
                <a-input
                  v-decorator="[
                    'price',
                    {
                      rules: [
                        { required: true, message: 'Please enter user name' },
                      ],
                    },
                  ]"
                  placeholder="Please enter user name"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-item label="销量">
                <a-input
                  v-decorator="[
                    'sales',
                    {
                      rules: [
                        { required: true, message: 'Please enter user name' },
                      ],
                    },
                  ]"
                  placeholder="Please enter user name"
                />
              </a-form-item>
            </a-col>

            <a-col :span="12">
              <a-form-item label="库存">
                <a-input
                  v-decorator="[
                    'store',
                    {
                      rules: [
                        { required: true, message: 'Please enter user name' },
                      ],
                    },
                  ]"
                  placeholder="Please enter user name"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-item label="邮费">
                <a-input
                  v-decorator="[
                    'freight',
                    {
                      rules: [
                        { required: true, message: 'Please enter user name' },
                      ],
                    },
                  ]"
                  placeholder="Please enter user name"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16" v-show="false">
            <a-col :span="12">
              <a-form-item label="id">
                <a-input
                  v-decorator="[
                    '_id',
                    {
                      rules: [
                        { required: true, message: 'Please enter user name' },
                      ],
                    },
                  ]"
                  placeholder="Please enter user name"
                />
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
        <div
          :style="{
            position: 'absolute',
            right: 0,
            bottom: 0,
            width: '100%',
            borderTop: '1px solid #e9e9e9',
            padding: '10px 16px',
            background: '#fff',
            textAlign: 'right',
            zIndex: 1,
          }"
        >
          <a-button
            :style="{ marginRight: '8px' }"
            type="primary"
            @click="confirmEdit"
          >
            确认修改
          </a-button>
          <a-button @click="onClose"> 取消修改 </a-button>
        </div>
      </a-drawer>
    </template>
  </div>
</template>


<script>
import reqwest from "reqwest";
import { http, api } from "../../request";
import axios from "axios";
import {
  Table,
  Button,
  Icon,
  Form,
  Drawer,
  Row,
  Col,
  Input,
  Modal,
} from "ant-design-vue";
import { log } from "@antv/g2plot/lib/utils";

const columns = [
  {
    title: "商品名称",
    dataIndex: "title",
    key: "title",
    width: "35%",
  },
  {
    title: "商品类别",
    dataIndex: "cate",
    key: "cate",
  },
  {
    title: "原价",
    dataIndex: "originPrice",
    key: "originPrice",
  },
  {
    title: "现价",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "已售",
    dataIndex: "sales",
    key: "sales",
  },
  {
    title: "库存",
    dataIndex: "store",
    key: "store",
  },

  {
    title: "操作",
    dataIndex: "action",
    width: "200px",
    key: "x",
    scopedSlots: { customRender: "action" },
  },
];

export default {
  components: {
    [Table.name]: Table,
    [Button.name]: Button,
    [Icon.name]: Icon,
    [Form.name]: Form,
    [Form.Item.name]: Form.Item,
    [Drawer.name]: Drawer,
    [Row.name]: Row,
    [Col.name]: Col,
    [Input.name]: Input,
  },
  data() {
    return {
      dataSource: [],
      pagination: {},
      loading: false,
      columns,
      form: this.$form.createForm(this),
      visible: false,
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
      this.form.resetFields();
    },
    fetch(params = {}) {
      // console.log("params:", params);
      this.loading = true;
      reqwest({
        url: "/api/product/product_info",
        method: "get",
        type: "json",
      }).then((data) => {
        this.loading = false;
        this.dataSource = data.data;
      });
    },
    async handeleEdit(data) {
      // console.log("data", data);
      await this.showDrawer();
      // console.log(this.form.getFieldValue("title"));
      this.form.setFieldsValue({ ["_id"]: data._id });
      this.form.setFieldsValue({ ["title"]: data.title });
      this.form.setFieldsValue({ ["cate"]: data.cate });
      this.form.setFieldsValue({ ["originPrice"]: data.originPrice });
      this.form.setFieldsValue({ ["price"]: data.price });
      this.form.setFieldsValue({ ["sales"]: data.sales });
      this.form.setFieldsValue({ ["store"]: data.store });
      this.form.setFieldsValue({ ["freight"]: data.freight });
    },
    async confirmEdit() {
      try {
        await axios
          .post("/api/product/edit", {
            _id: this.form.getFieldValue("_id"),
            title: this.form.getFieldValue("title"),
            cate: this.form.getFieldValue("cate"),
            price: this.form.getFieldValue("price"),
            originPrice: this.form.getFieldValue("originPrice"),
            store: this.form.getFieldValue("store"),
            sales: this.form.getFieldValue("sales"),
            freight: this.form.getFieldValue("freight"),
          })
          .then((result) => {
            if (result.status === 200) {
              // console.log(result);
              const newData = this.dataSource.map((item, index) => {
                if (result.data._id === item._id) {
                  return result.data;
                } else {
                  return item;
                }
              });
              // console.log("new data", newData);
              this.dataSource = newData;
            }
          });
      } catch (error) {
        console.log("eror: ", error);
      }

      // console.log("data: ", this.dataSource);
      this.onClose();
    },
    async handeleDelete(data) {
      // console.log(data.title);
      await axios
        .post("/api/product/delete", { _id: data._id })
        .then((result) => {
          // console.log(result.data.data._id);

          if (result.status === 200) {
            // console.log(result);
            this.dataSource.map((item, index) => {
              if (result.data.data._id === item._id) {
                this.dataSource.splice(index, 1);
              }
            });
            // console.log("new data", newData);
            // this.dataSource = newData;
          }
        });
    },
  },
};
</script>

<style>
</style>