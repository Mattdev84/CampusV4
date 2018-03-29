<template>
<section>
  <v-btn @click="$router.push('/markbooks/new-markbook')">Create Markbook</v-btn>
  <mark-book-list :markbooklist="markbooks"></mark-book-list>
</section>
</template>

<script>
import MarkBookList from '@/components/Markbooks/MarkbookList'
import db from '@/components/firebaseInit'

export default {
  layout: 'main',
  components: {
    MarkBookList : MarkBookList
  },
  data () {
    return{
      markbooks : []
    }
  },
  
  created () {
    this.markbooks = this.$store.getters.myMarkbooks
    // db.collection('markbooks').where("owner_id","==","MP").get().then(
    //   querySnapShot => {
    //     querySnapShot.forEach(doc=> {
    //      const data = {
    //       'id': doc.id,
    //       'markbook_id': doc.data().markbook_id,
    //       'title' : doc.data().title,
    //       'owner_id' : doc.data().owner_id,
    //       'acyear' : doc.data().acyear,
    //       'class' : doc.data().class
    //      }
    //      this.markbooks.push(data)
    //      }
    //     )
    //       })
        }
      }
  


</script>
