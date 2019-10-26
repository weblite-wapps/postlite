<template>
  <div :class="$style.container">
    <img :class="$style.blured" :src="imageUrl" />
    <img :class="$style.image" :src="imageUrl" />
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  //for local test
  computed: mapGetters(['imageUrl']),
}
</script>

<style module>
.container {
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