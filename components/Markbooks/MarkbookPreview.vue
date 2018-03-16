<template>
  
     <v-flex xs12 md3>
         
      <v-card>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{title}}</h3>
            <div>{{owner}}</div>
          </div>
        </v-card-title>
        <v-card-actions>
            <nuxt-link :to="'/markbooks/'+ id" class="markbook-preview">
          <v-btn prevent flat color="orange">Assignments</v-btn>
           </nuxt-link>
           <nuxt-link :to="'/markbooks/'+ id +'/edit'" class="markbook-preview">
          <v-btn flat color="orange">Edit</v-btn>
           </nuxt-link>
        </v-card-actions>
      </v-card>
 
    </v-flex>

</template>

<script>
export default {
  props: {
      id: {
          type: String,
          required: true
      },
      title: {
          type: String,
          required: true
      },
      owner: {
          type: String,
          required: true
      }
  }
}
</script>


<style scoped>
.markbook-preview {
    text-decoration: none;
}
</style>
