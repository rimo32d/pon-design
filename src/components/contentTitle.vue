<template>
  <div class="c-content-tile">
    <h2 class="c-content-tile__title">
      {{ text }}
      <span class="c-content-tile__sub-title" v-bind:class="{ 'c-content-tile__sub-title--center': positonCenter }">
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