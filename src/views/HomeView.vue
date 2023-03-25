<template>
  <div class="home"><NavBar /> 
  <!-- <img src="https://i.postimg.cc/NMYYRTRQ/My-project-1-removebg-preview.png" alt="" style="margin-top: 0.0025rem; margin-left: 75rem; width:20rem ;height: 15rem;">
  <h1 class="art">ART</h1>
  <img src="https://i.postimg.cc/q7xz3pW6/My-project-1-1-removebg-preview.png" alt="" style="margin-right: 75rem; width: 20rem ; height: 25rem;">
  <h1 class="attack">ATTACK</h1> -->
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