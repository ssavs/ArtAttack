<!-- <template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Edit a User</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="updateProduct">
            <div class="form-group">
              <label for="firstName">First Name</label>
              <input type="text" class="form-control" id="firstName" v-model="payload.firstName"/>
            </div>
            <div class="form-group">
              <label for="lastName">Last Name</label>
              <input type="text" class="form-control" id="lastName" rows="3" v-model="payload.lastName"/>
            </div>
            <div class="form-group">
              <label for="userRole">userRole</label>
              <select class="form-control" id="userRole" v-model="payload.userRole">
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </select>
            </div>
            <div class="form-group">
              <label for="emailAddress">Email Address</label>
              <input type="email" class="form-control" id="emailAddress" v-model="payload.emailAddress" placeholder="@gmail.com" />
            </div>
            <div class="form-group">
              <label for="userProfile">Image</label>
              <input type="url" class="form-control" id="userProfile" v-model="payload.imgURL" placeholder="URL" />
            </div>
            <!-- <button class="btn btn-success mt-3" type="submit">Add Product</button> -->
          <!-- </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
          <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
          <!-- <button class="btn btn-primary" type="submit">Edit Product</button>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      payload: {
        prodName: "",
        category: "",
        price: "",
        imgURL: "",
        prodDescription: "",
      }

    };
  },
  methods: {
    updateProduct() {
      this.$store.dispatch("updateProduct", this.payload);
    },
  },
};
</script>
  


<style>
    
</style> -->