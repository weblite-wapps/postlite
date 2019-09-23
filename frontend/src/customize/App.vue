<template>
  <div :class="$style.root">customize</div>
</template>


<script>
// components

// helper
import webliteHandler from "./helper/function/weblite.api";

// W
const { W, R } = window;

export default {
  name: "App",

  components: {},

  data: () => ({}),

  methods: {},

  created() {
    W && webliteHandler(this);
  }
};
</script>


<style module>
.root {
  position: relative;
  width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px #e0e0e0 solid;
  border-radius: 5px;
  overflow: hidden;
  background: #f0f0f098;
}
</style>
