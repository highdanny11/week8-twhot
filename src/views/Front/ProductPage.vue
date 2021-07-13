<template>
  <div class="container">
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
    <div class="row justify-content-center">
      <div class="col-lg-4">
        <img
          class="w-100 mb-4"
          :src="product.imageUrl"
          alt="product"
        />
      </div>
      <div class="col-md-6 col-lg-3">
        <span class="p-1 bg-primary fs-6">{{product.category}}</span>
        <h2 class="border-bottom border-2 py-3 mt-3">{{product.title}}</h2>
        <p>【產品說明】</p>
        <p>
          {{product.description}}
        </p>
        <div class="d-flex align-items-center">
          <div class="h3 me-3">NT$ {{product.price}}</div>
          <p class="fs-6 mb-0 text-decoration-line-through">NT$ {{product.origin_price}}</p>
        </div>
        <div class="input-group mb-3">
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon1"
            :disabled="cartQty==1"
            @click="cartQty--"
          >
            <i class="bi bi-dash-lg"></i>
          </button>
          <input
            readonly
            v-model.number="cartQty"
            type="number"
            min="1"
            class="form-control text-center"
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            @click="cartQty++"
          >
            <i class="bi bi-plus-lg"></i>
          </button>
        </div>
        <div class="text-end border-bottom border-2 py-3 mt-3">
          <div class="h3">總共:<span>NT${{product.price*cartQty}}</span></div>
        </div>
        <div class="d-flex justify-content-between my-3 flex-wrap">
          <router-link  class="btn btn-outline-primary px-lg-2 " :to="`/ProductsList/${null}`">查看其他商品</router-link >
          <button class="btn btn-primary px-lg-2 " @click="addCart()">加到購物車</button>
        </div>
      </div>
      <div class="d-none d-md-block col-md-6 col-lg-3">
        <h4 v-if="cartslist.total==0">購物車是空的喔</h4>
        <div class="d-flex justify-content-between mb-3 flex-wrap" v-if="cartslist.total!=0">
          <h4>購物車清單</h4>
          <button class="btn btn-outline-danger" @click="alllCarts()">清空購物車</button>
        </div>
        <div
          v-if="cartslist.total!=0"
          class="
            p-3
            mb-3
            d-flex
            justify-content-between
            align-items-center
            border-2 border
          "
        >
          <p class="mb-0">總額:</p>
          <p class="mb-0">NT{{cartslist.total}}</p>
        </div>
        <ul class="px-3 pt-3 border-2 border" v-if="cartslist.total!=0">
          <li
            v-for="cart in cartslist.carts" :key="cart.id"
            class="mb-3 d-flex justify-content-between align-items-center">
            <button class="btn btn-outline-danger" @click="delCart(cart.id)">
              <i class="bi bi-trash-fill"></i>
            </button>
            <p class="mb-0 p-1">{{cart.product.title}}/{{cart.qty}}份</p>
            <p class=" mb-0">NT{{cart.total}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="row justify-content-center">
        <div class="col-lg-10 ">
            <SwiperAdv></SwiperAdv>
        </div>
    </div>
  </div>
</template>
<script>
import emitter from '@/assets/javascript/emitter'
import SwiperAdv from '@/components/SwiperAdv'
export default {
  data () {
    return {
      product: {},
      cartslist: {},
      cartQty: 1,
      null: '',
      isLoading: false
    }
  },
  methods: {
    getCarts () {
      this.isLoading = true
      this.$http.get(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart`)
        .then(res => {
          this.cartslist = res.data.data
          this.isLoading = false
        })
        .catch((res) => {
          console.log(res)
        })
    },
    delCart (id) {
      this.isLoading = true
      this.$http.delete(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart/${id}`)
        .then(res => {
          this.isLoading = false
          emitter.emit('push-data')
          this.getCarts()
        })
        .catch((res) => {
          console.log(res)
        })
    },
    addCart () {
      const cart = {
        product_id: this.$route.params.id,
        qty: this.cartQty
      }
      this.$http.post(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart`, { data: cart })
        .then(res => {
          emitter.emit('push-data')
          this.getCarts()
          this.cartQty = 1
        })
        .catch((res) => {
          console.log(res)
        })
    },
    alllCarts () {
      this.isLoading = true
      this.$http.delete(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/carts`)
        .then(res => {
          this.isLoading = false
          emitter.emit('push-data')
          this.getCarts()
        })
        .catch((res) => {
          console.log(res)
        })
    }
  },
  components: {
    SwiperAdv
  },
  mounted () {
    this.getCarts()
    emitter.on('updata', () => {
      this.getCarts()
    })
    const { id } = this.$route.params
    this.$http.get(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/product/${id}`)
      .then(res => {
        if (res.data.success) {
          this.product = res.data.product
        } else {
          console.log('失敗')
        }
      })
      .catch((res) => {
        console.log(res)
      })
  }
}
</script>
