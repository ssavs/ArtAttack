<template>
  <div class="home"><NavBar /> 
 <h1 class="heading ">ART ATTACK</h1> 
 <p>Excellence is an art won by training and habituation. <br> We do not act rightly because we have virtue or excellence, but we rather have those because we have acted rightly. We are what we repeatedly do. <br> Excellence, then, is not an act but a habit.</p>
  </div>
</template>

<script>
// import NavBar from '@/components/NavBar.vue';
export default {
  components: {
    // NavBar,
  }
}

</script>

<style scoped>
.home {
  background-image: url(https://i.postimg.cc/fy9n79Fd/milad-fakurian-GJKx5lhw-U3-M-unsplash.jpg);
  height: 80vh;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: auto;
}

.heading{
background-image: linear-gradient(90deg,#906F50,#7B4C2B);
background-clip: text;
color: transparent;
font-weight: bolder;
font-size: 5rem;
}

p{
  font-size: xx-large;
  padding-top: 5rem;
}


@media screen and (max-width: 600px) {
h1{
  scale: 0.5;
}
}

</style>