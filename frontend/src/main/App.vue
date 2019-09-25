<template>
  <div class="root">
    <AppBar />
    {{post.title}}
    {{post.text}}
  </div>
</template>


<script>
// components
import AppBar from '../components/TheAppBar'
// helper
import webliteHandler from "./helper/function/weblite.api";
import requests from "./helper/function/handleRequests";
import bus from "./helper/function/bus";
// R && W
const { R, W } = window;

export default {
  name: "App",

  components: {AppBar},

  data() {
    return { post: {} };
  },

  created() {
    W && webliteHandler(this);
  },

  methods: {}
};
</script>


<style scoped>
.root {
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  background: #f0f0f098;
}
</style>
