// class MakeCoffee {
//   constructor(wondoo, water, sugar, milk) {
//     this.wondoo = wondoo;
//     this.water = water;
//     this.sugar = sugar;
//     this.milk = milk; 
//   }
// } 

// // ******************규격 만들기*****************
// set wondoo(value) {
//   if(typeof(value) === 'string') {
//     this._wondoo = value;
//     // _ 쓰는것 : 무언가 셋팅을 통과 한 값이다 
//   } else {
//     console.error("wondoo는 문자열이어야 합니다");
//   }
// }

// get wondoo() {
//   return 
// }




// let test = new MakeCoffee("대전", 300, true, true);
// console.log(test);



// // ******* 그냥 슬랙보고.... ***

// class MakeCoffee {
//   constructor(wondoo, water, sugar, milk) {
//     this.wondoo = wondoo;
//     this.water = water;
//     this.sugar = sugar;
//     this.milk = milk;
//   }

//   // ************ 규격만들기 *********************


//   set wondoo(value) {
//     if(typeof(value) === "string") {
//       this._wondoo = value;
//     } else {
//       console.error("wondoo는 문자열이어야 합니다.");
//     }
//   }
    
//   get wondoo() {
//     return this._wondoo + "산";
//   }
// }

// let test = new MakeCoffee("대전", 300, false, true);
// console.log(test);
// console.log(test.wondoo); // . (점을 겟이라 읽는 듯 ) 이 없었다면 언더바 _ 붙였어야 한다


// set water(value) {
//   if(typeof(value) === "number") {
//   this._water = value;
// } else {
//   console.error("wondoo는 문자열이어야 합니다.");
// }

// get water() {
// return this._water + "ml";
// }

// set sugar(value) {
//   if(typeof(value) === "boolean") {
//     this._sugar = value;
//   } else {
//     console.error("sugar는 boolean이어야 합니다.");
//   }
// }

// get sugar() {
//   if(this._sugar === true) {
//     return "단맛커피";
//   } else {
//     return "쓴맛커피";
//   }
// }


























// *  슬랙 전체 코드





class MakeCoffee {
  constructor(wondoo, water, sugar) {
    this.wondoo = wondoo;
    this.water = water;
    this.sugar = sugar;
  }
  // ************ 규격만들기 *********************
  set wondoo(value) {
    if(typeof(value) === "string") {
      this._wondoo = value;
    } else {
      console.error("wondoo는 문자열이어야 합니다.");
    }
  }
    
  get wondoo() {
    return this._wondoo + "산";
  }

  set water(value) {
    if(typeof(value) === "number") {
      this._water = value;
    } else {
      console.error("water는 숫자이어야 합니다.");
    }
  }

  get water() {
    return this._water + "ml";
  }

  set sugar(value) {
    if(typeof(value) === "boolean") {
      this._sugar = value;
    } else {
      console.error("sugar는 boolean이어야 합니다.");
    }
  }

  get sugar() {
    if(this._sugar === true) {
      return "단맛커피";
    } else {
      return "쓴맛커피";
    }
  }

}

let test = new MakeCoffee("대전", 300, false, true);
console.log(test);
console.log(test.wondoo);
console.log(test.water);
console.log(test.sugar);