// --------------------------------------------------------------------------
// ✅ 컬러 포멧 변경 함수 작성
// --------------------------------------------------------------------------
// - [ ] setHexColor(red, green, blue) : #hexcode 반환
// - [ ] setRgbColor(red, green, blue) : rgb() 문자열 반환
// --------------------------------------------------------------------------

// 10진수 -> 16진수 함수
function toHexadecimal(decimal) {
  return decimal.toString(16)
}

// 예) setRgbColor('ff', 'ff', 'ff') // 결과값: 'rgb(255, 255, 255)'

// 16진수 -> 10진수 함수
function toDecimal(hexadecimal) {
  return parseInt(hexadecimal, 16)
}

// console.log(toHexadecimal(255))
// console.log(toDecimal('ff'))

// --------------------------------------------------------------------------

// 함수 작성 (기능 구현)
function setHexColor(red, green, blue) {
  const redValue = toHexadecimal(red)
  const greenValue = toHexadecimal(green)
  const blueValue = toHexadecimal(blue)
  const colorValue = '#' + redValue + greenValue + blueValue
  return colorValue
}

// 테스트 코드
console.log(setHexColor(255, 255, 255) === '#ffffff')

// --------------------------------------------------------------------------

// 함수 작성 (기능 구현)
function setRgbColor(red, green, blue) {
  const redValue = toDecimal(red)
  const greenValue = toDecimal(green)
  const blueValue = toDecimal(blue)
  const colorValue = 'rgb(' + redValue + ', ' + greenValue + ', '  + blueValue + ')'
  return colorValue
}

// 테스트 코드
console.log(setRgbColor('ff', 'ff', 'ff') === 'rgb(255, 255, 255)')
console.log(setRgbColor('00', 'af', 'ed'))


// 컴포넌트처럼 작은단위로 쪼개서 결과를 내서 큰 단위로 만드는 연습 하기
// 함수로 받아서 큰 단위로 함수안에서 함수를 실행시켜 그 함수를 


// 예) setHexColor(255, 255, 255) // 결과값: '#ffffff'
// 예) setRgbColor('ff', 'ff', 'ff') // 결과값: 'rgb(255, 255, 255)'


// -------------------------------
// web api
// -------------------------------

// 브라우저 윈도우 객체
console.log(window) //window 객체 (객체는 {} 리터럴로 표시됨) === html

// 모티너 스크린 객체
console.log(window.screen) //screen 자바스크립트 객체 창의 뿌리가 되는 요소 html과 비교를 하면 === body와 같다
// 그래서 window 안해도 됨 css 작성할때도 html > body 이렇게 하진 않으니깐
console.log(screen) //이렇게 window 생락하고 사용하면 됨
Window {window: Window, self: Window, document: document, name: '', location: Location, screen: width, ...}
window.screen
window.screen.width
window.location
window.screen.availHeight(availHeight는 가용가능한(사용중인) 높이값)


// spa 만들때 아래 로케이션 객체 히스토리 객체 도큐먼트 객체 사용해서 알아야함

// 로케이션 객체
console.log(window.location) // 
console.log(location) // https는 scure 보안에 관련된 프로토콜
console.log(location.protocol) // https는 scure 보안에 관련된 프로토콜

// 히스토리 객체
console.log(window.history)
console.log(document) // 안에 head body가 들어 가있는데 이것도 객체라고함, html 정적, 자바스크립트는 동적으로 자바스크립트 엔진이 자동으로 만들어줌
console.dir(document) // 자바스크립트 객체를 볼수 있음
// 렌더링 화면에 그려지다
// 트리는 나뭇 뿌리 처럼
// 파싱은 해석하다


console.log(document.compatMode) // DTD 문서의 표준인지 확인하는 것(compat는 호환성)
// backCompat라고 나오면 비표준모드


// 동적과 정적
// 정적 : 직업 하드코딩해야지만 바뀌는것(html) 딱 한번만 자바스크립트 객체로 만들어줌
// 동적 : 자바스크립트로 변경되는것들

// 브라우저 오브젝트 모델(노드js없음)
// window
// document

// 터미널로 가면 node환경에서 window로 console.dir 하면 referenceError 오류남 그래서 윈도우, 도큐먼트, 로케이션은 노드에 있지 않음 그래서 정의되지 않았다고 나옴

// 자바스크립트 코어 객체(노드js 있음)
// Object
// function
// global을 노드js에서 터미널에 입력하면 global객체가 나옴 하지만 브라우저에서는 안나옴

// api는 함수들의 집합

console.log(document.getElementsByTagName('h1')) // getElements에서 s를 붙는것 복수
console.log(document.getElementById('')) // 고유성이라서 s가 안붙음

// input name은 서버로 통신할때 쓰는것 getElementByName

// id값이 자동으로 동적으로 붙여주는게 있는데 그건 postcss임

// Document.getElementsByTagName(tagName)
// console.log(document.getElementsByTagName('li'))

// Document.getElementById(idName)
// let emailInput = document.getElementById('useremail') // 데이터 타입 객체
// console.log(emailInput)

// Document.getElementsByName(name)
// console.log(document.getElementsByName('email'))

// Document.getElementsByClassName(className)
const items = document.getElementsByClassName('item')
console.log(items)