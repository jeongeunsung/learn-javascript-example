;(() => {
  const prevButton = document.querySelector('[aria-label^="이전"]')
  const nextButton = document.querySelector('[aria-label^="다음"]')
  const buttons = document.querySelectorAll('.carousel__button')
  const carouselImage = document.querySelector('.carousel__contents')
  const allImageBoxs = document.querySelectorAll('.carousel__content')
  const allImageArray = Array.from(allImageBoxs)
  const imageBox = document.querySelector('.carousel__content')
  console.log(allImageArray)
  const imageBoxWidth = imageBox.offsetWidth
  console.log(imageBoxWidth)

  const imageIndex = allImageArray.indexOf(imageBox);
  console.log(imageIndex)

  let currentIndex = 0;

  function slideImageIndex(currentIndex) {
    allImageArray.forEach((index) => {
      console.log(index)
      const imageRect = -index * imageBoxWidth
      carouselImage.style.transform = `translateX(${imageRect}px)`
    }) 
  }

  buttons.forEach((prevButton) => {
    prevButton.addEventListener('click', () => {
      if(allImageArray.length > -1) {
        const currentIndex = allImageArray.length--;
        console.log(currentIndex)
      }
      slideImageIndex(currentIndex);
    })
  })
})

;(() => {
  
  // 1. 문서에서 제어할 대상 찾기
    const carousel = document.querySelector('.carousel')
    const prevButton = carousel.querySelector('[aria-label^="이전"]')
    const nextButton = carousel.querySelector('[aria-label^="다음"]')
    const contentsWrapper = carousel.querySelector('.carousel__contents')
    // const contentItem = carousel.querySelector('.carousel__content')
  
  // 2. 상태 클래스 추가
  const SELECTED_CLASSNAME = 'is-selected'
  
  // 3. 현재 다음 탐색, 다음 탐색 기능 구현
  nextButton.addEventListener('click', () => {
    const currentSelected = contentsWrapper.querySelector('.' + SELECTED_CLASSNAME)
    const nextCurrentSelected = currentSelected.nextElementSibling

    const getnextCurrendStyle = getComputedStyle(nextCurrentSelected)
    const distance = getnextCurrendStyle.left
    console.log(distance)
    const contentsWrapperStyle = contentsWrapper.style.transform = 'translateX(-' + distance + ')'

    // 선택된 상태 변경
    // 이전 선택된 콘텐츠에서 활성 상태 클래스 이름 제거
    currentSelected.classList.remove('is-selected')
    nextCurrentSelected.classList.add('is-selected')
  })



})()