<template>
   <div class="row" style="margin-top: 1.5rem; margin-left: 2rem; margin-bottom: 5rem;">
  <div class="col-25">
    <div class="container">
      <h1>Cart
        <span class="price" style="color:black">
        </span>
      </h1>
      <p v-for="item in cart" :key="item"><a href="#">{{ item.prodName }}</a><span class="price">R{{ item.price }}</span></p>
      <hr>
      <br>
      <h2>Total <span class="price" style="color:black"><b>R{{ cartTotal(cart) }}</b></span></h2>
    </div>
  </div>
    </div>

</template>
<script>
import { useStore } from 'vuex';
import {computed} from '@vue/runtime-core';
export default {
    setup(){
      const store = useStore();
      
      
      async function setCart(){
        let user = await JSON.parse(localStorage.getItem('user'));
        store.dispatch('fetchCart', await user.userID);
      }
      setCart();

      function cartTotal(cart){
        let cartArr = cart;
        let cartTotal = 0;
        try{
          cartArr.forEach((item) => {
            cartTotal += item.price
          });
        }catch(err){
          console.log('Loading Items...')
        }
        return cartTotal
      }

      let cart = computed(() => store.state.cart)
      return{
        cart,
        cartTotal
      }
    }

    
}
</script>
<style scoped>

h2{
  color: black;
}

h1{
  color: black;
  margin-bottom: 5rem;
}

.row {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  margin: 0 -16px;
}

.col-25 {
  -ms-flex: 25%; /* IE10 */
  flex: 25%;
}

.col-50 {
  -ms-flex: 50%; /* IE10 */
  flex: 50%;
}

.col-75 {
  -ms-flex: 75%; /* IE10 */
  flex: 75%;
}

.col-25,
.col-50,
.col-75 {
  padding: 0 16px;
}

.container {
  background-color: #c49e6893;
  padding: 5px 20px 15px 5px;
  border-radius: 3px;
}

input[type=text] {
  width: 100%;
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

a{
  color: white;
}

label {
  margin-bottom: 10px;
  display: block;
}

.icon-container {
  margin-bottom: 20px;
  padding: 7px 0;
  font-size: 24px;
}

.btn {
  background-color: #7f5110;
  color: white;
  padding: 12px;
  margin: 10px 0;
  border: none;
  width: 100%;
  border-radius: 3px;
  cursor: pointer;
  font-size: 17px;
}

.btn:hover {
  background-color: #a26d36;
}

span.price {
  float: right;
  color: rgb(255, 255, 255);
  font-weight: bolder;
  
}

/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other (and change the direction - make the "cart" column go on top) */
@media (max-width: 800px) {
  .row {
    flex-direction: column-reverse;
  }
  .col-25 {
    margin-bottom: 20px;
  }
}
    
</style>