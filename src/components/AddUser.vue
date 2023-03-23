<template>
  <!-- Button trigger modal -->
  <!-- <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> -->

  <!-- Modal -->
  <!-- Modal -->
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Add User</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form @submit="updateUser">
<!-- <div  class="form-group"> -->
  <!-- <label for="firstName">First Name</label>
  <input type="text" class="form-control" id="firstName" v-model="payload.firstName"/>
</div> -->


          <div class="form-group">
              <!-- <label for="firstName"></label>
              <input type="text" class="form-control" id="firstName" v-model="payload.firstName" /> -->
            </div>














        </form>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save Changes</button>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {};
</script>
  
<style>
.savsButtons {
  margin: 0 15px;
}
</style>