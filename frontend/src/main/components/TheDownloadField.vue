<template>
  <div :class="$style.container">
    <a :class="$style.download_btn" :href="fileObj.url" :download="fileObj.name">
      <img src="down-arrow.svg" />
    </a>
    <div :class="$style.file_info">
      <div :class="$style.info_container">
        <img src="attach.svg" />
        <div :class="$style.title_container">
          <span :class="$style.title">{{fileObj.name}}</span>
          <span :class="$style.subtitle">{{fileObj.size}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fileObj: {
      type: Object,
      default: () =>({
          name: 'sober',
          size: '2.96 Mb',
          url:
            'https://upload.wikimedia.org/wikipedia/commons/9/94/Desert_Electric.jpg',
        }),
    },
  },
}
</script>

<style module>
.container {
  padding: 8px 22px;
  display: flex;
  flex-direction: row;
}
.download_btn {
  display: flex;
  align-content: center;
  align-items: center;
  height: 60px;
  min-width: 64px;
  margin-right: 20px;
  background-color: #9ed8a2;
  cursor: pointer;
}
.download_btn img {
  margin: auto;
}
.file_info {
  height: 60px;
  box-sizing: border-box;
  display: flex;
  align-content: center;
  align-items: center;
  background-color: #f7df5c;
  width: 100%;
}
.info_container {
  display: inline-flex;
  margin: auto;
  flex-direction: row-reverse;
}
.title_container {
  display: flex;
  flex-direction: column;
  margin-right: 7px;
}
.title {
  font: Bold 12px/21px IRANYekan;
  letter-spacing: -0.08px;
}
.subtitle {
  font: normal 8px/13px IRANYekan;
  letter-spacing: -0.06px;
  color: #818181;
}
</style>