<script >
export default {
  data() {
    return {
      uname: "zs",
      msg: "<h1>那三项奥斯卡进行会计</h1>",
      isActive: true,
    };
  },
  methods: {
    changeA() {
      this.uname = "ls";
    },
    add() {
      console.log("add");
    },
    ad() {
      console.log("ad");
    },

    divFa() {
      console.log("父元素");
    },
    divSon() {
      console.log("子元素");
    },
  },
};
</script>

<template>
  <div>
    <p>{{ uname }}</p>
    <p v-html="msg"></p>
    <p :class="{ active: isActive }">少时诵诗书所所所所所所所所</p>
    <button @click="changeA">按钮</button>
    <button @click="add(), ad()">多个事件</button>

    <div @click="divFa">
      <div @click.stop="divSon">子冒泡</div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.active {
  background-color: pink;
}
</style>
