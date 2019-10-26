<template>
  <div :class="$style.container">
    <img :class="$style.blured" :src="imageUrl"/>
    <img :class="$style.image" :src="imageUrl" />
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
    },
  },
  //for local test
  data() {
    return {
      fakeImg:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Anatomy_of_a_Sunset-2.jpg/1920px-Anatomy_of_a_Sunset-2.jpg',
    }
  },
}
</script>

<style module>
.container{
    position: relative;
    overflow: hidden;
}
.image {
  object-fit: contain;
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
}
.blured {
  filter: blur(8px) grayscale(50%);
  object-fit: cover;
  position: absolute;
  transform: scale(1.2);
  width: 100%;
  height: 100%;
}
</style>
