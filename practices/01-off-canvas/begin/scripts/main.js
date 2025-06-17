// const toggelBtnMenu = document.querySelector('.btn-menu')
// const body = document.body

// toggelBtnMenu.addEventListener('click', () => {
//   if(!body.classList.contains('is-open')) {
//     body.classList.add('is-open')
//   } else {
//     body.classList.remove('is-open')
//   }

//   // 또는 아래 toggle로도 사용 가능
//   // body.classList.toggle('is-open')
// })

// 이벤트 연결했다(=이벤트 바인딩)
// 스페이지 트리거 하면
// 조건을 분기하다(if, else)

// 공통적으로 들어 가는 클래스를 상수로 넣어서 차후 오타 또는 한번에 수정할 경우 유용함
// const toggelBtnMenu = document.querySelector('.btn-menu')
// const body = document.body
// const OFFSITE_OPEN_CLASSNAME = document.querySelector('.is-open')

// toggelBtnMenu.addEventListener('click', () => {
//   if(!body.classList.contains(OFFSITE_OPEN_CLASSNAME)) {
//     body.classList.add(OFFSITE_OPEN_CLASSNAME)
//   } else {
//     body.classList.remove(OFFSITE_OPEN_CLASSNAME)
//   }
// })

// 콜백함수를 사용하기
const toggelBtnMenu = document.querySelector('.btn-menu')
const body = document.body
const OFFSITE_OPEN_CLASSNAME = 'is-open'

toggelBtnMenu.addEventListener('click', handleToggleOffsite)

function handleToggleOffsite() {
  if(!body.classList.contains(OFFSITE_OPEN_CLASSNAME)) {
    body.classList.add(OFFSITE_OPEN_CLASSNAME)
  } else {
    body.classList.remove(OFFSITE_OPEN_CLASSNAME)
  }
}



