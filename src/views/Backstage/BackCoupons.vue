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
  <div class="container">
    <BackCouponsModal ref="couponmodal" @renew="getdata"></BackCouponsModal>
    <div class="row justify-content-center my-3">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">優惠名稱</th>
            <th scope="col">優惠代碼</th>
            <th scope="col">到期日</th>
            <th scope="col">是否啟用</th>
            <th scope="col">折扣</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in coupons" :key="i">
            <th scope="row">{{ item.title }}</th>
            <td>{{ item.code }}</td>
            <td>{{ changeDateString(item.due_date) }}</td>
            <td>{{ item.is_enabled === 1 ? "啟用" : "未啟用" }}</td>
            <td>{{ item.percent * 0.1 }}折</td>
            <td>
              <button
                type="button"
                class="btn btn-danger"
                @click="delCoupon(item.id)"
              >
                <div
                  v-if="item.id === statusbtn"
                  class="spinner-border spinner-border-sm"
                  role="status"
                >
                  <span class="visually-hidden"></span>
                </div>
                <span  v-if="item.id !== statusbtn">刪除</span>
              </button>
            </td>
            <td>
              <div class="btn btn-danger" @click="addeditCoupon(item)">編輯</div>
            </td>
          </tr>
          <tr>
            <th></th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <div class="btn btn-primary" @click="addeditCoupon()">新增</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import BackCouponsModal from '@/components/BackCouponsModal'
export default {
  components: {
    BackCouponsModal
  },
  inject: ['send'],
  data () {
    return {
      coupons: {},
      isLoading: false,
      coupon: {
        title: '',
        is_enabled: 1,
        percent: 100,
        due_date: '',
        code: ''
      },
      statusbtn: ''
    }
  },
  methods: {
    getdata (num = 1) {
      this.isLoading = true
      this.$http
        .get(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/coupons?page=${num}`)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false
            this.pagination = res.data.pagination
            this.coupons = res.data.coupons
          } else {
            alert('登入失敗')
          }
        })
        .catch((res) => {
          console.log(res)
        })
    },
    changeDateString (item) {
      if (JSON.stringify(item).length === 10) {
        item = new Date(JSON.parse(JSON.stringify(item) + '000'))
        return item.toLocaleDateString()
      } else {
        item = new Date(JSON.parse(JSON.stringify(item)))
        return item.toLocaleDateString()
      }
    },
    changeDateNumber (item) {
      const date = new Date(item) // 轉換所需值
      return JSON.parse(JSON.stringify(Date.parse(date)).substr(0, 10))
    },
    delCoupon (id) {
      this.statusbtn = id
      this.$http
        .delete(` ${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/coupon/${id}`)
        .then((res) => {
          if (res.data.success) {
            this.statusbtn = ''
            this.send(res.data) // 傳送資料至吐司視窗
            this.getdata()
          } else {
            console.log(res)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    addeditCoupon (item = true) {
      if (item === true) {
        this.$refs.couponmodal.openModal()
      } else {
        this.$refs.couponmodal.openModal(item)
      }
    }
  },
  mounted () {
    this.getdata()
  }
}
</script>
