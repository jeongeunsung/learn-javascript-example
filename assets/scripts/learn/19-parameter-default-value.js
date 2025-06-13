// --------------------------------------------------------------------------
// 📌 함수 매개변수 기본값 설정 (조건문 활용)
// --------------------------------------------------------------------------

function getMoney(price/*필수*/, unit/*옵션*/) {
  // 첫번째
  console.log(price)
  console.log(unit)

  // 세번째 
  // 만약 사용자가 전달한 인수에 의해 unit 매개변수 값이 undefined로 설정된다면
  if(unit === undefined) { // 콘솔에 입력하면 unit === undefined true라고 뜸, 그래서 true라고 뜨는걸 찾으면됨 !unit는 true로 나오므로, typeof unit === undefined로도 사용하면 true가 나옴

    // 왜 여기에 return이 없을까?
    // 1. 값을 반환한다 (return = "돌려준다")
    // 2. 함수를 종료한다.
    unit = '원'
  }
  // 세번째를 참인된 거짓인경우 방법도 있음
  // if(!unit) {
  //   unit = '원'
  // }


  // 네번째 사용자가 전달한 인수 값이 달러인 경우
  // 문자 연결하는 방법을 달리해서 결과를 반환한다.
  if(unit === '달러') {
    // 반환값 '$' + '80.75'
    return '$' + price
  }

  // 두번째 개발자가 명시적으로 반환값 설정
  return price + unit

  // unit 매개변수(옵션)
  // 설정 가능한 값: '달러' 또는 '원화'
  // 기본 값: '원'

  // if(unit === '달러' ) {
  //   return
  // } else {
  //   return price + '원'
  // }

}

let moneyKR = getMoney(5000 + 2000 + 1500 + 500) // '10000원'
let moneyUS = getMoney(10.5 + 90 - 20 + 0.25, '달러') // '$80.75'


// function getMoney(price, unit) {
//   if (!unit) unit = '원'
//   if (unit === '달러') return '$' + price
//   return price + unit
// }

// let moneyKR = getMoney(5000 + 2000 + 1500 + 500) 
// let moneyUS = getMoney(10.5 + 90 - 20 + 0.25, '달러') 

// console.log(moneyKR)
// console.log(moneyUS)



// function getMoney(price, unit) {
//   // 매개변수 타입 비교
//   // if (unit === undefined) {

//   // 매개변수 타입이 무엇인지 문자값으로 비교
//   // if (typeof unit === 'undefined') {

//   // 조건문 소괄호 안에서 조건이 평가 (Truthy or Falsey)
//   // 평가 이후, 부정(NOT, !) 연산자로 평가 반전
//   if (!unit) {
//     unit = '원'
//   }

//   if (unit === '달러') {
//     return '$' + price
//   }

//   return price + unit
// }


// function getMoney(price, unit) {
//   if (!unit) unit = '원'
//   if (unit === '달러') return '$' + price
//   return price + unit
// }

// let moneyKR = getMoney(5000 + 2000 + 1500 + 500) 
// let moneyUS = getMoney(10.5 + 90 - 20 + 0.25, '달러') 

// console.log(moneyKR)
// console.log(moneyUS)

// function getMoney(price, unit) {
//   if (!unit) 
//      unit = '원' 개행도 가능함
//   if (unit === '달러') 
//     return '$' + price 개행도 가능함
//   return price + unit
// }

// let moneyKR = getMoney(5000 + 2000 + 1500 + 500) 
// let moneyUS = getMoney(10.5 + 90 - 20 + 0.25, '달러') 

// console.log(moneyKR)
// console.log(moneyUS)