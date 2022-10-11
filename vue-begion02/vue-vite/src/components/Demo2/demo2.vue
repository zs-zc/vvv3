<template>
  <div>demo2-{{ count }}</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const title = ref("标题1");
defineProps(["count"]);
const emit = defineEmits(["my-event"]);
onMounted(() => {
  emit("my-event", title);
});
</script>

<style lang="scss" scoped>
</style>