<template>
  <label for="input-file" :class="$style.label">
    <input id="input-file" :class="$style.input" name="file" type="file" @change="setFile" />
    <div :class="$style.button_container">
      <img v-if="!name" src="attach.svg" :class="$style.attach_logo"/>
      <div v-if="!name" :class="$style.title_container">
        <span :class="$style.title">ضمیمه</span>
        <span :class="$style.subtitle">برای افزودن کلیک کنید</span>
      </div>
        <p v-if="name" :class="$style.file_name">{{name}}</p>
        <p v-if="uploadingProgress" :class="$style.file_name">{{uploadingProgress}}</p>
    </div>
  </label>
</template>


<script>
// components
// helper

// W
const { W } = window

export default {
  name: 'App',

  components: {},
  props: {
    setFile: Function,
    name: String,
    uploadingProgress: String,
  },
  data: () => ({}),

  methods: {},

  created() {},
}
</script>


<style module>
.label {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7df5c;
  cursor: pointer;
  margin: 20px;
  margin-bottom: 8px;
}
.attach_logo {
  margin-left:8px;
}
.file_name {
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding: 0 20px;
}

.button_container {
  padding-top: 10px;
  display: inline-flex;
  flex-direction: row-reverse;
  justify-content: center;
  width: 100%;
}
.title_container {
  display: flex;
  flex-direction: column;
  margin-right: 5px;
}
.title {
  text-align: right;
  font-size: 12px;
  font-family: IranYekan;
  letter-spacing: -0.08px;
  font-weight: bold;
  color: #000000;
}
.subtitle {
  text-align: right;
  font-size: 8px;
  font-family: IranYekan;
  letter-spacing: -0.06px;
  font-weight: bold;
}
.input {
  display: none;
  font-size: 16px;
}
</style>
