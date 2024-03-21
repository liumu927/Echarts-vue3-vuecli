<template>
  <div>
    <h2>库存统计</h2>
    <div class="charts" id="rightTop"></div>
  </div>
</template>

<script setup>
import { inject, onMounted, reactive } from "vue";

let $echarts = inject("echarts");
let $http = inject("axios");
let dataList = reactive({});

// 请求数据
async function getState() {
  try {
    let res = await $http({
      url: "/right-top/data",
    });

    dataList = res.data.chartData.chartData;
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  getState().then(() => {

    let myChart = $echarts.init(document.getElementById("rightTop"));

    myChart.setOption({
      // 图例
      legend: {
        top: "bottom",
        textStyle: {
          color: "#fff",
        },
      },
      tooltip: {
        show: true,
      },
      series: [
        {
          type: "pie",
          data: dataList,
          radius: [10, 100],
          center: ["50%", "45%"],
          roseType: "area",
          itemStyle: {
            borderRadius: 10,
          },
        },
      ],
    });
  });
});
</script>

<style lang="less" scoped>
h2 {
  color: aliceblue;
  text-align: center;
  height: 0.6rem;
  line-height: 0.6rem;
  font-size: 0.25rem;
}
.charts {
  height: 4.5rem;
}
</style>
