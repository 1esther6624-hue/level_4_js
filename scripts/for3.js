//for3.js
//for~in
//2개 이상의 인덱스로 이루어진 배열, 객체, DOM요소 순회하는 반복문
const flower = ['장미', '민들레', '수선화', '나팔꽃'];

// for(let 초기변수 in 변수에 대입할 대상){반복처리}
for(let f in flower){
    console.log(f);
    console.log(flower[f]); //for~in이 추출한 인덱스를 활용해서 배열값 출력
}

//객체 인덱스 추출하기
const birthday = [{
    date:'1월',
    flower:'장미',
},{
    date:'2월',
    flower:'민들레',
}];
// 위 변수 활용 - 인덱스 추출, 1월 2월, 장미 민들레
for(let f in birthday){
    // console.log(f);
    console.log(birthday[f].date);
    console.log(birthday[f].birthday);
}

console.log('----------------------------');

//로그인 오류 검증 반복문 + 조건문(버튼 클릭 시 수행)
const loginBtn = document.querySelector('#login_btn');
const inFrm = document.querySelector('#inFrm'); //폼태그(안쪽검사)

//로그인 버튼 클릭 시 수행 함수
loginBtn.addEventListener('click',()=>{
    const valFrm = {
        id:inFrm.user_id.value, //속성:폼.아이디input.값
        pw:inFrm.user_pw.value,//속성:폼.비밀번호input.값
    }
    console.log(valFrm);//위 변수 출력 확인
    console.log(valFrm.id);//개별 속성 출력 확인
    console.log(valFrm['id']);//객체 속성 출력문법 v2(for~in)

    for(let v in valFrm){
        console.log(v); //id, pw 속성명 출력
        console.log(valFrm[v]); //속성이 가지고 있는 실제 값 출력
        if(valFrm[v] === ''){
            document.querySelector('#login_msg').textContent = '값을 입력하세요';
        }
    }
})//클릭 이벤트 종료

console.log('---------------------------');

//for~of
//for(let 초기변수생성 of 대입할변수대상){ 반복처리할명령 }
const animals = ['강아지', '고양이', '앵무새', '금붕어', '돌고래'];

for(let a in animals){ console.log(a); } //index 출력확인
for(let a of animals){ console.log(a); } //object 출력확인

const list = document.querySelector('.list'); //ul변수
for(let a of animals){
    const li = document.createElement('li');
    li.textContent = a;
    li.style.borderBottom = '2px solid #222';
    li.style.padding = '4px 6px';
    list.appendChild(li);
}//animals 반복종료

const animalsLi = document.querySelectorAll('.list li');
for(let i of animalsLi){
    console.log(i); //생성 li 출력 확인
    i.addEventListener('mouseover',()=>{
        i.style.borderColor = 'red';
    })

}

console.log('---------------------------');
//forEach
const tab_title = document.querySelectorAll('.tab_title');
const tab_contents = document.querySelectorAll('.tab_constents > li > ul');

//특정 객체의 index만 사용할 땐 for~in
//특정 객체의 object만 사용할 땐 for~of
//특정 객체의 index와 object 모두 사용할 땐 forEach
//객체.forEach((객체매개변수, 인덱스매개변수, 배열매개변수)=>{})
//매개변수명은 자유롭게 설정 가능

tab_title.forEach((o, i)=>{
    console.log(o, i);
    o.addEventListener('click',()=>{
        //for(let reset of tab_title){reset.classList.remove('active');}//전체제목 클래스 비활성화
        resetFunc(tab_title);
        o.classList.add('active');//클릭한 제목만 활성화 클래스 적용
        console.log(i);//클릭 인덱스 테스트
        //for(let reset of tab_contents){reset.classList.remove('active');}
        resetFunc(tab_contents);
        tab_contents[i].classList.add('active');
    })
})

function resetFunc(target){
    for(let reset of target){reset.classList.remove('active');}
    return
}