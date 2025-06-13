// --------------------------------------------------------------------------
// 📌 typeof 연산자 활용
// --------------------------------------------------------------------------

const o = {
  // key(string, number, symbol이 들어 갈수 있음 string에는 '' 이렇게 작은 따옴표로 할수 있고 name라고만 할 수 있음): value
  name: 'object',
  serialNumber: 20250613,
  isObjectType: () => true,
  isNotDefined: undefined,
  empty: null,
  symbol: Symbol('o'),
  int: 100n,
}

console.log(typeof o)
console.log(typeof o.name)
console.log(typeof o.serialNumber)
console.log(typeof o.isObjectType)
console.log(typeof o.isObjectType())
console.log(typeof o.isNotDefined)
console.log(typeof o.empty)
console.log(typeof o.symbol)
console.log(typeof o.int)
