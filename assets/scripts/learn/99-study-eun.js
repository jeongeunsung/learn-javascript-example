// 오류 났을때 대처법
// 1. 콘솔 오류, 시점 차이
// 2. 콘솔에 오류 없으면 오타 확인!!!


;(() => {
  // DOM 요소의 classList 속성의 메서드를 사용해 클래스 이름을 추가, 제거, 포함 여부 확인, 토글 해보세요.

  // const addClassEvent = document.querySelector('.add')
  
  // addClassEvent.classList.add('active', 'remove', 'contains1', 'contains2', 'text-primary', 'toggle')
  // addClassEvent.classList.remove('remove')
  // console.log(addClassEvent)
  // console.log(addClassEvent.classList.value)
  // if(addClassEvent.classList.contains('contains1')) {
  //   console.log(true)
  // } else {
  //   console.log(false)
  // }

  // const navToggleClassName = document.querySelector('a')
  // console.log(navToggleClassName)
  // navToggleClassName.addEventListener('click', () => {
  //   navToggleClassName.classList.toggle('toggle')
  //   console.log(navToggleClassName)
  // })

})

;(() => {
  // 1. 버튼과 body 찍히는지 콘솔에 찍어보고 상수명에 담기
  // {
  //   const clickButton = document.querySelector('.button')
  //   console.log(clickButton)
  //   const activeBodyName = document.body
  //   console.log(activeBodyName)

    // 2. 버튼과 body에 is-actrive 추가, 제거 만들어서 console.log로 클래스가 추가 되었는지 value로 값을 확인하기
    // clickButton.classList.add('active')
    // console.log(clickButton)
    // console.log(clickButton.classList.value)
    // activeBodyName.classList.add('active')
    // console.log(activeBodyName)
    // console.log(activeBodyName.classList.value)
    // clickButton.classList.remove('active')
    // console.log(clickButton)
    // console.log(clickButton.classList.value)
    // activeBodyName.classList.remove('active')
    // console.log(activeBodyName)
    // console.log(activeBodyName.classList.value)

    // 3. addEventListener을 사용하여 버튼을 클릭하면 is-active 가지고 있는 얘들한테 is-active 추가하고 아니면 제거해라
  //   clickButton.addEventListener('click', () => {
  //     if(activeBodyName.classList.contains('active')) {
  //       clickButton.classList.remove('active')
  //       activeBodyName.classList.remove('active')
  //     } else {
  //       clickButton.classList.add('active')
  //       activeBodyName.classList.add('active')
  //     }
  //   })
  // }

  // {
  //   // console.log(document.querySelector(".clickable"));
  //   const clickable_button = document.querySelector(".clickable");
  //   const activeBody = document.body;

    // // 2. 버튼과 body에 is-actrive 추가, 제거 만들어서 console.log로 클래스가 추가 되었는지 value로 값을 확인하기
    // clickable_button.classList.add("is-active");
    // console.log(clickable_button.classList.value);
    // activeBody.classList.add("is-active");
    // console.log(activeBody.classList.value);
  
    // clickable_button.classList.remove("is-active");
    // console.log(clickable_button.classList.value);
    // activeBody.classList.remove("is-active");
    // console.log(activeBody.classList.value);

    // // 3. addEventListener을 사용하여 버튼을 클릭하면 is-active 가지고 있는 얘들한테 is-active 추가하고 아니면 제거해라
  //   clickable_button.addEventListener("click", () => {
  //     if (activeBody.classList.contains("is-active")) {
  //       clickable_button.classList.remove("is-active");
  //       activeBody.classList.remove("is-active");
  //     } else {
  //       clickable_button.classList.add("is-active");
  //       activeBody.classList.add("is-active");
  //     }
  //   });
  // }

  
})

;(() => {
  // 이벤트 리스너를 DOM 요소에 추가하고 기능을 구현하는 연습을 진행하세요.

  // 나중에 컴포넌트를 작성할 때 이벤트 리스너를 자주 사용하게 될 것입니다.

  // 1. 요소에 클릭 이벤트 리스너를 작성하세요.
  // 요소가 클릭될 때마다 콘솔 패널에 메시지가 출력되도록 합니다.
  // const buttonClick = document.querySelector('.button')
  // console.log(buttonClick)
  // buttonClick.addEventListener('click', () => {
  //   console.log('click')
  // })
  
  // 2. 개발 도구에서 리스너의 존재를 확인해봅니다. 콘솔에서 getEventListeners(요소) 찍어봐야함

  /* ------------------------------------------------------------------------
  
  js파일과 콘솔창에서 getEventListeners(요소)를 넣었는데 referenceError 에러 뜸
  ReferenceError: buttonClick is not defined 에러가 뜨는 이유는 buttonClick 변수가 콘솔에서 인식되지 않기 때문이에요.

  🔍 왜 이런 에러가 발생하나요?
  const buttonClick = ... 코드를 JS 파일 안에 작성하면,
  그 변수는 스크립트 내부의 블록(모듈) 스코프에서만 유효해요.
  그래서 콘솔 창에서는 그 변수를 알지 못해요.

  ----- 해결 방법 3가지 -----
  ✅ 1. 변수에 window에 붙이기 (전역으로 만들기)

  window.buttonClick = document.querySelector('.button');
  console.log(buttonClick);

  buttonClick.addEventListener('click', () => {
    console.log('click');
  });
  이렇게 하면 개발자 도구 콘솔에서 buttonClick을 사용할 수 있어요.

  2. 콘솔에서 다시 선택하기
  콘솔에서 직접 선택한 요소로 리스너 확인:

  getEventListeners(document.querySelector('.button'));

  ✅ 3. $0 사용하기
  Elements 탭에서 요소를 클릭한 후, 콘솔에서:

  getEventListeners($0);
  $0은 방금 클릭한 요소를 가리킵니다.

  -------------------------------------------------------------------------------------- */

  // getEventListeners(buttonClick)

  // 3. 요소를 클릭하면 클래스 이름이 전환되도록 설정해봅니다.
  // 4. 레거시 이벤트 모델로도 구현해봅니다.
  // onclick="handleClick()"을 썼는데 JS 파일의 handleClick을 찾지 못해 ReferenceError가 나는 이유는 다음과 같아요.
  // ❗ 문제 원인: 함수가 전역 스코프에 선언되지 않음
  // 브라우저는 HTML에서 onclick="handleClick()"을 해석할 때,
  // handleClick이라는 함수가 전역(window)에 있어야 한다고 기대합니다.

  // 하지만 JS 파일에 function handleClick()을 정의했을 때,
  // 모듈처럼 로딩되거나 스코프 안에 있다면 전역에서 찾을 수 없어요.

  // ✅ 해결 방법 3가지
  // ✅ 방법 1: 함수를 전역으로 등록하기
  // function handleClick() {
  //   console.log('레거시');
  // }
  // window.handleClick = handleClick; // 전역 등록
  // 또는 바로 전역에 정의:

  // window.handleClick = function () {
  //   console.log('레거시');
  // };
  // ✅ 방법 2: script 태그에 type="module" 쓰지 마세요
  // HTML에서 JS 파일을 불러올 때 아래처럼 쓰면 모듈 스코프라 전역 등록이 안 됩니다:

  // <script type="module" src="main.js"></script> <!-- ❌ -->
  // 👉 이렇게 바꾸세요:

  // <script src="main.js"></script> <!-- ✅ -->

  // function handleClick() {
  //   console.log('레거시')
  // }

  // window.handleClick = handleClick;

  // // 5. 버튼을 클릭하는 이벤트 리스너 화살표 함수를 추가한다, 그리고 콜백함수에서 이벤트 객체를 받는다.
  // buttonClick.addEventListener('click', (e) => {
  //   console.log('이벤트 객체: ', e)
  // })

})

;(() => {
//   const macbookPro = {
//     processor: '2.4 Ghz 7코더',
//     memory: '64GB 2667',
//     macOS: 'Sequoia 15.4',
//     playMusic: function(soneTitle) {
//       console.log('"' + soneTitle + '"재생을 시작합니다.')
//     }
//   }

//   console.log(macbookPro.memory)
//   let name = '성정은'
//   console.log(macbookPro[name]) // name에 대한 속성이 없기 때문에 undefined가 나옴
//   let properyName = 'macOS'
//   console.log(properyName)
//   console.log(macbookPro[properyName])

//   macbookPro.stroge = '2Tb'
//   macbookPro['usbPort'] = 4
//   console.log(macbookPro)
  
//   delete macbookPro.stroge
//   console.log(macbookPro)

//   delete macbookPro['usbPort']
//   console.log(macbookPro)
  
//   macbookPro.playMusic('이별이야기')

//   function cache() {}

//   cache.data = '캐싱된 데이터'
//   console.log(cache.data)

//   function makeAdder(x) {
//     return function(y) {
//       return x + y;
//     };
//   }

//   let add5 = makeAdder(5);
//   console.log(add5(3));
// })

// ;(() => {
//   Element.addEventListelner('mouseenter', function() {})
//   Element.addEventListener('click', () => {})

})

;(() => {
  // 6/23 여러 요소 선택 수업내용 필기

  // NodeList는 배열이 아니고 유사배열 그래서 기능들이 별로 없음
  // 네가티그 인덱스를 지원하지 않음 (음수값으로는 지원하지 않음 -1 그래서 null이 나옴 마지막을 선택할려면 paragraphs.length - 1로 해줘야지 나옴)
  // Loop (반복, 순환)

  // // - while
  // let i = 0, l = paragraphs.length
  // while (i < l) {
  //   const paragraphElement = paragraphs.item(i)
  //   console.log(paragraphElement)
  //   ++i
  // }

  // - do...while

  // - for
  // for (let i = 0, l = paragraphs.length; i < l; ++i) {
  //   const paragraphElement = paragraphs.item(i)
  //   console.log(paragraphElement)
  // }

  // let i = 0, l = paragraphs.length
  // for (i < l) {
  //   const paragraphElement = paragraphs.item(i)
  //   console.log(paragraphElement)
  //   ++i
  // }

  // const PRIMARY_KEY = 'color-primary'

  // // Loop (반복, 순환)
  // // - while
  // let i = 0, l = paragraphs.length
  // while (i < l) {
  //   const paragraphElement = paragraphs.item(i)
  //   paragraphElement.classList.add(PRIMARY_KEY)
  //   ++i
  // }

  // - do...while

  // - for
  // for (let i = 0, l = paragraphs.length; i < l; ++i) {
  //   const paragraphElement = paragraphs.item(i)
  //   // console.log(paragraphElement)
  //   if (paragraphElement.classList.contains(PRIMARY_KEY)) {
  //     paragraphElement.classList.remove(PRIMARY_KEY)
  //   }
  // }

  // // - for...of
  // for (const paragraphElement of paragraphs) {
  //   // console.log(paragraphElement)
  //   if (!paragraphElement.classList.contains(PRIMARY_KEY)) {
  //     paragraphElement.classList.add(PRIMARY_KEY)
  //   }
  // }

  // // - NodeList.forEach((value, key, parent) => {...})
  // paragraphs.forEach((p) => {
  //   if (p.classList.contains(PRIMARY_KEY)) {
  //     p.classList.remove(PRIMARY_KEY)
  //   }
  // })

  // paras[0] => 유사 배열 방식(배열과 유사항 방식), paras.item(0) => 공식적인 웹APi 방식 
})

// HtmlCollection(Live 살아있다) vs. NodeList (static 정적이다) 능력이 다름
;(() => {
  // <div id="star-wars">
  //     <div class="character" data-type="good-guy">루크 스카이워커</div>
  //     <div class="character" data-type="good-guy">요다</div>
  //     <div class="character" data-type="villain">다스 베이더</div>
  //   </div>

  //   1. 좋은 사람(Good Guy)을 모두 선택하세요.
  // const googuyElement = document.querySelectorAll('[data-type="good-guy"]')
  // // 2. 좋은 사람(Good Guy) 모두에게 `excellent` 클래스 이름을 추가하세요.
  // for (const guy of goodGuyList) {
  //   guy.classList.add('excellent')
  // }

  // googuyElement.forEach((guy) => {
  //   guy.classList.add('excellent')
  // })
  // console.log(googuyElement)
  // // 3. 빌런(Villain)을 모두 선택하세요.
  // const villainList = document.querySelectorAll('[data-type="villain"]')
  // console.log(villainList)
  // // 4. 빌런 모두에게 `naughty` 클래스 이름을 추가하세요.
  // // let i = 0, l = villainList.lentgth

  // // for(; i < l;) {
  // //   const villain = villainList[i]
  // //   villain.classList.add('naughty')
  // // } 

  // for(let i = 0, l = villainList.lentgth; i < l; i += 1) {
  //   const villain = villainList[i]
  //   villain.classList.add('naughty')
  // }
  // // 5. 모든 캐릭터(Character)를 선택하세요.
  // // const allCharacters = starWars.querySelectorAll('*')
  // const allCharacters = starWars.querySelectorAll('[data-type]')
  // console.log(allCharacters)

  // // 6. 모든 캐릭터에 `star-wars` 클래스 이름을 추가하세요.
  // allCharacters.forEach((c) => {
  //   c.classList.add('star-wars')
  // })

  // NODE 타입은 다양하지만 사용하는것만 알면 됨
  // document.ELEMENT_NODE => 1 //ELEMENT_NODE 상수임
  // document.TEXT_NODE => 2
  // document.ATTRIBUTE_NODE => 3
})

;(() => {
  // nodeName은 대문자이기 때문에 소문자로 비교하면 false.로 나옴
  // nodeType는 1 (= 엘리먼트 노드)이라고 나옴, (node type의 숫자는 속성인가요?개수인가요? "웹 표준 기술 사양에 따랐을 때, 브라우저 제조사 개발자들은 이를 지켜야 합니다. 각 노드를 식별하기 위한 상수(값은 숫자)")
  // .parentNode(#document) 와 .parentElement(body위에는 html까지만 나옴)

  // 아래 3가지는 중요해서 알아두기
  // Node.childNodes
  // Node.children
  // stRing/toLoserCase()

  // \n은 개행 \t는 탭키
})

// document.activeElement //초점 이동 확인하는 스크립트
// $0
// 다 탐색하게 하는것 보단 변수에 담아서 컴퓨터에 기억해놓고 꺼내 쓰는게 효율적임, 문서에서 매번 찾지 않아도 됨
// 최적화는 직접 하지 않아도 최적화 도구를 이용해서 사용하면 됨

// getPropertyValue는 css의 커스텀 속성을 사용할 수 있는데 옛날 방식()은 사용못함
// set은 

;(() => {
  const element = document.querySelector('.element')
  console.log(element)
  console.dir(element)

  const fontSize = element.style.fontSize
  console.log(fontSize)
  // console.table()
  // 영어 소문자를 대문자로 변경해주는 단축키 아래 잇음
  // view > command palette > uppercase 검색하면 transform to uppercase 단축키 보고 누르기
  // design_is_all
  // all_is_design
})

;(() => {
  // 함수를 호출 할 때 인수를 모두 사용하지 않고 호출을 해도 상관이 없나요? 무조건 필수는 사용해야함 ?pseudoELemenet 물음표로 되어 있는건 옵션이라서 선택임
  // getStyle(element, propertyName, ?pseudoELemenet): propertyValue
  const element = document.querySelector('.element')
  getStyle(element, 'font-weight')

  console.log(element)
  function getStyle(element, propertyName) {
    const elementStyles = getComputedStyle(element)
    const getElementStyles = elementStyles.getPropertyValue(propertyName)

    // return을 안해주면 undefined가 나옴
    console.log(getElementStyles)
  }
  
  // setStyle(element, propertyName, propertyValue): element


// css(element, propertyName, ?propertyValue): element`
})

;(() => {
  // 저는 이렇게 해봤는데 강사님이 하신거랑 달라서... 혹시 괜찮은건가요?
  function css(element, propertyName, propertyValue) {
    const targetElement = document.querySelector(element);
    const getPropertyValue =
      getComputedStyle(targetElement).getPropertyValue(propertyName);
    const setElementStyle = targetElement.style.setProperty(
      propertyName,
      propertyValue
    );
   
    return getPropertyValue, setElementStyle;
  }

  css(".box", "color");
  css(".box", "font-weight", "900");

  // 아래 처럼 변경하기

  function css(selector, propertyName, propertyValue) {
    const targetElement = document.querySelector(selector);
    const oldPropertyValue = getComputedStyle(targetElement).getPropertyValue(propertyName);
    
    targetElement.style.setProperty(propertyName, propertyValue);
    const changedPropertyValue = getComputedStyle(targetElement).getPropertyValue(propertyName);
  
    return { oldValue: oldPropertyValue, newValue: changedPropertyValue };
  }

  // READ
  css(".box", "color");
  
  // WRITE
  css('.box', 'font-size', '240px');
  
  console.log(css(".box", "font-weight", "900"));
})

;(() => {
  
  const h1 = document.querySelector('h1')
  
// 속성 추가(쓰기)
// - id="heading"
h1.setAttribute('id', 'heading')
// - class="headline headline__level--1"
h1.setAttribute('class', 'headline headline__level--1')
// - title="자바스크립트"
h1.setAttribute('title', '자바스크립트')
// - data-role="headline"
h1.setAttribute('data-role', 'headline')
// - data-level="1"
h1.setAttribute('data-level', '1')

// 속성 읽기
// - id
// - class
// - title
// - data-role
// - data-level
})

;(() => {
  // 외부로 부터 보호
  // 블록 스코프를 이용해서

  // html attributes에서 js property로 변경된다
  // 네이티브 = 빌트인, 커스텀 속성 data-접두사
  // 사용자가라는 말은 개발자가 라는 말임
})

;(() => {
  console.log(pElement.attributes)
  console.log(Array.from(pElement.attributes))

  Array.from(pElement.attributes).forEach((attrObject) => {
    pElement.removeAttribute(attrObject.name)
  })
})()

;(() => {
  const readBtn = document.getElementById('read')
      const product = document.querySelector('.product')
      const updateBtn = document.getElementById('update')
      console.log(readBtn)
      console.log(product)
      console.log(updateBtn)

      // 1. "속성 읽기" 버튼 클릭 시, 제품의 커스텀 속성을 읽어 콘솔 패널에 출력합니다. (`getAttribute` 활용)
      readBtn.addEventListener('click', () => {
        console.group('getAttribute')
        const dataName = product.getAttribute('data-name')
        const dataStock = product.getAttribute('data-stock')
        console.log(dataName, typeof dataName)
        console.log(dataStock, typeof dataStock)

        console.groupEnd()
      })
      // 2. "속성 읽기" 버튼 클릭 시, 제품의 커스텀 속성을 읽어 콘솔 패널에 출력합니다. (`dataset` 활용)
      readBtn.addEventListener('click', () => {
        console.group('dataset')
        const dataName = product.dataset.name
        const dataStock = product.dataset.stock
        console.dir(product)
        console.log(dataName, typeof dataName)
        console.log(dataStock, typeof dataStock)

        console.groupEnd()
      })
      // 3. "재고 수정" 버튼 클릭 시, 현재 재고 값에 2를 더한 값으로 설정하고 "📦 재고: 5"로 화면에 반영합니다.
      updateBtn.addEventListener('click', () => {
        const stockNumber = parseInt(product.dataset.stock) + 2
        
        console.log(typeof stockNumber)
      })

      // 4. "속성 제거" 버튼 클릭 시, 제품 `data-stock` 속성을 제거하고, "📦 재고: 없음"으로 화면에 반영합니다.


      // 자바스크립트의 객체는 값이 없으면 undefined를 나오게 하게 설계가 그렇게 되어 있다.
      // 브라우저가 getAttribute와 getELementById는 값이 없을 경우 null이 나오게 설계가 그렇게 되어 있다
})

;(() => {
  // $0은 h1태그를 말하는거
  // DOMRect는 객체이고 웹브라우저에서
})

// 탐색하다 
// 아래로 탐색 ( 자식 또는 자손 찾기)
// 위로 탐색(부모 또는 조상 찾기)
// 옆으로 탐색 (이전/다음 형제 찾기)
// (document.body.childNodes : 문서 안에 body야 너의 모든 childNodes를 보여줘, 띄어쓰기(=공백)도 text노드임)
// children은 어떤 노드를 수집할까? body 내부에 직접적인 자식 요소(직계 자식)들을 찾아온다 htmlColletcion으로 반환 받음(직계자식을 찾을때 많이 사용)
// children과 childNodes 둘다 유사배열이라 배열 객체로 변경할 수 있음
// Array.isArray는 배열이 맞냐라고 물어봄
// children과 childNodes의 차이점

// starWars.querSelectorAll
// parentNode로 하면 #document 나옴
// closest()은 자기도 포함

;(() => {
  // 1. `.card` 요소의 모든 자식 요소를 찾아 콘솔에 출력합니다.
        // 2. `.card` 요소의 첫번째 자식 요소를 찾아 콘솔에 출력합니다.
        // 3. `.card` 요소의 마지막 자식 요소를 찾아 콘솔에 출력합니다.
        // 4. `.card__desc` 요소 내부의 모든 `<p>` 요소를 찾아 콘솔에 출력합니다.

        const card = document.querySelector('.card')

        console.log(card.children)
        console.log(card.firstElementChild)
        console.log(card.lastElementChild)
        console.log(card.lastElementChild.children)


        // 1. `closeButton`의 부모 요소를 탐색해 콘솔 패널에 출력합니다.
        // 2. `closeButton`의 상위 요소 중, `.modal` 요소를 탐색해 콘솔 패널에 출력합니다.
        const closeButton = document.querySelector('.modal__close')
        console.log(closeButton.parentElement)
        console.log(closeButton.closest('.modal'))

        // 1. `activeItem`의 이전 형제 요소를 선택해 콘솔 패널에 출력합니다.
        // 2. `activeItem`의 다음 형제 요소를 선택해 콘솔 패널에 출력합니다.
        // 3. `"서비스"` 콘텐츠를 포함하는 형제 요소를 선택해 콘솔 패널에 출력합니다.
        const activeItem = document.querySelector('.active')
        console.log(activeItem.previousElementSibling.textContent)
        console.log(activeItem.nextElementSibling.textContent)
        console.log(activeItem.parentElement.children)
})

;(() => {
  const productElement = document.querySelector('.product')
        const readButton = document.getElementById('read')
        const updateButton = document.getElementById('update')
        const removeButton = document.getElementById('remove')
        
        // 1. "속성 읽기" 버튼 클릭 시, 제품의 커스텀 속성을 읽어 콘솔 패널에 출력합니다. (`getAttribute` 활용)
        readButton.addEventListener('click', () => {
          console.group('getAttribute')
          const dataName = productElement.getAttribute('data-name')
          console.log('데이터 이름 =', dataName, '타입 =', typeof dataName)
          const dataStock = productElement.getAttribute('data-stock')
          console.log('데이터 재고 =', dataStock, '타입 =', typeof dataStock)
          console.groupEnd()
        })

        // 2. "속성 읽기" 버튼 클릭 시, 제품의 커스텀 속성을 읽어 콘솔 패널에 출력합니다. (`dataset` 활용)
        readButton.addEventListener('click', () => {
          console.group('dataset')
          const dataName = productElement.dataset.name
          console.log('데이터 이름 =', dataName, '타입 =', typeof dataName)
          const dataStock = productElement.dataset.stock
          console.log('데이터 재고 =', dataStock, '타입 =', typeof dataStock)
          console.groupEnd()
        })

        // 3. "재고 수정" 버튼 클릭 시, 현재 재고 값에 2를 더한 값으로 설정하고 "📦 재고: 5"로 화면에 반영합니다.
        updateButton.addEventListener('click', () => {
          const stock = Number(productElement.dataset.stock)
          const updateStockValue = stock + 2
          productElement.dataset.stock = updateStockValue

          // EventTarget -> Node -> Element -> HTMLElement -> HTMLSpanElement -> <span>
          // <span> 요소는 Node이므로 Node 인터페이스의 textContent 사용 가능
          const stockOutput = productElement.querySelector('.stock')
          // Node의 textContent 읽기
          console.log(stockOutput.textContent, typeof stockOutput.textContent)
          // Node의 textContent 쓰기
          stockOutput.textContent = updateStockValue
        })

        // 4. "속성 제거" 버튼 클릭 시, 제품 `data-stock` 속성을 제거하고, "📦 재고: 없음"으로 화면에 반영합니다.
        removeButton.addEventListener('click', () => {
          productElement.removeAttribute('data-stock')
          productElement.querySelector('.stock').textContent = '없음'
        })

        const paragraphs = document.querySelectorAll('.life-tips p')
        console.log(paragraphs)
        console.log(paragraphs.length)

        // for(paragraph of paragraphs) {
        //   paragraph.classList.add('active')
        // }
        // for (const paragraph of paragraphs) {
        //   paragraph.classList.add('color--primary')
        // }

        paragraphs.forEach((paragraph) => {
          paragraph.classList.add('color-primary')
        })

        const paragraphArray = Array.from(paragraphs)
        console.log(paragraphArray)
})

;(() => {
  function round(numberValue) {
          return Math.round(numberValue)
        }

        const box = document.querySelector('.box')
        const measureButton = document.getElementById('measureBtn')

        const boxRect = box.getBoundingClientRect()
        console.log(boxRect)
        console.log(boxRect.top)
        console.log(boxRect.left)

        measureButton.addEventListener('click', () => {
        const boxRect = box.getBoundingClientRect()
        console.log(boxRect)
        console.log(round(boxRect.top))
        console.log(boxRect.width)
        console.log(boxRect.height)
        })
})

