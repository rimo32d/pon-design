<template>
  <div class="c-section">
    <h2 class="c-section__title">
      {{ text }}
      <span class="c-section__sub-title" v-bind:class="{ 'c-section__sub-title--center': positonCenter }">
        {{ sub }}
      </span>
    </h2>
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