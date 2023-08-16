// 검색 
const searchButton = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-input');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    const rows = document.querySelectorAll('.body-tr');

    rows.forEach((row) => {
        const name = row.querySelector('.td-name').textContent;
        const email = row.querySelector('.td-email').textContent;
        
        if (name.includes(searchTerm) || email.includes(searchTerm)) {
            row.style.display = 'table-row';
        } else {
            row.style.display = 'none';
        }
    });
});


// modal 열기
const registerButton = document.getElementById('register-button');
const modalContainer = document.querySelector('.modal-container');
const modalIframe = document.querySelector('.modal-iframe');
const userTableBody = document.querySelector('.user-table-body');

registerButton.addEventListener('click', () => {
    modalContainer.style.display = 'flex';
    modalIframe.contentWindow.postMessage('openModal', '*');
});


// modal 닫기
window.addEventListener('message', (event) => {
    if (event.data === 'modalClosed') {
        modalContainer.style.display = 'none';
    }
});


// firebase 기본 설정
import firebaseConfig from '../config.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js';
import { getDatabase, ref as dbRef, onValue, remove } from 'https://www.gstatic.com/firebasejs/9.6.4/firebase-database.js';
import { getStorage,  ref as storageRef, deleteObject } from 'https://www.gstatic.com/firebasejs/9.6.4/firebase-storage.js';

const apiKey = firebaseConfig.apiKey;
const authDomain = firebaseConfig.authDomain;
const projectId = firebaseConfig.projectId;
const storageBucket = firebaseConfig.storageBucket;
const messagingSenderId = firebaseConfig.messagingSenderId;
const appId = firebaseConfig.appId;
const measurementId = firebaseConfig.measurementId;
const databaseURL = firebaseConfig.databaseURL;
const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);
const storage = getStorage(firebaseApp);


// user Data 가져오기
document.addEventListener('DOMContentLoaded', () => {
    const usersRef = dbRef(database, 'users');

    onValue(usersRef, (snapshot) => {
        const data = snapshot.val();

        userTableBody.innerHTML = '';

        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                data[key].key = key;

                // 테이블에 유저 정보 추가
                const row = document.createElement('tr');
                row.className = 'body-tr';
                row.id = key;
    
                const checkboxCell = document.createElement('td');
                const checkboxInput = document.createElement('input');
                checkboxInput.type = 'checkbox';
                checkboxInput.className = 'input-checkbox';
                checkboxCell.className = 'td-checkbox';
                checkboxCell.appendChild(checkboxInput);
    
                const imageCell = document.createElement('td');
                const imageContainer = document.createElement('div');
                const profileImage = document.createElement('img');
                imageContainer.className = 'image-container';
                profileImage.className = 'profile-image';
                profileImage.src = data[key].photo; 
                imageContainer.appendChild(profileImage);
                imageCell.appendChild(imageContainer);
    
                const nameCell = document.createElement('td');
                nameCell.className = 'td-name';
                nameCell.textContent = data[key].name;
    
                const emailCell = document.createElement('td');
                emailCell.className = 'td-email';
                emailCell.textContent = data[key].email;
    
                const departmentCell = document.createElement('td');
                departmentCell.className = 'td-department';
                departmentCell.textContent = data[key].department;
    
                row.appendChild(checkboxCell);
                row.appendChild(imageCell);
                row.appendChild(nameCell);
                row.appendChild(emailCell);
                row.appendChild(departmentCell);
    
                userTableBody.appendChild(row);
            }
        }

        // 체크된 cell 값 가져오기 
        const checkboxInputs = document.querySelectorAll('.input-checkbox');
        const checkedUser = []; 

        checkboxInputs.forEach(checkboxInput => {
            checkboxInput.addEventListener('change', () => {
                const userId = checkboxInput.closest('tr').id;
                checkedUser.push(userId);
            });
        });


        // 체크된 user 삭제
        const deleteButton = document.getElementById('delete-button');

        deleteButton.addEventListener('click', () => {
            console.log(checkedUser);
 
            for (const userId of checkedUser) {
                const user = data[userId];

                if (user) {
                    // database 삭제
                    const databaseRef = dbRef(database, `users/${userId}`);

                    console.log( `users/${userId}`);
                    
                    remove(databaseRef).then(() => {
                        console.log(`user 삭제 성공 - ${name}`);
                    }).catch(error => {
                        console.error(`user 삭제 오류 - ${name}:`, error);
                    });

                    // storage 이미지 삭제
                    const name = user.name;
                    const imageRef = storageRef(storage, `images/${name}-profile`);
                    
                    deleteObject(imageRef).then(() => {
                        console.log(`이미지 삭제 성공 - ${name}`);
                    }).catch(error => {
                        console.error(`이미지 삭제 오류 - ${name}:`, error);
                    });

                    alert('삭제되었습니다!');
                }
            }
        });

        // 클릭한 유저 상세 페이지로
        const tableRow = document.querySelector('.body-tr');
        const inputCheckbox = tableRow.querySelector('.input-checkbox');

        tableRow.addEventListener('click', (event) => {
            if (event.target === inputCheckbox) {
                return; 
            }

            const userId = tableRow.id;
            const user = data[userId];

            if (user) {
                const queryString = new URLSearchParams({ userId: user.key }).toString();
                window.location.href = `detail.html?${queryString}`;
            }
        });
    });
});


