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



const querySnapshot = await getDocs(collection(db, "attendence_101"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  createAsListForStudent(doc);

});


function createAsListForStudent(doc) {
    const table = document.getElementById("application_table");

    const row = document.createElement("tr");
    row.className = 'row';
    row.id = doc.data().roll_number;

    const td1 = document.createElement('td');
    td1.innerText = doc.data().date;
    
    row.appendChild(td1);

    const td2 = document.createElement('td');
    td2.innerText = doc.data().name_of_student;
    row.appendChild(td2);

    const td3 = document.createElement('td');
    td3.innerText = doc.data().title;
    row.appendChild(td3);

    const td4 = document.createElement('td');
    td4.innerText = doc.data().faculty;
    row.appendChild(td4);

    const td6 = document.createElement('td');
    td6.innerText = doc.data().semester;
    row.appendChild(td6);

    const td5 = document.createElement('td');
    
    const button = document.createElement('button');
    button.type = 'submit';
    button.innerText = "View Application"
    button.id = doc.data().roll_number;
    button.onclick = function () {
        sessionStorage.setItem('applicationId', doc.id);
        window.open("./ViewApplication.html", "_top");
    };



    td5.appendChild(button);

    row.appendChild(td5);

    

    table.appendChild(row)



}