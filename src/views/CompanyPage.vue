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
          <div class="p-sub-company__mission--head">
            <p>
              メッセージ
            </p>
          </div>
          <div class="p-sub-company__mission--large">
            <span>
              サイトのゴール = 夢を叶えること
            </span>
          </div>
          <div class="p-sub-company__mission--small">
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
      <div class="p-sub-company__rep l-inner">
        <div class="p-sub-company__rep-img">
          <img src="../assets/image/CEO.png">
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
      <div class="p-sub-company__overview l-inner">
        <div class="p-sub-company__overview--inner">
          <p class="p-sub-company__overview-title">
            会社概要
          </p>
          <div class="p-sub-company__overview-list-wrap">
            <dl class="p-sub-company__overview-list" v-for="item in items" :key="item">
              <dt class="p-sub-company__overview-list--term">{{ item.term }}</dt>
              <dd class="p-sub-company__overview-list--description">{{ item.desc }}</dd>
            </dl>
          </div>
        </div>
        <div class="p-sub-company__overview--map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8280303808506!2d139.76493611552277!3d35.68123618019425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sjp!4v1656566160858!5m2!1sja!2sjp"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
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
      {
        term: "代表取締役",
        desc: "猫山ポン太郎"
      },
      {
        term: "資本金",
        desc: "1,000,000円"
      },
      {
        term: "所在地",
        desc: "〒555-5555 東京都千代田区 ポンビルディング 606"
      },
    ]
    return {
      pageName,items
    }
  }
}
</script>
