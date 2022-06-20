<template>
  <div class="home">
    <!-- ヘッダー -->
    <TheHeader />
    <subTitle
      :mainTitle="pageName"
      subTitle="事業内容"
    ></subTitle>
    <div class="p-breadcrumb">
      <div class="l-inner">
        <ol class="p-breadcrumb__inner">
          <li class="p-breadcrumb__list">
            <a href="#">HOME</a>
          </li>
          <li class="p-breadcrumb__list">
            <a href="#">{{pageName}}</a>
          </li>
        </ol>
      </div>
    </div>
    <div class="p-service">
    <section class="p-contact">
      <div class="p-contact__inner">
        <div class="p-contact__head">
          <content-title
            text="CONTACT"
            sub="お問い合わせ"
            positionCenter="true"
          >
          </content-title>
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
    <TheFooter />
    <pageTop />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import subTitle from '@/components/subTitle.vue';
import TheButton from '@/components/TheButton.vue';
import contentTitle from '@/components/contentTitle.vue';
import TheFooter from '@/components/TheFooter.vue';
import pageTop from '@/components/pageTop.vue';
import { ref } from '@vue/reactivity';
export default {
  name: 'NewsPage',
  components: {
    TheHeader,
    subTitle,
    TheButton,
    contentTitle,
    TheFooter,
    pageTop,
  },
  setup () {
    const pageName = ref("SERVICE")
    return {
      pageName
    }
  }
}
</script>
