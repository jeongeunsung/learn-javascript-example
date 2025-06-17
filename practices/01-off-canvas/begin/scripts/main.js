const toggelBtnMenu = document.querySelector('.btn-menu')
const body = document.body

toggelBtnMenu.addEventListener('click', () => {
  if(!body.classList.contains('is-active')) {
    body.classList.add('is-active')
  } else {
    body.classList.remove('is-active')
  }

  // 또는 아래 toggle로도 사용 가능
  // body.classList.toggle('is-active')
})

// 이벤트 연결했다(=이벤트 바인딩)
// 스페이지 트리거 하면
// 조건을 분기하다(if, else)
