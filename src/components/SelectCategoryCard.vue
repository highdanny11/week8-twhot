<template>
  <div class="row border-bottom flex-row-reverse pb-5">
    <div
      class="
        col-lg-3
        p-3
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
        <h3>商品分類</h3>
        <p>營養均衡，健康不用選。</p>
      </div>
    </div>
    <div class="col-lg-8 p-3">
      <div class="d-flex">
        <router-link
          :to="`/ProductsList/${fruit='沙拉'}`"
          class="sort-item text-decoration-none"
        >
          <div
            class="sort-img"
            :style="{
              'background-image': `url(${require(`@/assets/images/product11.jpg`)})`,
            }"
          ></div>
          <span>精品沙拉</span>
        </router-link>
        <router-link
          :to="`/ProductsList/${fruit='水果'}`"
          class="sort-item text-decoration-none"
        >
          <div
            class="sort-img"
            :style="{
              'background-image': `url(${require(`@/assets/images/product22.jpg`)})`,
            }"
          ></div>
          <span>水果饗宴</span>
        </router-link>
        <router-link
          :to="`/ProductsList/${fruit='飲料'}`"
          class="sort-item text-decoration-none"
        >
          <div
            class="sort-img"
            :style="{
              'background-image': `url(${require(`@/assets/images/product33.jpg`)})`,
            }"
          ></div>
          <span>馥郁果昔</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
