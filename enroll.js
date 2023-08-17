import { writeUserData, readUserData } from "./firebase.js";

window.onload = function () {
  const pt = document.getElementsByClassName("section__enroll--is_pt")[0];
  const ptInfo = document.getElementsByClassName(
    "section__enroll--pt_check"
  )[0];

  if (!pt.checked) {
    ptInfo.style.display = "none";
  } else {
    ptInfo.style.display = "block";
  }

  readUserData();
};

const submitButton = document.getElementById("enroll_submit");
submitButton.addEventListener("click", function (e) {
  const name = document.getElementsByClassName("section__enroll--name")[0];
  const phone = document.getElementsByClassName("section__enroll--phone")[0];
  const startDay = document.getElementsByClassName(
    "section__enroll--start_day"
  )[0];
  const endDay = document.getElementsByClassName("section__enroll--end_day")[0];

  const profileImage = document.getElementById("image_upload").files[0];
  const pt = document.getElementsByClassName("section__enroll--is_pt")[0];
  const customerNum = document.getElementById("customer_number");

  if (pt.checked) {
    const sessionList = document.getElementById("pt_session");
    const trainerList = document.getElementById("pt_trainer");
    writeUserData(
      customerNum.value,
      name.value,
      phone.value,
      startDay.value,
      endDay.value,
      profileImage.msg,
      sessionList.value,
      trainerList.value
    );
  } else {
    writeUserData(
      customerNum.value,
      name.value,
      phone.value,
      startDay.value,
      endDay.value,
      profileImage.msg,
      "",
      ""
    );
  }
});

const isPt = document.getElementsByClassName("section__enroll--is_pt")[0];
isPt.addEventListener("click", function (e) {
  const pt = document.getElementsByClassName("section__enroll--is_pt")[0];
  const ptInfo = document.getElementsByClassName(
    "section__enroll--pt_check"
  )[0];

  if (!pt.checked) {
    ptInfo.style.display = "none";
  } else {
    ptInfo.style.display = "block";
  }

  const sessionList = document.getElementById("pt_session");
  if (sessionList.childNodes.length < 200) {
    for (let i = 1; i < 201; i++) {
      let session = document.createElement("option");
      session.value = i;
      session.innerText = i;
      sessionList.appendChild(session);
    }
  }

  const trainerList = document.getElementById("pt_trainer");
  const employee = ["홍길동", "김철수"];
  if (trainerList.childNodes.length < 5) {
    employee.forEach(function (em) {
      let trainer = document.createElement("option");
      trainer.value = em;
      trainer.innerText = em;
      trainerList.appendChild(trainer);
    });
  }
});