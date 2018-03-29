<template>
<v-container>
    <v-layout>
        <v-flex xs12 md6 offset-md3>
            <v-card>
                   <v-card-title>
                      <div class="headline">Create User</div>
                    </v-card-title>
                    <v-card-text>
    <v-form v-model="valid" ref="form" lazy-validation>
        <v-container grid-list-md>
    <v-layout row wrap>
        <v-flex xs12 sm6>
    <v-text-field
      label="First Name"
      v-model="firstName"
      :rules="nameRules"
      :counter="10"
      required
    ></v-text-field>
        </v-flex>
    <v-flex xs12 sm6>
    <v-text-field
      label="Last Name"
      v-model="lastName"
      :rules="nameRules"
      :counter="10"
      required
    ></v-text-field>
        </v-flex>
    <v-flex xs12>
        <v-text-field
      label="E-mail"
      v-model="email"
      :rules="emailRules"
      required
    ></v-text-field>

    </v-flex>
        <v-flex xs12 sm6>
    <v-text-field
      label="Password"
      v-model="password"
      :counter="8"
      type='password'
      required
      min="8"
    ></v-text-field>
        </v-flex>

    <v-flex xs12 sm6>
    <v-text-field
      label="Confirm Password"
      v-model="confirmPassword"
      :rules="[passwordsMatch]"
      type='password'
      :counter="8"
      min="8"
      required
    ></v-text-field>
        </v-flex>
    <v-flex xs6> 

    <v-select
      label="Role"
      v-model="select"
      :items="roles"
      :rules="[v => !!v || 'Role is required']"
      required
    ></v-select>
    
    </v-flex>
    </v-layout>
        </v-container>
    
    <v-btn
      @click="submit"
      :disabled="!valid"
    >
      submit
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
  </v-card-text>
            </v-card>
        </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
    layout: 'main',
     data: () => ({
      valid: true,
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        this.passwordsMatch
      ],
      select: null,
      roles: [
        'Staff',
        'Student'
      ],
      checkbox: false
    }),
    computed: { 
      passwordsMatch () { return this.password !== this.confirmPassword ? 'Passwords do not match' : true} //function () {return this.password===this.confirmPassword ? true : false}
    }
    ,
    watch: {
      //passwordsMatch () { return this.password !== this.confirmPassword ? 'Passwords do not match' : true} //function () {return this.password===this.confirmPassword ? true : false}
    },
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          let userInfo = {
            firstName : this.firstName,
            lastName : this.lastName,
            password : this.password,
            email : this.email,
            role : this.select
          }
          this.$store.dispatch('createUser', userInfo)

        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
}

</script>

<style>

</style>
