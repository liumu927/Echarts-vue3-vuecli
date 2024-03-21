<template>
  <router-view />
</template>

<script setup>
import { provide } from "vue";
import * as echarts from "echarts";
import axios from "axios";

provide("echarts", echarts);
provide("axios", axios);

// 设置基准路径
axios.defaults.baseURL = "http://localhost:3000";
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  // 怪异盒模型
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
}

body {
  background: url("@/assets/bg.png") top center/cover no-repeat;
}
</style>
