// * 이 파일은 기본 함수 연습 파일입니다.
// * 목적은 함수를 조금 더 이해하려고 합니다.
// * 매개변수가 객체인 경우가 아래에 작성될 예정입니다.

function workOne(a,b){
// * logic : 매개변수 2개를 받은 다음에
// * logic : return은 객체였음 좋겠다.
// * 지역 변수 : 함수 안에서만 생명이 있는, 통용되는 임시 변수! 
// * 지역변수가 없으면 이름 작명 할 때마다 불편할 것이다
// * 매개변수가 객체인 경우가 아래에 작서될 예정이다

// 상황 : 지역변수로 객체를 초기화했다.

// 매개변수 a,b 두 개가

// 객체의 키 이름과 값 리터럴이 되었으면 좋겠다.


// hint : 객체 할당 검사 / 매개 변수 두 개 묶어버리기
// * 이것 많이 쓸 패턴

// * 썩 좋은 퍄턴은 아니라네...'

if(typeof(a) === 'string'){
if(typeof(b)=== 'string') {

  let localVariable = {};
  
  localVariable[a]=a;
  localVariable[b]=b;
  
  return localVariable;

} else {
  console.error("좋은말할때 문자열로 ㄱ ")
}

}else {
  console.error("존말할때 문자열로 ㄱ")
}



// * 여기서부터 

//   a:b

// };

// let lalala = localVariable(a,b);

// return lalala;

// return localVariable;

// console.log(localVariable(1,2));

// * 여기까지는 내가 해본것...

}

// let test = workOne("W","J");
// * 이것은 왜 { w: 'w', J: 'J' } 이렇게 나왔지?? 숫자도 아니구, 왜 키 값은 문자열 표시가 안나오지?

let test = workOne("백지원","Alice");
console.log(test);

// * 이것도 { '백지원': '백지원', Alice: 'Alice' }  왜 Alice 만 '' 표시가 없지???

// * 결과적으로 객체를 만들어주는 함수 