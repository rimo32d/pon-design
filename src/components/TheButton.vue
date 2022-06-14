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
  .c-button {
    border-radius: 50px;
  }
  .c-button--white {
    background-color: transparent;
    border: 1px solid #fff;
    padding: 20px 50px;
    font-weight: 700;
  }
  .c-button--purple {
    background-color: purple;
  }
</style>