/* ---------------------------------------------------------------------- */
/* For In Loop                                                            */
/* ---------------------------------------------------------------------- */



const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2022,
  // hasOwnProperty: function (){
  //   return '헤헤'
  // }
};

key 값이 궁금할때 => in
let key = 'creator'
console.log(key in javaScript)    ->안에 뭐가 들어있는지 확인할때 / key가 자바스크립트안에 있어?



let key = 'valueOf'

console.log(key in javaScript)    -> true / valueof를 갖고있지 않은데 있다고 함
이유 : 대상이 없으면 부모 조상까지 다 찾음  -> 정확한 계산을 할 수 없음



// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

console.log(javaScript.hasOwnProperty(key));
hasOwnProperty -> js 자체에서 hasOwnProperty 함수를 보호해주지 않음

Object.prototype.nickName = 'tiger'


// 객체 자신의(own) 속성(property)인지 확인(has)하는 방법   -> hasOwnProperty
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

안전하게 보호하면서 ~~할 수 있는 방법이 있음
Object.prototype.hasOwnProperty
그냥 쓸 수 없음 hasOwnProperty는 남에꺼

hasOwnProperty() 는 함수

console.log(Object.prototype.hasOwnProperty.call(java.javaScript,key))
빌려쓰기 위해 필요한 것 ->call


// let a = {}

// Object.prototype  === {} 

for(let key in javaScript){

  if( ({}).hasOwnProperty.call(javaScript,key)){
      console.log(key);
  }

}


const user = {
  name: 'tiger',
  age : 32
}


function hello (a,b,c){
  console.log(a,b,c);
  console.log(this);
}



hello.call(user,1,2,3)







// for ~ in 문
// - 객체 자신의 속성만 순환하려면?

// - 배열 객체 순환에 사용할 경우?
//  객체에 양보하세요 ..


let tens = [10,100,1000,10000];


for(let value in tens){
  if( ({}).hasOwnProperty.call(tens,value)){
    console.log(tens[value]);
  }
}
