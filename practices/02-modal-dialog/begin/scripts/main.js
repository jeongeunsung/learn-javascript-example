const clickButton = document.querySelector('.button')
console.log(clickButton)
const body = document.body
const modalClostButton = document.querySelector('.modal-close-button')
const modalClassName = 'modal-is-open'

const handleAddActive = () => {
  body.classList.add(modalClassName)
}

const handleRomoveActive = () => {
  body.classList.remove(modalClassName)
}

clickButton.addEventListener('click', handleAddActive)
modalClostButton.addEventListener('click', handleRomoveActive)

// 콘솔에서 console.log해서 나오면 오른쪽 눌러서 open-in-element누르면 element 요소로 바로 들어감
// 접근성 4 원칙
// 1원칙 : 인식의 용이성
// 2원칙 : 운용의 용이성
// 3원칙 : 이해의 용이성
// 4원칙 : 견고성

// 같은 기능이 있을때 재사용성으로 handleAddActive 이름은 아무꺼나 이렇게 인수를 함수로 받아서 사용


// 전역은 window
// load는 브라우저 안에 모든 리소스를 다 다운받는 것
// DOMContentLoaded는 html를 다운받음
// 그래서 속도측면에서 DOMContentLoaded가 빠르기 때문에 스크립트 넣을때 여기 넣기

const dialogCloseButton = document.querySelector('.dialog-close-button')
const dialogBox = document.querySelector('.dialog')

dialogCloseButton.addEventListener('click', () => {
  dialogBox.classList.add('is-hidden')
})









