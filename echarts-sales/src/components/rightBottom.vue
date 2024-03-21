<template>
  <div>
    <h2>库存统计图</h2>
    <div class="chart" id="rightBottom"></div>
  </div>
</template>

<script setup>
import { inject, onMounted, reactive } from "vue";

let $echarts = inject("echarts");
let $http = inject("axios");

let dataList = reactive({});

async function getState() {
  let res = await $http({ url: "/right-bottom/data" });
  dataList = res.data.chartData.chartData;
}

onMounted(() => {
  getState().then(() => {
    console.log("柱状图4", dataList);

    let myChart = $echarts.init(document.getElementById("rightBottom"));
    myChart.setOption({
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: dataList.day,
        axisLine: {
          lineStyle: {
            color: "#fff",
          },
        },
      },
      yAxis: {
        type: "value",
        axisLine: {
          lineStyle: {
            color: "#fff",
          },
        },
      },
      legend: {
        textStyle: {
          color: "#fff",
        },
      },
      tooltip: {
        trigger: "axis",
        // 选中时阴影显示
        axisPointer: {
          type: "shadow",
        },
      },
      series: [
        {
          name: "服饰",
          type: "bar",
          data: dataList.num.Clothes,
          // 数据堆叠
          stack: "total",
          label: {
            show: true,
          },
          // 选中高亮
          emphasis: {
            focus: "series",
          },
        },
        {
          name: "数码",
          type: "bar",
          data: dataList.num.digit,
          stack: "total",
          label: {
            show: true,
          },
          emphasis: {
            focus: "series",
          },
        },
        {
          name: "家电",
          type: "bar",
          data: dataList.num.Electrical,
          stack: "total",
          label: {
            show: true,
          },
          emphasis: {
            focus: "series",
          },
        },
        {
          name: "家居",
          type: "bar",
          data: dataList.num.gear,
          stack: "total",
          label: {
            show: true,
          },
          emphasis: {
            focus: "series",
          },
        },
        {
          name: "日化",
          type: "bar",
          data: dataList.num.Chemicals,
          stack: "total",
          label: {
            show: true,
          },
          emphasis: {
            focus: "series",
          },
        },
      ],
    });
  });
});
</script>

<style>
h2 {
  height: 0.6rem;
  color: #fff;
  line-height: 0.6rem;
  font-size: 0.25rem;
  text-align: center;
}
.chart {
  height: 4.5rem;
}
</style>
