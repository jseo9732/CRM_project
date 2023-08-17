# 임직원 관리 사이트 (과제)
 > 임직원들의 인적사항을 간단하게 관리할 수 있도록 만들어본 프로젝트입니다.
<br/>

## 총 개발기간
> 2023.08.07 ~ 2023.08.17
<br/>

## 사용한 스택들
### Tool
![VSCode](https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![AWS S3](https://img.shields.io/badge/AWS%20S3-569A31?style=for-the-badge&logo=amazons3&logoColor=white)
![Netlify](https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

### Development

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)

<br/>

## 📺 주요 구현화면 및 기능
|                                                           1.  메인 페이지                                                              |                                                         2.  프로필 페이지                                                            |
| :--------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: |
| ![main](/IMG/main.png) |  ![profile](/IMG/profile.png) |

<br/>

> ### 1. 로딩화면 구현

 ![loading](/IMG/loading.gif)
<br/>

> ### 2. 반응형

|                                                           1.  데스크탑                                                              |                                                         2.  모바일                                                            |
| :--------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: |
| ![main](/IMG/desktop.png) |  ![profile](/IMG/mobile.png) |
<br/>

> ### 3. CRUD
|                                                          데이터 등록                                                              |                                                        데이터 삭제                                                            |
| :--------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: |
|   ![create](/IMG/create.gif)  |    ![delete](/IMG/delete.gif)  |

|                                                          데이터 조회                                                              |                                                        데이터 수정                                                            |
| :--------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: |
|   ![profile](/IMG/profile.gif)  |    ![update](/IMG/update.gif)  |

<br/>

## 🖱 User Flow Diagram
![user_flow](/IMG/user-flow.png)

<br/>

## [구현한 필수 요구사항]
- [x] “AWS S3 / Firebase 같은 서비스”를 이용하여 사진을 관리할 수 있는 페이지를 구현하세요.
- [x] 프로필 페이지를 개발하세요.
- [x] 스크롤이 가능한 형태의 리스팅 페이지를 개발하세요.
- [x] 전체 페이지 데스크탑-모바일 반응형 페이지를 개발하세요.
- [x] 사진을 등록, 수정, 삭제가 가능해야 합니다.
- [x] 유저 플로우를 제작하여 리드미에 추가하세요.
* CSS
  * [x] 애니메이션 구현
  * [x] 상대수치 사용(rem, em)
* JavaScript
  * [x] DOM event 조작

## [구현한 선택 요구사항]
- [x] 페이지가 보여지기 전에 로딩 애니메이션이 보이도록 만들어보세요.
- [x] LocalStorage 사용

## 아쉬운 점
- AWS S3가 익숙하지 않아서, 수정 기능을 사진에만 구현했다.
- React에 익숙했었기에, 바닐라 자바스크립트로만 구현하는데 애로사항이 살짝 있었다.
- 이벤트 실행 후, 새로고침해야 반영되는 부분들이 있었다.