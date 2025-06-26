// --------------------------------------------------------------------------
// 📌 attr 유틸리티 함수 작성 및 활용
// --------------------------------------------------------------------------

// 유틸리티 함수 설계
// attr(element, attributeName, ?attributeValue): element | string

// 속성 쓰기 사용법
// const changedElement = attr(element, attributeName, attributeValue)
function setAttribute(element, attributeName, attributeValue) {
  element.setProperty(attributeName, attributeValue)
  return element
  
}

// 처음 만들때
getAttr (element, attributeName)
setAttr (element, attributeName, attributeValue)

// 속성 읽기 사용법
// const attributeValue = attr(element, attributeName)