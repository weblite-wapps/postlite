<template>
  <div class="root">
    {{post.title}}
    {{post.summary}}
    <button @click="handleOpenInX">goToX</button>
  </div>
</template>


<script>
// components

// helper
import webliteHandler from "./helper/function/weblite.api";
import requests from "./helper/function/handleRequests";
import bus from "./helper/function/bus";
// R && W
const { R, W } = window;

export default {
  name: "App",

  components: {},

  data() {
    return {
      post: {}
    };
  },
  watch: {
    post() {
      console.log("post in watch ", this.post);
    }
  },

  created() {
    W && webliteHandler(this);
  },

  methods: {
    handleOpenInX() {
      W.changeModeTo("main", this.post);
    }
  }
};
</script>


<style scoped>
.root {
  position: relative;
  width: 350px;
  min-height: 450px;
  max-height: 450px;
  display: flex;
  flex-direction: column;
  border: 1px #e0e0e0 solid;
  border-radius: 5px;
  overflow: hidden;
}
</style>
