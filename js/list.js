const list = document.querySelector(".list");
const deleteBtn = document.querySelector(".ex_delete_btn");
const dialog = document.querySelector("#dialog");
const yesBtn = document.querySelector("#yesBtn");
const noBtn = document.querySelector("#noBtn");

let infos = [];

class Info {
    constructor(isChecked, profileImgUrl, name, email, phoneNumber, isActive) {
        this.isChecked = isChecked;
        this.profileImgUrl = profileImgUrl;
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.isActive = isActive;
    }
}

displayUsers();


function displayUsers() {
    getLocalStorage();
    for(let i=0; i<infos.length; i++) {
        const itemEL = createInfoElement(infos[i]);

        //console.log(infos[i]);
        list.append(itemEL);
    }
}

function getLocalStorage() {
    const data = localStorage.getItem("infoList");

    if(data) {
        infos = JSON.parse(data);
        //console.log(infos);
    }
}

function createInfoElement(info) {
    const itemEl = document.createElement("div");
    itemEl.className = "list_item";
    

    const checkboxEl = document.createElement("input");
    checkboxEl.type = 'checkbox';
    checkboxEl.id = "check_btn";
    checkboxEl.checked = info.isChecked;

    if(info.isChecked) {
        itemEl.classList.add("checked");
    }

    const profileEl = document.createElement("img");
    profileEl.className="profile";

    if(info.profileImgUrl !== " ") {
        profileEl.src = info.profileImgUrl;
    }
    else {
        profileEl.src = "assets/user.png";
    }
    

    const nameEl = document.createElement("div");
    nameEl.className="name";
    nameEl.innerHTML =  info.name;
    //console.log(nameEl);

    const emailEl = document.createElement("div");
    emailEl.className="email";
    emailEl.innerHTML =  info.email;

    const phoneNumEl = document.createElement("div");
    phoneNumEl.className="phoneNum";
    phoneNumEl.innerHTML =  info.phoneNumber;

    const statusEl = document.createElement("div");
    statusEl.className="status";

    const spanEl = document.createElement("span");
    const pEl = document.createElement("p");
    if(info.isActive) {
        spanEl.classList.remove("inactive");
        pEl.innerHTML = "active";

    }
    else {
        spanEl.classList.add("inactive");
        pEl.innerHTML = "inactive";

    }
    const moreEl = document.createElement("div");
    moreEl.className="more_btn";
    const iconEl = document.createElement("div");
    iconEl.className="icon";
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    const span3 = document.createElement("span");
    iconEl.append(span1);
    iconEl.append(span2);
    iconEl.append(span3);

    moreEl.append(iconEl);



    statusEl.append(spanEl);
    statusEl.append(pEl);

    itemEl.append(checkboxEl);
    itemEl.append(profileEl);
    itemEl.append(nameEl);
    itemEl.append(emailEl);
    itemEl.append(phoneNumEl);
    itemEl.append(statusEl);
    itemEl.append(moreEl);

    return itemEl;

}
const totalcheckBox = document.querySelector(".checkbox input");
totalcheckBox.addEventListener("change", () => {
    const checkBoxes = document.querySelectorAll("#check_btn");
    
    checkBoxes.forEach(checkbox => {
        checkbox.checked = totalcheckBox.checked;
    });
});



list.addEventListener("click", (event) => {
    const itemEl = event.target.closest(".list_item");
    if (itemEl) {
        // 체크박스가 클릭되었을 때는 event.target이 checkbox이므로 클릭 이벤트를 무시
        if (event.target.tagName === "INPUT" && event.target.type === "checkbox") {
            return;
        }

        const itemIndex = Array.from(list.children).indexOf(itemEl);
        if (itemIndex !== -1) {
            showDetail(itemIndex);
            console.log("clicked!");
        }
    }
});



function getIndexFromEvent(event) {
    const itemEl = event.target.closest(".list_item");
    if (itemEl) {
        const index = Array.from(list.children).indexOf(itemEl);
        return index >= 0 ? index : null;
    }
    return null;
}


function showDetail(index) {
    window.location.href = `detail.html?index=${index}`;
}

deleteBtn.addEventListener("click", () => {
    dialog.showModal();
 
});
yesBtn.addEventListener("click",(e)=> {
    dialog.close();
    checkboxItemdelete();
})
noBtn.addEventListener("click",(e)=> {
    dialog.close();
})


function checkboxItemdelete() {
    const checkBoxes = document.querySelectorAll("#check_btn");
    const itemsToDelete = [];

    checkBoxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            itemsToDelete.push(index);
        }
    });

    itemsToDelete.reverse(); // 뒤에서부터 삭제하도록 순서 뒤집기

    itemsToDelete.forEach(index => {
        deleteItem(index);
    });

    // 체크박스 초기화
    totalcheckBox.checked = false;
}

function deleteItem(index) {
    if (index >= 0 && index < infos.length) {
        infos.splice(index, 1);
        updateLocalStorage();
        updateList();
    }
}
function updateLocalStorage() {
    localStorage.setItem("infoList", JSON.stringify(infos));
}

function updateList() {
    list.innerHTML = ""; // 리스트 비우기
    displayUsers(); // 변경된 정보로 리스트 업데이트
}