import './js/common'
import $AB from 'jquery'
import 'bootstrap'
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import './css/main.css'
import './sass/main.sass'

window.Vue = require('vue')
import store from './store/store'
import Inputmask from "inputmask";

const _ = require('lodash');
const users = require('./store/users.json');

const app = new Vue({
    store,
    el: '#app',
    data: function() {
        return {
            users,
            item: {name: '',phone: '',birthday: '',role: '',isArchive: false},
            edit: false,
            editIndex: -1
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
      let maskPhone = new Inputmask("+7 (999)-999-9999");
      let maskDate = new Inputmask('##/##/####')

      maskPhone.mask(document.getElementById('phone'));
      maskDate.mask(document.getElementById('birthday'));
    },
	methods: {
		addUser() {
      if(!this.edit)
        {
          this.item.id = this.users.length + 1
          this.users.push(this.item);
    
        } else {
          this.users[this.editIndex] = this.item;
          this.edit = false;
          this.editIndex = -1;
        }
        
        this.saveUsers();

      $('#modal').modal('hide');
      this.item = {name: '',phone: '',birthday: '',role: '',isArchive: false};
		},
		editItem(index) {
    	  this.edit = true;
        this.editIndex = index;
        this.item = this.users[index];
       
      $('#modal').modal('show');

    },
    removeUser(index) {
      // this.edit = true;
      // this.item = this.users[index];
      // this.editIndex = index;
      // this.users.splice(this.item.indexOf(), 1) //через this.item посмотри
      this.users.splice(this.item, 1);
      // this.users.remove(this.item)
      this.saveUsers(); 
      
        // var idx = this.item.indexOf(index);
        // if (idx != -1) {
        //     return this.item.splice(idx, 1);
        // }
        // return false;
    
    },
    saveUsers() {
      const parsed = JSON.stringify(this.users);
      localStorage.setItem('users', parsed);
    },
    editCancel: function(index){
      this.item = {name: '',phone: '',birthday: '',role: '',isArchive: false};
      this.editIndex = -1;
    },
    filterAll() {
      this.users = _.filter(JSON.parse(localStorage.getItem('users')), function (item) {
          return JSON.parse(localStorage.getItem('users'));
        })
    },
    filterDesign() {
      this.users = _.filter(JSON.parse(localStorage.getItem('users')),function (item) {
        return item.role === 'designer'
      })
    },
    filterDeveloper() {
      this.users = _.filter(JSON.parse(localStorage.getItem('users')), function (item) {
          return item.role === 'developer';
        })
    },
    filterManager() {
      this.users = _.filter(JSON.parse(localStorage.getItem('users')), function (item) {
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