<template>
    
    <div class="card-img">
        <img :src="product?.imgURL" alt="" class="art">
    </div>
    <div class="card-info">
        <p class="text-title">{{ product?.prodName }}</p>
        <p class="text-body">{{ product?.prodArtist }}</p>
        <p class="text-description">{{ product?.prodDescription }}</p>
    </div>
    <div class="card-footer">
        <span class="text-title">R{{ product?.price }}</span>
    </div>
</template>
<script>
import {computed} from '@vue/runtime-core';
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore() 
        const product = computed(()=> store.state.product);
        return {
            product,
        };
    },
    mounted() {
        this.$store.dispatch('fetchProduct', this.$route.params.id)
    }
}
</script>
<style scoped></style>