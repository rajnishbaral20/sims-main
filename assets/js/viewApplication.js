import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js";

import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, signInWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";

import { } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField, query, where } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js";

var firebaseConfig = {
    apiKey: "AIzaSyAxCdh1Ng8Uzf_ta4aNEkAv45MvT3Jb9NQ",
    authDomain: "sims-6296a.firebaseapp.com",
    projectId: "sims-6296a",
    storageBucket: "sims-6296a.appspot.com",
    messagingSenderId: "73136221786",
    appId: "1:73136221786:web:7853fa8e56fdaf3f32f263"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
  
const db = getFirestore();
var id;

const uploadDate = document.getElementById("application_date");
const name = document.getElementById("name_of_studnet");
const title= document.getElementById("application_title");
const body = document.getElementById("application_content");



getAProfileDetails();


async function getAProfileDetails() {

    id = sessionStorage.getItem('applicationId');

    const ref = doc(db, "attendence_101", id);

    const documentSnap = await getDoc(ref);

    console.log('I am outside');

    if(documentSnap.exists()) {
        console.log('I am inside');
        uploadDate.innerText = documentSnap.data().date;
        name.innerText = documentSnap.data().name_of_student;
        title.innerText = documentSnap.data().title;
        body.innerText = documentSnap.data().application_body;

    }

}
