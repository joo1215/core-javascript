/* ---------------------------------------------------------------------- */
/* Event Handling                                                         */
/* ---------------------------------------------------------------------- */


/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// 3. 메서드 : element.addEventListener(event, handler[, phase])


/* 이벤트 추가/제거 --------------------------------------------------------- */


const first = getNode('.first');
const second = getNode('.second');


function handler(){
  console.log('hit !');

  // css('.second','display','none')


}

// first.addEventListener('click', handler);



const off = bindEvent('.first','click',handler);

bindEvent('.second','click',off);




// second.addEventListener('click',function(){
//   first.removeEventListener('click', handler);
// })


// 개발자는 이벤트에 대한 책임을 져야한다 = 이벤트를 제거할 수 있게 해줘야한다


















// - addEventListener
// - removeEventListener