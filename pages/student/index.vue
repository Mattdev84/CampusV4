<template>
 <section>
    <v-layout row wrap>
      <v-flex xs12 class="TitleBar">
          Hello there
      </v-flex>
      <v-flex xs12 class="SubBar">
          Hello there
      </v-flex>
    </v-layout>
  
  <v-container grid-list-md>
    <v-layout row wrap>

      <v-flex xs12 md8>
        <v-card class="blue-grey lighten-5" >
        <v-toolbar>
            <v-toolbar-title>Enrolments</v-toolbar-title>
            <!-- <v-spacer></v-spacer>
            <v-toolbar-items>
            <v-btn flat>Qualifications</v-btn>
            <v-btn flat>Additional</v-btn>
            </v-toolbar-items> -->
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
      </v-flex>

    <v-flex xs12 md4>
        <v-card class="blue-grey lighten-5">
        <v-toolbar>
            <v-toolbar-title>Timetable</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>

            </v-toolbar-items>
        </v-toolbar>
                <section class="Enrolments">

        </section>
        </v-card>
    </v-flex>



    </v-layout>
  </v-container>


  
  </section>

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

<style>
    .TitleBar {
        height: 200px;
        background-color: #E8A87C;
    }

    .SubBar {
        height: 50px;
        background-color: white;
        box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12);
    }

    .Enrolments {
        height: 10px;
        background-color: white;
    }

</style>
