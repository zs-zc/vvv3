<template>
  <div>
    <h1>{{ message }}</h1>
    <h2>{{ count }}</h2>
    <Content :msg="msg" />
  </div>
</template>

<script >
import Content from "./components/Content.vue";
export default {
  components: {
    Content,
  },

  data() {
    return {
      msg: "子元素",
    };
  },
  steup() {
    let message = "你好";
    function changeMessage() {
      message = "你好呀";
    }
    const count = ref(0);
    return { message, count, changeMessage };
  },
};
</script>


