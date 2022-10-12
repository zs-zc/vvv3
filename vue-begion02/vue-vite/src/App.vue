<script setup>
import Content from "./components/Content.vue";
import Demo from "./components/Demo.vue";
import Example from "./components/Example.vue";
import Demos from "./components/Demo2/demo.vue";
import counterStore from "./components/usePinia/Counter.vue";
import product from "./components/product/demo.vue";
import cart from "./components/cart/demo.vue";
</script>

<template>
  <div>
    <Content></Content>
    <Demo></Demo>
    <Example></Example>
    <Demos></Demos>
    <counterStore></counterStore>
    <product></product>
    <cart></cart>
  </div>
</template>

<style scoped>
</style>
