<template>
  <div class="page">
    <h1>数据统计</h1>
    <!-- 第一步：提供dom，显示图表 -->
    <div class="container" ref="line"></div>
    <div class="container" ref="pie"></div>
  </div>
</template>

<script>
import { Line, Pie } from "@antv/g2plot";
export default {
  data() {
    return {
      lineData: [
        { year: "1991", value: 3 },
        { year: "1992", value: 4 },
        { year: "1993", value: 3.5 },
        { year: "1994", value: 5 },
        { year: "1995", value: 4.9 },
        { year: "1996", value: 6 },
        { year: "1997", value: 7 },
        { year: "1998", value: 9 },
        { year: "1999", value: 13 },
      ],
      pieData: [
        { time: "1991", value: 30 },
        { time: "1992", value: 20 },
        { time: "1993", value: 12 },
        { time: "1994", value: 15 },
        { time: "1995", value: 32 },
      ],
    };
  },
  methods: {
    renderLine() {
      // 第二步: 创建图表，放在dom上。
      // 创建折线图
      const linePlot = new Line(this.$refs.line, {
        // 提供折线图数据
        data: this.lineData,
        // 设置x轴的字段
        xField: "year",
        // 设置y轴字段
        yField: "value",
      });

      // 第三步: 渲染图表
      linePlot.render();
    },
    renderPie() {
      const piePlot = new Pie(this.$refs.pie, {
        width: 300,
        height: 300,
        renderer: "canvas",
        data: this.pieData,
        angleField: "value",
        colorField: "time",
        meta: {
          value: {
            formatter(value) {
              return value+'kg';
            },
          },
          time: {
            formatter(value) {
              return value+'年';
            },
          }
        },
        radius: 0.8,
        pieStyle: {
          fillOpacity: 0.6,
          lineDash: [2, 10],
        },
        tooltip: false,
        legend: false
      });
      piePlot.render();
    },
  },
  mounted() {
    this.renderLine();
    this.renderPie();
  },
};
</script>

<style>
.page {
  background-color: #fff;
}
.container {
  width: 100%;
  height: 300px;
  margin: 10px 0;
  background: #eee;
}
</style>