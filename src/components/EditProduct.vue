<template>
   <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Edit a Product</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="updateProduct">
            <div class="form-group">
              <label for="prodName">Art Name</label>
              <input type="text" class="form-control" id="prodName" v-model="payload.prodName" />
            </div>
            <div class="form-group">
              <label for="prodDescription">Product Description</label>
              <textarea class="form-control" id="prodDescription" rows="3" v-model="payload.prodDescription"></textarea>
            </div>
            <div class="form-group">
              <label for="category">Category</label>
              <select class="form-control" id="category" v-model="payload.category">
                <option value="ArtPieces">Art Pieces</option>
                <option value="Nfts">NFTS</option>
              </select>
            </div>
            <div class="form-group">
              <label for="price">Price</label>
              <input type="text" class="form-control" id="price" v-model="payload.price" placeholder="R" />
            </div>
            <div class="form-group">
              <label for="imgUrl">Image</label>
              <input type="url" class="form-control" id="imgUrl" v-model="payload.imgURL" placeholder="URL" />
            </div>
            <!-- <button class="btn btn-success mt-3" type="submit">Add Product</button> -->
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
          <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
          <button class="btn btn-primary" type="submit">Edit Product</button>
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
  