// --------------------------------------------------------------------------
// 📌 (데이터타입).toString(radix?)
// --------------------------------------------------------------------------
// - 타입 변경 (문자열화)
// - 10진수를 다른 진수로 변경 (최소값: 2진수 / 최대값: 36진수)
//   2 -> 2진수로 변경하면? 8진수로 변경하면? 16진수로 변경하면?
// --------------------------------------------------------------------------

// 타입 변경
// console.log('안녕!'.toString())
// console.log((1004).toString())
// console.log((true).toString())
// console.log((false).toString())
// console.log((undefined).toString())
// console.log((null).toString())

// let isLoggedIn = true
// typeof isLoggedIn
// isLoggedIn
// isLoggedIn.toString

// unknown.toString 객체가 아니라서 문자로 바꿀수 없다
// unknown + ''
console.log('this is a string'.toString())
console.log()
let n = 255 // 10진수

// 10진수 -> 2진수 변경
console.log(n.toString(2)) // 2진수

// 10진수 -> 16진수 변경
console.log(n.toString(16)) // 16진수

// 10진수를 2진수 또는 16진수로 변경하는 함수 작성
// ...
// 10진수를 2, 8, 16 진수로 변경하는 함수
// 1. 함수기능 고민
// 10진수.toString(16)
// 2. 적절한 함수 이름 작성
// toHex
// 3. 함수 기능 구현
function toHex(num) {
  return num.toString(16)
}
// 10진수를 16진수(hex)로 변경하는 함수 작성
// 1. 함수 기능 고민 (10진수.toString(16))
// 2. 적절한 함수 이름 작성 (toHex)
// 3. 함수 기능 구현
// 4. 반환값 설계 (16진수 문자열)
// 5. 테스트 (함수 호출 정상 작동 검사)

function toHexadecimal(n) {
  return n.toString(16)
}

// const toHexadecimal = n => n.toString(16)

console.log(toHexadecimal(255) === 'ff')

console.log(toHex(255) === 'ff')
// 4. 반환값 설계(16진수 문자열)
// 5. 테스트

// const toHex = (num) => num.toString(16)
// console.log(toHex(255) === 'ff')

// const toHex = functin(n) {
  //   return num.toString(16)
//   return num.toString(16)
  // }
// console.log(toHex(255) === 'ff')

// --------------------------------------------------------------------------
// 📌 Number.parseInt(string, radix?)
// --------------------------------------------------------------------------
// - 단위(예: px, rem, cm, mm 등) 제거
// - 2 또는 16진수 문자열을 10진수로 변경
// --------------------------------------------------------------------------

// parseInt()
// let value = '32px'
// typeof value
// value = 10
// Number.parseInt(value)
// parseInt(value)
// parseInt(value) + 10
// parseInt(value) + 10 +'px'

// console.dir(Number)하면 Number의 기능들을 알 수 있음
// 단위 제거
// ...
console.log(parseInt('24px'))
console.log(parseFloat('1.625rem'))
console.log(parseInt('277mm'))

// 단위 제거 함수 작성
// ...

// 1. 함수 기능 고민 (parseInt('24px'))
// 2. 적절한 함수 이름 작성 (removeUnit(unitValue) : unitValue는 string값으로 하고 number로 반환)
// 3. 함수 기능 구현
function removeUnit(unitValue) {
  // console.log(unitValue)

  // const valueResualt = parseInt(unitValue)
  // console.log(valueResualt = parseInt(unitValue)
  return parseInt(unitValue)
}

console.log(removeUnit('20px'))

// const removeUnit = function(unitValue) {
//   return parseInt(unitValue)
// }

// console.log(removeUnit('1.5rem'))
// 4. 반환값 설계 (16진수 문자열)
// 5. 테스트 (함수 호출 정상 작동 검사)


// 2진수 문자열 -> 10진수 변경
// ...

// 'ff'
// (255).toString('ff')
// parseInt('ff')
// parseInt('ff', 16)
// parseFloat('ff', 16)

// 16진수 문자열 -> 10진수 변경
// ...

// 16진수 문자열을 10진수로 변경하는 함수 작성
// 1. 함수 기능 고민 (parseFloat('ff', 10))
// 2. 적절한 함수 이름 작성 (fromHexadecimal(hexValue))
// 3. 함수 기능 구현
// 4. 반환값 설계 (16진수 문자열)
// 5. 테스트 (함수 호출 정상 작동 검사)

function fromHexadecimal(hexValue) {
  return parseInt(hexValue, 16)
}

console.log(fromHexadecimal('ff'))


