// 로그인js
// 목표) 각 탭 제목 클릭 시 해당되는 내용 표시하고 나머지 숨기기
//1. 비회원(비활성화) 내용초반숨기기
//2. 각탭제목 클릭시
//3. 기존회원 클릭 -> 기존회원내용 보이기/비회원내용숨김
//4. 비회원클릭 -> 기존회원내용 숨기기/ 비회원 내용보이기
const loginTabTitle = document.querySelectorAll('#login-frm .title button');
const loginTabContent = document.querySelectorAll('#login-frm .contents > ul');

console.log(loginTabTitle, loginTabContent, loginTabTitle);
loginTabContent[1].classList.add('display-hide'); //초기 숨기기

//비회원 주문 조회 클릭 시(초기모습과 반대되는 상황 먼저 테스트)
loginTabTitle[1].addEventListener('click',()=>{ loginTabFunc(1) });
loginTabTitle[0].addEventListener('click',()=>{ loginTabFunc(0) });

//반복 함수 별도 생성(함수 안에 달라지는 건 매개변수로 미리 지정)
function loginTabFunc(index){
    //0,1(모두 숨기기), 1(보이기) == 0
    loginTabContent[0].classList.add('display-hide'); //모두숨기기
    loginTabContent[1].classList.add('display-hide'); //모두숨기기
    loginTabContent[index].classList.remove('display-hide');

    loginTabTitle[0].classList.remove('active'); //모두비활
    loginTabTitle[1].classList.remove('active'); //모두비활
    return loginTabTitle[index].classList.toggle('active'); //클릭대상만 활성화
}

//목표2) 기존회원-아이디를 입력안하고 기존회원 로그인 버튼 클릭시 '아이디입력하세요' 경고창 출력

const userId = document.querySelector('#user-id');
const userPw = document.querySelector('#user-pw');
const memberLoginBtn = document.querySelector('#member-login');

const non_userId = document.querySelector('#non-user-id');
const non_userOrder = document.querySelector('#non-user-order');
const non_userPw = document.querySelector('#non-user-pw');
const non_memberLoginBtn = document.querySelector('#non-member-login')

console.log(userId, memberLoginBtn, nonMemberLoginBtn);

memberLoginBtn.addEventListener('click', () => { //기존 회원 로그인 버튼 이벤트
    loginError(userId, '아이디'); //아이디검사 함수 호출
    loginError(userPw, '비밀번호'); //비밀번호 검사 함수 호출
});

non_memberLoginBtn.addEventListener('click', () => {
    loginError(non_userId, '주문자명');
    loginError(non_userOrder, '주문번호');
    loginError(non_userPw, '주문 비밀번호');
});

nonmemberLoginBtn.addEventListener('click', () => {loginError(userName, '주문자명')});
function loginError(dom, str){
    if(dom.value == '') {alert(`${str}를(을) 입력하세요`);}
}

