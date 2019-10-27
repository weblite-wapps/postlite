<template>
  <div :class="$style.app_bar">
    <div :class="$style.logo_container">
      <img src="post.svg" />
      <div :class="$style.text_container">
        <strong :class="$style.top_post">POST</strong>
        <span :class="$style.top_lite">لایت</span>
        <br />
        <strong :class="$style.buttom_lite">LITE</strong>
        <strong :class="$style.buttom_post">پســــــــت</strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style module>
.app_bar {
  font-family: IranYekan;
  background-color: black;
  height: 50px;
  text-align: center;
  width: 100vw;
}
.logo_container {
  margin: -6px 0 0 15px;
  display: inline-flex;
  flex-direction: row-reverse;
}
.text_container {
  height: 50;
  color: white;
}
.top_post {
  font: Bold 18px/31px IRANYekan;
  letter-spacing: 3.6px;
  position: relative;
  top: 8px;
  right: 24.5px;
}
.top_lite {
  font: Bold 10px/17px IRANYekan;
  letter-spacing: 0;
  color: #cccccc;
  position: relative;
  top: 5px;
  right: 5.5px;
}
.buttom_lite {
  letter-spacing: 0;
  color: #cccccc;
  font: Bold 11px/19px IRANYekan;
  position: relative;
  top: -10px;
  right: 19px;
}
.buttom_post {
  letter-spacing: 0;
  font: Bold 18px/31px IRANYekan;
  position: relative;
  top: -10px;
  right: 10px;
}
</style>