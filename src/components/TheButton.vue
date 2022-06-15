<template>
  <button
      @click="$emit('onClick')"
      type="button"
      class="c-button"
      :class="modifierClass"
    >
      {{ text }}
    </button>
</template>

<script>
export default({
  props: {
    text: { 
      type: String,
      default: "MORE",
      required: false 
    },
    modifierClass: {
      type: String,
      default: "",
      require: false
    }
  },
  setup(context) {
    console.log(context)
    const execEmit = () => {
      context.emit('onClick');
    }
    return {
      execEmit
    }
  }
})
</script>

<style lang="scss" scoped>
</style>