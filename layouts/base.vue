<template>
  <v-app>
     <template>
         somedata   
        <nuxt />
    </template>
 </v-app>
</template>

<script>
  export default {
      middleware: ['auth'],
      created () {
          console.log("base called")
      }
  }
</script>

