/* ---------------------------------------------------------------------- */
/* While Loop                                                             */
/* ---------------------------------------------------------------------- */


/*
let i = 0;

while(i < 10){
  console.log('안녕');   //여기까지하고 저장하면 무한루프에 빠짐 그러면 브라우저를 빨리 끄고 다시 서버를 열면 됨

  i++;  //1부터 얻고싶으면 전위형 0부터 얻고싶으면 후위형
}
*/











const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
];


/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */
// /? 왜 신텍스 오류..?

let i = 0

While(i < 7){

  console.log(frontEndDev[i]);

  i++;
}

//위에꺼랑 같음
/* While(i < 7){
  let value + frontEndDev[i]

  console.log(value)

  i++;
} */









// 67 ~ 124 강사님 코드
/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

// console.log(frontEndDev[0]);
// console.log(frontEndDev[1]);
// console.log(frontEndDev[2]);
// console.log(frontEndDev[3]);
// console.log(frontEndDev[4]);
// console.log(frontEndDev[5]);




let i = 0;

while(i < frontEndDev.length){

  let value = frontEndDev[i];

  // console.log(i);

  console.log(value);

  i++;
}



console.log(i);


let z1 = performance.now();
let z2 = performance.now();

console.log(z2-z1);



/* 
let i = frontEndDev.length;
while( i >= 0){
  console.log(i, frontEndDev[i] );
  i--
}
 */

// 전개 연산자  전개 구문 spread oparator

// let copyArray = [...frontEndDev];




// let copyArray = frontEndDev.slice();


// while(copyArray.length){
//   console.log(copyArray.pop());
// }










// 배열의 갯수만큼 돌고 싶을때

/* let i = 0

While(i < frontEndDev.length){

  let value + frontEndDev[i]

  console.log(value)

  i++
} */



/* 6부터 0이 되는것을 원함
let i = frontEndDev.length - 1;

while(i >= 0){

  conasole.log(i,frontEndDev[1]);
  
  i--
}
*/

/* 변수없이 
while(frontEndDev.length){
  console.log(frontEndDev.pop());
}
*/













/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)

// while 문 (역순환 : 역방향)

// 성능 진단 : 순환 vs. 역순환