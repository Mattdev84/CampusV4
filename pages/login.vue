<template>
    <div class="container">
        <v-flex class="item" xs12 sm10 md8 md-offset2 lg6 lg-offset3 xl4 display-3>
            <v-flex class="mainheader">[Campus]</v-flex>
             <v-form v-model="valid" class="loginform">
    <v-text-field
      label="Email"
      v-model="email"
      required
    ></v-text-field>
    <v-text-field
      label="Password"
      v-model="password"
      hint="At least 8 characters"
      type="Password"
      required
    ></v-text-field>
    <v-btn depressed color="primary" @click="login">Login</v-btn>
  </v-form>
         </v-flex>


    </div>
</template>

<script>
import axios from 'axios'
import db from '@/components/firebaseInit'
import firebase from 'firebase'

export default {
    
    data () { 
        return {
        email: '',
        password: ''
        }
    },
    // created () {
    //     firebase.auth().currentUser.getIdToken().then(token =>
    //         axios.get('https://firestore.googleapis.com/v1beta1/projects/campus-prod1/databases/(default)/documents/markbooks?auth='+token).then(
    //         data => console.log(data)
    //         ).catch(err => {
    //         console .log(err)
    //         })      
    //     )
       
    // },
    methods: {
        login () {
            let logindata = {
                email: this.email,
                password: this.password
            }
            this.$store.dispatch('login', logindata)
        }
    }
}

</script>

<style>
    .container {
        display: flex;
        height: 100%;
        width: 100%;
        align-items: center; 
        align-content: center;
        justify-content: center;
        padding: 0px;
    }

    .item {
        flex-grow: 1;
        padding: 10px;
        

    }

    .loginform {
        background-color: white;
        padding: 10px;
        box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
    }

    .mainheader{
        text-align: center;
        color: #314743;
        font-weight: 300;
    }
</style>
