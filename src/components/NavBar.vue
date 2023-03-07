<template>
   <b-navbar toggleable type="dark" variant="dark">
    <b-navbar-brand href="../views/HomeView.vue">
      <img src="https://i.postimg.cc/RZ7kZJYD/Screenshot-2023-03-07-092424-removebg-preview.png" alt="Kitten">

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="hamburger"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item href="#">About</b-nav-item>
        <b-nav-item href="#">Products</b-nav-item>
        <b-nav-item href="#">Wishlist</b-nav-item>
        <b-nav-item href="#">Checkout</b-nav-item>
        <b-nav-item href="#">Login</b-nav-item>
        <b-nav-item href="#">Register</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  





</template>

<script>
export default {
    
}
</script>
<style scoped>
    
</style>