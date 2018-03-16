<template>
  <div>
      <h2>My Markbooks</h2>
    <v-layout wrap justify-space-around>
      <mark-book-preview v-for="markbook in markbooklist" :key="markbook.markbook_id"
      :id="markbook.markbook_id"
      :title="markbook.title"
      :owner="markbook.owner_id"
      ></mark-book-preview>
  </v-layout>
  </div>
</template>

<script>

import MarkBookPreview from '@/components/Markbooks/MarkbookPreview'
export default {
    props: {
      markbooklist : {
        type: Array
      }
    },
    components : {
    MarkBookPreview : MarkBookPreview
  },
}
</script>
