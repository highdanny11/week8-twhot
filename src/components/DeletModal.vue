<template>
  <div class="modal fade" id="deleteAlert" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-exclamation-circle"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path
              d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"
            />
          </svg>
          <h5 class="modal-title ms-2" id="exampleModalLabel">確定要刪除</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body text-danger fs-3">刪除後就無法復原!</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-outline-danger"
            @click="btnDelete"
          >
            刪除
          </button>
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
      del: '',
      id: ''
    }
  },
  methods: {
    btnDelete () {
      this.$http.delete(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/product/${this.id}`).then((res) => {
        if (res.data.success) {
          this.$emit('deldata')// 刪除後更新
          this.send(res.data)
        } else {
          alert('刪除失敗')
        }
      })
      this.del.hide()
    },
    OpenDelModal (id) {
      this.id = id
      this.del.show()
    }
  },
  mounted () {
    this.del = new Modal(document.querySelector('#deleteAlert'), {
      keyboard: false
    })
  }
}
</script>
