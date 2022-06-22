<template>
  <div class="home">
    <TheHeader />
    <subTitle
      :mainTitle="pageName"
      subTitle="事業内容"
    ></subTitle>
    <breadCrumb
      :pagePath="pageName"
    />
    <div class="p-sub-service">
      <div class="p-sub-service__inner l-inner">
        <div class="p-sub-service__contents">
          <div class="p-sub-service__img">
            <img src="../assets/image/service.png">
          </div>
          <div class="p-sub-service__text">
            <div class="p-sub-service__text--head">
              <p>
                Webサイト制作
              </p>
            </div>
            <div class="p-sub-service__text--body">
              <p>
                新規サイトはもちろん、サイトリニューアルやランディングページ制作も承っております。<br>
                サイトのゴールはお客様の夢や目的を実現することです。そのためにまずはしっかりとお話をうかがい、サイトに必要な要素を洗い出します。
                その後、ワイヤーフレーム（サイトのレイアウト）の作成、デザインの制作、コーディングと進みます。
                制作の過程でお客様とのお打ち合わせを数回実施させていただき、ご要望とご意見を反映しながらサイトを制作していきます。
              </p>
            </div>
          </div>
        </div>
        <div class="p-sub-service__contents">
          <div class="p-sub-service__img">
            <img src="../assets/image/service-1.png">
          </div>
          <div class="p-sub-service__text">
            <div class="p-sub-service__text--head">
              Webサイト運用
            </div>
            <div class="p-sub-service__text--body">
              <p>
                サイトの更新作業や独自のアクセス解析に基づいたサイト改善のご提案が可能です。<br>
                日々の面倒な更新作業は私たちにおまかせください。テキストの修正やリンクの張り替えなどの簡単な作業から、特集ページやバナーのデザインまで可能です。
                また、アクセス解析によるサイト改善も承っております。ご購入やお申込数などにお悩みでしたらぜひご相談ください。サイトの課題を発見し、改善案のご提案から実装までワンストップで対応いたします。
              </p>
            </div>
          </div>
        </div>
        <div class="p-sub-service__contents">
          <div class="p-sub-service__img">
            <img src="../assets/image/service-2.png">
          </div>
          <div class="p-sub-service__text">
            <div class="p-sub-service__text--head">
              Webサイト制作
            </div>
            <div class="p-sub-service__text--body">
              <p>
                スマートフォンアプリ開発の他、Vue.jsやReactによるWebアプリの開発が可能です。 開発力のみならず、充実したユーザー体験をもたらすためのUXデザインにも自信があります。作って終わり、ではなくユーザーに愛されるUI（ユーザーインターフェース）を実現し、アプリ開発によるお客様の事業の目的を達成する推進力となることを目指します。
              </p>
            </div>
          </div>
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
    const pageName = ref("SERVICE")
    return {
      pageName
    }
  }
}
</script>
