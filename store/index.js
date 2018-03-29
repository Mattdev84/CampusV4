import Vuex from 'vuex'
import db from '@/components/firebaseInit'
import firebase from 'firebase'

const createStore = () => {
    console.log('store called.')
    return new Vuex.Store({
        state: {
            first_name : null,
            token : null,
            auth: false,
            markbooks: null
        },
        mutations: {
            setUser(state, payload)
            {
                state.first_name = payload.first_name
                state.auth = true
            },
            setMarkbooks(state, payload)
            {
                state.markbooks = payload
            },
            test(state, payload)
            {
                console.log("Test is called")
            },
            setToken(state, token) {
                state.token = token
            },
            clearToken(state){
                state.token = null
            }
        },
        actions: {
            // nuxtServerInit(vuexContext, context){

            // },


            autoLogin(vuexContext){
                return new Promise((resolve, reject) => {
                    console.log("promise entererd")
                    firebase.auth().onAuthStateChanged(user=> {
                        // let idToken = user.getIdToken()    
                        // console.log(idToken)
                        if(user!=null && user!=undefined)
                        {
                            let userinfo = db.collection("users").doc(user.uid)
                            userinfo.get().then(data => { 
                                vuexContext.commit('setUser', data.data())
                                }                                
                            ).then((data)=>{
                            
                            let myMarkbooks = []    
                            let markbooks = db.collection('markbooks').where("owner_id","==",user.uid).get().then(
                                querySnapShot => {
                                  querySnapShot.forEach(doc=> {
                                        console.log(doc)
                                        console.log('markbooks called')
                                   const data = {
                                    'id': doc.id,
                                    'markbook_id': doc.data().markbook_id,
                                    'title' : doc.data().title,
                                    'owner_id' : doc.data().owner_id,
                                    'acyear' : doc.data().acyear,
                                    'class' : doc.data().class
                                   }
                                   myMarkbooks.push(data)
                                   }
                                  )
                                  if(myMarkbooks != undefined)
                                  {
                                    vuexContext.commit('setMarkbooks', myMarkbooks)
                                  }
                                    console.log("resolve call")
                                  resolve()
                                    }                                
                                )   

                            }).catch(err => console.log("error message: "+err))
                            }
                            else{
                            reject()
                            }
                        }
                        )
                })
            
            }

            ,
            login(vuexContext, payload)
            {
                firebase.auth().signInWithEmailAndPassword(payload.email,payload.password)
                .then(
                user => {
                    console.log(user);
                    let userinfo = db.collection("users").doc(user.uid)
                    userinfo.get().then(data => { 
                        vuexContext.commit('setUser', data.data())
                        let myMarkbooks = []    
                        let markbooks = db.collection('markbooks').where("owner_id","==",user.uid).get().then(
                            querySnapShot => {
                              querySnapShot.forEach(doc=> {
                                    console.log(doc)
                                    console.log('markbooks called')
                               const data = {
                                'id': doc.id,
                                'markbook_id': doc.data().markbook_id,
                                'title' : doc.data().title,
                                'owner_id' : doc.data().owner_id,
                                'acyear' : doc.data().acyear,
                                'class' : doc.data().class
                               }
                               myMarkbooks.push(data)
                               }
                              )
                              if(myMarkbooks != undefined)
                              {
                                vuexContext.commit('setMarkbooks', myMarkbooks)
                              }
                                console.log("resolve call")
                              resolve()
                                }                                
                            )   
                        this.$router.push("/staff") 
                        }
                    )
                },
                err => {
                    alert(err.message)
                }
            )
            },
            fbStatus(vuexContext){
                firebase.auth().onAuthStateChanged((user) => {
                    console.log(user)
                    console.log("after")
                })
                var user = firebase.auth().currentUser;
                if (user) {
                console.log(user)
                } else {
                console.log("no User")
                }               
            },
            createUser(vuexContext, payload)
            {
                var config = {
                    apiKey: "AIzaSyBCIVnpNW9wf55CtFWCAbfhDU0-5mbX62Y",
                    authDomain: "campus-prod1.firebaseapp.com",
                    databaseURL: "https://campus-prod1.firebaseio.com",
                    projectId: "campus-prod1",
                    storageBucket: "campus-prod1.appspot.com",
                    messagingSenderId: "953761877089"
                  };

                var authApp = firebase.initializeApp({
                        apiKey: "AIzaSyBCIVnpNW9wf55CtFWCAbfhDU0-5mbX62Y",
                        authDomain: "campus-prod1.firebaseapp.com",
                        databaseURL: "https://campus-prod1.firebaseio.com",
                        projectId: "campus-prod1",
                        storageBucket: "campus-prod1.appspot.com",
                        messagingSenderId: "953761877089"
                  }, 'authApp');
                  var detachedAuth = authApp.auth();
                  
                  detachedAuth.createUserWithEmailAndPassword(payload.email,payload.password)
                    .then((user) => console.log(user))
                    .catch(err => console.log(err))

                authApp.delete()
            }
        },
        getters: {
            myName(state) {
                return "Hello";
            },
            isAuthenticated(state){
                return state.auth
            },
            myMarkbooks(state){
                return state.markbooks
            }
        }
    })
}

export default createStore