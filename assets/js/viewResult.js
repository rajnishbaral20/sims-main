import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";

import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, signInWithEmailAndPassword, updateProfile   } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
 
// import {  } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getFirestore, getDoc, getDocs,doc, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField, query, where } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL  } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-storage.js"
 

//  9.17.1


const firebaseConfig = {
  apiKey: "AIzaSyAxCdh1Ng8Uzf_ta4aNEkAv45MvT3Jb9NQ",
  authDomain: "sims-6296a.firebaseapp.com",
  projectId: "sims-6296a",
  storageBucket: "sims-6296a.appspot.com",
  messagingSenderId: "73136221786",
  appId: "1:73136221786:web:7853fa8e56fdaf3f32f263"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

var studentRollNumber;

var is1Present = false
var is2Present = false
var is3Present = false

const table1 = document.getElementById("show_mark_in_table_1");
const table2 = document.getElementById("show_mark_in_table_2");
const table3 = document.getElementById("show_mark_in_table_3");
const divADT1 = document.getElementById("show_mark_in_table_adt1");
const divADT2 = document.getElementById("show_mark_in_table_adt2");
const divADT3 = document.getElementById("show_mark_in_table_adt3")

studentRollNumber = sessionStorage.getItem('userEmailForResultView');

const querySnapshot1 = await getDocs(collection(db, "students_"+studentRollNumber+"_result_ADT1"));
const querySnapshot2 = await getDocs(collection(db, "students_"+studentRollNumber+"_result_ADT2"));
const querySnapshot3 = await getDocs(collection(db, "students_"+studentRollNumber+"_result_ADT3"));

querySnapshot1.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);

    is1Present = true;

      createAsListForResult1(doc);
  });

  querySnapshot2.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);

    is2Present = true;

      createAsListForResult2(doc);
  });

  querySnapshot3.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);

    is3Present = true;

      createAsListForResult3(doc);
  });

  if (!is1Present) {
    divADT1.style.display = "none"
  }
  if (!is2Present) {
    divADT2.style.display = "none"
  }
  if (!is3Present) {
    divADT3.style.display = "none"
  }


  function createAsListForResult1(doc) {


    const row = document.createElement("tr");
    row.className = 'row';
    row.id = doc.data().studentRollNumber+"_row";

    const td1 = document.createElement('td');
    td1.innerText = doc.data().subject_name;
    
    row.appendChild(td1);

    const td2 = document.createElement('td');
    td2.innerText = doc.data().total_marks;
    row.appendChild(td2);

    const td3 = document.createElement('td');
    td3.innerText = doc.data().obtained_marks;
    row.appendChild(td3);


    table1.appendChild(row);

}



function createAsListForResult2(doc) {


    const row = document.createElement("tr");
    row.className = 'row';
    row.id = doc.data().studentRollNumber+"_row";

    const td1 = document.createElement('td');
    td1.innerText = doc.data().subject_name;
    
    row.appendChild(td1);

    const td2 = document.createElement('td');
    td2.innerText = doc.data().total_marks;
    row.appendChild(td2);

    const td3 = document.createElement('td');
    td3.innerText = doc.data().obtained_marks;
    row.appendChild(td3);


    table2.appendChild(row);

}


function createAsListForResult3(doc) {


    const row = document.createElement("tr");
    row.className = 'row';
    row.id = doc.data().studentRollNumber+"_row";

    const td1 = document.createElement('td');
    td1.innerText = doc.data().subject_name;
    
    row.appendChild(td1);

    const td2 = document.createElement('td');
    td2.innerText = doc.data().total_marks;
    row.appendChild(td2);

    const td3 = document.createElement('td');
    td3.innerText = doc.data().obtained_marks;
    row.appendChild(td3);


    table3.appendChild(row);

}

