<template>
  <div>
    <demo1 :count="count"></demo1>
    <demo2 :count="count" @my-event="handleMyEvemt"></demo2>
    {{ title }}
  </div>
</template>

<script setup>
import demo1 from "./demo1.vue";
import demo2 from "./demo2.vue";
import { ref, onMounted } from "vue";
const title = ref("biaoti");

const count = ref(100);

const handleMyEvemt = (msg) => {
  title.value = msg;
};
onMounted(() => {
  count.value = 200;
});
</script>

<style lang="scss" scoped>
</style>