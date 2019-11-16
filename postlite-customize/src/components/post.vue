<template>
  <div :class="$style.root">
    <div :class="$style.non_responsive">
      <label for="aparat" :class="$style.text_label">لینک آپارات</label>
      <input
        id="aparat"
        dir="ltr"
        :class="[$style.text_container, $style.title]"
        type="text"
        v-model="aparat"
      />
    </div>

    <div :class="$style.non_responsive">
      <label for="title" :class="$style.text_label">عنوان پست</label>
      <input
        id="title"
        dir="auto"
        :class="[$style.text_container, $style.title]"
        type="text"
        v-model="title"
      />
    </div>

    <div :class="$style.upper_gap">
      <label for="summary" :class="$style.text_label">خلاصه پست</label>
      <textarea
        dir="auto"
        id="summary"
        :class="[$style.text_area, $style.text_container, $style.summary]"
        type="text"
        v-model="summary"
        placeholder="متنی که در حالت چت به عنوان خلاصه به کاربر نمایش داده می شود"
      />
    </div>
    <div :class="$style.upper_gap">
      <label for="text" :class="$style.text_label">متن پست</label>
      <textarea
        dir="auto"
        placeholder="متن پست"
        id="text"
        :class="[$style.text_area, $style.text_container , $style.text]"
        type="text"
        v-model="text"
      />
    </div>
  </div>
</template>


<script>
// components
// helper


export default {
  name: 'App',

  components: {},

  data: () => ({
    aparat: '',
    title: '',
    summary: '',
    text: '',
  }),
  computed: {
    postData() {
      return this.aparat + this.title + this.summary + this.text
    },
  },
  watch: {
    postData() {
      this.setPost({
        aparat: this.aparat,
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
  margin: 20px;
  margin-top: 0;
}

.text_container {
  font-family: IranYekan;
  box-sizing: border-box;
  background-color: #f0f0f0;
  width: 100%;
  padding: 6px 9px;
  border: none;
  font-size: 16px;
}
.text_container::placeholder {
  text-align: right;
  font-size: 12px;
  line-height: 21px;
  letter-spacing: -0.08px;
  color: #ccc;
}

.upper_gap {
  margin-top: 3px;
}

.text_area {
  padding: 15px;
}

.non_responsive {
  height: 55px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.title {
  box-sizing: border-box;
  height: 40px;
}
.summary {
  height: 70px;
  box-sizing: border-box;
  resize: none;
}
.text {
  height: 190px;
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
  margin-bottom: 5px;
}

</style>
