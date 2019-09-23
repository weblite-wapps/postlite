<template>
  <div :class="$style.root">
    <label for="title" :class="$style.text_label">عنوان پست</label>
    <input id="title" :class="[$style.text_area, $style.title]" type="text" v-model="title" />

    <label for="title" :class="$style.text_label" >خلاصه پست</label>
    <textarea id="title" :class="[$style.text_area, $style.summary]" type="text" v-model="summary" placeholder="متنی که در حالت چت به عنوان خلاصه به کاربر نمایش داده می شود"/>

    <label for="title" :class="$style.text_label">متن پست</label>
    <textarea id="title" :class="[$style.text_area, $style.text]" type="text" v-model="text" />
  </div>
</template>


<script>
// components
// helper

// W
const { W, R } = window

export default {
  name: 'App',

  components: {},

  data: () => ({
    title: '',
    summary: '',
    text: '',
  }),
  computed: {
    postData() {
      return this.title + this.summary + this.text
    },
  },
  watch: {
    postData() {
      this.setPost({
        title: this.title,
        summary: this.summary,
        text: this.text,
      })
    },
  },
  props: {
    setPost: Function,
  },
  methods: {},

  created() {},
}
</script>


<style module>
.root {
  direction: rtl;
}
.text_area {
  font-family: IranYekan;
  box-sizing: border-box;
  background-color: #f0f0f0;
  border: none;
  width: 100%;
  padding: 10px;
}
.title {
  height: 35px;
}
.summary {
  height: 55px;
  resize: none;
}
.text {
  height: 110px;
  resize: none;
}
.text_label {
  display: inline-block;
  text-align: right;
  font-size: 10px;
  font-family: IranYekan; 
  letter-spacing: -0.07px;
  color: #808285;
  opacity: 1;
  margin-top: 3px;
}
</style>
