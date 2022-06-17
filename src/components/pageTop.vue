<template>
  <div
    class="c-page-top"
    v-bind:class="{isActive: isActive}"
    @click="topScroll()"
    >
    <div class="c-page-top__inner">
      <span></span>
    </div>
  </div>
</template>

<script setup >
  import { onMounted, ref } from 'vue';
  const isActive = ref(false);
  onMounted(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY > 500){
        isActive.value = true
      } else {
        isActive.value = false
      }
    })
  })
  const topScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
</script>