<template>
  <div class="c-section">
    <div class="c-section__title">
      {{ text }}
    </div>
    <div class="c-section__sub-title" v-bind:class="{ 'c-section__sub-title--center': positonCenter }">
      {{ sub }}
    </div>
  </div>
</template>

<script>
export default({
  props: {
    text: { 
      type: String,
      default: "",
      required: false 
    },
    sub: { 
      type: String,
      default: "",
      required: false 
    },
    positonCenter: {
      type: Boolean,
      default: false,
      required: false 
    }
  },
})
</script>