<template>
  <div class="home">
    <!-- ヘッダー -->
    <TheHeader />
    <subTitle
      :mainTitle="pageName"
      subTitle="お知らせ"
    ></subTitle>
    <breadCrumb
      :pagePath="pageName"
    />
    <section class="p-news">
      <div class="p-news__inner l-inner p-news__sub-inner">
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
            <li class="p-news__item">
              <div class="p-news__item--date">2030.01.15</div>
              <div class="p-news__item--head"><span>お知らせ</span></div>
              <div class="p-news__item--discrption">
                <a href="#">
                  （２行のテキストの場合）テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
                </a>
              </div>
            </li>
            <li class="p-news__item">
              <div class="p-news__item--date">2030.02.01</div>
              <div class="p-news__item--head"><span>お知らせ</span></div>
              <div class="p-news__item--discrption">
                <a href="#">
                  テキストが入りますテキストが入りますテキストが入りますテキストが入ります
                </a>
              </div>
            </li>
            <li class="p-news__item">
              <div class="p-news__item--date">2030.02.01</div>
              <div class="p-news__item--head"><span>お知らせ</span></div>
              <div class="p-news__item--discrption">
                <a href="#">
                  テキストが入りますテキストが入りますテキストが入りますテキストが入ります
                </a>
              </div>
            </li>
            <li class="p-news__item">
              <div class="p-news__item--date">2030.02.01</div>
              <div class="p-news__item--head"><span>お知らせ</span></div>
              <div class="p-news__item--discrption">
                <a href="#">
                  テキストが入りますテキストが入りますテキストが入りますテキストが入ります
                </a>
              </div>
            </li>
            <li class="p-news__item">
              <div class="p-news__item--date">2030.02.01</div>
              <div class="p-news__item--head"><span>お知らせ</span></div>
              <div class="p-news__item--discrption">
                <a href="#">
                  テキストが入りますテキストが入りますテキストが入りますテキストが入ります
                </a>
              </div>
            </li>
            <li class="p-news__item">
              <div class="p-news__item--date">2030.02.01</div>
              <div class="p-news__item--head"><span>お知らせ</span></div>
              <div class="p-news__item--discrption">
                <a href="#">
                  テキストが入りますテキストが入りますテキストが入りますテキストが入ります
                </a>
              </div>
            </li>
            <li class="p-news__item">
              <div class="p-news__item--date">2030.02.01</div>
              <div class="p-news__item--head"><span>お知らせ</span></div>
              <div class="p-news__item--discrption">
                <a href="#">
                  テキストが入りますテキストが入りますテキストが入りますテキストが入ります
                </a>
              </div>
            </li>
            <li class="p-news__item">
              <div class="p-news__item--date">2030.02.01</div>
              <div class="p-news__item--head"><span>お知らせ</span></div>
              <div class="p-news__item--discrption">
                <a href="#">
                  テキストが入りますテキストが入りますテキストが入りますテキストが入ります
                </a>
              </div>
            </li>
            <li class="p-news__item">
              <div class="p-news__item--date">2030.02.01</div>
              <div class="p-news__item--head"><span>お知らせ</span></div>
              <div class="p-news__item--discrption">
                <a href="#">
                  テキストが入りますテキストが入りますテキストが入りますテキストが入ります
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="p-news-pagination">
        <span class="p-news-pagination__button p-news-pagination__current">1</span>
        <span class="p-news-pagination__button p-news-pagination__link">2</span>
        <span class="p-news-pagination__button p-news-pagination__link">3</span>
      </div>
    </section>
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
  },
  setup () {
    const pageName = ref("NEWS")
    return {
      pageName,
    }
  }
}
</script>
