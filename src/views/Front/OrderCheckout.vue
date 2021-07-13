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
    <div class="row justify-content-center my-4">
      <div class="col-lg-3 py-3 text-center bg-primary border border-2">
        1.輸入訂單資料
      </div>
      <div class="col-lg-3 py-3 text-center border border-2 mx-5">2.確認付款</div>
      <div class="col-lg-3 py-3 text-center border border-2">3.完成</div>
    </div>
    <div class="row justify-content-center my-4">
      <div class="col-lg-5">
        <div class="input-group mb-3">
          <input type="text" class="form-control" v-model.trim="coupon.code" placeholder="請輸入優惠碼">
          <button class="btn btn-outline-secondary" :disabled="coupon.code === ''" type="button" @click="useCoupon()">確認</button>
        </div>
      <ul class="list-unstyled bg-sunblue">
        <li>
          <div
          class="
            p-2
            mb-3
            d-flex
            justify-content-around
            align-items-center
          "
        >
          <div class="h4 mb-0">購物車清單:{{cartsQty}}</div>
          <div class="h4 mb-0">總額:{{cartslist.total}}</div>
        </div>
        </li>
        <li v-for="cart in cartslist.carts" :key="cart.id"
            class="
            bg-sunblue
            p-2
            d-flex
            align-items-center
            justify-content-around
            ">
            <div class="carts-img me-2" :style="{'background-image': `url(${cart.product.imageUrl})`}"></div>
            <div class="d-flex flex-column ">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <p class="mb-0 fs-5">{{cart.product.title}}/{{cart.qty}}份</p>
                <button class="btn btn-outline-danger" @click="delCart(cart.id)">
                  <i class="bi bi-trash-fill"></i>
                </button>
              </div>
              <div class="input-group ">
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  id="button-addon1"
                  :disabled="cart.qty==1 || spinnerID===cart.id "
                  @click="editCart(cart.id, cart.qty-1)"
                >
                  <i v-if="spinnerID!==cart.id" class="bi bi-dash-lg"></i>
                  <div v-if="spinnerID===cart.id" class="spinner-border spinner-border-sm" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </button>
                <input
                  v-model.number="cart.qty"
                  readonly
                  type="number"
                  min="1"
                  class="form-control text-center"
                />
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                  :disabled="spinnerID===cart.id"
                  @click="editCart(cart.id, cart.qty+1)"
                >
                  <i v-if="spinnerID!==cart.id" class="bi bi-plus-lg"></i>
                  <div v-if="spinnerID===cart.id" class="spinner-border spinner-border-sm" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </button>
              </div>
            </div>
        </li>
      </ul>
    </div>
    <Form
      v-slot="{ errors }"
      ref="form"
      @submit="onSubmit"
      class="col-lg-5 mb-5"
    >
      <div class="mb-3">
        <label for="email" class="form-label">E-mail</label>
        <Field
          id="email"
          name="email"
          type="email"
          class="form-control"
          :class="{ 'is-invalid': errors['email'] }"
          placeholder="請輸入 Email"
          rules="email|required"
          v-model="form.user.email"
        ></Field>
        <error-message name="email" class="invalid-feedback"></error-message>
      </div>
      <div class="mb-3">
        <label for="name" class="form-label">姓名</label>
        <Field
          id="name"
          name="姓名"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors['姓名'] }"
          placeholder="請輸入姓名"
          rules="required"
          v-model="form.user.name"
        ></Field>
        <error-message name="姓名" class="invalid-feedback"></error-message>
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">地址</label>
        <Field
          id="address"
          name="地址"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors['地址'] }"
          placeholder="請輸入地址"
          rules="required"
          v-model="form.user.address"
        ></Field>
        <error-message name="地址" class="invalid-feedback"></error-message>
      </div>
      <div class="mb-3">
        <label for="phone" class="form-label">手機號碼</label>
        <Field
          id="phone"
          name="手機號碼"
          type="tel"
          class="form-control"
          :class="{ 'is-invalid': errors['手機號碼'] }"
          placeholder="請輸入正確手機號碼ex:0987654321"
          :rules="isPhone"
          v-model="form.user.tel"
        ></Field>
        <error-message name="手機號碼" class="invalid-feedback"></error-message>
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">備註:</label>
        <textarea
          name="message"
          class="form-control"
          id="area"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <button class="btn btn-primary " type="submit" :disabled="cartsQty===0">送出訂單</button>
    </Form>
    </div>
  </div>
</template>
<style lang="scss">
  .carts-img {
    object-fit:fill;
    width: 90px;
    height: 90px;
    background-size: cover;
    background-position: center;
  }
</style>
<script>
import emitter from '@/assets/javascript/emitter'
export default {
  data () {
    return {
      cartslist: {},
      cartsQty: '',
      spinnerID: '',
      coupon: {
        code: ''
      },
      isLoading: false,
      form: {
        user: {
          email: '',
          tel: '',
          address: '',
          name: ''
        }
      }
    }
  },
  methods: {
    useCoupon () {
      this.$http
        .post(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/coupon`, { data: this.coupon })
        .then(res => {
          this.coupon.code = ''
          alert('成功使用')
        })
    },
    onSubmit () {
      this.isLoading = true
      const order = this.form
      this.$http.post(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/order`, { data: order })
        .then(res => {
          if (res.data.success) {
            this.isLoading = false
            const id = res.data.orderId
            this.$refs.form.resetForm()
            emitter.emit('push-data')
            this.$router.push(`/OrderCheckIn/${id}`)
          } else {
            console.log(res)
          }
        })
        .catch((res) => {
          console.log(res)
        })
    },
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的手機號碼'
    },
    getCarts () {
      this.isLoading = true
      this.$http.get(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart`)
        .then(res => {
          this.isLoading = false
          this.cartslist = res.data.data
          this.cartsQty = this.cartslist.carts.length
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
    editCart (id, number) {
      this.spinnerID = id
      const cart = {
        product_id: id,
        qty: number
      }
      this.$http.put(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart/${id}`, { data: cart })
        .then(res => {
          this.spinnerID = ''
          this.getCarts()
          emitter.emit('push-data')
        })
        .catch((res) => {
          console.log(res)
        })
    }
  },
  mounted () {
    this.getCarts()
    emitter.on('updata', () => {
      this.getCarts()
    })
  }
}
</script>
