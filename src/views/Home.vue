<template>
  <Navbar></Navbar>
  <div class="contentWrap">
  <router-view v-if="isRouterAlive"></router-view>
  </div>
  <Footer></Footer>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  data () {
    return {
      isRouterAlive: true
    }
  },
  provide () {
    return {
      reload: this.reload
    }
  },
  methods: {
    reload () {
      this.isRouterAlive = false
      setTimeout(() => {
        this.isRouterAlive = true
      }, 200)
    }
  },
  components: { Navbar, Footer }
}
</script>
