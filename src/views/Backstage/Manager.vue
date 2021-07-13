<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
         <a
            href="#"
            class="navbar-brand"
            @click.prevent="signout()"
            aria-current="page"
            >登出
        </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#list"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="list">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/admin/" >產品列表</router-link>
          <router-link class="nav-link" to="/admin/BackOrderList">訂單列表</router-link>
          <router-link class="nav-link" to="/admin/BackCoupons">優惠卷列表</router-link>
        </div>
      </div>
    </div>
  </nav>
  <Toast></Toast>
  <div class="container">
    <router-view v-if="check"></router-view>
  </div>
</template>
<script>
import Toast from '@/components/Toast.vue'
import emitter from '@/assets/javascript/emitter'
export default {
  components: {
    Toast
  },
  provide () {
    return {
      send (res) { // 各子元件經由這父元件傳送資料至吐司視窗
        emitter.emit('push-masg', res)
      }
    }
  },
  data () {
    return {
      check: false
    }
  },
  methods: {
    signout () {
      document.cookie = 'hexToken="",expires=""'
      this.$router.push('/Login')
    },
    checkin () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = `${token}`
      this.$http.post(`${process.env.VUE_APP_URL}api/user/check`)
        .then(res => {
          if (res.data.success) {
            this.check = true
          } else {
            this.$router.push('/Login')
          }
        })
    }
  },
  created () {
    this.checkin()
  }
}
</script>
