// dom js

//복습 ) 함수, 매개변수, 리턴
//더하기, 빼기 계산기
function calcFunc(n1, n2, oper='+'){
    let num1 = n1;
    let num2 = n2;
    return oper == '+' ? num1+num2 : num1-num2;
    //조건 ? 참 : 거짓;
    let total = num1 + num2;
    return total;
}
console.log(calcFunc(3, 5, '+'));

//할인율 계산기(사용자 입력가격은 다르고, 할인은 고정)
//계산법) (100-할인율(5)) / 100= 0.95
//판매가 * 0.95 = 5% 판매가
//판매가 * 0.9 = 10% 할인가
//판매가 * 0.8 = 20% 할인가
//판매가 * 0.7 = 30% 할인가
//판매가 * 0.6 = 40% 할인가
//판매가 * 0.5 = 50% 할인가
function discountFunc(price){
    //let result =`할인율` + price * discount;
    // discount를 위에 안쓰고 const로 따로 적는 방법도 있음
    const discount5 = (price * 0.95).toLocaleString('ko-kr');
    const discount10 = (price * 0.9).toLocaleString('ko-kr');
    return `사용자 입력가격 : ${price.toLocaleString('ko-kr')}원 기준
            5% 할인가 : ${discount5}원,
            10% 할인가 : ${discount10}원`
}
console.log(discountFunc(50000));
/* console.log(discountFunc(10000, 0.95));
console.log(discountFunc(10000, 0.9));
console.log(discountFunc(10000, 0.8));
console.log(discountFunc(10000, 0.7));
console.log(discountFunc(10000, 0.6));
console.log(discountFunc(10000, 0.5)); */


// 1. 익명함수
const btn1 = document.querySelector('#btn1');
// 버튼 클릭시 버튼 색상변경(일회성)
/* btn1.addEventListener('click',function(){
    btn1.style.color = 'red';
}) */
btn1.addEventListener('click',()=>{ //화살표함수
    btn1.style.color = 'red';
})

//일반 반복함수(생성된 위치 위/아래 어디든 호출 가능)
func1(); //ok
function func1(){
    return console.log('일반함수 테스트');
}
func1(); //ok

//이벤트 밖에서 사용하는 익명함수의 또다른예
//변수 안에서 익명함수 생성
//func2(); //error 익명함수를 위에서 선언해서 오류남
const func2 = function(){
    return console.log('익명함수 테스트');
}
func2();

const func3 = ()=>{
    return console.log('익명함수 테스트-화살표버전');
}
func3();

// 2. 콜백함수
function orderCoffee(){
    return console.log('SNS 이벤트 무료커피 나왔습니다');
}
function sns(){
    return console.log('SNS 후기 업로드 완료');
}
orderCoffee(sns);

// 3. data-* 속성
const cart_buy_div = document.querySelector('.cart_buy');
//HTML data-* 속성은 자바스크립트에서 dataset.* 읽을 수 있음.
let dataReault = cart_buy_div.dataset.name;
console.log(`dataResult 값은 &{dataReult}`);

//수량 증감 data-* 속성 활용
const countNumSpan = document.querySelector('.count_num');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
console.log(countNumSpan.dataset.count);

//위 span변수에 초기값 1 대입
countNumSpan.textContent = countNumSpan.dataset.count;

// -클릭하면 span값이 1씩 감소(익명함수 활용)
minusBtn.addEventListener('click',()=>{
    let currentNum = Number(countNumSpan.dataset.count);
    //삼항 조건 연산자 활용(수량이 1이상일때만 감소)
    currentNum > 1 ? (()=>{
        let minusTotal = --currentNum;
        countNumSpan.dataset.count = minusTotal;
        countNumSpan.textContent = countNumSpan.dataset.count;
    })() : alert('최소 주문 수량입니다.');
    //countNumSpan.textContent = minusTotal;
})

// +클릭하면 span값이 1씩 증가(익명함수 활용)
plusBtn.addEventListener('click',()=>{
    console.log(typeof(countNumSpan.dataset.count));//문자로 인식, 계산불가
    let currentNum = Number(countNumSpan.dataset.count);//문자를 숫자로 변환해서
    currentNum > 9 ? (()=>{
        let plusTotal = ++currentNum; //숫자로 변환한 변수를 1증가해서 담은 증가변수
        countNumSpan.dataset.count = plusTotal; //증가된 변수를 해력 data속성에 업데이트
        countNumSpan.textContent = plusTotal; //증가된 변수를 사용자가 보는 화면에 출력
    })() : alert('최대 주문 수량입니다.');

    console.log(currentNum, typeof(currentNum));//숫자로 변경된 점 확인
})
//변수 목적 정리
// countNumSpan : 수량 표시되는 span태그변수
// plusBtn : +버튼 변수
// currentNum : countNumSpan의 data속성을 숫자로 변환한 변수\