// 오늘의 집 클론코딩 프로젝트 - 쇼핑몰 상품 주문영역 + 상세페이지
//------------------------------------------------------------
//스몰1 마우스 이벤트시 큰이미지가 big1로 변경
//스몰2 마우스 이벤트시 큰이미지가 big2로 변경
const smallThum = document.querySelectorAll('.small_thum img');
const bigThum = document.querySelector('.big_thum img');

console.log(smallThum, bigThum);


/* smallThum[0].addEventListener('mouseover', () => {
    bigThum.src = './dog_images/big1.jpg';
});
smallThum[1].addEventListener('mouseover', () => {
    bigThum.src = './dog_images/big2.jpg';
}); */

//태그에 따라 다름
smallThum[0].addEventListener('mouseover', () => {
    bigThum.src = smallThum[0].src;
});
smallThum[1].addEventListener('mouseover', () => {
    bigThum.src = smallThum[1].src;
});


//1.---------------------------변수
//2.---------------------------함수
//3.---------------------------이벤트