const axios = require('axios');
import Vue from 'vue'
Vue.component('user-form',{
    template : require('../views/user-form.html'),
    data: function ()  {
        return{
          user: [],
          overlayShow: false,
      }
    },
    computed: {
      validation() {
        return this.user['FIRSTNAME'].length > 3 && this.user['FIRSTNAME'].length < 15
      },
    },
    methods:{
      onSubmit() {
        // SHOW OVERLAY
        this.overlayShow = true;
        axios.post('./api/user.php',{
          user : this.user,
        })
        setTimeout(() => { 
          this.overlayShow = false; 
        
        }, 750);
      },
    },
  mounted () {
    this.overlayShow=false; 
    // AXIOS GET USER INFOS
    axios
      .get('/api/user.php')
      .then(response => (this.user = response.data));
  }})