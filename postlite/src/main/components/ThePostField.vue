<template>
  <div :class="$style.post_field">
    <label :class="$style.title">{{post.title}}</label>
    <p :class="$style.text">{{post.text}}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState(['post']),
}
</script>

<style module>
.post_field {
  direction: rtl;
  padding: 0 22px;
}
.title {
  font: Bold 16px/28px IranYekan;
  letter-spacing: -0.11px;
}
.text {
  margin-top: 8px;
  font: Normal 12px/21px IranYEKAN;
  letter-spacing: -0.08px;
  text-align: justify;
  white-space: pre-line;
  word-break: break-word;
}
</style>