<template>
    <button
      @click="btnPressed"
      class="p-news-pagination__button"
      :class="{'is-active': isCurrentPage}"
    >
      {{ pageNumber }}
    </button>
</template>

<script setup>
import { computed, defineProps, defineEmits } from 'vue';
const props = defineProps({
  pageNumber: Number,
  curPage: Number
})
const emit = defineEmits(
  ['changePage']
  )
const isCurrentPage = computed(() => {
  return props.pageNumber === props.curPage;
})

const btnPressed = () => {
  emit('changePage', props.pageNumber);
}
</script>