<template>
<div>
    <h1>{{sortkey}}</h1>
            <table>
                <thead>
                    <tr>
                        <th  v-for="(header, i) in headers" :key="i">{{header.title}}</th>
                    </tr>
                </thead>
                <tbody>
            <tr v-for="(enrol,i) in filteredData" :key="i">
              <td>{{enrol.code}}</td><td>{{enrol.title}}</td><td>{{enrol.status}}</td>
            </tr>
            </tbody>
          </table>

        <ul>
            <li v-for="(item,i) in sortOrder" :key=i>{{i}}</li>           
        </ul>
        
          </div>
</template>

<script>
export default {
  data () {
      return {
        
        headers: [
            {title: "Code"},
            {title: "Title"},
            {title: "Status"}
        ]
        ,
      enrols : [
          {
              code: "HIASL",
              title: "History",
              status: "Active"
          },
          {
              code: "CHASL",
              title: "Zhemestry",
              status: "Active"
          },
          {
              code: "PHASL",
              title: "Physics",
              status: "Active"
          }
      ],
      sortkey: "code",
      sortOrder: {}
      }
  },
  created () {
          var soOrder = {}
          this.headers.forEach(function (key) {
          soOrder[key.title]=1    
          })
          this.sortOrder=soOrder
  },
  computed: {

      comptest() {
          return "hello"
      },
      sortOrders (){
          var sortOrder = {}
          this.headers.forEach(function (key) {
          sortOrder[key.title]=1    
          })
            return sortOrder;    
      },
      filteredData () {
          var sortKey = this.sortkey
          var data = this.enrols
          data = data.sort(function (a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) 
        })

         return data
      }
  },
  props: [
      'studentid'
  ],
   methods: {
    sortBy: function (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    }
  }

}
</script>
