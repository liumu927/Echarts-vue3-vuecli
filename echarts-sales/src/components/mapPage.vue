<template>
  <div class="map" id="map"></div>
</template>

<script setup>
import axios from "axios";
import { onMounted, reactive, inject } from "vue";

let mapData = reactive({});
let $echarts = inject("echarts");

async function getState(params) {
  let res = await axios.get("/china/data");
  // console.log(res);
  mapData = res;
}

onMounted(() => {
  getState().then(() => {
    // console.log("map", mapData);

    // 设置地图
    $echarts.registerMap("china", mapData.data.chinaData);

    let myChart = $echarts.init(document.getElementById("map"));

    myChart.setOption({
      geo: {
        map: "china",
        itemStyle: {
          areaColor: "rgba(36,135,72,0.8)",
          borderColor: "#05ff9f",
          shadowColor: "rgba(128,171,237,0.5)",
          shadowBlur: 30,
          // 淡出：高亮当前
          emphasis: {
            focus: "self",
          },
        },
      },
      // 气泡点
      tooltip: {
        trigger: "item",
      },
      title: {
        text: "城市销量",
        top: "2%",
        left: "42%",
        textStyle: {
          color: "#fff",
          fontSize: 28,
          textShadowBlur: 10,
          textShadowColor: "#33ffff",
        },
      },
      // 视觉映射
      visualMap: {
        // 连续类型
        type: "continuous",
        min: 100,
        max: 5000,
        // 滑动效果
        calculable: true,
        inRange: {
          color: ["#50a3ba", "#eac736", "#d94e5d"],
        },
        textStyle: {
          color: "#fff",
        },
      },
      series: [
        {
          type: "scatter",
          itemStyle: {
            color: "red",
          },
          // 坐标系：地理坐标
          coordinateSystem: "geo",
          //  散点图数据
          data: [
            { name: "北京", value: [116.46, 39.92, 4367] },
            { name: "上海", value: [121.48, 31.22, 8675] },
            { name: "深圳", value: [114.07, 22.62, 2461] },
            { name: "广州", value: [113.23, 23.16, 187] },
            { name: "西安", value: [108.45, 34, 3421] },
          ],
        },
      ],
    });
  });
});
</script>

<style>
.map {
  width: 100%;
  height: 100%;
}
</style>
