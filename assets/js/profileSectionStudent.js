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
  
const db = getFirestore(app);
var email;
var mainCollection;
var rollNumberMain;

const profileName = document.getElementById("profile_name");
const studentId = document.getElementById("id_number");
const studentFaculty = document.getElementById("student_faculty");
const studentProfileImage = document.getElementById("profile_image");
const rollNumber = document.getElementById("roll_number");
const semester = document.getElementById("semester");
const gender = document.getElementById("gender");
const dateOfBirth = document.getElementById("date_of_birth");



getAProfileDetails();


async function getAProfileDetails() {

    email = sessionStorage.getItem('profileClickEmail');
    mainCollection = sessionStorage.getItem('profileCollectionName');
    rollNumberMain = sessionStorage.getItem('profileRollNumber');

    const ref = doc(db, mainCollection, rollNumberMain);

    const documentSnap = await getDoc(ref);


    if(documentSnap.exists()) {
        profileName.innerText = documentSnap.data().first_name + " "+documentSnap.data().last_name  + '';
        studentId.innerText = documentSnap.data().roll_number;
        studentFaculty.innerText = documentSnap.data().faculty;
        studentProfileImage.src = documentSnap.data().profile_pic;
        rollNumber.innerText = documentSnap.data().roll_number.slice(3).substring(0,3) + documentSnap.data().roll_number.slice(9);
        semester.innerText = documentSnap.data().semester;
        gender.innerText = documentSnap.data().gender;
        dateOfBirth.innerText = documentSnap.data().dob;

    

    }

}
