<template>
  <swiper
    :slidesPerView="1"
    :navigation="true"
    :spaceBetween="20"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    :loop="true"
    :pagination="{
      clickable: true,
    }"
    :breakpoints="{
      '640': {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      '768': {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      '1024': {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }"
    class="mySwiper py-3"
  >
    <swiper-slide v-for="item in randomProduct" :key="item.id">
      <a
        @click.prevent="goProductpage(item.id)"
        class="text-decoration-none d-block position-relative "
      >
        <img
          class="productCardSale"
          src="@/assets/images/sale2.png"
          alt="sale"
        />
        <div class="card position-relative ">
          <div class="productCardWrap">
            <div
              class="productCard"
              :style="{
                'background-image': `url(${item.imageUrl})`,
              }"
            ></div>
          </div>
          <div class="card-body px-3">
            <h5 class="card-title fs-2 text-start rwd-card-title">{{ item.title }}</h5>
            <div class="d-flex justify-content-between align-items-center flex-wrap">
              <p class="card-text text-decoration-line-through mb-0 me-2">
                NT${{ item.origin_price }}
              </p>
              <p class="card-text text-danger mb-0 fs-3">NT${{ item.price }}</p>
            </div>
          </div>
          <div class="card-body px-3 text-center">
            <button
              class="btn btn-primary mb-3"
              @click.prevent="addCart(item.id)"
            >
              加入購物車
            </button>
          </div>
        </div>
      </a>
    </swiper-slide>
  </swiper>
</template>
<script>
import emitter from '@/assets/javascript/emitter'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper/core'
SwiperCore.use([Pagination, Navigation, Autoplay])
export default {
  inject: ['reload'],
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      products: {},
      randomProduct: []
    }
  },
  methods: {
    getdata () {
      this.$http
        .get(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/products/all`)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products
            const arrSet = new Set([])
            for (let index = 0; arrSet.size < 6; index++) {
              const number = this.getRandomInt(this.products.length)
              arrSet.add(number)
            }
            arrSet.forEach((i) => {
              this.randomProduct.push(this.products[i])
            })
          } else {
            console.log(res)
          }
        })
        .catch((res) => {
          console.log(res)
        })
    },
    goProductpage (id) {
      this.$router.push(`/ProductPage/${id}`)
      this.reload() // 如果沒有這段，當前頁在單獨商品頁，按下其他的查看會無法顯示，只是網址後面id變換
    },
    getRandomInt (max) {
      return Math.floor(Math.random() * max)
    },
    addCart (id) {
      this.isLoading = true
      const cart = {
        product_id: id,
        qty: 1
      }
      this.$http.post(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart`, { data: cart })
        .then(res => {
          this.isLoading = false
          emitter.emit('push-data')
        })
    }
  },
  mounted () {
    this.getdata()
  }
}
</script>
<style  lang="scss">
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
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
  position: relative;
}
.swiper-slide a {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.swiper-pagination {
  opacity: 0 ;
}
.swiper-button-next, .swiper-button-prev {
  width: 50px;
  height: 50px;
  background-color: rgba(0,0,0,.2);
  color: #343a40;
  border-radius: 50%;
  transition: all 0.5s;
  position: absolute;
  top: 50%;
}
.swiper-button-next:hover, .swiper-button-prev:hover {
  background-color:#fff;
  opacity: .8;
}
.swiper-button-next:after, .swiper-button-prev:after {
  font-size: 20px;
}
</style>
