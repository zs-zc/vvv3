<template>
  <div>
    <h1>购物车</h1>
    <hr />
    <ul>
      <li v-for="item in cartList">
        {{ item.name }}---{{ item.price }}--{{ item.quantity }} ={{
          item.price * item.quantity
        }}
      </li>
    </ul>
    <div>
        总价：{{totalPrice}}
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { ref, onMounted } from "vue";
import cart from "@/store/cart.js";
const cartStore = cart();
const { cartList,totalPrice } = storeToRefs(cartStore);
</script>

<style>
</style>