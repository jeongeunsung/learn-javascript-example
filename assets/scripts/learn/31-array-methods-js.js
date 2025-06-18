// const JS_학습_주제 = ['변수', '함수', '조건문', '객체', '배열', '비교 연산자', '부정 연산자']

// // 배열 항목 위치(index) 찾기(find)
// let 함수_인덱스, 비교_연산자_인덱스

// 함수_인덱스 = JS_학습_주제.indexOf('함수') // 기대값: 1 / 결과값: ?
// console.log('함수_인덱스 =', 함수_인덱스)
// 함수_인덱스 = JS_학습_주제.indexOf('함 수') // 기대값: -1 / 결과값: ?
// console.log('함수_인덱스 =', 함수_인덱스)

// 비교_연산자_인덱스 = JS_학습_주제.indexOf('비교')
// console.log('비교_연산자_인덱스 =', 비교_연산자_인덱스) // 기대값: -1 / 결과값: -1

// 비교_연산자_인덱스 = JS_학습_주제.indexOf('비교연산자')
// console.log('비교_연산자_인덱스 =', 비교_연산자_인덱스) // 기대값: -1 / 결과값: -1

// 비교_연산자_인덱스 = JS_학습_주제.indexOf('비교 연산자')
// console.log('비교_연산자_인덱스 =', 비교_연산자_인덱스) // 기대값: 5 / 결과값: 5

const fruitBasket = ['패션후르츠', '애플망고', '워터멜론', '오렌지']

// // indexOf() 메서드가 반환한 값이 -1보다 크다면? 그 값은 true이다.
console.log(fruitBasket.indexOf('패션') > -1) // false
console.log(fruitBasket.indexOf('패션후르츠') > -1) // true
console.log(fruitBasket.indexOf('애플망고') > -1) // true
console.log(fruitBasket.indexOf('워터멜론') > -1) // true
console.log(fruitBasket.indexOf('오렌지') > -1) // true

// 구문이 긴데? 재사용 가능한 함수로 작성해볼까요?

function hasItem() {
  if(fruitBasket.indexOf('패션') > -1) {
    return true
  } else {
    return fasle
  }
}

hasItem(fruitBasket, '패션') // 반환값: false
hasItem(fruitBasket, '오렌지') // 반환값: true