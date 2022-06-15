<template>
  <div class="home">
    <!-- ヘッダー -->
    <TheHeader />
    <section class="p-fv">
      <div class="p-fv__title">
        <h1 class="p-fv__title--large">
          WEB DESIGN SPECIALIST
        </h1>
        <h2 class="p-fv__title--small">
          お客様の夢を叶えるWebサイトを制作
        </h2>
        <TheButton
          text="CONTACT"
          class="p-fv__title"
          modifier-class="c-button--white"
        ></TheButton>
      </div>
      <span class="p-fv__scroll-arrow">
        SCROLL
      </span>
    </section>
    <section class="p-news">
      aa<br>
      ee
    </section>
    <section class="service"></section>
    <section class="works"></section>
    <section class="company"></section>
    <section class="recruit"></section>
    <section class="contact"></section>
    <!-- フッター -->
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheButton from '@/components/TheButton.vue';
export default {
  name: 'HomePage',
  components: {
    TheHeader,
    TheButton
  },
}
</script>
