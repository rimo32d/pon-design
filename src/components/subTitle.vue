<template>
  <section class="p-sub-fv">
    <div class="p-sub-fv__title">
      <h1 class="p-sub-fv__title--large">
        {{ mainTitle }}
      </h1>
      <h2 class="p-sub-fv__title--small">
        {{ subTitle }}
      </h2>
    </div>
  </section>
</template>

<script>
export default({
  props: {
    mainTitle: { 
      type: String,
      default: "",
      required: false 
    },
    subTitle: { 
      type: String,
      default: "",
      required: false 
    }
  },
})
</script>