import './js/common'
import $ from 'jquery'
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import './css/main.css'
import './sass/main.sass'



// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'vue'
// import Vue from 'vue'

window.Vue = require('vue')
import store from './store/store'

// Vue.component('user-component', require('./components/User.vue').default)

const _ = require('lodash');
const users =  require('./store/users.json')

const app = new Vue({
    store,
    el: '#app',
    data: function() {
        return {
            items: users,
            item: {name: '',phone: '',birthday: '',role: '',archive: ''},
            edit: false,
            editIndex:-1,
            name: '',
            show: false
        }
        },
    mounted: function() {
        // fetch('http://localhost:3000/users')
        // .then((res) => {
        // if(200 <= res.status && res.status < 300) {
        //     return res;
        // }
        // throw new Error(response.statusText);
        // })
        // .then(function(response) {
        // return response.json();
        // })
        // .then(function(json) {
        // json.forEach(user => {
        //     users.push(user)
        // });
        // })
        // .catch((error) => {console.log(error)})

        // var imp = new Inputmask("+7 (999) 999-9999");
        // imp.mask(this.$refs.field);
        // var imd = new Inputmask("##/##/####");
        // imd.mask(this.$refs.datemask);
    },
	methods: {
		addItem: function(e) {
      
      if(!this.edit)
        {
        //   fetch('http://localhost:3000/users', {
        //     method: 'POST',
        //     credentials: 'same-origin',
        //     headers: {
        //       'Accept': 'application/json',
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(this.item),
        //   })
        //   .then((res) => {
        //     if(200 <= res.status && res.status < 300) {
        //       return res;
        //     }
        //     throw new Error(response.statusText);
        //   })
        //   .then((response) => {
        //     return response.json()
        //   })
        //   .then((newUser) => {
        //     users.push(newUser)
        //   })
        //   .then(() => {
        //     console.log('Пользователь добавлен');
        //   })
        //   .catch((error) => {console.log(error)})
        } 
      else 
        {
          this.items[this.editIndex] = this.item;
          this.edit = false;
          this.editIndex = -1;
        }
 
      $('#modal').modal('hide');
      e.preventDefault();

		},
		editItem: function(index) {
    	this.edit = true;
        this.editIndex = index;
        this.item = this.items[index];

      $('#modal').modal('show');
    },
    updateUser: function(){
    //   let url = `http://localhost:3000/users/${this.item.id}`
    //   fetch(url, {
    //       method: 'PATCH',
    //       credentials: 'same-origin',
    //       headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //         'API-Key': 'secret'
    //       },
    //       body: JSON.stringify(this.item),
    //     })
    //     .then((res) => {
    //       if(200 <= res.status && res.status < 300) {
    //         return res;
    //       }
    //       throw new Error(response.statusText);
    //     })
    //     .then((response) => {
    //       return response.json()
    //     })
    //     .then(() => {
    //       console.log('Данные пользователя изменены');
    //     })
    //     .catch((error) => {console.log(error)})
    },
    removeUser: function(){
    //   let url = `http://localhost:3000/users/${this.item.id}`
    //   fetch(url, {
    //     method: 'DELETE'
    //   })
    //   .then((res) => {
    //     if(200 <= res.status && res.status < 300) {
    //       return res;
    //     }
    //     throw new Error(response.statusText);
    //   })
    //   .then((response) => {
    //     return response.json()
    //   })
    //   .then(() => {
    //     console.log('Пользователь удалён');
    //   })
    //   .catch((error) => {console.log(error)})
    },
    editCancel: function(index){
      this.item = {name: '',phone: '',birthday: '',role: '',archive: ''};
      this.editIndex = -1;
    },
    filterAll() {
      this.items = _.filter(users, function (item) {
          return users;
        })
    },
    filterDesign() {
      this.items = _.filter(users, function (item) {
        return item.role === 'designer';
      })
    },
    filterDeveloper() {
      this.items = _.filter(users, function (item) {
          return item.role === 'developer';
        })
    },
    filterManager() {
      this.items = _.filter(users, function (item) {
          return item.role === 'manager';
        })
    },
    sortByName() {
      this.items = _.sortBy(this.items, ['name']);
    },
    sortByBDate() {
      this.items = _.sortBy(this.items, ['birthday']);
    },
    sortByID() {
        this.items = _.sortBy(this.items, ['id']);
    },
  },
  props: {
    user: Object
  }
});