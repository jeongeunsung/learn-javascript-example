const tabButtons = document.querySelectorAll('.tab')
const tabContents = document.querySelectorAll('.tab__content')
const contentsArray = Array.from(tabContents)
const currentContent = document.querySelector('.tab__content.is-selected')
const contentIndex = contentsArray.indexOf(currentContent)
console.log(contentIndex)

tabButtons.forEach((tab, contentIndex) => {
  console.log(contentIndex)
  tab.addEventListener('click', () => {
    
    tabButtons.forEach((allTab) => {
      allTab.classList.remove('is-selected')
    })
    tabContents.forEach((allTabContent) => {
      allTabContent.classList.remove('is-selected')
    })
    
    tab.classList.add('is-selected')
    console.log(contentIndex)
    tabContents[contentIndex].classList.add('is-selected')
  })
})