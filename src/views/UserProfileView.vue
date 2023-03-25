<template>
    <section class="vh-75">
     
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-6 mb-4 mb-lg-0">
         <h2>User Profile</h2>
        <div class="card mb-3" style="border-radius: .5rem;">
          <div class="row g-0">
            <div class="col-md-4 gradient-custom text-center text-white"
              style="border-top-left-radius: .5rem; border-bottom-left-radius: .5rem;">
              <img :src="$store.state.user.userProfile" alt="Avatar" class="img-fluid my-5" style="width: 50%;" />
              <h5>{{ $store.state.user.firstName }}</h5>
              <i class="far fa-edit mb-5"></i>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h6>Information</h6>
                <hr class="mt-0 mb-4">
                <div class="row pt-1">
                  <div class="col-6 mb-3">
                    <h6>Email</h6>
                    <p class="text-muted">{{ $store.state.user.emailAddress }}</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6>Phone</h6>
                    <p class="text-muted">{{ $store.state.user.cellphoneNumber }}</p>
                  </div>
                </div>
                <h6>More Info</h6>
                <hr class="mt-0 mb-4">
                <div class="row pt-1">
                  <div class="col-6 mb-3">
                    <h6>First Name</h6>
                    <p class="text-muted">{{$store.state.user.firstName }}</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6>Last Name</h6>
                    <p class="text-muted">{{ $store.state.user.lastName }}</p>
                  </div>
                </div>
                <div class="align-items-center icons">
                  <a href="https://www.facebook.com/"><i class="fab fa-facebook-f fa-lg me-3"></i></a>
                  <a href="https://www.twitter.com/"><i class="fab fa-twitter fa-lg me-3"></i></a>
                  <a href="https://www.instagram.com/"><i class="fab fa-instagram fa-lg"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
<script>
import { onMounted } from 'vue';
import { useStore } from 'vuex';
export default {
    name:'userProfileView',
    setup() {
        const store = useStore()
        onMounted(async () => {
            await store.dispatch('fetchUser')
        })
    },
}
</script>
<style scoped>
 .card {
    width: 100%
 }
    .gradient-custom {
/* fallback for old browsers */
background: #f6d365;

background: -webkit-linear-gradient(to right bottom, #AF8D6F, #614128);


background: linear-gradient(to right bottom, #AF8D6F, #614128)
}

h2{
  color: white;
}

</style>