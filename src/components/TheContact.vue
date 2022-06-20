<template>
  <section class="p-contact">
    <div class="p-contact__inner">
      <div class="p-contact__head">
        <contentTitle
          text="CONTACT"
          sub="お問い合わせ"
          positionCenter="true"
        >
        </contentTitle>
      </div>
      <div class="p-contact__body">
        Webサイトの制作のご依頼やお見積もりなど、お気軽にご相談ください
      </div>
      <div class="p-contact__button">
        <TheButton
          text="MORE"
          class=""
          modifier-class="c-button--purple"
        ></TheButton>
      </div>
    </div>
  </section>
</template>

<script>
import TheButton from '@/components/TheButton.vue';
import contentTitle from '@/components/contentTitle.vue';
export default {
  components: {
    TheButton,contentTitle
  },
  setup() {
    
  },
}
</script>