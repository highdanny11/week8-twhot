<template>
  <div class="container">
    <div class="row">
      <form id="form">
        <div
          class="
            col-md-6
            col-lg-3
            position-absolute
            top-50
            start-50
            translate-middle
            border-bottom
          "
        >
          <div class="h1 text-center my-3">請先登入</div>
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="name@example.com"
              autofocus
              v-model="user.username"
              required
            />
            <label for="email">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
              autofocus
              v-model="user.password"
              required
            />
            <label for="password">Password</label>
          </div>
          <div class="d-flex flex-row-reverse my-3">
            <button class="btn btn-danger btn-lg px-5" type="button" @click="login">
              登入
            </button>
            <router-link class="btn btn-secondary btn-lg me-5 px-5" to="/" >
              取消
            </router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$http.post(`${process.env.VUE_APP_URL}admin/signin`, this.user)
        .then(res => {
          if (res.data.success) {
            const { token, expired } = res.data
            document.cookie = `hexToken=${token};expires=${new Date(expired)}`
            this.$router.push('/admin')
          } else {
            this.user.username = ''
            this.user.password = ''
          }
        })
        .catch((res) => {
          console.log(res)
        })
    }
  }
}
</script>
