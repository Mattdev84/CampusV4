<template>
<div>
  <v-layout class="maincontent" >
    <v-flex xs12 class="headerbar">
      <div class="nametag">Sarah Kerrigan</div>
      <div class="avatar">
            <v-avatar size="150px">
              <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(4).jpg" >
            </v-avatar>
      </div>
    </v-flex>
  </v-layout>
<v-toolbar>

</v-toolbar>


 <v-container  grid-list-md>
<v-layout row wrap>
    <v-flex xs12 md8>
      <section>
  <v-card class="blue-grey lighten-5">
  <v-toolbar>
    <v-toolbar-title>Enrolments</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat>Link One</v-btn>
      <v-btn flat>Link Two</v-btn>
      <v-btn flat>Link Three</v-btn>
    </v-toolbar-items>
  </v-toolbar>

              <v-data-table
    :headers="headers"
    :items="items"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.calories }}</td>
      <td class="text-xs-right">{{ props.item.fat }}</td>
      <td class="text-xs-right">{{ props.item.carbs }}</td>
      <td class="text-xs-right">{{ props.item.protein }}</td>
      <td class="text-xs-right">{{ props.item.iron }}</td>
    </template>
  </v-data-table>
        </v-card>
      </section>
    </v-flex>

  <v-flex xs12 md4>
<v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Enrolments</h3>
          </div>
        </v-card-title>
 
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
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



 
  <v-container>
  <v-layout>
    <v-flex xs12>
      
    </v-flex>
  </v-layout>
  </v-container>

  </div>
</template>

<script>

export default {
    layout: 'main',
    data () {
      return {
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' }
        ],
        items: [
          {
            value: false,
            name: 'Biology',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%'
          },
          {
            value: false,
            name: 'Chemistry',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%'
          },
          {
            value: false,
            name: 'Physics',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%'
          }
        ]
      }
    }
  }

</script>

<style scoped>
    .maincontent {
        background-color: #E8A87C;
        height: 200px;
    }

    .headerbar {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
    }

    .avatar {
        padding: 10px;
        
        
    }

    .nametag {
        padding: 10px;
            font-size: 36px;
    font-weight: 300;
    }



</style>
