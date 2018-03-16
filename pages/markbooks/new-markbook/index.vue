<template>
  <div class="create-new-markbook">
      <section class="new-markbook-form">
          <v-container>
   <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>    
          <div style="padding: 20px">   
  <v-form v-model="valid" @submit.prevent="onSave">
    <v-text-field
      label="Title"
      v-model="markbook.title"
      :counter="10"
      required
    ></v-text-field>
    <AppButton type="submit">Save</AppButton>
  </v-form>
          </div>
</v-card>
    </v-flex>
</v-layout>
          </v-container>
      </section>
  </div>
</template>

<script>
import AppControlInput from '@/components/UI/AppController'
import AppButton from '@/components/UI/AppButton'

export default {
    layout: 'main',
    components : {
        AppControlInput : AppControlInput,
        AppButton : AppButton
    },
    data () {
        return {
            markbook: {
                title: ''
            }
        }
    },
    methods : {
    onSave() {
        console.log("Saved")
    }
    }
}
</script>
