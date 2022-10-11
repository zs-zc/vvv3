<template>
  <div>
    <li
      v-for="(item, index) in list"
      :class="{ active: itemIndex === index }"
      @click="handleClcik(index)"
    >
      {{ item }}
    </li>
    <GC></GC>
  </div>
</template>

<script setup>
import { ref } from "vue";
const itemIndex = ref(0);
const list = ref(["line 1", "line 2", "line 3"]);

const handleClcik = (index) => {
  itemIndex.value = index;
};
</script>

<style scoped>
.active {
  color: red;
  font-size: 30px;
}
</style>