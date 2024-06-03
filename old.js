// * 객체 리턴을 올드 방식으로

// function old (a,b){
// this.first = a;
// this.first = b;
// }

// let test = new old(1,2);
// console.log(test);




// * 밑에는 강사 코드

function old(a, b) {
  this.first = a;
  this.second = b;
}

let test = new old(1,2);
console.log(test);

// * 여하튼 넘어가서

class NewOld {
  constructor(a,b){
    this.first = a;
    this.second = b;
  }
}

let newStyle = new NewOld(1,2);
console.log(newStyle);