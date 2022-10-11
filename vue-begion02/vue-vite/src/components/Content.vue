<template>
  <div>{{ count }}</div>
  <button @click="handleClick">按钮</button>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);

const handleClick = () => {
  count.value++;
};
</script>

<style>
</style>