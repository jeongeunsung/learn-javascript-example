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

// const fruitBasket = ['패션후르츠', '애플망고', '워터멜론', '오렌지']

// // // indexOf() 메서드가 반환한 값이 -1보다 크다면? 그 값은 true이다.
// console.log(fruitBasket.indexOf('패션') > -1) // false
// console.log(fruitBasket.indexOf('패션후르츠') > -1) // true
// console.log(fruitBasket.indexOf('애플망고') > -1) // true
// console.log(fruitBasket.indexOf('워터멜론') > -1) // true
// console.log(fruitBasket.indexOf('오렌지') > -1) // true

// // 구문이 긴데? 재사용 가능한 함수로 작성해볼까요?

// function hasItem(array, value) {
//   return array.indexOf(value) > -1
// }

// console.log(hasItem(fruitBasket, '패션')) // 반환값: false
// console.log(hasItem(fruitBasket, '오렌지')) // 반환값: true

// 객체의 경우는 indexof를 사용할수 없다 그래서 없다고 -1이라고 반환값이 나옴
// 판별 함수는 콜백 함수라는 뜻

const 객체멤버 = [
  {이름: '홍민영'},
  {이름: '김진영'},
  {이름: '이범원'}
]

객체멤버.findIndex((멤버) => {
  // 비교해 값이 일치하면 반환 true
  return 멤버.이름 === '홍민영'
})

console.log(객체멤버)

// unshift 
{
  const JS_학습_주제 = ['변수', '함수', '조건문', '객체', '배열', '비교 연산자', '부정 연산자']
  console.log(JS_학습_주제)
}

{
  const 멋사14기_수강생 = [
    {이름: '홍민영'}, // 0
    {이름: '윤정화'}, // 1
    {이름: '허시온'}, // 2
  ]

  console.log(멋사14기_수강생[0])
}

// 배열 원소 내부에 기본 타입만 포함된 경우
// .indexOf()

// .findIndex()
// 배열 원소 내부에 객체 타입이 포함된 경우

// const nestedArray = [
//     [1, 2, 3],
//     ['one', 'three', 'four']
// ]


// nestedArray.findIndex((item) => {
//   return item.at(0) === 1
// })
// item.at(0)은 item은 nestedArray 안에 배열의 각 index 이고 인덱스에서 0번째를 말하는거 그럼 1과 'one'이 됨 그리고 1이 같은 숫자를 찾아서 index값 반환하라는 뜻, 그래서 0으로 나오고 아래 'one'이랑 같은 문자 찾아서 index값 반환하라는 뜻
// 만약 'five'라고 넣었다면 일치하는게 없으니깐 -1을 뱉어냄

// nestedArray.findIndex((item) => {
//     return item.at(0) === 'one'
// })

// "배열 내부에 객체 타입이 포함된 경우, indexOf()로 값이 일치하는 인덱스를 찾을 수 없습니다.
// 그래서 객체 타입을 찾을 때는 findIndex() 메서드를 사용해야 합니다."

// const ones = [1, 1, 1, 1, 1]; 라고 가정하고, 2번째나 3번째의 1을 찾고 싶으면 어떻게 해야하나요?
// indexOf(searchElement, ?fromIndex) ~ fromIndex 활용
const ones = [1, 1, 1, 1, 1]; 
ones

// console.log({counts})는 console.log({'contents': contents}) 를 줄여서 말하는거

// sift는 제거된 아이템을 반환하고 unsift는 추가된 length을 반환함
// 제거는 한개만 제거 가능
// 추가는 여러개 가능

const numbers = [9, 10, 3, 4, 7, 8]
console.log(numbers) // [9, 10, 3, 4, 7, 8]

// 맨 앞 제거 -> 추가
// numbers.shift()
// numbers.shift() // [3, 4, 7, 8]
numbers.splice(0, 2)
// numbers.unshift(1, 2)
numbers.splice(0, 0, 1, 2)

// 맨 뒤 제거 -> 추가
// numbers.pop()
// numbers.pop()
numbers.splice(numbers.length - 2, 2) // [1, 2, 3, 4]
// numbers.push(5, 6)
numbers.splice(numbers.length, 0, 5, 6)

// 추가 및 제거 방법을 사용해 아래 결과를 만들어 보세요.
console.log(numbers) // [1, 2, 3, 4, 5, 6]


// 추가 및 제거 방법을 사용해 아래 결과를 만들어 보세요.
// [1, 2, 3, 4, 5, 6]

// removeFirstItems(numbers, 3)
// removeLastItems(numbers, 2)

// mutation
console.log(numbers)
const removedItmes = numbers.splice(2, 2)
console.log(removedItmes)
console.log(numbers)
const removedItmes2 = numbers.splice(0, 2)
console.log(removedItmes2)
console.log(numbers)

// 중간에 새 항목 추가
// splice(시작인덱스, 제거할갯수, 추가항목1,추가항목2, ... , 추가항목N)

// 배열 변형 메서드: unshift(), shift(), push(), pop(), splice()
// 배열 보존 메서드: 새로운 배열 반환. 기존의 배열을 변형하지 않음. slice()

// 그럼 slice를 사용하는 순간 새로운 배열을 선언하는거라고 봐도 되나요? 새로운 배열을 선언하는거라고 보면됨

// 값 참조

// const x = []
// const y = []
// x === y

// const x = []
// const y = x


