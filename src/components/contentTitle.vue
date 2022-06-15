<template>
  <div class="p-section">
    <div class="p-section__title">
      {{ text }}
    </div>
    <div class="p-section__sub-title">
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
  },
})
</script>