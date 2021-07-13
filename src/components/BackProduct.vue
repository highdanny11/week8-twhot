<template>
  <div class="container">
    <div class="row">
      <div class="col-6 text-center py-3">
        <figure class="figure">
          <img
            :src="product.imageUrl || presetImg"
            style="height: 350px"
            class="figure-img img-fluid rounded img-thumbnail"
            alt="123"
          />
        </figure>
        <figcaption class="figure-caption">商品主圖預覽</figcaption>
        <div class="form-group">
          <label for="producstImg">產品相關圖片網址:</label>
          <input
            v-model.trim="imgurl"
            type="url"
            class="form-control my-2 "
            id="producstImg"
          />
        </div>
        <div class="d-flex flex-row-reverse">
          <a href="#" class="btn btn-primary" id="bulid" @click.prevent="sentImg">增加</a>
        </div>
      </div>
      <div class="col-6 py-3">
        <div class="card">
          <div class="card-header">{{product.id === undefined ? "新增":"編輯" }}產品</div>
          <div class="card-body">
            <div class="form-group">
              <label for="producsttitle">產品標題:</label>
              <input
                v-model="product.title"
                type="text"
                class="form-control my-2"
                id="producsttitle"
                autofocus
              />
              <label for="producstImg">圖片網址:</label>
              <input
                v-model.trim="product.imageUrl"
                type="url"
                class="form-control my-2 js-producstImg"
                id="producstImg"
              />
            </div>
            <div class="row">
              <div class="form-group col-md-6">
                <label for="category">類別:</label>
                <input
                  v-model="product.category"
                  type="text"
                  class="form-control my-2 js-category"
                  id="category"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="unit">單位:</label>
                <input
                  v-model="product.unit"
                  type="text"
                  maxlength="3"
                  class="form-control my-2 js-unit"
                  id="unit"
                />
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-6">
                <label for="origin_price">原價:</label>
                <input
                  type="number"
                  v-model.number="product.price"
                  class="form-control my-2 js-origin_price"
                  id="origin_price"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="price">售價:</label>
                <input
                v-model.number="product.origin_price"
                  type="number"
                  class="form-control my-2 js-price"
                  id="price"
                />
              </div>
            </div>
            <div class="form-group">
                  <label for="producstcontent">產品描述:</label>
                  <textarea
                    class="form-control my-2"
                    v-model.trim="product.content"
                    placeholder="限定20個字"
                    style="height: 60px"
                  ></textarea>
                  <label for="producstdescription">說明內容:</label>
                  <textarea
                    class="form-control my-2"
                    v-model.trim="product.description"
                    placeholder="限定20個字"
                    style="height: 60px"
                  ></textarea>
            </div>
             <div class="d-flex justify-content-between mt-2">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model.number="product.is_enabled"
                      :true-value="1"
                      :false-value="0"
                      id="flexCheckIndeterminate"
                    />
                    <label
                      class="form-check-label"
                      for="flexCheckIndeterminate"
                    >
                      {{ product.is_enabled === 1 ? "啟用" : "未啟用" }}
                    </label>
                  </div>
                  <div class="btn-group">
                    <a href="#" class="btn btn-secondary me-2" @click.prevent="cancelEdit()"
                      >取消</a
                    >
                    <a href="#" class="btn btn-primary" @click.prevent="upData()">{{product.id === undefined ? "新增":"更新"}}</a>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </div>
     <div class="h3 text-center mt-4">產品相關圖片預覽</div>
  <div class="row">
    <div class="col-3" v-for="(img, i ) in product.imagesUrl" :key="i">
      <div class="border border-1 mb-5">
        <figure class="figure">
          <img
            :src="img"
            style="height: 350px"
            class="figure-img img-fluid rounded img-thumbnail w-100"
            alt="123"
          />
        </figure>
      <figcaption class="figure-caption text-center mb-3"><div class="btn btn-danger" @click="delimagesUrl(i)">刪除</div></figcaption>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  props: ['editproduct'],
  inject: ['send'],
  data () {
    return {
      presetImg: 'https://fakeimg.pl/350x200/?text=Preview',
      product: {},
      imgurl: ''
    }
  },
  methods: {
    isValidURL (url) { // 判斷網址對不對
      const RegExp =
        /(ftp|http|https):(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(|([\w#!:.?+=&%@!]))?/
      if (RegExp.test(url)) {
        return true
      } else {
        return false
      }
    },
    sentImg () {
      if (Object.prototype.hasOwnProperty.call(this.product, 'imagesUrl') === false) {
        this.product.imagesUrl = []
      }
      if (this.imgurl !== '' && this.isValidURL(this.imgurl)) {
        // 如果不是空值且格式正確才輸入
        this.product.imagesUrl.push(this.imgurl)
        this.imgurl = ''
      } else {
        alert('網址不對')
      }
    },
    putData () {
      // 更新後台資料
      this.$http
        .put(
          `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/product/${this.product.id}`,
          {
            data: this.product
          }
        )
        .then((res) => {
          if (res.data.success) {
            this.send(res.data)
          } else {
            alert('更新失敗')
          }
        })
    },
    upData () {
      if (this.product.id === undefined) {
        // 如果是新增的狀態
        const arry = Object.keys(this.product).map((key) => {
          return this.product[key] // 把物件值取出轉成陣列
        })
        if (!arry.includes('')) {
          // 判斷陣列內有沒有空值
          this.$http
            .post(
              `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/product`,
              { data: this.product }
            )
            .then((res) => {
              if (res.data.success) {
                this.$emit('dataup')
              } else {
                console.log(res.data.success)
              }
            })
            .catch((error) => {
              console.log(error)
            })
        } else {
          console.log('有欄位沒填')
        }
      } else {
        this.putData() // 編輯的話有id因此走這邊
      }
    },
    cancelEdit () {
      this.$emit('dataup')
    },
    delimagesUrl (i) {
      this.product.imagesUrl.splice(i, 1)
    }
  },
  mounted () {
    this.product = { ...this.editproduct }
  }
}
</script>
