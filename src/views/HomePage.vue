<template>
  <div class="home">
    <!-- ヘッダー -->
    <section class="l-fv">
      <div class="l-fv__title">
        <h1 class="l-fv__title--large">
          WEB DESIGN SPECIALIST
        </h1>
        <h2 class="l-fv__title--small">
          お客様の夢を叶えるWebサイトを制作
        </h2>
        <TheButton
          text="CONTACT"
          class="l-fv__title"
          modifier-class="c-button--white"
        ></TheButton>
      </div>
      <div class="l-fv__scroll-arrow">
        <div class="l-fv__scroll-arrow-text">
          SCROLL
        </div>
        <span class="l-fv__scroll-arrow-mark"></span>
      </div>
    </section>
    <section class="news"></section>
    <section class="service"></section>
    <section class="works"></section>
    <section class="company"></section>
    <section class="recruit"></section>
    <section class="contact"></section>
    <!-- フッター -->
  </div>
</template>

<script>
import TheButton from '@/components/TheButton.vue';
export default {
  name: 'HomePage',
  components: {
    TheButton
  },
}
</script>
