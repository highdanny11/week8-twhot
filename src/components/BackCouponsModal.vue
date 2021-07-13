<template>
  <div
    class="modal fade"
    ref="addeditModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="card">
          <div class="card-header">優惠卷</div>
          <div class="card-body">
            <div class="form-group">
              <label for="couponname">優惠名稱:</label>
              <input
                type="text"
                v-model.trim="coupon.title"
                class="form-control my-2"
                id="couponname"
                autofocus
              />
              <label for="couponcode">優惠代碼:</label>
              <input
              v-model.trim="coupon.code"
                type="text"
                class="form-control my-2"
                id="couponcode"
              />
            </div>
            <div class="row">
              <div class="form-group col-md-6">
                <label for="expiry">到期日:</label>
                <input
                  type="date"
                  class="form-control my-2"
                  v-model="coupon.due_date"
                  :min="mindata"
                  id="expiry"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="discount">折扣:</label>
                <select
                  v-model.number="coupon.percent"
                  class="form-select my-2"
                  aria-label="Default select example"
                  id="discount"
                >
                  <option selected value="100">沒有折扣</option>
                  <option value="10">一折</option>
                  <option value="20">二折</option>
                  <option value="30">三折</option>
                  <option value="40">四折</option>
                  <option value="50">五折</option>
                  <option value="60">六折</option>
                  <option value="70">七折</option>
                  <option value="80">八折</option>
                  <option value="90">九折</option>
                </select>
              </div>
            </div>
            <div class="d-flex flex-row-reverse align-items-center">
              <a
                v-if="coupon.id === undefined"
                href="#"
                class="btn btn-primary"
                @click.prevent="build"
              >
                <div
                  v-if="!statusbtn"
                  class="spinner-border spinner-border-sm"
                  role="status"
                >
                  <span class="visually-hidden" ></span>
                </div>
                <span v-if="statusbtn">建立</span>
              </a>
              <a
                v-if="coupon.id!== undefined"
                href="#"
                class="btn btn-primary"
                @click.prevent="updata(coupon.id)"
              >
                <div
                  class="spinner-border spinner-border-sm"
                  role="status"
                  v-if="!statusbtn"
                >
                  <span class="visually-hidden"></span>
                </div>
                <span v-if="statusbtn">更新</span>
              </a>
              <div class="form-check form-switch me-3">
                <input
                  v-model.number="coupon.is_enabled"
                  class="form-check-input"
                  :true-value="1"
                  :false-value="0"
                  checked
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                />
                <label class="form-check-label" for="flexSwitchCheckChecked">
                    {{coupon.is_enabled === 1 ? "啟用" : "未啟用"}}
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Modal from 'bootstrap/js/dist/modal'
export default {
  inject: ['send'],
  data () {
    return {
      mindata: '',
      couponModal: '',
      coupon: {},
      statusbtn: true
    }
  },
  methods: {
    openModal (item = {
      title: '',
      is_enabled: 1,
      percent: 100,
      due_date: this.changeDateNumber(),
      code: ''
    }) {
      this.couponModal.show()
      this.coupon = {
        ...item
      }
      this.coupon.due_date = this.changeDateString(this.coupon.due_date)
    },
    updata (id) {
      this.statusbtn = false
      const arry = Object.keys(this.coupon).map((key) => {
        // 判斷是否有空值
        return this.coupon[key]
      })
      if (!arry.includes('')) {
        const putcoupon = {
          ...this.coupon
        }
        putcoupon.due_date = this.changeDateNumber(putcoupon.due_date)
        this.$http
          .put(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/coupon/${id}`, {
            data: putcoupon
          })
          .then((res) => {
            if (res.data.success) {
              this.send(res.data)
              this.$emit('renew')
              this.statusbtn = true
            } else {
              console.log(res)
            }
          })
          .catch((error) => {
            console.log(error)
          })
      } else {
        alert('有值沒有填')
      }
    },
    build () {
      this.statusbtn = false
      const arry = Object.keys(this.coupon).map((key) => {
        // 判斷是否有空值
        return this.coupon[key]
      })
      if (!arry.includes('')) {
        const putcoupon = {
          ...this.coupon
        }
        putcoupon.due_date = this.changeDateNumber(putcoupon.due_date)
        this.$http
          .post(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/coupon`, { data: putcoupon })
          .then((res) => {
            if (res.data.success) {
              this.send(res.data)
              this.statusbtn = true
              this.$emit('renew')
              this.couponModal.hide()
            } else {
              console.log(res)
            }
          })
          .catch((error) => {
            console.log(error)
          })
      } else {
        alert('有值沒有填')
      }
    },
    changeDateNumber (item = true) {
      if (item === true) {
        const date = new Date() // 轉換所需值
        return JSON.parse(JSON.stringify(Date.parse(date)).substr(0, 10))
      } else {
        const date = new Date(item) // 轉換所需值
        return JSON.parse(JSON.stringify(Date.parse(date)).substr(0, 10))
      }
    },
    changeDateString (item) {
      item = new Date(JSON.parse(JSON.stringify(item) + '000'))
      return item.toISOString().split('T')[0]
    }
  },
  mounted () {
    this.couponModal = new Modal(this.$refs.addeditModal, {
      keyboard: false
    })
    this.mindata = new Date().toISOString().split('T')[0]
  }
}
</script>
