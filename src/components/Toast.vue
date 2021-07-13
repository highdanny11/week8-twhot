<template>
<div class="toast-container mt-4 position-absolute end-0 top-0">
 <div
    class="toast show w-100"
    role="alert"
  >
    <div class="toast-body p-2 rounded me-2 d-inline-block" v-for="(item, key) in cup" :key="key" >
      <span class="p-2 rounded me-2 d-inline-block" :class="{'bg-danger':!item.success,'bg-success':item.success}"><i class="far fa-bell"></i></span>
      <strong class="me-auto">{{item.message}}</strong>
      <button type="button" class="btn-close" @click="closetoat" aria-label="Close"></button>
    </div>
  </div>
</div>
</template>
<script>
import emitter from '@/assets/javascript/emitter'
export default {
  data () {
    return {
      cup: []
    }
  },
  methods: {
    totost () {
      setTimeout(() => {
        this.cup.shift()
      }, 5000)
    },
    closetoat () {
      this.cup = []
    }
  },
  created () {
    emitter.on('push-masg', (data) => {
      const { message, success } = data
      this.cup.push({ message, success })
      this.totost()
    })
  }
}
</script>
