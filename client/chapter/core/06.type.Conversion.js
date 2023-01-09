
const user = {
  sum : function (){
      return this
    }
}

user.sum()




/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */
// String()
// number -> 2022
const YEAR =2022;

console.log(String(YEAR));


// undefined -> 'undefined'
// null -> 'null'

let days = null;
console.log(String(days));


// boolean -> 'true' or 'false'
let isKind = true;
console.log(String(isKind ));
// = console.log(isKind + '');



/* 데이터 → 숫자 ----------------------------------------------------------- */

//  Number()

// undeinfed -> NaN
console.log(Number(undefined));

// null → 0
let money = null;
console.log(Number(money));

// boolean -> true : 1 / false : 0
// *1
// /1
// +
let cutie = true;
console.log(+cutie);

/* 의도하지 않은 형변환 / +cute를 해도 숫자가 나옴 */
console.log(cutie * 1);

// string 숫자형 문자(숫자처럼생겼지만 문자)
let num = '123'
console.log(num / 1);

let num = '     123      '
console.log(num * 1);

// numeric string
let width = '32.23120px';

console.log(parseFloat(width,10));

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''  ->  false
// 위에 나열한 것 이외의 것들 


console.log(Boolean(null))
console.log(Boolean(' '))  /* -> 공백이 있으면 true */

// 명시적이지 않은 형변환인 boolean이 있음 / 느낌표는 부정의 역할 !! 두개면 긍정
console.log(! null)