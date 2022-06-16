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
      <div class="p-news__inner">
        <div class="p-news__title">
          <contentTitle
            text="NEWS"
            sub="お知らせ"
          ></contentTitle>
        </div>
        <div class="p-news__contents">
          <ul class="p-news__list">
            <li class="p-news__item">
              <div class="p-news__item--date">2030.02.01</div>
              <div class="p-news__item--head"><span>お知らせ</span></div>
              <div class="p-news__item--discrption">
                <a href="#">
                  Webデザインニュースサイト「ウェブマガジン」に取材いただきました
                </a>
              </div>
            </li>
            <li class="p-news__item">
              <div class="p-news__item--date">2030.01.25</div>
              <div class="p-news__item--head">
                <span>制作実績</span>
              </div>
              <div class="p-news__item--discrption">
                <a href="#">
                  Smoothiesta様のWebサイトを制作いたしました
                </a>
              </div>
            </li>
            <li class="p-news__item">
              <div class="p-news__item--date">2030.01.20</div>
              <div class="p-news__item--head"><span>採用</span></div>
              <div class="p-news__item--discrption">
                <a href="#">
                  Webデザイナーを１名募集中です！
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="p-service">
      <div class="p-service__inner">
        <div class="p-service__head">
          <content-title
            text="SERVICE"
            sub="事業内容"
            positionCenter="true"
          >
          </content-title>
        </div>
        <div class="p-service__body">
          <div class="c-card">
            <div class="c-card__image-wrap">
              <img src="../assets/image/jessy-smith-zFOm6KzA-7g-unsplash.png">
            </div>
            <div class="c-card__head">
              Webサイト制作
            </div>
            <div class="c-card__body">
              新規サイトの制作はもちもんサイトリニューアルやランディングページの制作も可能です。
            </div>
          </div>
          <div class="c-card">
            <div class="c-card__image-wrap">
              <img src="../assets/image/service-1.png">
            </div>
            <div class="c-card__head">
              Webサイト運用
            </div>
            <div class="c-card__body">
              サイトの更新作業や独自のアクセス解析に基づいたサイト改善のご提案をいたします。
            </div>
          </div>
          <div class="c-card">
            <div class="c-card__image-wrap">
              <img src="../assets/image/service-2.png">
            </div>
            <div class="c-card__head">
              アプリ開発
            </div>
            <div class="c-card__body">
              スマートフォンアプリ開発の他、Vue.jsやReactによるWebアプリの開発が可能です。
            </div>
          </div>
        </div>
        <div class="p-service__button">
          <TheButton
            text="MORE"
            class=""
            modifier-class="c-button--purple"
          ></TheButton>
        </div>
      </div>
    </section>
    <section class="p-works">
      
    </section>
    <section class="company"></section>
    <section class="recruit"></section>
    <section class="contact"></section>
    <!-- フッター -->
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheButton from '@/components/TheButton.vue';
import contentTitle from '@/components/contentTitle.vue';
export default {
  name: 'HomePage',
  components: {
    TheHeader,
    TheButton,
    contentTitle,
  },
}
</script>
