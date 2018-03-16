import Vuex from 'vuex'
import db from '@/components/firebaseInit'
import firebase from 'firebase'

const createStore = () => {
    console.log('store called.')
    return new Vuex.Store({
        state: {
            first_name : null
        },
        mustations: {},
        actions: {
            login(vuexContext, payload)
            {
                firebase.auth().signInWithEmailAndPassword(payload.email,payload.password)
                .then(
                user => {
                    console.log(`logged in as: ${user.email}`);
                    console.log(user.uid);
                    let userinfo = db.collection("users").doc(user.uid)

                    userinfo.get().then(data => console.log(data.data()))
                    //this.$router.push("/staff")                    
                },
                err => {
                    alert(err.message)
                }
            )
            }
        },
        getters: {
            myName(state) {
                return "Hello";
            }
        }
    })
}

export default createStore