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

const allRollNumbers = []

const userFaculty = document.getElementById("user_faculty");
const userSemester = document.getElementById("user_semester");
const userSection = document.getElementById("user_section");
const userSubject = document.getElementById("user_subject")
const userExamType = document.getElementById("user_exam_type")
const btnApplyFilter = document.getElementById("button_filter_apply")

const updateResult = document.getElementById("update_result")
const table = document.getElementById("show_all_students_result_in_table");

btnApplyFilter.onclick = async function() {

    while(table.rows.length > 1) {
        table.deleteRow(1);
        }

    const querySnapshot = await getDocs(collection(db, "students_"+userFaculty.value+"_"+userSemester.value+"_"+userSection.value));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      allRollNumbers.push(doc.id)

    //   const docRef = doc(db, db, "students_"+doc.id+"_result_"+userExamType, userSubject.value+"");
    //     const docSnap = getDoc(docRef);

        createAsListForResult(doc);
    });

}

function createAsListForResult(doc) {


    const row = document.createElement("tr");
    row.className = 'row';
    row.id = doc.data().roll_number+"_row";

    const td1 = document.createElement('td');
    td1.innerText = doc.data().roll_number;
    
    row.appendChild(td1);

    const td2 = document.createElement('td');
    td2.innerText = doc.data().first_name + " "+ doc.data().last_name;
    row.appendChild(td2);


    const td5 = document.createElement('td');
    
    const marksField = document.createElement('input');
    marksField.type = 'text';
    marksField.className = 'marks_field';
    marksField.id = doc.data().roll_number;
    // button.onclick = function () {
    //     sessionStorage.setItem('profileClickEmail', doc.data().email);
    //     window.open("./profileSectionStudent.html", "_top");
    // };

    td5.appendChild(marksField);
    row.appendChild(td5);
    table.appendChild(row);

}



updateResult.onclick = function() {

    for (var j=0; j<allRollNumbers.length; j++) {
        var totalMarks = "20"

        const inputValue = document.getElementById(allRollNumbers[j])


        if (userExamType.value==="ADT3") {
            totalMarks = "50"
        }

        if (inputValue.value == null || inputValue.value == "" || inputValue.value == " ") {
            
        } else {
            const docRef = setDoc(doc(db, "students_"+allRollNumbers[j]+"_result_"+userExamType.value, userSubject.value+""), {
                obtained_marks: inputValue.value+'',
                subject_name: userSubject.textContent+'',
                total_marks: totalMarks+""
            });

            history.go(-1);
        }

        
            
        
        inputValue.value = ""
    }




    
}

userFaculty.addEventListener("change", async function() {
    const facultySelect1 = document.getElementById('user_faculty');
    const semesterSelect1 = document.getElementById('user_semester');
    const subjectSelect1 = document.getElementById("user_subject")

    const selectedFaculty1 = facultySelect1.value
    const selectedSemester1= semesterSelect1.value;

  
    subjectSelect1.innerHTML = '';


         const docRef1 = await getDocs(collection(db, "subject_"+selectedFaculty1+"_"+selectedSemester1+""));

         var isGone = false;
        

            docRef1.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
          
                  
          
                  const option = document.createElement('option');
                  option.value = doc.id;
                  option.textContent = doc.data().subject_name;
                  subjectSelect1.appendChild(option);
                  isGone = true;
                  
              });

              if(!isGone) {
                const option = document.createElement('option');
        option.textContent = "No subject found";
        subjectSelect1.appendChild(option);
              }

         
         
})

userSemester.addEventListener("change", async function() {
    const facultySelect1 = document.getElementById('user_faculty');
    const semesterSelect1 = document.getElementById('user_semester');
    const subjectSelect1 = document.getElementById("user_subject")

    const selectedFaculty1 = facultySelect1.value
    const selectedSemester1= semesterSelect1.value;

  
    subjectSelect1.innerHTML = '';


         const docRef1 = await getDocs(collection(db, "subject_"+selectedFaculty1+"_"+selectedSemester1+""));

         var isGone = false;
        
            docRef1.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
          

                  const option = document.createElement('option');
                  option.value = doc.id;
                  option.textContent = doc.data().subject_name;
                  subjectSelect1.appendChild(option);
                  isGone = true;
                  
                
                  
              });

              if(!isGone) {
                const option = document.createElement('option');
        option.textContent = "No subject found";
        subjectSelect1.appendChild(option);
    
              }
         
            

         
})





