<template>
  <div class="body">
    <h2>销售总量</h2>
    <div class="charts" id="leftTop"></div>
  </div>
</template>

<script setup>
import { inject, onMounted, reactive } from "vue";

let $echarts = inject("echarts");
let $http = inject("axios");
let dataList = reactive({});
let xData = reactive([]);
let yData = reactive([]);

// 请求数据
async function getState() {
  try {
    let res = await $http({
      url: "/left-top/data",
    });
    dataList = res.data.chartData.chartData;
    // console.log(res);
  } catch (error) {
    console.log(error);
  }
}

// 设置数据
function setData() {
  xData = dataList.map((v) => v.title);
  yData = dataList.map((v) => v.num);
}

onMounted(() => {
  
  getState().then(() => {
    let myChart = $echarts.init(document.getElementById("leftTop"));

    setData();

    myChart.setOption({
      grid: {
        top: "3%",
        left: "1%",
        right: "6%",
        bottom: "3%",
        // 包含坐标轴文字
        containLabel: true,
      },
      xAxis: {
        type: "value",
        axisLine: {
          lineStyle: {
            color: "#fff",
          },
        },
      },
      yAxis: {
        // 类目轴
        type: "category",
        data: xData,
        axisLine: {
          lineStyle: {
            color: "#fff",
          },
        },
      },
      series: [
        {
          data: yData,
          type: "bar",
          // 设置样式
          itemStyle: {
            normal: {
              barBorderRadius: [0, 20, 20, 0],
              color: new $echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: "#005eaa",
                },
                {
                  offset: 0.5,
                  color: "#339ca8",
                },
                {
                  offset: 1,
                  color: "#cda819",
                },
              ]),
            },
          },
        },
      ],
    });
  });
});
</script>

<style lang="less" scoped>
.body {
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
}
</style>
