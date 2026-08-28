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



//------------------------------상품옵션 선택에 따른 주문 정보+가격 8/28
//목표1) 색상 선택 시 선택한 정보를 data-* 속성에 대입ㅂ하고 대입한 값 확인하기
//선택한 dom대상이 select-option태그라면 사용해야하는 문법(아래)
//DOM.options[DOM.selectedIndex].text
//DOM.options[DOM.selectedIndex].value

const colorSelect = document.querySelector('select[id=color]');
const optResult = document.querySelector('.opt_result');
console.log(colorSelect, optResult);

showHideFunc(optResult)

function showHideFunc(target, visible='none'){
    return target.style.display = visible;
}

//옵션 선택 시 호출 함수
function optResultFunc(dom, data){
    if(dom.selectedIndex > 0){
        let changeOpt = dom.options[dom.selectedIndex].text
        dom.dataset.dataValue = changeOpt;
        showHideFunc(optResult, 'flex');
        return optResult.children[0].textContent = `색상 : ${colorSelect.dataset.color}, 사이즈 : ${sizeSelect.dataset.size}`;
    }
}

//(위) 함수 호출 이용한 이벤트 함수
sizeSelect.addEventListener('change', ()=>{ optResult(sizeSelect, size) })
colorSelect.addEventListener('change', ()=>{ optResultFunc(colorSelect, color) })

// //select태그 변수 이벤트를 제작 시 사용해야하는 이벤트 종류 : change
// colorSelect.addEventListener('change',()=>{
//     if(colorSelect.selectedIndex > 0){
//         //console.log('change 변경 확인');
//         let changeOpt = colorSelect.options[colorSelect.selectedIndex].text;
//         //console.log(changeOpt);
//         //data-* 속성에 사용자가 선택한 정보 저장하기
//         //dom.dataset.속성명; //읽기
//         //dom.dataset.속성명 = 값; //수정, 삭제
//         colorSelect.dataset.color = changeOpt; //수정
    
//         //선택 색상옵션이 opt_result의 result자식 "색상 :" 자리에 삽입하기
//         showHideFunc(optResult, 'flex');
//         optResult.children[0].textContent = `색상 : ${colorSelect.dataset.color}` 
//     }
// })

// //사이즈 옵션 선택시 주문옵션에 출력하기(안내문제외)
// const sizeSelect = document.querySelector('select[id=size]');
// console.log(sizeSelect);

// sizeSelect.addEventListener('change',()=>{
//     if(sizeSelect.selectedIndex > 0){
//         let changeOpt = sizeSelect.options[sizeSelect.selectedIndex].text;

//         sizeSelect.dataset.size = changeOpt;

//         showHideFunc(optResult, 'flex');
//         optResult.children[1].textContent = `사이즈 : ${sizeSelect.dataset.size}`;
//     }
// })