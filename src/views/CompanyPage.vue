<template>
  <div class="home">
    <TheHeader />
    <subTitle
      :mainTitle="pageName"
      subTitle="私たちについて"
    ></subTitle>
    <breadCrumb
      :pagePath="pageName"
    />
    <div class="p-sub-company">
      <div class="p-sub-company__mission-wrap">
        <div class="p-sub-company--mission">
          <div class="p-sub-company__mission__head">
            <p>
              メッセージ
            </p>
          </div>
          <div class="p-sub-company__mission__large">
            <p>
              サイトのゴール = 夢を叶えること
            </p>
          </div>
          <div class="p-sub-company__mission__small">
            <p>
              お客様の夢を叶えること。<br>
              それがWebサイトのゴールであり、私たちが目指すことです。<br>
              だからこそちゃんと成果を出すサイトを全力でお作りします。<br>
              お客様の笑顔を見たい。<br>
              夢を実現する手助けをさせてください。<br>
            </p>
          </div>
        </div>
      </div>
      <div class="p-sub-company__rep">
        <div class="p-sub-company__rep-img">
          <img src="">
        </div>
        <div class="p-sub-company__rep-massage">
          <div class="p-sub-company__rep-massage--text">
            <p>
              テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
              テキストが入りますテキストが入りますテキストが入りますテキストが入ります
            </p>
          </div>
          <div class="p-sub-company__rep-massage--text">
            <p>
              テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
              テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
              テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
              テキストが入りますテキストが入りますテキストが入ります
            </p>
          </div>
          <div class="p-sub-company__rep-massage--text">
            <p>
              代表取締役社長 猫山ポン太郎
            </p>
          </div>
        </div>
      </div>
      <div class="p-sub-company__overview">
        <div class="p-sub-company__overview__inner">
          <div class="p-sub-company__overview-title">
            会社概要
          </div>
          <dl class="p-sub-company__overview-list">
            <template v-for="item in items" :key="item">
              <dt class="p-sub-company__overview-list__term">{{ item.term }}</dt>
              <dd class="p-sub-company__overview-list__description">{{ item.desc }}</dd>
            </template>
          </dl>
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
  name: 'CompanyPage',
  components: {
    TheHeader,
    subTitle,
    breadCrumb,
    TheContact,
    TheFooter,
    pageTop,
  },
  setup () {
    const pageName = ref("COMPANY")
    const items = [
      {
        term: "社名",
        desc: "株式会社PON DESIGN"
      },
      {
        term: "設立",
        desc: "2025.02.10"
      },
    ]
    return {
      pageName,items
    }
  }
}
</script>
