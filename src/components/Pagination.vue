 <template>
  <div class="container">
    <div class="row">
      <div class="col-6 mx-auto">
        <ul class="pagination justify-content-center">
          <li class="page-item" :class="{ disabled: !pagination.has_pre }">
            <a
              href="#"
              class="page-link"
              aria-label="Previous"
              @click.prevent="getdata(pagination.current_page - 1)"
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li
            class="page-item"
            v-for="(item, i) in pagination.total_pages"
            :class="{ active: item === pagination.current_page }"
            :key="i"
          >
            <a class="page-link" href="#" @click.prevent="getdata(item)" >{{ item }}</a>
          </li>
          <li class="page-item" :class="{ disabled: !pagination.has_next }">
            <a
              href="#"
              class="page-link"
              aria-label="Next"
              @click.prevent="getdata(pagination.current_page + 1)"
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['pagination'],
  methods: {
    getdata (page) {
      this.$emit('updata', page)
    }
  }
}
</script>
