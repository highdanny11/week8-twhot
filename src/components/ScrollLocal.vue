<template>
  <a href="#" class="a-top ">
    <i class="fas fa-angle-double-down fs-4"></i>
  </a>
</template>
<script>
/* global $ */
export default {
  mounted () {
    $('.a-top').on('click', (e) => {
      e.preventDefault()
      $('html, body').animate({ scrollTop: 500 }, 500)
    })
    $(window).on('scroll', () => {
      const scrollTop = $(window).scrollTop()
      if (scrollTop >= 50) {
        $('.a-top').css('opacity', '0')
      } else {
        $('.a-top').css('opacity', '1')
      }
    })
  }
} // css 寫在swiperBar 上面
</script>
