// --------------------------------------------------------------------------
// 📌 JavaScript 모듈(Modules)
// --------------------------------------------------------------------------

var moduleVariable = '모듈 변수'

console.log('JavaScript 모듈 스코프의 변수는 외부에 공개되지 않습니다.')

// 모듈 안에서 let, const, var로 선언한 변수는 기본적으로 그 모듈 안에서만 사용할 수 있고, 다른 파일(모듈)에서는 접근할 수 없다는 뜻

// math.js 파일
// let secretNumber = 42; // 모듈 내부에서만 접근 가능
// export function add(x, y) {
//   return x + y;
// }

// main.js 파일
// import { add } from './math.js';

// console.log(add(2, 3)); // ✅ 사용 가능
// console.log(secretNumber); // ❌ 오류! secretNumber는 외부에 공개되지 않음

// 핵심 요점
// 모듈 내부에서 선언한 변수는 자동으로 private(비공개).
// 외부에서 사용하려면 export로 명시적으로 공개(export) 해야 해요.