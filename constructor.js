// 분류규격 라면볶음면{

//   재료들(라면종류,라면물,추가재료){
//     라면종류 : 라면종류;
//     라면물 : 라면물;
//     추가재료 : 추가재료;
//   }
// }

// * 그대로 자바스크립트로 작성 하기

class hyeonRamen {
  constructor(ramenName, ramenWater, addFood) {
    this.ramenName = ramenName;
    this.ramenWater = ramenWater;
    this.addFood = addFood;
  }

  set ramenName(ramenName) {
    if(ramenName !== "진라면"){
      console.error("진라면이 아니라서 안할게요")
    }
  }


}


let test = new hyeonRamen("진라면순한맛", "300ml", "체다치즈 고추장", "랄랄라");
console.log(test);

