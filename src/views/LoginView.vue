<template>
    <div class="login">
        <div class="container">
    <form action="" method="">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required>
    
      <label for="password">Password</label>
      <input type="password" id="password" name="password" required>
      <input type="submit" value="Login">
      </form>
        
<div class="password">
      <a href="">Forgot Password ?</a>
        </div>
<router-link to="/register"><a class="btn">Signup</a></router-link>
        </div>
        </div>
    </template>
    
    <script>
    
        export default {
            
        }
    </script>
    
    <style  scoped>
    .login{
        /* background-color: #f7f7f2; */
            padding-top:10rem;
            padding-bottom: 2rem;
    }
    
    .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          background-color:#c49e6893;
          border-radius: 5px;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        }
    
        label {
          display: block;
          margin-bottom: 10px;
          font-weight: bold;
        }
    
        input[type="text"],
        input[type="email"],
        input[type="password"],
        select {
          width: 100%;
          padding: 10px;
          margin-bottom: 20px;
          border: none;
          border-radius: 5px;
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
        }
    
        input[type="submit"] {
          background-color: #a3299b;
          color: #ffffff;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
    
        input[type="submit"]:hover {
          background-color: #a548b2;
        }
    
        @media screen and (max-width: 600px) {
          .container {
            padding: 10px;
          }
    
          input[type="submit"] {
            padding: 5px 10px;
          }
        }
    
    
.password{
  font-weight: bolder;
  float: left;
  margin-top: 10%;
  text-decoration: none;
  font-size: large;
}

    a{
    color: black;
    }
    
    .btn{
      border-radius: 5px;
      color: white;
      background-color: #a3299b;
      transition: all 0.5s;
      width: 15%;
      text-decoration: none;
      margin-top: 10%;
      margin-left: 60%;
    
    }

    </style>