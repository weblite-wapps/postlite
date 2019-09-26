<template>
  <div :class="$style.root">
    <div :class="$style.non_responsive">
      <label for="title" :class="$style.text_label">عنوان پست</label>
      <input id="title" :class="[$style.text_area, $style.title]" type="text" v-model="title" />
    </div>

    <div :class="$style.responsive">
      <div :class="$style.summary_field">
        <label for="title" :class="$style.text_label">خلاصه پست</label>
        <textarea
          id="title"
          :class="[$style.text_area, $style.summary]"
          type="text"
          v-model="summary"
          placeholder="متنی که در حالت چت به عنوان خلاصه به کاربر نمایش داده می شود"
        />
      </div>
      <div :class="$style.post_field">
        <label for="title" :class="$style.text_label">متن پست</label>
        <textarea id="title" :class="[$style.text_area, $style.text]" type="text" v-model="text" />
      </div>
    </div>
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
.non_responsive {
  height: 55px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.responsive {
  height: calc(100% - 55px);
  box-sizing: border-box;
}
.summary_field {
  height: 30%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.post_field {
  height: 70%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.title {
  box-sizing: border-box;
  height: 100%;
}
.summary {
  height: 100%;
  box-sizing: border-box;
  resize: none;
}
.text {
  height: 100%;
  box-sizing: border-box;
  resize: none;
}
.text_label {
  display: inline-block;
  box-sizing: border-box;
  text-align: right;
  font-size: 10px;
  font-family: IranYekan;
  letter-spacing: -0.07px;
  color: #808285;
  opacity: 1;
  margin-top: 3px;
}

@media screen and (max-height: 450px), (min-height: 360) {
  .summary_field {
    height: 40%;
  }
  .post_field {
    height: 60%;
  }
}

@media screen and (max-height: 360px) {
  .summary_field {
    height: 50%;
  }
  .post_field {
    height: 50%;
  }
}
</style>
