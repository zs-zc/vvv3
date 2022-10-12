<template>
  <div>
    <h1>购物车列表</h1>
    <ul>
      <li v-for="item in productList">{{ item.name }}---{{ item.price }}</li>
    </ul>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import cartStore from "@/store/cart.js";

const cart = cartStore();
const { productList } = storeToRefs(cart);
</script>

<style>
</style>