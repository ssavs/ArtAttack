import axios from "axios";
import { createStore } from "vuex";
import router from '../router/index';
const AAURL = "https://art-attack.onrender.com/";
export default createStore({
  state: {
    users: null,
    user: JSON.parse(localStorage.getItem('user')) || null,
    products: null,
    product: null,
    showSpinner: true,
    message: null,
    addproduct:null,
    addUser:null,
    editproduct:null,
    cart:null

  },
  getters: {
    // getProducts: (state) => state.products,
    // getProduct:(state) =>state.products,
    // getUsers: (state) => state.users,
    // addproduct:(state)=>state.addproduct,
    // deleteproduct:(state)=>state.deleteproduct,
    // addUser:(state)=>state.product,
    // updateUser:(state)=>state.updateproduct,
    // editproduct:(state)=>state.editproduct,
   
  },
  mutations: {
    setUsers(state, values) {
      state.users = values;
    },
    setUser(state, user) {
      state.user = user;
      localStorage.setItem('user',JSON.stringify(user));
    },
    setProducts: (state, products) => (state.products = products),
    setProduct(state, value) {
      state.product = value
    },
    setMessage(state, values) {
      state.message = values;
    },
    setSpinner(state, value) {
      state.showSpinner = value;
    },
     setCart (state,value){
      state.cart = value;
     }
    // addProduct:(state,value) =>(state.value=value),
    // deleteproduct:(state,value) =>(state.value=value),
    // addUser:(state,value) =>(state.value=value),
    // updateUser:(state,value) =>(state.value=value),
    // getProduct:(state,value) =>(state.value=value),
    // editproduct:(state,editproduct)=>state.editproduct=editproduct,
},
  actions: {
    async fetchUsers(context) {
      const res = await axios.get(`${AAURL}users`);
      const { result, err } = await res.data;
      if (result) {
        context.commit("setUsers", result);
      } else {
        context.commit("setMessage", err);
      }
    },

    fetchProducts: async (context) => {
      const response = await axios.get(`${AAURL}products`);
      const { results } = response.data;
      if (results) {
        context.commit("setProducts", results);
        context.commit("setSpinner", false);
      } else {
        context.commit("setSpinner", true);
      }
    },
    fetchProduct: async (context, id) => {
      const response = await axios.get(`${AAURL}product/${id}`);
      const { results } = await response.data;
      if (results) {
        context.commit("setProduct", results[0]);
        context.commit("setSpinner", false);
      } else {
        context.commit("setSpinner", true);
      }
    },
    async addProduct(context, payload){
      fetch(`${AAURL}product`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(payload),
      })
      .then((res) =>res.json())
      .then((data) => {
        console.log(data.msg);
        context.dispatch('fetchProducts')
      })
      .catch((err) => {
        console.log(err);
      });
    },

    async fetchUser({commit}){
    const res = await axios.get(`${AAURL}user`)
    commit('setUser',res.data)
},
    

    async fetchCart (context,id){
      const res = await axios.get(`${AAURL}Cart/${id}`);
      const{err,results} = await res.data;
      if(results){
        console.log(results)
        context.commit('setCart',results);
      } else{
        console.log(err)
        context.commit('setMessage',err);
      }
    },
    async addToCart(context, payload){
      const res = await axios.post(`${AAURL}Cart`, payload)
      const {err,results} = await res.data;
      console.log(res)
      if(results){
        context.commit('setMessage', results);
      } else context.commit('setMessage', err);
    },
    async updateCart(context, payload){
      const res = await axios.post(`${AAURL}Cart`, payload)
      const {err,results} = await res.data;
      console.log(res)
      if(results){
        context.commit('setMessage', results);
      } else context.commit('setMessage', err);
    },
  


    async deleteProduct(context,id){
      const res = await axios.delete(`${AAURL}product/${id}`);
      const { result, err } = await res.data;
      if (result) {
        context.commit("setProducts", result[0]);
        context.dispatch('fetchProducts');
      } else {
        context.commit("setMessage", err);
      
    }},
    async deleteUser(context,id){
      const res = await axios.delete(`${AAURL}user/${id}`);
      const { result, err } = await res.data;
      if (result) {
        context.commit("setUsers", result[0]);
        context.dispatch('fetchUsers');
      } else {
        context.commit("setMessage", err);
      
    }},
    async addUser(context){
      const res = await axios.post(`${AAURL}user/id`);
      const { result, err } = await res.data;
      if (result) {
        context.commit("setUsers", result);
      } else {
        context.commit("setMessage", err);
      
    }},
    async register(context, payload){
      console.log(payload);
      fetch(`https://art-attack.onrender.com/register`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(payload),
      })
      .then((res) =>res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    },

// async Register(context,payload){
// const res = await axios.post(`${AAURL}register`,payload)
// const {msg,err} = await res.data;
// if(msg) {
// context.commit('setMessage',msg);
// }else{
//   context.commit('setMessage',err);
// }
// }
// },

async Login(context, payload) {
  console.log(payload)
  const res = await axios.post(`${AAURL}login`,payload)
  const { err, result } = await res.data;
  console.log(res);
  localStorage.setItem('user',JSON.stringify(result))
  if (result) {
    context.commit("setUser", result)
    router.push('/')
  } else {
    context.commit("setMessage", err);
 
  }
},






    async updateUser(context,{id,user}){
      const res = await axios.put(`${AAURL}user/${id}`,user);
      const { result, err } = await res.data;
      if (result) {
        context.commit("setUsers", result);
      } else {
        context.commit("setMessage", err);
      
    }},
    async updateProduct(context,{id,product}){
      const res = await axios.put(`${AAURL}product/${id}`,product);
      const { result, err } = await res.data;
      if (result) {
        context.commit("setUpdate", result);
      } else {
        context.commit("setMessage ", err);
      
    }},
    
    }
  });
