<template>
  <div v-if="spinnerDisplay" class="spinnerContainer">
    <SpinnerComp />
  </div>

  <div v-else-if="!
  
  
  
  
  
  
  spinnerDisplay" class="container-fluid products">
    <div class="row">
      <div class="col">
        column
      </div>
      <div class="col" style="margin-top: 2%;">
        <FilterProducts />
      </div>
      <div class="col" style="margin-top: 2%;">
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-dark " type="submit">Search</button>
        </form>
      </div>
    </div>
    <div class="row justify-content-center ">
    </div>
    <div class="row gap-3 cardsContainer">
      <div class="card" v-for="product in products" :key="product">
        <div class="card-img">
          <img :src="product.imgURL" alt="" class="art">
        </div>
        <div class="card-info">
          <p class="text-title">{{ product.prodName }}</p>
          <p class="text-body">{{ product.prodArtist }}</p>
        </div>
        <div class="card-footer">
          <span class="text-title">R{{ product.price }}</span>
          <div class="card-button details">
            <router-link :to="{ name: 'singleproduct', params: { id: product.prodID } }">View Details</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import SpinnerComp from "@/components/SpinnerComp.vue";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import FilterProducts from "@/views/FilterProductsView.vue";

export default {
  components: { SpinnerComp, FilterProducts },
  setup() {
    const store = useStore();
    store.dispatch("fetchProducts");
    const products = computed(() => store.state.products);
    const spinnerDisplay = computed(() => store.state.showSpinner);
    return {
      products,
      spinnerDisplay,
    };
  },
};
</script> 
<style>
.spinnerContainer{
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cardsContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 7%;
}

.card {
  width: 25%;
  height: 25%;
  padding: .8em;
  background: #f5f5f5;
  position: relative;
  overflow: visible;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  grid-gap: 2rem;
}

a {
  color: black;
  text-decoration: none;
  font-weight: bold
}

a .card-img {
  background-color: #87ba69;
  height: 40%;
  width: 100%;
  border-radius: .5rem;
  transition: .3s ease;
}

.art {
  width: 100%;
  min-width: 299px;
  height: 300px;
}

.card-info {
  padding-top: 10%;
}

/* svg {
 width: 20px;
 height: 20px;
} */

.card-footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  border-top: 1px solid #ddd;
}

/*Text*/
.text-title {
  font-weight: 900;
  font-size: 1.2em;
  line-height: 1.5;
}

.text-body {
  font-size: .9em;
  padding-bottom: 10px;
}

/*Button*/
.card-button {
  border: 1px solid #252525;
  display: flex;
  padding: .3em;
  cursor: pointer;
  border-radius: 50px;
  transition: .3s ease-in-out;
}

/*Hover*/
.card-img:hover {
  /* transform: translateY(-25%); */
  /* box-shadow: rgba(226, 196, 63, 0.25) 0px 13px 47px -5px, rgba(180, 71, 71, 0.3) 0px 8px 16px -8px; */
  scale: 1.03;
  box-shadow: 0px 6px 15px #000;

}

.card-button:hover {
  border: 1px solid #87ba69;
  background-color: #87ba69;
}

@media screen and (max-width: 600px) {

  .products {
    padding-top: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>