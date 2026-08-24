//class_if2.js
//css속성을 1~2개 일회성으로 사용 시 
//객체.style.속성 = '값';
//객체.style.속성 = '값';
//객체.style.속성 = '값';
//css 2개 이상의 속성을 반복사용으로 사용 시 
//객체.classList.함수('적용할클래스명')
//함수종류 : add, remove, toggle, replace

const pTag = document.querySelector('p');
const btn1 = document.querySelector('#btn1');
const userIdInput = document.querySelector('#user_id');
console.log(pTag, btn1, userIdInput);

btn1.addEventListener('click',()=>{
    // 아이디를 입력안하고 버튼 클릭 시 -> 아이디 입력 오류
    // 아이디를 입력하고 버튼 클릭 시 -> 결과없음 
    // 조건식) 아이디를 입력했는가? 참/거짓
    console.log(userIdInput.value)//값테스트
    console.log(Boolean(userIdInput.value)); //논리 테스트
    if(userIdInput.value == ''){ //조건이 참일 때 실행결과
        pTag.classList.add('error');
        pTag.innerHTML = '<em>로그인</em>을 실패했습니다';
    }else{//앞 조건이 거짓일때 실행결과
        pTag.classList.remove('error');
        pTag.innerHTML = '<em>로그인</em>을 성공했습니다';
    }
    /* if(userIdInput.value != ''){
        pTag.classList.remove('error');
        pTag.innerHTML = '<em>로그인</em>을 성공했습니다';
    } */
    //pTag.classList.add('error');
    //pTag.innerHTML = '<em>로그인</em>을 실패했습니다';
    // pTag.textContent = '<em>로그인</em>을 실패했습니다'; //em으로 직접쓰고 속성(innerHTML) 고치기. css에서 작성
    // pTag.classList.toggle('error'); //다시 끄는거도 가능해짐
})