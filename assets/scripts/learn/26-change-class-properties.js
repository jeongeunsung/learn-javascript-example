

// const exorcists = document.getElementById('exorcist-characters')

// const choi = exorcists.querySelector('.master-choi')
// // console.dir(choi.classList)
// // console.dir(villain.classList)

// // console.log(1, choi.classList.contains('master-choi'))
// // console.log(2, choi.classList.contains('active'))


// // 오늘날 주로 사용하는 방법(NEW)
// {
//   choi.classList.add('active')
//   // console.dir(choi.classList.value)
//   choi.classList.remove('master-choi')
// }

const choi = exorcists.querySelector('.master-choi')
const villain = exorcists.querySelector('[data-type="villain"]')


// Element.classList -> DOMTokenList { add, remove, contains, item, replace, toggle }

// let firstClassName = choi.classList.item(0)
// let lastClassName = choi.classList.item(1)
// console.log('firstClassName =', firstClassName)
// console.log('lastClassName =', lastClassName)

// 토글 전
console.log('1. choi.classList.value의 아이템 갯수 =', choi.classList.length)

// 클래스 이름 토글
choi.classList.toggle('charactor-is-active')

// 토글 후
console.log('2. choi.classList.value의 아이템 갯수 =', choi.classList.length)

// let activeClassName = 'charactor-is-active'
// if (!choi.classList.contains(activeClassName)) {
//   choi.classList.add(activeClassName)
// } else {
//   choi.classList.remove(activeClassName)
// }

// 오늘날 주로 사용하는 방법(NEW)
{
  // choi.classList.add('active')
  // console.dir(choi.classList.value)
  // choi.classList.remove('master-choi')
}

{
  // villain-ghost 항목 요소를 찾아서 클래스 이름을 여럿 추가한 뒤,
  // 다시 클래스 이름을 여럿 제거해봅니다.
  villain.classList.add('alpha', 'beta')
  console.log(villain.className)
  
  villain.classList.remove('beta', 'character')
  console.log(villain.className)
  
}




// 이전 시대의 방법 (OLD)
{
  // 문서 객체 속성 읽기
  // console.log(choi.className)
  // x = x + 15
  // x += 15

  // 문서 객체 속성 수정
  // choi.className = choi.className + ' active'
  // choi.className += ' active'


  // let x = 10

  // console.log(x) // 10

  // x = 20
  // console.log(x) // 20

  // x 값에다가 15만큼 더하고 싶다.
  // x = x + 15

  // console.log(x) // 25
}

{
  // villain-ghost 항목 요소를 찾아서 클래스 이름을 여럿 추가한 뒤,
  // 다시 클래스 이름을 여럿 제거해봅니다.
}

// villain.classList.contains('alpha') alpha클래스가 포함되어 있니? 또는 가지고 있니? 라고 물어보는거


// document.querySelector
// ƒ querySelector() { [native code] } //자바스크립트 엔진에 살고 있는 네이티브 코드

// 요소도 객체 classList도 객체
// 클래스 이름을 수집해서 엔진이 브라우저에서 가져온다

/* 아래는 레거시 코드(예전 코드)
x = x + 1
x += 1
document.querySelector('li').className
document.querySelector('li').className = document.querySelector('li').className + ' newClassName'
document.querySelector('li').className += ' newClassName'

// 이제부터는 위에 레거시처럼 안해도 됨 classList를 이용해서 클래스를 추가할수 있게 됐음
// prototype안에 있는 객체 add 메서드를 사용함 */

// HTMLLIElement
// <li> : li 퍼블리셔가 입력하는 방법
// new HTMLLIElement() : 프론트개발자가 자바스크립트로 li 입력하는 방법.


// classList 메서드(=기능) 아래 연습해보기
// .add
// .remove
// .item
// .value
// .length
// .replace
// .toggle
// .contains


// if(!choi.classList.contains('active')) {
//   choi.classList.add('active')
// } else {
//   choi.classList.remove('active')
// }

// // 위에 함수를 중복되는 코드를 제거하고 변수로 사용하면 중복 코드 제거 하고 하나로 사용해서 유지보수가 쉬워짐

// let activeClassName = 'on'

// if(!choi.classList.contains(activeClassName)) {
//   choi.classList.add(activeClassName)
// } else {
//   choi.classList.remove(activeClassName)
// }

// // 위에 if문 사용안해도 할 수 있는 방법 toggle를 사용해서 한줄로 할수 있음
// choi.classList.toogle('active')

const add = document.querySelector('.add')

console.log(add.classList)
add.classList.add('text-primary')
console.log(add.classList.value)
console.log(add.classList.length)
add.classList.remove("")

/* {} 블록스코프를 넣으면 변수명과 상수명이 같이 있어도 블록스코프 안에서만 찾기 때문에 오류나지 않음
{
  const add = document.querySelector('.add')
  console.log(add.classList)
} */

