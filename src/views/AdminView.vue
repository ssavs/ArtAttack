<template>
  <!-- <SpinnerComp/> -->
  <EditProduct/>
  <div class="container-fluid">

    <div class="container text-center">
      <div class="row">
        <div class="col">

          <AddProduct />


        </div>
        <div class="col">
        </div>
        <div class="col">
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Add User
          </button>

        </div>
      </div>
    </div>

    <div class="row" style="color: white;">
      <h1>Users</h1>
    </div>
    <div class="row">
      <table class="table table users">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Lastname</th>
            <th scope="col">Cellphone Number</th>
            <th scope="col">EmailAddress</th>
            <th scope="col">UserRole</th>
            <th scope="col">Action</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.userID">

            <td>{{ user.userID }}</td>
            <td><img :src="user.userProfile" style="hei<td>{{ user.userRole }}</td>ght:5rem; width: 5rem; height: 5rem;">
            </td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.cellphoneNumber }}</td>
            <td>{{ user.emailAddress }}</td>
            <td>{{ user.userRole }}</td>

            <td>
              <button type="button" class="btn btn-primary"
                style="width: 5rem;background-color:rgb(62,28,10); border-color: white;">
                Edit
              </button>
            </td>
            <td>
              <button type="button" class="btn btn-danger" style="background-color: rgb(62,28,10);border-color: white;" @click="del(user.userID)">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="products" style="color: white; padding-top: 5%">
        <h1>Products</h1>
        <table class="table table productss" style="padding-top: 5%;">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Image</th>
              <th scope="col">Action</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.prodID">
              <td scope="row">{{ product.prodID }}</td>
              <th scope="row">{{ product.prodName }}</th>
              <th scope="row">{{ product.prodDescription }}</th>
              <td scope="row">R{{ product.price }}</td>
              <td><img :src="product.imgURL" style="height: 8rem; width: 10rem;" /></td>
              <td>
                <button type="button" class="btn btn-primary"
                  style="width: 5rem;background-color:rgb(62,28,10);border-color: white;" data-bs-toggle="modal"
                  data-bs-target="#exampleModal">
                  Edit
                </button>
                <EditProduct :key="product.prodID" />
              </td>

              <td>


                <button type="button" class="btn btn-danger"
                  style="width: 5rem;background-color: rgb(62,28,10); border-color: white;" data-bs-toggle="modal"
                  data-bs-target="#updateProductModal" @click="delP(product.prodID)">
                  Delete
                </button>



              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <AddUser />
    
  </div>
</template>
 
<script>
import AddProduct from '@/components/AddProduct.vue';
import UpdateProduct from '@/components/UpdateProduct.vue';
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
import AddUser from '@/components/AddUser.vue';
import EditProduct from '@/components/EditProduct.vue'
// import UpdateProduct from '@/components/UpdateProductView.vue';

export default {
  setup() {
    const store = useStore();
    store.dispatch("fetchUsers");
    store.dispatch("fetchProducts");
    const products = computed(() => store.state.products);
    const users = computed(() => store.state.users);
    const addProduct = computed(() => store.state.addProduct)
    return {
      users,
      products,
      addProduct,
      EditProduct
    };
  },
  components: { AddProduct, UpdateProduct, AddUser }

  , 
  methods:{
    del(id){
      this.$store.dispatch('deleteUser', id);
      location.reload()
    },
    delP(id){
      this.$store.dispatch('deleteProduct', id);
      location.reload()
    }
  }
};
 





</script>

<style scoped>
.container-fluid {
  padding-top: 2rem;
  /* background-color:rgba(0, 73, 34, 0.527); */
}

@media screen and (max-width: 700px) {
  .container-fluid {
    padding-top: 10rem;
    padding-bottom: 1rem;
  }
}

.users {
  color: white;
}



th {
  color: white;
  font-weight: 100;
}

.productss {
  color: white;
}
</style>