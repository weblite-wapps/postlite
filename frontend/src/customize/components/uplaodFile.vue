<template>
  <div :class="$style.root">
    <input name="image" type="file" @change="setFile" />
  </div>
</template>


<script>
// components
// helper

// W
const { W, R } = window;

export default {
  name: "App",

  components: {},
  props: {
    setFile: Function
  },
  data: () => ({}),

  methods: {},

  created() {}
};
</script>


<style module>
.root {
}
</style>
