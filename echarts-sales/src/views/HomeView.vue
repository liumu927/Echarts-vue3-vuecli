<template>
  <div class="charts">
    <header>
      <h1>大数据可视化</h1>
    </header>

    <section class="container">
      <section class="itemLeft">
        <ItemPage>
          <LeftTop></LeftTop>
        </ItemPage>
        <ItemPage>
          <LeftBottom></LeftBottom>
        </ItemPage>
      </section>

      <section class="itemCenter">
        <MapPage></MapPage>
      </section>

      <section class="itemRight">
        <ItemPage>
          <RightTop></RightTop>
        </ItemPage>
        <ItemPage>
          <RightBottom></RightBottom>
        </ItemPage>
      </section>
    </section>
  </div>
</template>

<script setup>
import ItemPage from "@/components/itemPage.vue";
import LeftTop from "@/components/leftTop.vue";
import LeftBottom from "@/components/leftBottom.vue";
import RightTop from "@/components/rightTop.vue";
import RightBottom from "@/components/rightBottom.vue";
import MapPage from "@/components/mapPage.vue";
import { inject } from "vue";

let $echarts = inject("echarts");
let $http = inject("axios");
// console.log($echarts, $http);
</script>

<style lang="less" scoped>
header {
  height: 1rem;
  width: 100%;
  background-color: rgba(120, 193, 166, 0.3);
  h1 {
    font-size: 0.375rem;
    line-height: 1rem;
    color: aliceblue;
    text-align: center;
  }
}

.container {
  min-width: 100px;
  max-width: 2048px;
  padding: 0 0.125rem 0.125rem 0;
  margin: 0 auto;
  display: flex;

  .itemLeft,
  .itemRight {
    flex: 3;
  }

  .itemCenter {
    flex: 4;
    border: 1px solid #78c1a6;
    padding: 0.125rem;
    margin: 0.25rem;
  }
}
</style>
