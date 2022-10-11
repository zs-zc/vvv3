<template>
  <div>demo1-{{ count }}</div>
</template>

<script setup>
import { ref } from "vue";
defineProps(["count"]);
</script>

<style lang="scss" scoped>
</style>