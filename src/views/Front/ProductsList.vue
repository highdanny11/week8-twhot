<template>
  <div class="container">
    <ScrollTop></ScrollTop>
    <Loading :active="isLoading" >
      <div class="spinner-grow text-danger" role="status">
          <span class="visually-hidden">Loading...</span>
      </div>
      <div class="spinner-grow text-warning mx-3" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div class="spinner-grow text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </Loading>
    <SwiperBar></SwiperBar>
    <h1 class="my-5 text-center">
      開幕期間，輸入twhot優惠碼，立即享<span class="text-danger">20%</span>折扣
    </h1>
    <div class="row justify-content-center pt-2 pt-lg-5">
      <div class="col-10 col-md-8 col-lg-3">
          <h2 class="mb-4">分類</h2>
          <div class="list-group pt-3">
            <a
              @click.prevent="this.selectCategory=''"
              href="#"
              class="list-group-item list-group-item-action list-group-item-primary"
              aria-current="true"
            >
              <i class="fas fa-utensils me-2" style="width:20px;"></i>所有產品</a>
            <a
              href="#"
              @click.prevent="this.selectCategory='沙拉'"
              class="
                list-group-item list-group-item-action list-group-item-primary
              "
              ><i class="fas fa-seedling me-2" style="width:20px;"></i>輕食沙拉</a
            >
            <a
              href="#"
              @click.prevent="this.selectCategory='飲料'"
              class="list-group-item list-group-item-action list-group-item-primary"
              >
                <i class="fas fa-glass-cheers me-2" style="width:20px;">
                </i>果汁飲料
            </a>
            <a
              @click.prevent="this.selectCategory='水果'"
              href="#"
              class="list-group-item list-group-item-action list-group-item-primary"
            ><i class="fas fa-lemon me-2" style="width:20px;"></i>新鮮水果</a
            >
          </div>
      </div>
      <div class="col-lg-9 mt-3 mt-lg-0">
        <div class="row justify-content-center">
          <div class="col-10 col-md-8 col-lg-8">
            <div class="input-group mb-4">
              <input
                type="text"
                class="form-control"
                placeholder="想找什麼商品?"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                v-model="seachProduct"
              />
              <button
                class="btn btn-outline-primary "
                type="button"
                id="button-addon2"
              >
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-6 col-lg-4 mb-3" v-for="item in filterProducts" :key="item.id">
            <router-link :to="`/ProductPage/${item.id}`" class="text-decoration-none d-block position-relative">
              <img
                class="productCardSale "
                src="@/assets/images/sale2.png"
                alt="sale"
              />
              <a class="mb-3 btn-sm heartlocal" :class="{'text-danger' : myFavorite.includes(item.id)}" @click.prevent="addmyFavorite(item)"><i class="fas fa-heart fs-4"></i></a>
              <div class="card position-relative">
                <div class="productCardWrap">
                  <div
                    class="productCard "
                    :style="{
                      'background-image': `url(${item.imageUrl})`,
                    }"
                  >
                  </div>
                </div>
                <div class="card-body px-3">
                  <h5 class="card-title fs-2 rwd-card-title">{{item.title}}</h5>
                  <div class="d-flex justify-content-between align-items-center flex-wrap">
                    <p class="card-text text-decoration-line-through mb-0 me-2">
                      NT${{item.origin_price}}
                    </p>
                    <p class="card-text text-danger mb-0 fs-3">NT${{item.price}}</p>
                  </div>
                </div>
                <div class="card-body px-2 px-lg-3 text-center">
                  <button class=" btn btn-primary mb-3 " @click.prevent="addCart(item.id)">加入購物車</button>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import emitter from '@/assets/javascript/emitter'
import ScrollTop from '@/components/ScrollTop'
import SwiperBar from '@/components/SwiperBar'
const storageMethods = {
  save (favorite) {
    const favoriteString = JSON.stringify(favorite)
    localStorage.setItem('myFavorite', favoriteString)
  },
  get () {
    return JSON.parse(localStorage.getItem('myFavorite'))
  }
}
export default {
  components: {
    ScrollTop,
    SwiperBar
  },
  data () {
    return {
      products: [],
      isLoading: false,
      pagination: {},
      seachProduct: '',
      selectCategory: '',
      homePage: '',
      myFavorite: storageMethods.get() || []
    }
  },
  methods: {
    addmyFavorite (item) {
      if (this.myFavorite.includes(item.id)) {
        this.myFavorite.splice(this.myFavorite.indexOf(item.id), 1)
      } else {
        this.myFavorite.push(item.id)
      }
      storageMethods.save(this.myFavorite)
      this.editMyFavorite()
    },
    getdata () {
      this.isLoading = true
      this.$http
        .get(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/products/all`)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false
            this.products = res.data.products
          } else {
            console.log(res)
          }
        })
        .catch((res) => {
          console.log(res)
        })
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
        .catch((res) => {
          console.log(res)
        })
    },
    editMyFavorite () {
      emitter.emit('editheart')
    }
  },
  computed: {
    filterProducts () {
      return this.products.filter((item) =>
        item.category.match(this.selectCategory) && item.title.match(this.seachProduct))
    }
  },
  mounted () {
    this.getdata()
    emitter.on('upfavorite', () => {
      this.myFavorite = storageMethods.get()
    })
    const { id } = this.$route.params
    if (id === 'null') {
      this.selectCategory = ''
    } else {
      this.selectCategory = id
    }
  }
}
</script>
