# W07D04 - Data Fetching & Other Side Effects

### To Do
- [x] Rules for Hooks
- [x] Pure Functions and Side Effects
- [x] `useEffect`
- [x] Cleanup
- [x] Dependencies
- [x] _useEffect_ Flow

### 2 rules for hooks
1. They must be called top-level
2. They must be called inside a React function
3. All hooks have to start with `use`

### Pure Function
* no side effects
* only does one thing
* called with the same arguments will always return the same result


```js
let num = 2;

const addNum = (n) => {
  return n + num;
}
```

### Side Effects
* data fetching
* console.log
* modifying the DOM directly
* establishing socket connections
* establishing timers/intervals



```js
const useEffect = (cb, arr) => {
  if (arr !== arr) {
    previousReturnVal();
    const returnVal = cb();
  }
}
```












