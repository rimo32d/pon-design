<template>
  <div class="home">
    <TheHeader />
    <subTitle
      :mainTitle="pageName"
      subTitle="お知らせ"
    ></subTitle>
    <breadCrumb
      :pagePath="pageName"
    />
    <ThePagination
      :itemNumPerPage="10"
      :items="itemData"
    ></ThePagination>
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
import ThePagination from '@/components/ThePagination.vue';
import newsJson from '@/assets/json/news.json'
import { ref } from '@vue/reactivity';
export default {
  name: 'NewsPage',
  components: {
    TheHeader,
    subTitle,
    breadCrumb,
    TheContact,
    TheFooter,
    pageTop,
    ThePagination
  },
  setup () {
    const pageName = ref("NEWS")
    const itemData = ref(newsJson)
    const itemLength = Object.keys(itemData.value).length
    return {
      pageName,itemData,itemLength
    }
  }
}
</script>
