<template>
  <div>
    <h1>商品列表</h1>
    <template>
      <a-table :columns="columns" :data-source="data" :loading="loading">
      </a-table>
    </template>
  </div>
</template>


<script>
import reqwest from "reqwest";
import { Table } from "ant-design-vue";
const columns = [
  {
    title: "商品名称",
    dataIndex: "title",
    key: "title",
    width: "50%",
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

  //   cate: (...)
  // freight: (...)
  // originPrice: "2999"
  // pic: (...)
  // price: "1999"
  // sales: (...)
  // simg: (...)
  // store: (...)
  // title: (...)
];

export default {
  components: {
    [Table.name]: Table,
  },
  data() {
    return {
      data: [],
      pagination: {},
      loading: false,
      columns,
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch(params = {}) {
      // console.log("params:", params);
      this.loading = true;
      reqwest({
        url: "/api/product/product_info",
        method: "get",
        type: "json",
      }).then((data) => {
        // console.log(data);
        this.loading = false;
        this.data = data.data;
      });
    },
  },
};
</script>

<style>
</style>