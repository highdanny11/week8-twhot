<template>
  <Loading :active="isLoading">
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
  <div class="container mt-3">
    <div class="row">
      <table class="table" v-if="chang">
        <thead>
          <tr>
            <th scope="col">編號</th>
            <th scope="col">訂單ID</th>
            <th scope="col">下單日期</th>
            <th scope="col">付款狀態</th>
            <th scope="col">刪除</th>
            <th scope="col">查看訂單</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in orders" :key="item.id">
            <th scope="row">{{ item.num }}</th>
            <td>{{ item.id }}</td>
            <td>{{ changeDate(item.create_at) }}</td>
            <td>{{ item.is_paid ? "已付款" : "未付" }}</td>
            <td>
              <div class="btn btn-danger" @click="delOrder(item.id)">刪除</div>
            </td>
            <td>
              <div class="btn btn-secondary" @click="checkOrder(item)">
                查看
              </div>
            </td>
          </tr>
          <tr>
            <th></th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <div
                class="btn btn-danger"
                v-if="orders.length !== 0"
                @click="allDelOreders"
              >
                全部刪除
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <table class="table" v-if="!chang">
        <thead>
          <tr>
            <th scope="col">產品ID</th>
            <th scope="col">選購產品</th>
            <th scope="col">數量</th>
            <th scope="col">總金額</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in order.products" :key="i">
            <td>{{ i }}</td>
            <td>{{ item.product.title }}</td>
            <td>{{ item.qty }}</td>
            <td>{{ item.total }}</td>
          </tr>
        </tbody>
      </table>
      <table class="table table-danger" v-if="!chang">
        <thead>
          <tr>
            <th scope="col">訂單ID</th>
            <th scope="col">下單時間</th>
            <th scope="col" style="width: 100px">付款狀態</th>
            <th scope="col">訂單金額</th>
          </tr>
          <tr>
            <th scope="row">{{ order.id }}</th>
            <td>{{ changeDate(order.create_at) }}</td>
            <td>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="pay"
                  v-model="order.is_paid"
                  :value="order.is_paid"
                />
                <label class="form-check-label" for="pay"
                  >{{ order.is_paid ? "已付" : "未付" }}
                </label>
              </div>
            </td>
            <td>
              <input type="number" min="1" v-model.number="order.total" />
            </td>
          </tr>
          <tr>
            <th></th>
            <td></td>
            <td><div class="btn btn-danger" @click="back()">上一頁</div></td>
            <td>
              <div class="btn btn-danger" @click="putOrder(order.id)">更改</div>
            </td>
          </tr>
        </thead>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  inject: ['send'],
  data () {
    return {
      orders: {},
      pagination: {},
      chang: true,
      order: {},
      isLoading: false
    }
  },
  methods: {
    getdata (num = 1) {
      this.isLoading = true
      this.$http
        .get(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/orders?page=${num}`)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false
            this.pagination = res.data.pagination
            this.orders = res.data.orders
          } else {
            alert('登入失敗')
          }
        })
    },
    delOrder (id) {
      this.$http
        .delete(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/order/${id}`)
        .then((res) => {
          if (res.data.success) {
            this.send(res.data) // 傳送資料至吐司視窗
            this.getdata()
          } else {
            console.log('失敗')
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    changeDate (item) {
      if (JSON.stringify(item).length === 10) {
        item = new Date(JSON.parse(JSON.stringify(item) + '000'))
        return item.toLocaleString()
      } else {
        item = new Date(JSON.parse(JSON.stringify(item)))
        return item.toLocaleString()
      }
    },
    checkOrder (item) {
      this.order = { ...item }
      this.chang = false
    },
    putOrder (id) {
      this.$http
        .put(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/order/${id}`, {
          data: this.order
        })
        .then((res) => {
          if (res.data.success) {
            this.send(res.data) // 傳送資料至吐司視窗
            this.getdata()
            this.back()
          } else {
            console.log(res.data)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    back () {
      this.chang = true
    },
    allDelOreders () {
      this.$http
        .delete(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/orders/all`)
        .then((res) => {
          if (res.data.success) {
            this.send(res.data) // 傳送資料至吐司視窗
            this.getdata()
          } else {
            console.log(res.data)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  mounted () {
    this.getdata()
  }
}
</script>
