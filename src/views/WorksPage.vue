<template>
  <div class="home">
    <TheHeader />
    <subTitle
      :mainTitle="pageName"
      subTitle="制作実績"
    ></subTitle>
    <breadCrumb
      :pagePath="pageName"
    />
    <div class="p-sub-works">
      <div class="p-sub-works__inner l-inner">
        <div class="p-sub-works__card">
          <a href="#" class="p-sub-works__link">
            <div class="p-sub-works__img">
              <img src="../assets/image/works/smoothiesta.png">
            </div>
            <div class="p-sub-works__title">
              <p>
                smoothiesta 様
              </p>
            </div>
          </a>
        </div>
        <div class="p-sub-works__card">
          <a href="#" class="p-sub-works__link">
            <div class="p-sub-works__img">
              <img src="../assets/image/works/web-conference.png">
            </div>
            <div class="p-sub-works__title">
              <p>
                Web Conference 様
              </p>
            </div>
          </a>
        </div>
        <div class="p-sub-works__card">
          <a href="#" class="p-sub-works__link">
            <div class="p-sub-works__img">
              <img src="../assets/image/works/lamina.png">
            </div>
            <div class="p-sub-works__title">
              <p>
                LAMINA 様
              </p>
            </div>
          </a>
        </div>
        <div class="p-sub-works__card">
          <a href="#" class="p-sub-works__link">
            <div class="p-sub-works__img">
              <img src="../assets/image/works/citylab.png">
            </div>
            <div class="p-sub-works__title">
              <p>
                CITYLab 様
              </p>
            </div>
          </a>
        </div>
        <div class="p-sub-works__card">
          <a href="#" class="p-sub-works__link">
            <div class="p-sub-works__img">
              <img src="../assets/image/works/tabilog.png">
            </div>
            <div class="p-sub-works__title">
              <p>
                TABILOG 様
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <TheContact />
    <TheFooter />
    <pageTop />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import subTitle from '@/components/subTitle.vue';
import breadCrumb from '@/components/breadCrumb.vue';
import TheContact from '@/components/TheContact.vue';
import TheFooter from '@/components/TheFooter.vue';
import pageTop from '@/components/pageTop.vue';
import { ref } from 'vue';
export default {
  name: 'NewsPage',
  components: {
    TheHeader,
    subTitle,
    breadCrumb,
    TheContact,
    TheFooter,
    pageTop,
  },
  setup () {
    const pageName = ref("WORKS")
    return {
      pageName
    }
  }
}
</script>
