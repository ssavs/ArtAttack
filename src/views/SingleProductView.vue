<template>
     <div class="card-img">
        <img :src="product?.imgURL" alt="" class="art" style="width: 30rem;margin-top: 0.5rem; height: 15rem;">
    </div>
    <div class="card-info cards">
        <p class="text-title">{{ product?.prodName }}</p>
        <p class="text-body">{{ product?.prodArtist }}</p>
        <p class="text-description">{{ product?.prodDescription }}</p>
    </div>
    <div class="card-footer footers" style="justify-content: center; color: white; margin-bottom: 2rem;">
        <span class="text-title">R{{ product?.price }}</span>
        <div class="buyme" style="margin-right: 3rem;">
        <input type="submit" value="Buy me" style="margin-bottom: 2rem; display: flex;" v-on:click="addToCart(product, user)"> 
        <router-link to="/cart"></router-link>
    </div>
    </div>
</template>
<script>
import {computed} from '@vue/runtime-core';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const store = useStore() 
        const route = useRoute()
        const router = useRouter()
        store.dispatch('fetchProduct', route.params.id)
        const product = computed(()=> store.state.product);
        let user = JSON.parse(localStorage.getItem('user'));

        async function addToCart(product, user){
            let payload = {
                userID: user.userID,
                prodID: product.prodID
            }
            await store.dispatch('addToCart', payload);
            router.push({name: 'cart', path:'/cart'})
        }

        return {
            user,
            product,
            addToCart
        };
    },

}
</script>
<style scoped>

input[type="submit"] {
      background-color: rgb(212, 124, 86);
      color: #fff;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    input[type="submit"]:hover {
      background-color: rgb(164, 69, 34);
    }

    @media screen and (max-width: 600px) {
      .container {
        padding: 10px;
      }

      input[type="submit"] {
        padding: 5px 10px;
      }
    }

    .buyme{
        padding-top: 2rem;
    }

.cards{
    color: white;
}

.text-body{
color: white !important;
}

</style>