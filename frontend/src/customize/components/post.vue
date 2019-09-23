<template>
  <div :class="$style.root">
    <input type="text" v-model="title" />
    <input type="text" v-model="summary" />
    <input type="text" v-model="text" />
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

  data: () => ({
    title: "",
    summary: "",
    text: ""
  }),
  computed: {
    postData() {
      return this.title + this.summary + this.text;
    }
  },
  watch: {
    postData() {
      this.setPost({
        title: this.title,
        summary: this.summary,
        text: this.text
      });
    }
  },
  props: {
    setPost: Function
  },
  methods: {},

  created() {}
};
</script>


<style module>
.root {
}
</style>
