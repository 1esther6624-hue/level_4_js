//level_4 index js
//1. 변수
let itemPrice = 24600;
const titleBig = document.querySelector('h1');
const result1p = document.querySelector('.result1');
const result2p = document.querySelector('.result2');
let replaceData = itemPrice.toLocaleString('ko-kr'); //데이터 종류 변경변수
// --------------------- 웹은행 150만원 입금
let bank = 1500000;
let replaceBank = bank.toLocaleString('fi-fi');

//출력 테스트 콘솔
console.log(itemPrice, titleBig, result1p, replaceData);

//실행 결과
result1p.textContent = replaceData+'원';
result2p.textContent = replaceBank+'원';

// -----------------------
//2. 배열
const money = [24600, 32000, 19900];
const list1Li = document.querySelectorAll('.list1 > li')

console.log(list1Li);
console.log(money[0].toLocaleString('ko-kr'));
console.log(money[1].toLocaleString('ko-kr'));
console.log(money[2].toLocaleString('ko-kr'));

list1Li[0].textContent = money[0]+'원';
list1Li[1].textContent = money[1]+'원';
list1Li[2].textContent = money[2]+'원';

list1Li[3].children[0].textContent = itemName[0];
list1Li[3].children[1].textContent = itemPriceOriginal[0];

//--------------- 연습
const list1dt = document.querySelectorAll('.study > dt')
const list1dd = document.querySelectorAll('.study > dd')

console.log(list1dt, list1dd);

list1dt[0].textContent = itemName[2];
list1dd[0].textContent = itemPriceOriginal[2];
list1dt[0].textContent = itemName[1];
list1dd[0].textContent = itemPriceOriginal[1];

let plate = ['계란', '스테이크', '샐러드', '김치', '단무지', '쌀밥', '콩나물국']

console.log(plate);//전체 테스트
// 계란 콩나물국 김치 출력
// 스테이크 -> 연어로 변경
console.log(plate[0]);//계란
console.log(plate[6]);//콩나물
console.log(plate[3]);//김치

plate[1] = '연어';//스테이크 제거 후 연어 새로 대입
console.log(plate[1]);//위 변경 '연어' 출력

// -------------------------------------
//3. 객체
const movie = {
    name: '스파이더맨',
    price: 12000,
}
console.log(movie.name); //객체.속성 출력
console.log(movie.price);
//------------------------------------- 객체+cgv DB연결
const cgv = document.querySelector('.cgv');
const cgvPoster = cgv.querySelector('img');
const cgvTitle = cgv.querySelector('h2');
const cgvAge = cgv.querySelector('.age');
const cgvRate = cgv.querySelector('.rate');
const cgvGanre = cgv.querySelector('.ganre');

console.log(cgv, cgvPoster, cgvTitle, cgvAge, cgvRate);

cgvPoster.src = movieDb[0].poster;
cgvTitle.textContent = movieDb[0].age+'세 이용가';
cgvRate.textContent = movieDb[0].reservation_rate;
cgvGanre.textContent = movieDb[0].ganre[0];

//------------------ 객체변수 연습
const dessertTray = {
    top:['파랑마카롱','분홍마카롱','초록마카롱','노랑마카롱'],
    middle:['슈크림','머핀','에그타르트'],
    bottom:['방울토마토','청포도','오렌지'],
}
console.log(dessertTray);//전체 확인
console.log(dessertTray.top[3]);//노랑마카롱
console.log(dessertTray.middle[0]);//슈크림
console.log(dessertTray.bottom[1]);//청포도

dessertTray.bottom[2] = '망고';//오렌지를 망고로 변경
console.log(dessertTray.bottom[2]);//변경한거 출력

//----------------------------- 증감연산자
let num = 1;

console.log(num); //1(변수 초기값 테스트)

num++;//1증가
console.log(num); //2(위 연산 후 실행 테스트)

num--; //1감소
console.log(num); //1

//----------------------------- 증감연산자, 2개변수활용
let number1 = 10;
let number2;

console.log(number1, number2);//초기값 테스트

number2 = number1++;
//증감연산자를 변수 뒤에 붙이면
//기존 변수값(number1)을 대입(=)을 만나 number2로 먼저보내고
//++로 number1을 나중에 증가시킨다(후처리)
console.log(number1, number2);