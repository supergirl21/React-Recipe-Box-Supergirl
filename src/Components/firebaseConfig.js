// import * as firebase from 'firebase/app';
import firebase from "firebase";
import "firebase/auth";

// const auth = firebase.auth()

var firebaseConfig = {
  apiKey: "AIzaSyBsEg19RsIaCG3jpRjFM1OepeT-eVvhyAQ",
  authDomain: "react-project-2-eac41.firebaseapp.com",
  projectId: "react-project-2-eac41",
  storageBucket: "react-project-2-eac41.appspot.com",
  messagingSenderId: "546966753938",
  appId: "1:546966753938:web:1083002a11dfa495f74c4b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

    firebase.database().ref().set({

      
        recipes: [
        {
          id: 1,
          title: "Welsh Rarebit", 
          ingredients: ["bread","cheese","flour","worcestershire sauce","mustard"]
          }, 
          {  
            id: 2,
            title: "Bara Brith", 
            ingredients: ["flour","eggs","brown sugar","mixed fruit","cinnamon"]
            
          }, 
          {
            id: 3,
            title: "Scones", 
            ingredients: ["flour","eggs","caster sugar","milk","sulatanas","baking powder"]
          }
        ]
    
    });
   
  
  export const database = firebase.database();
  // export const auth = firebase.auth();