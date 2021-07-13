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
    <div class="col-lg-3 py-3 text-center border border-2">1.輸入訂單資料</div>
    <div class="col-lg-3 py-3 text-center border border-2 mx-5"
          :class="{'bg-primary':!order.is_paid}">
      2.確認付款
    </div>
    <div class="col-lg-3 py-3 text-center border border-2"
         :class="{'bg-primary':order.is_paid}">3.完成</div>
  </div>
  <div class="row mb-5 justify-content-center ">
    <div class="col-lg-5 shadow p-4 bg-sunblue">
        <h2 class="text-center">確認付款</h2>
      <table class="table table-light">
          <tbody>
              <tr v-for="(item, i) in products" :key="i">
                  <td class="p-2">{{item.product.title}}</td>
                  <td class="p-2">{{item.qty}}/份</td>
                  <td class="p-">{{item.total}}元</td>
              </tr>
          </tbody>
      </table>
      <table class="table table-light">
        <tbody>
          <tr>
            <th class=" p-2">下單日期</th>
            <td class=" p-2">{{this.order.create_at}}</td>
          </tr>
          <tr>
            <th class=" p-2">訂單編號</th>
            <td class=" p-2 text-danger">{{order.id}}</td>
          </tr>
          <tr>
            <th class=" p-2">Email</th>
            <td class=" p-2">{{user.email}}</td>
          </tr>
          <tr>
            <th class=" p-2">姓名</th>
            <td class=" p-2">{{user.name}}</td>
          </tr>
          <tr>
            <th class=" p-2">收件人電話</th>
            <td class=" p-2">{{user.tel}}</td>
          </tr>
          <tr>
            <th class=" p-2">收件人地址</th>
            <td class=" p-2">{{user.address}}</td>
          </tr>
          <tr>
            <th class=" p-2">訂單金額</th>
            <td class=" p-2 text-danger">${{order.total}}</td>
          </tr>
          <tr>
            <th class=" p-2">付款狀態</th>
            <td class=" p-2 text-danger">{{order.is_paid?'付款完成':'未付款'}}</td>
          </tr>
           <tr>
               <td class=" p-2"></td>
               <td class=" p-2" >
                  <button type="button" class="btn btn-primary" v-if="!order.is_paid" @click="paytoOrder()">確認付款</button>
                  <router-link  class="btn btn-primary" v-if="order.is_paid" :to="`/ProductsList/${spaceID}`" >來去逛逛</router-link>
               </td>
           </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      order: {},
      user: {},
      products: {},
      isLoading: false,
      spaceID: null
    }
  },
  methods: {
    getorder (id) {
      this.isLoading = true
      this.$http.get(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/order/${id}`)
        .then(res => {
          this.isLoading = false
          this.order = res.data.order
          this.user = res.data.order.user
          this.products = res.data.order.products
          this.order.create_at = new Date(
            JSON.parse(JSON.stringify(this.order.create_at) + '000')
          )
          this.order.create_at = this.order.create_at.toLocaleString()
        })
        .catch((res) => {
          console.log(res)
        })
    },
    paytoOrder () {
      this.$http.post(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/pay/${this.order.id}`)
        .then(res => {
          this.getorder(this.order.id)
        })
        .catch((res) => {
          console.log(res)
        })
    }
  },
  mounted () {
    const { id } = this.$route.params
    this.getorder(id)
  }
}
</script>
