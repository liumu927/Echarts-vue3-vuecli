<template>
  <div class="item">
    <!-- 设置插槽 -->
    <slot></slot>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.item {
  // height: 4.55rem;
  height: 5.125rem;
  border: 1px solid #78c1a6;
  margin: 0.25rem;
  background-color: rgba(120, 193, 166, 0.3);
}
</style>
