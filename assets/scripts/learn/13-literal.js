// --------------------------------------------------------------------------
// 📌 리터럴(Literal)
// --------------------------------------------------------------------------

// 개발자의 목적
// 1. 객체 생성
// 2. 숫자 생성

let myNum

// 숫자 리터럴
// 개발자가 원하는 일
myNum = 2025

// 숫자 객체 (생성자는 객체를 생성할 때 사용 = 생성자란 객체를 만들 때 사용하는 함수, new 키워드와 함께 사용)
// 자바스크립트가 하는 일
myNum = new Number(2025).valueOf()

// 숫자 값 결과
console.log(myNum)

// 객체 리터럴을 사용 (쉽게 만들고 싶은데...)
// const heading1 = {
//   'font-weight': 200,
//   'font-size': '6.25rem',
// }

// 자바스크립트에서 객체를 생성하는 방법
// 생성자 함수를 사용해 객체를 생성 (어렵네...)
// const heading1 = new Object()
// heading1['font-weight'] = 200
// heading1['font-size'] = '2.65rem'
// console.log(heading1)

// 결과
// console.log(heading1)

// ====> 그래서 리터럴은 개발자가 간단하고 읽기 쉬워서 자주 사용하기 위한 용도

// 리터럴(Literal)이란?
// 값을 "있는 그대로" 코드에 적는 방식이에요.
// 간단하고, 읽기 쉽고, 자주 씁니다.

// myNum = 2025          // 숫자 리터럴
// myStr = "Hello"       // 문자열 리터럴
// myObj = { key: 'val' } // 객체 리터럴

// 생성자 기본 구조

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// 이렇게 만든 함수는 생성자 함수예요.

// 사용하는 방법

// const greg = new Person('Greg', 25);

// console.log(greg.name); // "Greg"
// console.log(greg.age);  // 25

// 여기서 일어나는 일:
// new 키워드가 Person()을 호출합니다.
// 자바스크립트는 내부적으로 this = {} 빈 객체를 만듭니다.
// this.name = name 이런 코드로 속성이 그 객체에 붙습니다.
// 최종적으로 그 객체를 반환합니다.

// 왜 생성자를 써?
// 상황: 단순한 값 만들기, 리터럴 방식: let num = 10;, 생성자 방식: let num = new Number(10); ❌ 거의 안 씀
// 상황: 여러 개의 같은 구조 객체 만들기, 리터럴 방식: 반복 어려움, 생성자 방식: 생성자 함수로 쉽게 반복 가능✅