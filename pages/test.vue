<template>
<div >
<div id="topcontent">
<div id="banner">
            <div style="height: 200px;">Banner</div>
<v-toolbar>

</v-toolbar>            
        </div>
</div>

<div id="mainContent">
    <div id="leftContent">
<div id="content">
        
        <div id="enrolment">
              <v-card class="blue-grey lighten-5">
  <v-toolbar>
    <v-toolbar-title >Enrolments</v-toolbar-title>
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
    item-key="name"
    disable-initial-sort=true
    expand
  >
    <template slot="items" slot-scope="props">
      <tr @click="props.expanded = !props.expanded, props.item.selected=!props.item.selected" :class="{itemSelected: props.item.selected}">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.year }}</td>
        <td class="text-xs-right">{{ props.item.fat }}</td>
        <td class="text-xs-right">{{ props.item.carbs }}</td>
        <td class="text-xs-right">{{ props.item.protein }}</td>
        <td class="text-xs-right">{{ props.item.iron }}</td>
      </tr>
    </template>

    <template slot="expand" slot-scope="props">
      <v-card flat id="excard">

<v-data-table
    :headers="headers"
    :items="props.item.groupsc.items"
    hide-actions
    item-key="name"
    dark
    class="subtable, pink lighten-2"
  >

<template slot="items" slot-scope="props" id="all">
      <tr>
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.year }}</td>
        <td class="text-xs-right">{{ props.item.fat }}</td>
        <td class="text-xs-right">{{ props.item.carbs }}</td>
        <td class="text-xs-right">{{ props.item.protein }}</td>
        <td class="text-xs-right">{{ props.item.iron }}</td>
      </tr>
    </template>

</v-data-table>
      </v-card>
    </template>

  </v-data-table>



        </v-card>
        </div>

        


        <div id="notes">
          <app-component :studentid="studentid"></app-component>
        </div>

        <div id="deficit">Study Deficit</div>
        
    </div>        
    </div>
    <div id="rightContent" class="hidden-xs-only">
                <div id="timetable"><v-card class="blue-grey lighten-5">
        <v-toolbar>
            <v-toolbar-title>Timetable</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>

            </v-toolbar-items>
        </v-toolbar>
 <v-expansion-panel expand>
    <v-expansion-panel-content v-for="(item,i) in 5" :key="i" :value="item === 2">
      <div slot="header">Item</div>
      <v-card>
        <v-card-text class="grey lighten-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
        </v-card></div>
        <div id="attendance">Attendance</div></div>
</div>

     <ul>
       <li v-for="(item,i) in rowsPerPage" :key=i :value=item>{{item.value}}</li>
     </ul>

</div>
</template>

<script>

import enrolement from '@/components/learner/enrolments.vue'

export default {
  layout: "main",
  components : {
    'app-component' : enrolement
  },
  data () {
      return {
        studentid: "9870090",
        rowsPerPageItems: [4, 8, 12],
      pagination: {
        rowsPerPage: 4
      },
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Year', value: 'year', sortable: false },
          { text: 'Fat (g)', value: 'fat', sortable: false },
          { text: 'Carbs (g)', value: 'carbs', sortable: false },
          { text: 'Protein (g)', value: 'protein', sortable: false },
          { text: 'Iron (%)', value: 'iron', sortable: false }
        ],
        items: [
          {
            selected: false,
            value: false,
            name: 'Biology',
            year: "2018-20",
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
            groupsc: { items: [
            {
                value: false,
                name: 'BIASLA',
                year: "2018-19",
                fat: 6.0,
                carbs: 24,
                protein: 4.0,
                iron: '1%'
            },
            {
            value: false,
            name: 'BIASLB',
            year: "2019-20",
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%'
          }
            
            ]}
          },
          {
            value: false,
            name: 'Chemistry',
            year: "2018-20",
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
            groupsc: { items: [
            {
                value: false,
                name: 'CHASLA',
                year: 159,
                fat: 6.0,
                carbs: 24,
                protein: 4.0,
                iron: '1%'
            },
            {
            value: false,
            name: 'CHASLB',
            year: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%'
          },
          {
            value: false,
            name: 'CHASLC',
            year: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%'
          }
            
            ]}
          },
          {
            value: false,
            name: 'Physics',
            year: "2018-20",
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
            groupsc: { items: [
            {
                value: false,
                name: 'PHASLA',
                year: 159,
                fat: 6.0,
                carbs: 24,
                protein: 4.0,
                iron: '1%'
            },
            {
            value: false,
            name: 'PHASLB',
            year: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%'
          },
          {
            value: false,
            name: 'PHASLC',
            year: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%'
          }
            
            ]}
          }
        ]
      }
    }
}
</script>

<style scoped>

#all th tr {
  color: red !important;
}

#mainContent {

        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-areas:
        "L L L L L L";
        padding: 10px;
         grid-gap: 10px;
    }

@media screen and (min-width: 760px){
#mainContent {

        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-areas:
        "L L L L R R";
        padding: 10px;
         grid-gap: 10px;
    }
}
    #content {

        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(6, minmax(100px, auto));
        grid-gap: 10px;
        grid-template-areas:
        "E E E E E E E E E E E E"
        "T T T T T T T T T T T T"
        "D D D D D D D D D D D D"
        "N N N N N N N N N N N N";
    }

@media screen and (min-width: 760px){
    #content {
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(6, minmax(100px, auto));
        grid-gap: 10px;
        grid-template-areas:
        "E E E E E E E E E E E E"
        "D D D D N N N N N N N N";
        
    }
}
    #content div{


    }

    #leftContent {
        grid-area: L;
    }

    #rightContent {
        grid-area: R;
    }

    #content div:nth-child(even){
    }

    #banner{

    }

    #attendance {
        grid-area: A;
        background-color: slategrey;
    }

    #enrolment{
        grid-area: E;
       
    }

    #timetable{
        grid-area: T;
        background-color: lightblue;
        
    }

    #notes{
        grid-area: N
    }

    #deficit{
        grid-area: D;
        background-color: khaki;
    }

  .itemSelected:hover{
    background-color: #E0E0E0 !important;
  }

  .itemSelected {
    background-color: #E0E0E0 !important;
    
  }

  .subtable tr {
    background-color:#FAFAFA;

    }



  .subtable tr:first-child {
    box-shadow: inset 0px 11px 8px -10px #CCC;

    }

      .subtable tr:last-child {
    box-shadow: inset 0px -11px 8px -10px #CCC; 

    }

  #excard, tr {
    color: red !important;
  }

</style>
