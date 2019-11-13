<template>
    <label for="input-image" :class="$style.label">
      <input id="input-image" :class="$style.input" name="image" type="file" accept="image/*" @change="setImage" />
      <div :class="$style.button_container">
        <img src="image-frame.svg" />
        <div :class="$style.title_container">
          <span :class="$style.title">تصویر شاخص</span>
          <span :class="$style.subtitle">برای افزودن تصویر کلیک کنید</span>
        </div>
      </div>
    </label>

</template>


<script>
// components
// helper

export default {
  name: 'uploadImage',

  components: {},
  props: {
    setImage: Function,
  },

  data: () => ({}),

  methods: {
    handleAdd(d) {
      console.log(d)
    },
  },

  created() {},
}
</script>


<style module>
.label {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #c9e8ff;
  /* width: 100%; */
  margin: 20px;
  margin-bottom: 8px;
  cursor: pointer;
}
.button_container {
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
  font-size: 16px;
}
</style>
