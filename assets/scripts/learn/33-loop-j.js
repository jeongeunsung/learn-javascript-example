// 루프


// let count = 0
// const draw = () => {
//   // count = count + 1
//   // console.log('도화지에 ' + count + '번 그림을 그리다.')

//   // 변수에 담아서 변수 숫자를 계산해서 넣지 않아도 console.count로 사용하면 가능
//   console.count('도화지에 그림을 그린 횟수')
// }

// draw()
// draw()
// draw()
// draw()
// draw()
// draw()
// draw()
// draw()
// draw()
// draw()
// draw()
// draw()
// draw()
// draw()
// draw()
// draw()
// draw()
// draw()

// // 위에는 비효율적임

// let wantToDraw = true

// // 조건문
// // 조건이 참이면 블록 내부의 코드 한 번 수행
// if (wantToDraw) {
//   draw()
// }

// // 루프(반복)문 
// // 조건이 참이면 블록 내부의 코드를 조건이 거짓이 될 때까지 반복 수행
// let n = 0

// while (wantToDraw) {
//   draw()

//   // 조건을 거짓으로 만들께요! (멈춤)
//   // wantToDraw = !wantToDraw
//   if (n > 2) {
//     wantToDraw = false
//   }
  
//   n += 1
// }

// let userInput = prompt("1부터 10까지 숫자를 입력하세요")
// userInput = Number.parseInt(userInput, 10)

// console.log(userInput + 10, typeof userInput)

// let i = 10

// while(wantToDraw) {
//   console.log('while문')
//   draw()
  
//   // 선감소 처리 과정 (--i는 9부터 시작 ) 마지막 i값은 10
//   // 후감소 처리 과정 (i--는 10부터 시작 ) 마지막 i값은 11
//   if(i-- <= 0) { 
//     wantToDraw = false
//     console.log('i =', i, 'wantToDraw =', wantToDraw)
//   } else {
//     console.log('i =', i)
//   }
// }

// let drawCount = 0

// const draw = (n) => {
//   console.log('도화지에 그림을 그린 횟수 = ' + n)
// }

// while(drawCount++ < 20 /* 0 ~ 19 */) {
//   // drawCount += 1
//   // ++drawCount
//   // drawCount++

//   console.log(drawCount)

//   // draw(drawCount)
// }

// console.log('last drawCount =', drawCount)

// let drawCount2 = 20
// let i2 = 0

// // 1부터 10까지 출력되고 -> continue -> 16 ~ 20까지 출력
// while(i++ < drawCount2) {
//   if (i2 > 10 && i2 <= 15) {
//     continue
//   }
// }

// // break
// while(i++ < drawCount /* 0 < 20 */) {
//   // i = 1, 2, 3, 4, 5

//   if (i === 5) { // i = 5
//     break // 반복문 종료
//   }

//   draw(i) // i = 1, 2, 3, 4
// }

// console.log('마지막 i 값 =', i) // i = 5



// --------------------------------------------------------------------------
// 사용자 입력 검증 (while)
// "1부터 10까지 숫자를 입력하세요"

// do...while 문 사용 예시

// while 문 사용 예시

;(() => {
  let userInput = parseInt(prompt("1부터 10까지 숫자를 입력하세요"), 10)
  
  do {
    console.error('입력 값이 1부터 10까지 숫자여야 합니다.')
    userInput = parseInt(prompt("1부터 10까지 숫자를 입력하세요"), 10)
  } while (Number.isNaN(userInput) || userInput < 1 || userInput > 10)
  
  console.log('사용자가 입력한 값은 ' + userInput + '입니다.')
})

// 함수는 값이라서 function() {} 이걸 값으로 표현할려면 ()로 묶어줌 (function() {})
;(() => {
  
})


// 함수이름참조()
// (function() {
//   console.log('나를 보세요')
// });

// (function scope1() {
//   var 변수 = '지역 변수 1'
//   console.log(변수)
// });

// (function scope2() {
//   var 변수 = '지역 변수 2'
//   console.log(변수)
// });

// (function scope3() {
//   var 변수 = '지역 변수 3'
//   console.log(변수)
// });

// (function scope4() {
//   var 변수 = '지역 변수 4'
//   console.log(변수)
// });

// ; 세미콜론을 안붙이면 두개가 붙어서 실행이 되버리는 현상이 있어서 앞에 ; 을 붙임 뒤에 ; 붙여도됨

// ;(() => {
//   while()
// })

// (변수선언값할당; 변수가유효한지 비교; 변수변경)

// settings -> glyph

;(() => {
  const students = [
    {이름: '홍민영'},
    {이름: '윤정화'},
    {이름: '허시온'},
    {이름: '조선현'},
    {이름: '성정현'},
    {이름: '조장원'},
  ]
  // console.log(students)

  for(let i = 0, l = students.length; i < l; ++i) {
    const student = students[i]
    console.log(student.이름)
  }
})

// 리터러블 오브젝트 반복가능한 객체

// 'focus-visbile' in document.body.style

// ;(() => {
//   for (let i = 0; i <= 100; ++1) {

//     if(i % 2 === 0 ) {
//       console.log(i)
//     }
//   }
// })


;(() => {

//   배열 메서드 forEach()를 사용해 다음을 수행합니다.

  const players = [
    {
      name: '차범근',
      position: '공격수',
      strength: '폭발적인 스피드와 강한 슈팅',
      weakness: '조금 직선적인 플레이 스타일'
    },
    {
      name: '박지성',
      position: '미드필더',
      strength: '왕성한 활동량과 팀워크',
      weakness: '골 결정력 부족'
    },
    {
      name: '손흥민',
      position: '공격수',
      strength: '양발 슈팅 능력과 스피드',
      weakness: '볼 간수력 부족 시 논란 있음'
    },
    {
      name: '홍명보',
      position: '수비수',
      strength: '정확한 패스와 리더십',
      weakness: '순간적인 스피드 부족'
    },
    {
      name: '이운재',
      position: '골키퍼',
      strength: '경험과 안정감 있는 리딩',
      weakness: '하체 반응 속도 부족 지적'
    },
    {
      name: '조광래',
      position: '미드필더',
      strength: '패스와 경기 조율 능력',
      weakness: '몸싸움 약점'
    },
    {
      name: '김남일',
      position: '수비형 미드필더',
      strength: '터프한 수비와 투지',
      weakness: '거친 플레이로 카드 다수'
    },
    {
      name: '이영표',
      position: '풀백',
      strength: '지능적인 수비와 정확한 크로스',
      weakness: '공격 가담 시 존재감 약하다는 평도 있음'
    },
    {
      name: '기성용',
      position: '미드필더',
      strength: '롱패스와 시야',
      weakness: '수비 집중력 기복'
    },
    {
      name: '정성룡',
      position: '골키퍼',
      strength: '공중볼 처리 능력',
      weakness: '큰 경기에서의 불안감'
    },
    {
      name: '황선홍',
      position: '공격수',
      strength: '위치 선정과 침착한 슈팅',
      weakness: '부상 빈도'
    },
    {
      name: '안정환',
      position: '공격수',
      strength: '화려한 기술과 센스',
      weakness: '경기 외적 이슈로 평가 갈림'
    },
    {
      name: '김진수',
      position: '풀백',
      strength: '왕성한 오버래핑과 크로스',
      weakness: '수비 시 위치 선정'
    },
    {
      name: '이강인',
      position: '공격형 미드필더',
      strength: '창의적인 패스와 킥 능력',
      weakness: '수비 가담 부족'
    },
    {
      name: '황희찬',
      position: '공격수',
      strength: '돌파력과 피지컬',
      weakness: '결정력 기복'
    }
  ]

  console.log(players)
  
// 1. 배열에 포함된 각 선수 이름을 콘솔 패널에 출력
for(let i = 0, l = players.length; i < l; ++i) {
  const playerNames = players[i]
  console.log(playerNames.name)
}

// 2. 배열의 각 항목 중 `name` 값이 `"안정환"`인 정보가 위치하는 인덱스 출력


// 3. 배열에 포함된 모든 선수의 이름만 포함한 `playerNames` 배열 생성
// 4. 골키퍼 포지션 선수만으로 구성된 `goalkeepers` 배열을 새롭게 생성

})

;(() => {

  // 
  let fruits = ['사과', '배', '오렌지']

  console.log(fruits)

  let shoppingCart = fruits
  console.log(shoppingCart)

  shoppingCart.push('바나나')
  console.log(shoppingCart)
  console.log(shoppingCart.length)
})

;(() => {

  //   요소 “Jazz”, "Blues"가 있는 styles 배열을 생성합니다.
  const styles = ['Jazz', 'Blues']
  // "Rock-n-Roll"을 배열 끝에 추가합니다.
  styles.push('Rock-n-Roll')
  const stylesIndex = styles.indexOf('Rock-n-Roll')
  console.log(stylesIndex)
  // 배열 정 중앙에 있는 요소를 "Classics"로 바꿉니다. 가운데 요소를 찾는 코드는 요소가 홀수 개인 배열에서도 잘 작동해야 합니다.
  const stylsSplice = styles.splice(1, 1, 'Classics')
  console.log(stylsSplice)
  // 배열의 첫 번째 요소를 꺼내서 출력합니다.

  // "Rap"과 "Reggae"를 배열의 앞에 추가합니다.
  styles.unshift('Rap', 'Reggae')

  // 끝 위치에 항목 추가
  const lastStyles = styles.splice(styles.length, 0, 'ddd')
  console.log(lastStyles)
  console.log(styles)

  // 중간에 23 넣기
  const numbers = [1, 4, 5]
  numbers.splice(1, 0, 2, 3)
  console.log(numbers)

  // 배열 복사
  const numbers2 = [8, 6, 5]
  const sliceNumbers = numbers2.slice()

  sliceNumbers.unshift('1', '2')
  console.log(sliceNumbers)

})

;(() => {
  //   아래 작성된 배열 데이터를 사용해 실습을 진행합니다. (people 배열을 복사해 연습)

  // ```jsx
  // const people = [
  //   '세종대왕',
  //   '이순신',
  //   '김구',
  //   '유관순',
  //   '장영실',
  //   '신사임당',
  // ]
  // ```

 
  
  const people = [
    '세종대왕',
    '이순신',
    '김구',
    '유관순',
    '장영실',
    '신사임당',
  ]
  
  // 1. people 배열에서 '이순신' 항목의 인덱스를 확인합니다.
  let peopleIndex = people.indexOf('이순신')
  console.log(peopleIndex)
   // 2. people 배열 시작 위치에 '정약용', '지석영'을 추가합니다. 
  //     1. `unshift()` 활용
  //     2. `splice()` 활용
  people.unshift('정약용', '지석영')
  // 3. people 배열 끝 위치에 '김유신', '을지문덕'을 추가합니다. 
  //     1. `push()` 활용
  //     2. `splice()` 활용
  people.push('김유신', '을지문덕')
  people.splice(people.length, 0, '김유신', '을지문덕')
  // 4. people 배열 시작 위치에서 '세종대왕', '이순신'을 제거합니다.
  //     1. `shift()` 활용
  //     2. `splice()` 활용
  people.
  console.log(people)
  // 5. people 배열 끝 위치에서 '장영실', '신사임당'을 제거합니다.
  //     1. `pop()` 활용
  //     2. `splice()` 활용


})()





