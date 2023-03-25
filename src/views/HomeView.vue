<template>
  <div class="home"><NavBar /> 
 <h1>ART ATTACK</h1>
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

  overflow-x: hidden;
  overflow-y: hidden;
}

.home{

}

@media screen and (max-width: 600px) {
          .container {
            padding: 10px;
          }
    
          input[type="submit"] {
            padding: 5px 10px;
          }
        }
/* }
.art{
font-size: x-large;
} */
</style>