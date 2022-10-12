<template>
  <div>
    <h1>使用pinia</h1>
    <h2>
      {{ count }}
    </h2>
    <button @click="add">按钮+</button>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import useCounterStore from "../../store/counterStore";
const counterStore = useCounterStore();

const { count } = storeToRefs(counterStore);
const add = counterStore.add;
</script>

<style>
</style>