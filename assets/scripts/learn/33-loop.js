// --------------------------------------------------------------------------
// 📌 루프(Loop)
// --------------------------------------------------------------------------

// draw()
// draw()
// draw()
// draw()
// draw()

// const numbers = [100, 99, 98, 97]
// console.log(numbers)

// --------------------------------------------------------------------------
// if 문 vs. while 문

;(() => {
  const draw = () => {
    console.count('도화지에 그림을 그린 횟수')
    
  }

  let wantToDraw = true

  // 조건문
  // 조건이 참이면 블록 내부의 코드 한 번 수행
  if (wantToDraw) {
    console.log('if문')
    draw()
  }

  // 루프(반복)문 
  // 조건이 참이면 블록 내부의 코드를 조건이 거짓이 될 때까지 반복 수행
  // 특정 상황(조건) 설정
  let i = 10

  while(wantToDraw) {
    console.log('while문')
    draw()

    // 특정 상황이 일치되는 경우
    if(i-- <= 0) { // 선감소(--i): i = 9  / 후감소(i--) i = 10
      // 조건을 참에서 거짓으로 변경
      wantToDraw = false
      console.log('i =', i, 'wantToDraw =', wantToDraw)
    } else {
      // i = i - 1
      // i -= 1 // 10 - 1 -> 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
      
      // 후감소
      // i--
      
      // 선감소
      // --i
      
      console.log('i =', i)
    }
  }
})

// --------------------------------------------------------------------------
// 사용자 입력 검증 (while)
// "1부터 10까지 숫자를 입력하세요"

// window.prompt('message')
// Number.parseInt(value, ?radix)
// Number.isNaN(value)

;(() =>{
  let userInput = parseInt(prompt("1부터 10까지 숫자를 입력하세요"), 10)

  while (Number.isNaN(userInput) || userInput < 1 || userInput > 10) {
    console.error('입력 값이 1부터 10까지 숫자여야 합니다.')
    userInput = parseInt(prompt("1부터 10까지 숫자를 입력하세요"), 10)
  }

  console.log('사용자가 입력한 값은 ' + userInput + '입니다.')
})

// --------------------------------------------------------------------------
// 흐름 제어 (continue, break)

;(() => {
  
  let drawCount = 20
  let i = 0

  const draw = (n) => {
    console.log('도화지에 그림을 그린 횟수 = ' + n)
  }

  // continue
  // while(i++ < drawCount /* 1 ~ 10 -> continue -> 16 ~ 19 */) {
  //   // i += 1
  //   // ++i
  //   // i++

  //   // i = 10
  //   if (i > 10 && i <= 15) {
  //     continue
  //   }

  //   draw(i)
  // }

  // break
  while(i++ < drawCount /* 0 < 20 */) {
    // i = 1, 2, 3, 4, 5

    if (i === 5) { // i = 5
      break // 반복문 종료
    }

    draw(i) // i = 1, 2, 3, 4
  }

  console.log('마지막 i 값 =', i) // i = 5

})


;(() => {
  // let userInput = Number.parseInt(prompt('1부터 10까지 숫자를 입력하세요.'), 10)

  // while (Number.isNaN(userInput) || userInput < 1 || userInput > 10) {
  //   console.error('입력 값이 1부터 10 사이의 숫자여야 합니다.')
  //   userInput = Number.parseInt(prompt('1부터 10까지 숫자를 입력하세요.'), 10)
  // }

  // console.log('userInput =', userInput)


  // 선 증가, 후 증가는 왜 쓰는 지, 어떨 때 쓰는지 궁금합니다! 사실 아직 잘 이해가 안돼서요..ㅠ
  
  // let i = 0

  // step 1.
  // while(i < 10) {
  //   console.log(i)
  //   i = i + 1
  // }

  // step 2.
  // while(i < 10) {
  //   console.log(i)
  //   // i = i + 1
  //   // i += 1
  //   i++
  // }

  // step 3.
  // while(i++ < 10) {
  //   console.log(i)
  // }
  
  // step 4.
  // while(i++ < 10) console.log(i)

})

// --------------------------------------------------------------------------
// 반복문 (do ... while)
// while vs. do ... while

;(() => {
  
  let condition = false

  // do...while 문
  // 조건이 거짓이어도 1번은 반드시 실행
  do {
    console.log('do...while')
  } while(condition)


  // while 문
  // 조건이 거짓이면 1번도 실행 안함
  while(condition) {
    console.log('while')
  }

})

// --------------------------------------------------------------------------
// 사용자 입력 검증 (while)
// "1부터 10까지 숫자를 입력하세요"

// do...while 문 사용 예시
;(() => {
  let userInput

  do {
    userInput = parseInt(prompt("1부터 10까지 숫자를 입력하세요"), 10)
    if (Number.isNaN(userInput) || userInput < 1 || userInput > 10) 
      console.error('입력 값이 1부터 10까지 숫자여야 합니다.')
  } while (Number.isNaN(userInput) || userInput < 1 || userInput > 10)

  console.log('사용자가 입력한 값은 ' + userInput + '입니다.')
})

// while 문 사용 예시
;(() => {
  let userInput = parseInt(prompt("1부터 10까지 숫자를 입력하세요"), 10)

  while (Number.isNaN(userInput) || userInput < 1 || userInput > 10) {
    console.error('입력 값이 1부터 10까지 숫자여야 합니다.')
    userInput = parseInt(prompt("1부터 10까지 숫자를 입력하세요"), 10)
  }
  
  console.log('사용자가 입력한 값은 ' + userInput + '입니다.')
})

// --------------------------------------------------------------------------
// 하나의 파일 안에서 다른 코드와 충돌 없이 일종의 캡슐화(모듈) 처리
// 즉시 실행되는 함수 표현식(IIFE) 패턴

// 함수는 값
// JS에서 (함수값)
// ;(() => {
//   console.log('나를 보세요')
// })()

// --------------------------------------------------------------------------
// i = i + 1 vs. i++
;(() => {
  let i = 0

  i = i + 1

  i++

  ++i

  console.log(i)
})

// --------------------------------------------------------------------------
// for 문
// while 문 vs. for 문


// while 문 예시
;(() => {

  let i = 0

  while(i < 10) {
    console.count('while 문')
    ++i
  }

})

// for 문 예시
;(() => {

  for(let i = 0; i < 10; i = i + 1) {
    console.count('for 문')
  }

})

;(() => {

  let i = 0

  for(; i < 10;) {
    console.count('for 문') 
    ++i
  }
  
})

;(() => {
  // let i = 0

  // for(변수선언값할당; 변수가유효한지비교; 변수변경) {
  for( let i = 0; i < 10; ++i ) {
    console.count('for 문', i) 
    // ++i
  }
  
})

;(() => {
  
  const numbers = [11, 22, 33, 44, 55, 66]

  // numbers를 순환(루프)하되, 33인 값(인덱스) 순서에서 반복문 멈춰라
  for (let i = 0; i < numbers.length; i = i + 1) {
    // const number = numbers.at(i)
    const number = numbers[i]

    if(number === 33) {
      // 반복문 내부에서 break를 만나면 반복문이 바로 중단됨
      break
    }

    console.log(number)
  }

})

;(() => {
  
  const numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99]

  for (let i = 0, l = numbers.length; i < l; i = i + 1) {
    const number = numbers[i]
    console.log(number)
  }

  // let i = 0, 
  //     l = numbers.length

  // for (; i < l;) {
  //   const number = numbers[i]
  //   console.log(number)
  //   i = i + 1
  // }

})

;(() => {
  const numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99]

  for (let i = 0, number; (number = numbers[i]); i = i + 1) {
    console.log(number)
  }

  // let i = 0, number // undefined

  // for (; (number = numbers[i]);) {
  //   console.log(number)
  //   i = i + 1
  // }

})()