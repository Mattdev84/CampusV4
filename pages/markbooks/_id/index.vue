<template>
<v-container>
    
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media src="/static/doc-images/cards/desert.jpg" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{title}}</h3>
            <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>

import db from '@/components/firebaseInit'

export default {
  layout: "main",
  data () {
      return {
      markbook_id: null,
      title: null,
      ownner_id: null,
      acyear: null,
      class: null
      }
  },

created () {
    console.log('$route')
    this.fetchData();
},
methods: {
    fetchData() {
        console.log("hello from the route")
        db.collection('markbooks').where('markbook_id', '==', this.$route.params.id).get().then(
       querySnapShot => {
            querySnapShot.forEach(doc => {
                
                this.title = doc.data().title                
            })
       }
    )

    }
}


}
</script>

<style>

</style>
