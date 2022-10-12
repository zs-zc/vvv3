<template>
  <div>
    <h1>产品列表</h1>
    <hr />
    <ul>
      <li v-for="item in productList">
        {{ item.name }}---{{ item.price }}
        <button @click="addTotal(item)" :disabled="item.inventory<=0">
          加入购物车
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { ref, onMounted } from "vue";
import product from "@/store/product.js";
import cart from "@/store/cart.js";

const productStore = product();
const cartStore = cart();
const { productList } = storeToRefs(productStore);
const addTotal = cartStore.addTotal;

onMounted(() => {
  productStore.loadData();
});
</script>

<style>
</style>