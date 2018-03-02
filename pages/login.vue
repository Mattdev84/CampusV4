<template>
    <div class="container">
        <v-flex class="item" xs12 md6 lg3 display-3>
            <v-flex class="mainheader">[Campus]</v-flex>
             <v-form v-model="valid" class="loginform">
    <v-text-field
      label="Name"
      v-model="name"
      :rules="nameRules"
      required
    ></v-text-field>
    <v-text-field
      label="E-mail"
      v-model="email"
      :rules="emailRules"
      required
    ></v-text-field>
    <v-btn depressed color="primary" @click="login">Login</v-btn>
  </v-form>
         </v-flex>
    </div>
</template>

<script>
export default {
    methods: {
        login () {
            console.log("click clicked")
            this.$router.push("/staff")
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
        font-weight: 300;
    }
</style>
