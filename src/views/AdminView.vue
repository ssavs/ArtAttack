<template>
  <div class="container-fluid">

    <div class="container text-center">
      <div class="row">
        <div class="col">

          <AddProduct />


        </div>
        <div class="col">
          <button type="button" class="btn btn-primary" style="width: 5rem; height: ;">
            AddUser
          </button>
        </div>

        <div class="col">

        </div>
      </div>
    </div>

    <div class="row">
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
            <th scope="col">Password</th>
            <th scope="col">Action</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.userID">

            <td>{{ user.userID }}</td>
            <td><img :src="user.userProfile" style="hei<td>{{ user.userRole }}</td>ght:5rem; width: 5rem; height: 5rem;"></td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.cellphoneNumber }}</td>
            <td>{{ user.emailAddress }}</td>
            <td>{{ user.userRole }}</td>
            <td>{{ user.userPassword }}</td>

            <td>
              <button type="button" class="btn btn-primary" style="width: 5rem">
                Edit
              </button>
            </td>
            <td>
              <button type="button" class="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="products">
        <h1>Products</h1>
        <table class="table table productss">
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
                <button type="button" class="btn btn-primary" style="width: 5rem" data-bs-toggle="modal"
                  data-bs-target="#updateProductModal">
                  Edit
                </button>
                <UpdateProduct :key="product.prodID" />
              </td>

              <td>


                <button type="button" class="btn btn-danger" style="width: 5rem" data-bs-toggle="modal"
                  data-bs-target="#updateProductModal">
                  Delete
                </button>



              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
 
<script>
import AddProduct from '@/components/AddProduct.vue';
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';

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

    };
  },
  components: { AddProduct }
};
</script>

<style scoped>
.container-fluid {
  padding-top: 9rem;
  /* background-color:rgba(0, 73, 34, 0.527); */
}

@media screen and (max-width: 700px) {
  .container-fluid {
    padding-top: 17rem;
    padding-bottom: 1rem;
  }
}

.users {
  color: white;

}

th {
  color: white;
}

.productss {
  color: white;
}
</style>