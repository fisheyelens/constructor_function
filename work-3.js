// function workThree(a,b){
//   let local = {

// number : index + 1,
// name : name,


//   };
//   local[a]=a;
//   local[b]=b;
//   return local;
// };


// let test = workThree("구하림","유으뜸");
// console.log(test);

function workThree(index, name) {
  let local = {
    number: index + 1,
    name: name,
  };
  return local;
}

module.exports= workThree;
// let test = workThree(0, "구하림");
// console.log(test);