//class_if.js
const contentLi = document.querySelectorAll('.contents li');
console.log(contentLi); //4개의 인덱스로 각각 li 출력 테스트

//Q. 첫번째 li 디자인(테두리, 배경, 여백)
/* contentLi[0].style.borderBottom = '1px solid #000';
contentLi[0].style.backgroundColor = '#ff0';
contentLi[0].style.padding = '15px 6px'; */
contentLi[0].classList.add('design_set1');
contentLi[2].classList.add('design_set1');
contentLi[3].classList.add('design_set1');

contentLi[0].addEventListener('click',()=>{
    contentLi[0].classList.toggle('design_set1');
})

const search_open_wrap = document.querySelector('.search_open_wrap');
const search_btn = document.querySelector('#search_btn');

//1. 초기- 검색하기 숨기기
//2. 검색버튼 클릭 시 검색하기 보이기
//3. 검색버튼 또 클릭 시 검색하기 숨기기

search_open_wrap.classList.add('target_showHide');
search_btn.addEventListener('click',()=>{
    search_open_wrap.classList.toggle('target_showHide');
})

const like_btn = document.querySelector('#like_btn');

like_btn.addEventListener('click', () => {
    like_btn.classList.toggle('active');
});

//----------------------------------- 조건 참/거짓
console.log(Boolean(0));//거짓
console.log(Boolean(1));//참
console.log(Boolean(""));//거짓
console.log(Boolean("abc"));//참
console.log(1 > 2); //비교연산자 활용
console.log(3>=2);
console.log("" == "abc");

let a = 10;
let b = 20;
//a와 b변수의 값을 비교해서 조건 결과 테스트
//if(조건식){조건식이 참일 때 실행 결과}
if(a != b){ console.log('a와 b가 다르면 참'); }
if(a == b){ console.log('a와 b가 같으면 참'); }

//2단 조건(if-else는 한세트로 둘중 하나만 실행됨)
if(a < b){
    console.log('a가 b보다 작으면 참');
}else{
    console.log('a가 b보다 작지 않으면 거짓');
}

//인쇄 버튼 클릭 시 -> 인쇄하시겠습니까? 질문 -> 확인(예) 누르면 인쇄실행
//인쇄 버튼 클릭 시 -> 인쇄하시겠습니까? 질문 -> 취소(아니오) 누르면 아무것도실행안함

const print_btn = document.querySelector('#print_btn');
print_btn.addEventListener('click',()=>{
    let printQ = confirm('인쇄하시겠습니까?');
    if (printQ == true) { print(); }
});