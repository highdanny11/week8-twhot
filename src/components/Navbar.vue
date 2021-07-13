<template>
  <div class="bg-body sticky-top" style="background-color: #fff;">
    <div class="container ">
      <nav class="navbar navbar-expand-lg navbar-light position-relative" style="opacity: 0.8;">
        <div class="container ">
          <a class="navbar-brand" href="#"
            ><img class="logo" src="@/assets/images/456.png" alt=""
          /></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav text-center">
              <li class="nav-item navtop-item">
                <router-link class="nav-link" :to="`/`">關於 TW&HOT</router-link>
              </li>
              <li class="nav-item navtop-item">
                <router-link class="nav-link" :to="`/ProductsList/${spaceID}`">商場</router-link>
              </li>
            </ul>
            <div class="ms-auto d-flex flex-row-reverse">
              <a href="#" class="btn btn-lg  iconbtn position-relative cartdropdown" @click.prevent="getdata()">
                <i class="fas fa-shopping-cart fs-4 shark"></i>
                <span class="bg-danger count">{{cartscount}}</span>
                <div class="cart-dropdown-menu">
                  <div class="d-flex justify-content-between align-items-center">
                    <p class="h6">已選購商品</p>
                    <button type="button" class="btn  btn-white"><i class="bi bi-x"></i></button>
                  </div>
                  <div class="d-flex justify-content-center " v-if="cartscount==0">
                    <div class="h2">購物車是空的</div>
                  </div>
                  <table class="table" v-if="cartscount!=0">
                    <tbody >
                      <tr v-for="item in cartslist.carts" :key="item.id" >
                        <td><div class="btn btn-sm btn-danger" @click="delCart(item.id)"><i class="bi bi-trash-fill"></i></div></td>
                        <td>{{item.product.title}}</td>
                        <td style="width:70px">{{item.total}}元</td>
                      </tr>
                      <tr>
                        <td>小計</td>
                        <td></td>
                        <td>{{cartslist.total}}元</td>
                      </tr>
                    </tbody>
                  </table>
                  <div
                    v-if="cartscount!=0"
                    class="
                      d-flex
                      justify-content-between
                      align-items-center
                      border-bottom
                      pb-3
                    "
                  >
                    <button class="btn btn-sm btn-danger" @click="alllCarts()">全部清空</button>
                    <router-link class="btn btn-sm btn-primary" to="/OrderCheckout">前往結帳</router-link>
                  </div>
                </div>
              </a>
              <a href="#" :class="{disabled:Favoriteshow === null}" class="btn btn-lg iconbtn position-relative heartdropdown" @click.prevent="showMyfavorite()">
                <i class="fas fa-heart fs-4"></i>
                <span class="bg-danger count">{{Favoriteshow.length}}</span>
                <div class="heart-dropdown-menu">
                  <div class="d-flex justify-content-between align-items-center">
                    <p class="h6">我喜愛的商品</p>
                    <button type="button" class="btn  btn-white"><i class="bi bi-x"></i></button>
                  </div>
                  <div class="d-flex justify-content-center " v-if="this.myFavorite.length === 0">
                    <div class="h3">目前沒有追蹤的商品</div>
                  </div>
                  <table class="table">
                    <tbody >
                      <tr v-for="item in Favoriteshow" :key="item.id">
                        <td><div class="btn btn-sm btn-danger" @click.prevent="delFavorite(item.id)" ><i class="bi bi-trash-fill"></i></div></td>
                        <td>{{item.title}}</td>
                        <td style="width:70px"><button class="btn btn-sm btn-primary" @click="goProductpage(item.id)" >查看</button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </a>
              <router-link class="btn btn-lg iconbtn position-relative" to="/Login">
                <i class="fas fa-cog fs-4"></i>
              </router-link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
import emitter from '@/assets/javascript/emitter'
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
  inject: ['reload'],
  data () {
    return {
      cartslist: {},
      cartscount: '',
      favoritecount: 0,
      spaceID: null,
      myFavorite: [],
      Favoriteshow: [],
      products: {}
    }
  },
  methods: {
    showMyfavorite () { // 讀取Llocal資料
      this.myFavorite = storageMethods.get()
      this.Favoriteshow = []
      if (this.myFavorite !== null) {
        this.products.forEach(item => {
          this.myFavorite.forEach(favorite => {
            if (item.id === favorite) {
              this.Favoriteshow.push(item)
              this.favoritecount = this.Favoriteshow.length
            }
          })
        })
      }
    },
    goProductpage (id) {
      this.$router.push(`/ProductPage/${id}`)
      this.reload() // 如果沒有這段，當前頁在單獨商品頁，按下其他的查看會無法顯示，只是網址後面id變換
    },
    delFavorite (id) {
      this.myFavorite.splice(this.myFavorite.indexOf(id), 1)
      storageMethods.save(this.myFavorite)
      this.showMyfavorite()
      emitter.emit('upfavorite')
    },
    getdata () {
      this.$http.get(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart`)
        .then(res => {
          this.cartslist = res.data.data
          this.cartscount = this.cartslist.carts.length
        })
    },
    delCart (id) {
      this.$http.delete(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart/${id}`)
        .then(res => {
          this.getdata()
          emitter.emit('updata')
        })
    },
    alllCarts () {
      this.$http.delete(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/carts`)
        .then(res => {
          this.getdata()
          emitter.emit('updata')
        })
    },
    getproducts () {
      this.$http
        .get(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/products/all`)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products
            this.showMyfavorite()
          } else {
            console.log(res)
          }
        })
        .catch((res) => {
          console.log(res)
        })
    }
  },
  mounted () {
    this.getdata()
    this.getproducts()
    emitter.on('push-data', () => {
      this.getdata()
    })
    emitter.on('editheart', () => {
      this.getproducts()
    })
  }
}
</script>
