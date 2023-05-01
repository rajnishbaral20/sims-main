import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";

import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, signInWithEmailAndPassword, updateProfile   } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
 
// import {  } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getFirestore, getDoc, getDocs,doc, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField, query, where } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL  } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-storage.js"
 

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

  const subjectName = document.getElementById("subject_name");
  const subjectCode = document.getElementById("subject_code");
  const faculty = document.getElementById("faculty")
  const semester = document.getElementById("semester");
  const submitButton = document.getElementById("btn_submit");
  const succcessDiv = document.getElementById("succcess");
  const oppsDiv = document.getElementById("oops")

  succcessDiv.style.display = 'none'
  oppsDiv.style.display = 'none'



  submitButton.onclick = async function() {

const selectedFaculty = faculty.value;
  const selectedSemester = semester.value;

  if (selectedFaculty === '') {
    alert('Please select a faculty.');
    return;
  }

  if (selectedSemester === '') {
    alert('Please select a semester.');
    return;
  }
    try {
        const docRef = await setDoc(doc(db, "subject_"+faculty.value+"_"+semester.value, subjectCode.value), {
        

            subject_name: subjectName.value+ "",
            subject_code: subjectCode.value+"",
            faculty: faculty.value + "",
            semester: semester.value+""
        });

        subjectName.value = ""
        subjectCode.value = ""
        faculty.value = ""
        semester.value = ""

        succcessDiv.style.display = "visible";
        
      } catch (e) {
        console.error("Error adding document: ", e);
        oppsDiv.style.display = 'visible'
      }

  }


facultySelect.addEventListener('change', updateSemesterOptions);

function updateSemesterOptions() {
  const selectedFaculty = facultySelect.value;

  // Reset the options
  semesterSelect.innerHTML = '';

  const maxSemesters = selectedFaculty === 'BAR' ? 10 : 8;

  for (let i = 1; i <= maxSemesters; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    semesterSelect.appendChild(option);
  }

  // Enable or disable the semester select based on faculty selection
  semesterSelect.disabled = selectedFaculty === '';
}

