<template>
  <div :class="$style.container">
    <img :class="$style.image" :src="imageUrl" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  //for local test
  computed: mapGetters(['imageUrl']),
}
</script>

<style module>
.container {
  overflow: hidden;
  background: gray;
  display: flex;
  align-items: center;
}
.image {
  object-fit: contain;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>