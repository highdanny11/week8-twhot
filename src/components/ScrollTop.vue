<template>
  <a href="#" class="c-top ">
    <i class="fas fa-lg fa-arrow-up"></i>
  </a>
</template>
<script>
/* global $ */
export default {
  mounted () {
    $('.c-top').on('click', (e) => {
      e.preventDefault()
      $('html, body').animate({ scrollTop: 0 }, 500)
    })
    $(window).on('scroll', () => {
      const scrollTop = $(window).scrollTop()
      const height = $(window).height()
      if (scrollTop > height / 4) {
        $('.c-top').css('opacity', '1')
      } else {
        $('.c-top').css('opacity', '0')
      }
    })
  }
}
</script>
<style lang="scss">
.c-top {
    position: fixed;
    z-index: 1029;
    bottom: 2rem;
    right: 2rem;
    box-shadow: 0 1px 5px #adb5bd;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    background-color: hsla(0,0%,100%,.8);
    opacity: 0;
    transition: opacity .4s;
    box-sizing: content-box;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
}
</style>
