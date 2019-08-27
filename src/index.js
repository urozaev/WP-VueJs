import './js/common'
import $AB from 'jquery'
import 'bootstrap'
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import './css/main.css'
import './sass/main.sass'



window.Vue = require('vue')
import store from './store/store'


const _ = require('lodash');
const users = require('./store/users.json');
// const usersList =  require('./store/users.json')
// const strUser = JSON.stringify(usersList)
// const users = localStorage.setItem('usersList', strUser)

const app = new Vue({
    store,
    el: '#app',
    data: function() {
        return {
            // users: JSON.parse(localStorage.getItem('usersList')),
            users,
            item: {name: '',phone: '',birthday: '',role: '',archive: ''},
            edit: false,
            editIndex: -1,
            // index: 1,
            newUser: null
        }
        },
    mounted: function() {
      // if (localStorage.getItem('usersList')) {
        if (localStorage.getItem('users')) {
        try {
          // this.users = JSON.parse(localStorage.getItem('usersList'));
          this.users = JSON.parse(localStorage.getItem('users'));
        } catch(e) {
          // localStorage.removeItem('usersList');
          localStorage.removeItem('users');
        }
      }
    },
	methods: {
		addUser() {
      if(!this.edit)
        {
          // this.edit = true;
          // this.editIndex = index;
          // this.item = this.users[index];
          this.item.id = this.users.length + 1
          this.users.push(this.item);
    
        } else {
          this.users[this.editIndex] = this.item;
          this.edit = false;
          this.editIndex = -1;
        }
        
        this.saveUsers();
      $('#modal').modal('hide');
      this.item = {name: '',phone: '',birthday: '',role: '',archive: ''};

      
		},
		editItem(index) {
    	this.edit = true;
        this.editIndex = index;
        this.item = this.users[index];
       

      $('#modal').modal('show');

    },
    removeUser(index) {
      this.editIndex = index;
      this.users.splice(index, 1);
      this.saveUsers();
    },
    saveUsers() {
      const parsed = JSON.stringify(this.users);
      // localStorage.setItem('usersList', parsed);
      localStorage.setItem('users', parsed);
    },
    editCancel: function(index){
      this.item = {name: '',phone: '',birthday: '',role: '',archive: ''};
      this.editIndex = -1;
    },
    filterAll() {
      this.users = _.filter(users, function (item) {
          return JSON.parse(localStorage.getItem('users'));
        })
    },
    filterDesign() {
      // this.users = _.filter(this.users, function (item) {
      //   if (this.users.length === 0){
      //     function f() {
      //       users = JSON.parse(localStorage.getItem('users'))
      //       _.filter(users, function(){
      //         return item.role === 'designer'
      //       })
      //     }
      //   } else {
      //     return item.role === 'designer'
      //   }
      // })
      let f = this.users.length
      console.log(f -1)
    },
    filterDeveloper() {
      this.users = _.filter(this.users, function (item) {
          return item.role === 'developer';
        })
    },
    filterManager() {
      this.users = _.filter(this.users, function (item) {
          return item.role === 'manager';
        })
    },
    sortByName() {
      this.users = _.sortBy(this.users, ['name']);
    },
    sortByBDate() {
      this.users = _.sortBy(this.users, ['birthday']);
    },
    sortByID() {
        this.users = _.sortBy(this.users, ['id']);
    },
  },
  props: {
    user: Object
  }
});