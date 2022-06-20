<template>
  <div class="p-breadcrumb">
    <div class="l-inner">
      <ol class="p-breadcrumb__inner">
        <li class="p-breadcrumb__list">
          <a href="/">HOME</a>
        </li>
        <li class="p-breadcrumb__list">
          <a :href = pagePath>{{pageName}}</a>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pagePath:{
      type: String,
      default: "home",
      require: false
    }
  },
  setup(props) {
    const pageName = props.pagePath.toUpperCase()
    return {
      pageName
    }
  },
}
</script>