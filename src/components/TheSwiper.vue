<template>
  <swiper
    :effect="'fade'"
    :slides-per-view="1"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :navigation="true"
    :pagination="pagination"
    :modules="modules"
  >
    <swiper-slide>
      <img src="../assets/image/smoothiesta.png" style="width: 100%;">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/image/web-conference.jpeg" style="width: 100%;">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/image/lamina.jpeg" style="width: 100%;">
    </swiper-slide>
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  // import "swiper/css/navigation";
  // import "swiper/css/pagination";

  import { EffectFade } from "swiper";
  import { Navigation } from "swiper";
  import { Pagination } from "swiper";

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [EffectFade,Navigation,Pagination],
        pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">'  + "</span>";
        },
      },
      };
    },
  };
</script>