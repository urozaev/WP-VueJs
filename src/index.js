import './js/common'
import $AB from 'jquery'
import 'bootstrap'
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import './css/main.css'
import './sass/main.sass'



window.Vue = require('vue')
import store from './store/store'


const _ = require('lodash');
const users =  require('./store/users.json')

const app = new Vue({
    store,
    el: '#app',
    data: function() {
        return {
            users,
            item: {name: '',phone: '',birthday: '',role: '',archive: ''},
            edit: false,
            editIndex:-1,
        }
        },
    mounted: function() {
      if (localStorage.getItem('users')) {
        try {
          this.users = JSON.parse(localStorage.getItem('users'));
        } catch(e) {
          localStorage.removeItem('users');
        }
      }
    },
	methods: {
		addUser(e) {
      
      if(!this.edit)
        {
          return;
        } 
      this.users[this.editIndex] = this.item;
      this.edit = false;
      this.editIndex = -1;
      this.item = {};
      this.users.push(this.item);
      console.log(this.edit)
      
      this.saveUsers();
      
 
      $('#modal').modal('hide');
      e.preventDefault();
		},
		editItem(index) {
    	this.edit = true;
        this.editIndex = index;
        this.item = this.users[index];
       

      $('#modal').modal('show');
    },
    removeUser(index) {
      this.users.splice(x, 1);
      this.saveCats();
    },
    saveUsers() {
      const parsed = JSON.stringify(this.users);
      localStorage.setItem('users', parsed);
    },
    editCancel: function(index){
      this.item = {name: '',phone: '',birthday: '',role: '',archive: ''};
      this.editIndex = -1;
    },
    filterAll() {
      this.users = _.filter(users, function (item) {
          return users;
        })
    },
    filterDesign() {
      this.users = _.filter(users, function (item) {
        return item.role === 'designer';
      })
    },
    filterDeveloper() {
      this.users = _.filter(users, function (item) {
          return item.role === 'developer';
        })
    },
    filterManager() {
      this.users = _.filter(users, function (item) {
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