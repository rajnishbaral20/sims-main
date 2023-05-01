const frame = document.getElementById("frame");
const btnStudents = document.getElementById("button_students");
const btnApplications = document.getElementById("button_applications");
const btnSubject = document.getElementById("button_subject");
const btnNotices = document.getElementById("button_notice");
const attendance = document.getElementById("button_attendance");
const buttonLogout = document.getElementById("button_logout");
const btnResult = document.getElementById("button_result");

btnResult.addEventListener("click", function() {
    frame.src = "./result.html";
  });
  


btnStudents.onclick = function() {
    frame.src = "./SearchStudent.html";
}
btnSubject.onclick = function() {
    frame.src = "./addSubject.html";
}

btnApplications.onclick = function() {
    frame.src = "./applications.html";
}

btnNotices.onclick = function() {
    frame.src = "./notice.html"
}

attendance.onclick = function() {
    frame.src = "./attendanceSection.html"
}

// result.onclick = function() {
//     frame.src = "./result.html"
// }

buttonLogout.onclick = function() {
    chrome.history.deleteAll();
}