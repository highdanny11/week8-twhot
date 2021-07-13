<template>
<ScrollTop></ScrollTop>
  <div class="container mb-4 ">
    <SwiperBar></SwiperBar>
    <SelectCategoryCard></SelectCategoryCard>
  </div>
  <div class="bg-grad">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-5 p-3 my-lg-5 d-flex flex-row-reverse">
          <div
            data-aos="fade-up-right"
            class="bg-img-main w-100"
            style="background-image: url('https://images.unsplash.com/photo-1565895405139-e188df996e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80')"
          ></div>
        </div>
        <div
          data-aos="fade-left"
          class="
            col-lg-5
            p-3
            my-lg-5
            d-flex
            justify-content-center
            align-items-center
          "
        >
          <div class="vertical-box">
            <p class="vertical-content">
              用心清洗、削皮、泡水、真空、冷藏， 把關了所有的安全疑慮。
            </p>
            <p class="vertical-content">
              來自埔里有機菜農，擁有乾淨水源、空氣， 每日新鮮配送。
            </p>
            <h2 class="vertical-content">所有蔬果</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-grad">
    <div class="container">
      <div class="row justify-content-center flex-row-reverse">
        <div class="col-lg-5 p-3 d-flex">
          <div
            data-aos="fade-up-left"
            class="bg-img-main w-100"
            :style="{
              'background-image': `url(${require(`@/assets/images/garden.jpg`)})`,
            }"
          ></div>
        </div>
        <div
          data-aos="fade-right"
          class="
            col-lg-5
            p-3
            my-lg-5
            d-flex
            justify-content-center
            align-items-center
          "
        >
          <div class="vertical-box">
            <p class="vertical-content">
              讓沙拉不只是沙拉，是一個藝術品、一個主題，和一份對美味執著的心。
            </p>
            <p class="vertical-content">
              我們注重食材的結合，對於食材的新鮮、甜度、酸度嚴格把關
            </p>
            <h2 class="vertical-content">我們的沙拉</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container mt-5">
    <div class="row justify-content-center pb-5">
      <div
        class="
          col-lg-4
          d-flex
          flex-column
          justify-content-center
          align-items-center
          position-relative
          my-5 my-lg-0
        "
      >
        <div class="square-border"></div>
        <div class="square"></div>
        <div class="w-75 text-center">
          <h3>熱門商品</h3>
          <p>給選擇障礙的你，一些靈感</p>
        </div>
      </div>
      <div class="col-lg-8 mt-4">
        <SwiperAdv></SwiperAdv>
      </div>
    </div>
  </div>
</template>
<script>
import SelectCategoryCard from '@/components/SelectCategoryCard'
import SwiperAdv from '@/components/SwiperAdv'
import SwiperBar from '@/components/SwiperBar'
import ScrollTop from '@/components/ScrollTop'
export default {
  components: {
    SwiperAdv,
    SelectCategoryCard,
    ScrollTop,
    SwiperBar
  }
}
</script>
