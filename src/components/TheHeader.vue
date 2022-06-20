<template>
  <header class="l-header" v-bind:class="{isActive: isActive}">
    <div class="l-header__inner">
      <div class="l-header__logo">
        <a href="/">
          PON DESIGN
        </a>
      </div>
      <nav class="l-header__nav">
        <ul class="l-header__nav--list">
          <li class="l-header__nav--item">
            <a href="/news" class="l-header__nav--link">
              NEWS
            </a>
          </li>
          <li class="l-header__nav--item">
            <a href="/service" class="l-header__nav--link">
              SERVICE
            </a>
          </li>
          <li class="l-header__nav--item">
            <a href="/works" class="l-header__nav--link">
              WORKS
            </a>
          </li>
          <li class="l-header__nav--item">
            <a href="/company" class="l-header__nav--link">
              COMPANY
            </a>
          </li>
          <li class="l-header__nav--item">
            <a href="/recruit" class="l-header__nav--link">
              RECRUIT
            </a>
          </li>
          <li class="l-header__nav--item">
            <a href="/contact" class="l-header__nav--link">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup >
  import { onMounted, ref } from 'vue';
  const isActive = ref(false);
  onMounted(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY > 1){
        isActive.value = true
      } else {
        isActive.value = false
      }
    })
  })
</script>