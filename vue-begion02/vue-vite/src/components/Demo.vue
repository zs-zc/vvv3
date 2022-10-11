<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ words.split("").reverse().join("") }}</h2>
    <button @click="increment">{{ state.count }}</button>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const msg = ref("消息");
const words = ref("hello vue3");

const state = reactive({
  count: 0,
});
const increment = () => {
  state.count++;
};
</script>

<style>
</style>