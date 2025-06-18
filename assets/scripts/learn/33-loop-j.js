// 루프


// let count = 0
const draw = () => {
  // count = count + 1
  // console.log('도화지에 ' + count + '번 그림을 그리다.')

  // 변수에 담아서 변수 숫자를 계산해서 넣지 않아도 console.count로 사용하면 가능
  console.count('도화지에 그림을 그린 횟수')
}

draw()
draw()
draw()
draw()
draw()
draw()
draw()
draw()
draw()
draw()
draw()
draw()
draw()
draw()
draw()
draw()
draw()
draw()

// 위에는 비효율적임

let wantToDraw = true

// 조건문
// 조건이 참이면 블록 내부의 코드 한 번 수행
if (wantToDraw) {
  draw()
}

// 루프(반복)문 
// 조건이 참이면 블록 내부의 코드를 조건이 거짓이 될 때까지 반복 수행
let n = 0

while (wantToDraw) {
  draw()

  // 조건을 거짓으로 만들께요! (멈춤)
  // wantToDraw = !wantToDraw
  if (n > 2) {
    wantToDraw = false
  }
  
  n += 1
}