
import { clearContents, getInputValue, getNode, getRandom, insertLast, isNumericString, addClass, removeClass } from './lib/index.js';

import { jujeobData } from './data/data.js';



const submit = getNode('#submit');
const resultArea = getNode('.result');






function clickSubmitHandler(e){

  e.preventDefault();

  let name = getInputValue('#nameField');
  let list = jujeobData(name)

  // list.length-1하는 이유는 인덱스 시작값이 0인데, 길이만큼 한다면 한개 더 많게 되니까!
  // 데이터가 배열에 들어있어서 인덱스 시작값이 0입니다! 
// 그리고, 랜덤함수로 랜덤한 인덱스 값을 주어서 랜덤한 '주접데이터'를 추출해주는거에여!!
// 배열의 길이가 6이라고 가정하면   0~5번째 순서만 와야합니다
//  lenght 를 찍으면 6인데 -1 을 해야 0~5 번째로 오는거군요
  let pick = list[getRandom(list.length-1)];




  
  if(!name){
    console.log('이름을 입력해 주세요!');
    return 
  }

  if(isNumericString(name)){
    console.log('제대로된 이름을 입력해주세요.')
    return
  }

  clearContents(resultArea)
  insertLast(resultArea,pick)

}



submit.addEventListener('click',clickSubmitHandler)