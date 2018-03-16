<template>
  <v-btn
  class="button"
  :class="btnStyle"
  v-bind="$attrs"
  v-on="$listeners">
      <slot />
  </v-btn>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
      btnStyle: {
          type: String,
          default: ''
      }
  }
}
</script>
