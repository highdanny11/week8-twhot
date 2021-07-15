<template>
  <div class="container">
    <div class="row mb-4">
      <swiper
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
        :loop="true"
        :centeredSlides="true"
        :slides-per-view="1"
      >
        <swiper-slide>
          <div class="img d-flex justify-content-center" style="background-image: url(https://images.unsplash.com/photo-1615224572819-61e7e440a7e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60);">
          <ScrollLocal></ScrollLocal>
            <div class="d-flex flex-column justify-content-center align-items-center h-100" style="width: 40%;">
              <div class="h3 ">共體時艱</div><p class="fs-3">外帶滿500送<span class="text-danger">雞蛋沙拉</span></p>
            </div>
          </div>
          </swiper-slide>
        <swiper-slide>
          <div class="img" style="background-image: url(https://images.unsplash.com/photo-1561043433-aaf687c4cf04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80);">
          <ScrollLocal></ScrollLocal>
            <div class="d-flex flex-column justify-content-center align-items-center h-100" style="width: 40%;">
              <div class="h3">開幕慶</div><p class="fs-3">結帳輸入twhot即享<span class="text-danger">20%</span></p>
            </div>
          </div>
          </swiper-slide>
        <swiper-slide>
          <div class="img d-flex flex-row-reverse" style="background-image: url(https://images.unsplash.com/photo-1514995669114-6081e934b693?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80);">
          <ScrollLocal></ScrollLocal>
          <div class="d-flex flex-column justify-content-center align-items-center h-100" style="width: 40%;">
              <div class="h3">開幕慶</div><p class="fs-3">打卡分享即送<span class="text-danger">莓果果昔</span>一杯</p>
            </div>
          </div>
          </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
import ScrollLocal from '@/components/ScrollLocal'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import SwiperCore, { Autoplay } from 'swiper/core'
SwiperCore.use([Autoplay])
export default {
  components: {
    Swiper,
    SwiperSlide,
    ScrollLocal
  }
}
</script>
<style  lang="scss" scoped>
.swiper-container {
  height: 60vh;
  object-fit: fill;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  //background: red;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.swiper-slide {
  width: 100%;
}
.img {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: 50% 30%;
  object-fit: cover;
  position: relative;
}
.img >.a-top {
  position: absolute;
  z-index: 1029;
  left: 50%;
  bottom: 10%;
  border-radius: 50%;
  transition: opacity 0.4s;
  background-color:rgba(0, 0, 0, 0.3);
  width: 44px;
  height: 44px;
  color: white;
  animation: float 0.6s linear infinite alternate;
  text-decoration: none;
  transition: all ease .5s;
}
.img >.a-top:hover {
  background-color:rgba(0, 0, 0, 1);
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.swiper-slide a {
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (max-width: 568px) {
  .a-top {
    bottom: 25%;
  }
}
@keyframes float {
  from {
    transform: translate(-50%, 0);
  }
  to {
    transform: translate(-50%, 20%);
  }
}
</style>
