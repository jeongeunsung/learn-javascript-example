/* eslint-disable no-undef */
 
// 배열 객체
// 배열 리터럴로 배열 만들기
const 장바구니 = ["두부", "계란"];
console.log(장바구니);

// const 장바구니5 = [99];
// console.log(장바구니5);
// const 장바구니6 = new Array(99);
// console.log(장바구니6);
// new Array(99) 앞에 숫자가 한개만 쓸경우 갯수가 99개로 나옴 앞에 빈방들이 99개 있는거라는거 그래서 한개일때는 new Array는 쓰지 말기

// 배열객체.메서드();
// 장바구니 콘솔로 입력하여 prototype안에 at 메서드를 사용하여 장바구니.at(2)로 at() 메서드를 사용해서도 값을 들고 올수 있음
// [] 값괄호를 사용할때는 앞에서 가져올때 편함
// .at()은 끝에서 가져 올때 편함, 음수까지 지원함 (-1) 하면 끝에서 첫번째를 가지고 온다는 말

// 장바구니.at(장바구니.length - 1)
// 장바구니.at(장바구니.length - 2)
// 장바구니[장바구니.length - 2]

// 배열에 대해 이해할 수 있는 연습을 진행합니다.
// 빈 배열을 생성합니다.
console.log(nullArray = [])
// 3개의 항목을 포함하는 배열을 작성합니다.
console.log(threeArray = ['one', 'two', 'three'])
// instructors 배열에서 "야무" 항목을 가져와 yamoo9 변수에 할당합니다.
const instructors = ['야무', '슬비']
let yamoo9 = instructors[0]
console.log(yamoo9)
// instructors 배열에서 "슬비" 항목 값을 "김데리사"로 변경합니다.
instructors[1] = '김데레사'
console.log(instructors[1])


