<template>
    <div class="register">
      <h1>Register</h1>
    <div class="container">
<form class="form" @submit.prevent="$event => Registration()">
  <label for="first-name">First Name:</label>
  <input type="text" id="first-name" name="first-name" required v-model="payload.firstName">

  <label for="last-name">Last Name:</label>
  <input type="text" id="last-name" name="last-name" required v-model="payload.lastName">

  <label for="cellphone-number">Cellphone Number:</label>
  <input type="tel" id="cellphone-number" name="cellphone-number" required v-model="payload.cellphoneNumber">
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required v-model="payload.emailAddress">
  
  <!-- <label for="user-role">User Role:</label> -->
  <!-- <input type="text" id="user-role" name="user-role" required v-model="payload.userRole"> -->
               <label>User Role:</label> 
  <select class="form-control" required id="user-role" name="user-role" v-model="payload.userRole">
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                </select>
            
  <label for="password">Password:</label>
  <input type="password" id="password" name="password" required v-model="payload.userPassword">

  <label for="confirmP">Confirm Password</label>
  <input type="password" id="confirmP" name="confirmP" required v-model="confirmPassword">

  <input type="submit" value="Register">
</form>
</div>
    </div>
    
</template>

<script>

    export default {
      data() {
        return{
          payload:{
            firstName:"",
            lastName:"",
            cellphoneNumber:"",
            emailAddress:"",
            userRole:"user",
            userPassword:"",
          },
           confirmPassword:""

          }
        },

        methods:{
          Registration(){
            if(this.payload.userPassword ==! this.confirmPassword){
              alert('Password doesnt match')
            
            }
            else {
              this.$store.dispatch("Register",this.payload);
            }
          }
        }
      }  
</script>

<style  scoped>
     .register{
        /* background-color: #DDE5BE; */
        padding-top:2rem;
        padding-bottom: 5rem;
     }
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      background-color:#c49e6893;
      border-radius: 5px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
      
    
    }

    h1 {
      text-align: center;
      margin-bottom: 20px;
    }

    label {
      display: block;
      margin-bottom: 10px;
      font-weight: bold;
    }

    input[type="text"],
    input[type="email"],
    input[type="tel"],
    input[type="password"],
    input[type= "confirmP"]
    select {
      width: 100%;
      padding: 10px;
      margin-bottom: 20px;
      border: none;
      border-radius: 5px;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    }

    input[type="submit"] {
      background-color: rgb(156, 66, 27);
      color: #fff;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    input[type="submit"]:hover {
      background-color: rgb(179, 102, 74);
    }

    @media screen and (max-width: 600px) {
      .container {
        padding: 10px;
      }

      input[type="submit"] {
        padding: 5px 10px;
      }
    }

    h1{
      color: white;
    }

</style>