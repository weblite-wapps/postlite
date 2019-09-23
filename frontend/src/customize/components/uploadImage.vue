<template>
  <div :class="$style.root">
    <input name="image" type="file" @change="setImage" />
  </div>
</template>


<script>
// components
// helper

// W
const { W, R } = window;

export default {
  name: "uploadImage",

  components: {},
  props: {
    setImage: Function
  },

  data: () => ({}),

  methods: {
    handleAdd(d) {
      console.log(d);
    }
  },

  created() {}
};
</script>


<style module>
.root {
}
</style>
