<template>
<section class="p-news">
      <div class="p-news__inner l-inner p-news__sub-inner">
        <div class="p-news__contents">
          <ul class="p-news__list">
            <li class="p-news__item" v-for="(item, idx) in displayItems" :key="idx">
              <div class="p-news__item--date">{{ item.date }}</div>
              <div class="p-news__item--head"><span>{{ item.head }}</span></div>
              <div class="p-news__item--discrption">
                <a href="#">
                  {{ item.value }}
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="p-news-pagination">
        <page-button
          @changePage="changePage"
          v-for="num in pageNum" :key="num" 
          :pageNumber="num"
          :curPage="curPage"
          />
      </div>
    </section>
</template>

<script setup>
import PageButton from '@/components/PageButton.vue';
import { computed, defineProps, ref } from 'vue';
const props = defineProps({
  items: Array,
  itemNumPerPage: Number,
})

var curPage = ref(1);
var pageNum = ref(0);

const calcPageNum = () => {
  pageNum.value =  Math.ceil(props.items.length / props.itemNumPerPage); //表示件数で配列の数を割る
}

calcPageNum();

const changePage = (value) => {
  curPage.value = value;
}
const displayItems = computed(() => {
  const startIdx = (curPage.value - 1) * props.itemNumPerPage;
  const endIdx   = startIdx + props.itemNumPerPage;
  return props.items.slice(startIdx, endIdx);
})

</script>

