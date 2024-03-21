<template>
  <div>
    <h2>周销图</h2>
    <div class="chart" id="leftBottom"></div>
  </div>
</template>

<script setup>
import { inject, onMounted, reactive } from "vue";

let $echarts = inject("echarts");
let $http = inject("axios");

let dataList = reactive({});

async function getState() {
  try {
    let res = await $http({ url: "/left-bottom/data" });
    dataList = res.data.chartData.chartData;
    console.log(dataList);
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  getState().then(() => {
    console.log("折线图", dataList);

    let myChart = $echarts.init(document.getElementById("leftBottom"));
    myChart.setOption({
      tooltip: {
        // 触发类型：坐标轴触发
        trigger: "axis",
        axisPointer: {
          // 十字准星
          type: "cross",
          label: {
            backgroundColor: "#e6b600",
          },
        },
      },
      legend: {
        data: ["服饰", "数码", "家电", "家居", "日化"],
        textStyle: {
          color: "#fff",
        },
      },
      grid: {
        left: "1%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
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
      series: [
        {
          name: "服饰",
          type: "line",
          data: dataList.num.Chemicals,
          // 平滑效果
          smooth: true,
          // 隐藏点
          showSymbol: false,
          // 数据堆叠
          stack: "Total",
          // 隐藏线段
          lineStyle: {
            width: 0,
          },
          // 选中高亮
          emphasis: {
            focus: "series",
          },
          // 填充区域的样式设置
          areaStyle: {
            opacity: 0.8,
            color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgb(128, 255, 165)",
              },
              {
                offset: 1,
                color: "rgb(1, 191, 236)",
              },
            ]),
          },
        },
        {
          name: "数码",
          type: "line",
          data: dataList.num.Clothes,
          stack: "Total", //数据堆叠
          smooth: true, //折线图平滑效果 变成曲线图
          showSymbol: false, //   隐藏所有数据点

          areaStyle: {
            opacity: 0.8,
            color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgb(0, 221, 255)",
              },
              {
                offset: 1,
                color: "rgb(77, 119, 255)",
              },
            ]),
          },
          lineStyle: {
            // 设置线段样式
            width: 0,
          },
          emphasis: {
            //设置高亮的图形样式和标签样式
            focus: "series", //只显示选中的内容高亮
          },
        },
        {
          name: "家电",
          type: "line",
          data: dataList.num.Electrical,
          stack: "Total", //数据堆叠
          smooth: true, //折线图平滑效果 变成曲线图
          showSymbol: false, //   隐藏所有数据点

          areaStyle: {
            opacity: 0.8,
            color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgb(55, 162, 255)",
              },
              {
                offset: 1,
                color: "rgb(116, 21, 219)",
              },
            ]),
          },
          lineStyle: {
            // 设置线段样式
            width: 0,
          },
          emphasis: {
            //设置高亮的图形样式和标签样式
            focus: "series", //只显示选中的内容高亮
          },
        },
        {
          name: "家居",
          type: "line",
          data: dataList.num.digit,
          stack: "Total", //数据堆叠
          smooth: true, //折线图平滑效果 变成曲线图
          showSymbol: false, //   隐藏所有数据点

          areaStyle: {
            opacity: 0.8,
            color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgb(255, 0, 135)",
              },
              {
                offset: 1,
                color: "rgb(135, 0, 157)",
              },
            ]),
          },
          lineStyle: {
            // 设置线段样式
            width: 0,
          },
          emphasis: {
            //设置高亮的图形样式和标签样式
            focus: "series", //只显示选中的内容高亮
          },
        },
        {
          name: "日化",
          type: "line",
          data: dataList.num.gear,
          stack: "Total", //数据堆叠
          smooth: true, //折线图平滑效果 变成曲线图
          showSymbol: false, //   隐藏所有数据点

          areaStyle: {
            opacity: 0.8,
            color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgb(255, 191, 0)",
              },
              {
                offset: 1,
                color: "rgb(224, 62, 76)",
              },
            ]),
          },
          lineStyle: {
            // 设置线段样式
            width: 0,
          },
          emphasis: {
            //设置高亮的图形样式和标签样式
            focus: "series", //只显示选中的内容高亮
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
