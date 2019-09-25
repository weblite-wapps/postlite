<template>
  <label for="input-file" :class="$style.label">
      <input id="input-file" :class="$style.input" name="image" type="file" @change="setFile" />
      <div :class="$style.button_container">
        <img src="attach.svg" />
        <div :class="$style.title_container">
          <span :class="$style.title">ضمیمه</span>
          <span :class="$style.subtitle">برای افزودن کلیک کنید</span>
        </div>
      </div>
    </label>
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
.label {
  margin-top: 10px;
  box-sizing: border-box;
  display: block;
  text-align: center;
  background-color: #F7DF5C;
  width: 100%;
  cursor: pointer;
}
.button_container {
  padding-top: 10px;
  display: inline-flex;
  flex-direction: row-reverse;
}
.title_container {
  display: flex;
  flex-direction: column;
  margin-right: 5px
}
.title {
  text-align: right;
  font-size: 12px;
  font-family: IranYekan;
  letter-spacing: -0.08px;
  color: #000000;
  opacity: 1;
}
.subtitle {
  text-align: right;
  font-size: 8px;
  font-family: IranYekan;
  letter-spacing: -0.06px;
  color: #808285;
  opacity: 1;
}
.input {
  display: none;
}
</style>
