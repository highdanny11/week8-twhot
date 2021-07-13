<template>
  <div class="container mt-3">
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
    <div v-if="SelecteditProduct" class="d-flex flex-row-reverse">
      <a href="#" class="btn btn-primary btn-lg mt-3" @click.prevent="edit()">新增</a>
    </div>
    <div v-if="SelecteditProduct" class="row justify-content-center">
      <div class="col">
        <table class="table align-middle">
          <thead>
            <tr>
              <th scope="col" style="width: 100px">產品編號</th>
              <th scope="col">產品名稱</th>
              <th scope="col" style="width: 80px">原價</th>
              <th scope="col" style="width: 80px">售價</th>
              <th scope="col" style="width: 100px">是否啟用</th>
              <th scope="col">編輯</th>
              <th scope="col">刪除</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in products" :key="item">
              <th scope="row">
                <img
                  :src="item.imageUrl"
                  style="width: 200px; height: 150px; object-fit: cover"
                  alt=""
                />
              </th>
              <td>{{ item.title }}</td>
              <td>{{ item.origin_price }}</td>
              <td>{{ item.price }}</td>
              <td>{{ item.is_enabled ? "啟用" : "未啟用" }}</td>
              <td>
                <button class="btn btn-outline-primary" @click="edit(item)" >
                  編輯
                </button>
              </td>
              <td>
                <button
                  class="btn btn-outline-danger"
                  @click="openDelete(item.id)"
                >
                  刪除
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <BackProduct v-if="!SelecteditProduct" @dataup="getdata" :editproduct="editproduct"></BackProduct>
  <Pagination v-if="SelecteditProduct" @updata="getdata" :pagination="pagination"></Pagination>
  <DeletModal ref="del" @deldata="getdata"></DeletModal>
</template>
<script>
import DeletModal from '@/components/DeletModal.vue'
import Pagination from '@/components/Pagination.vue'
import BackProduct from '@/components/BackProduct.vue'
export default {
  components: {
    Pagination,
    DeletModal,
    BackProduct
  },
  data () {
    return {
      isLoading: false,
      SelecteditProduct: true,
      products: {},
      pagination: {},
      editproduct: {}
    }
  },
  methods: {
    getdata (num = 1) { // 載入後端資料
      this.isLoading = true
      this.$http.get(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/products?page=${num}`)
        .then(res => {
          if (res.data.success) {
            this.isLoading = false
            this.SelecteditProduct = true
            this.products = res.data.products
            this.pagination = res.data.pagination
          } else {
            console.log('失敗')
          }
        })
        .catch((res) => {
          console.log(res)
        })
    },
    edit (item = true) {
      this.editproduct = { ...item }
      this.SelecteditProduct = false
    },
    closeModal () { // 關閉編輯介面
      this.$refs.modal.modal.hide()
    },
    openDelete (id) {
      this.$refs.del.OpenDelModal(id)
    }
  },
  created () {
    this.getdata()
  }
}
</script>
