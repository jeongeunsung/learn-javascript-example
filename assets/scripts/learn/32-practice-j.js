const people = [
  '세종대왕',
  '이순신',
  '김구',
  '유관순',
  '장영실',
  '신사임당',
]

console.log(people)

// 1. people 배열에서 '이순신' 항목의 인덱스를 확인합니다.
console.log(people.indexOf('이순신'))
// 2. people 배열 시작 위치에 '정약용', '지석영'을 추가합니다. 
//     1. `unshift()` 활용
//     2. `splice()` 활용
// people.unshift('정약용', '지석영')
// people.splice(0, 0, '정약용', '지석영')
// 3. people 배열 끝 위치에 '김유신', '을지문덕'을 추가합니다. 
//     1. `push()` 활용
//     2. `splice()` 활용
// people.push('김유신', '을지문덕')
// people.splice(people.length, 0, '김유신', '을지문덕')
// 4. people 배열 시작 위치에서 '세종대왕', '이순신'을 제거합니다.
//     1. `shift()` 활용
//     2. `splice()` 활용
// people.shift('')
// people.shift('')
// people.splice(0, 2)
// 5. people 배열 끝 위치에서 '장영실', '신사임당'을 제거합니다.
//     1. `pop()` 활용
//     2. `splice()` 활용
// people.pop()
// people.pop()
// people.splice(people.length -2, 2)
// console.log(people)
// 6. people을 복제한 새로운 배열 생성
//    people에서 '이순신', '김구'로 구성된 새로운 집합을 생성
const newPeople = people.slice(1, 3)
console.log(newPeople)
console.log(people)

