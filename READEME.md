# 반응속도 체크
## 태그.classList, 태그.className
  - classList : 해당 태그의 특정 클래스를 조작하고 싶을 때
  - className : 해당 태그의 전체 클래스를 조작하고 싶을때

## new Date()
  - 현재 시간 구하기

## const 정리
처음에 const a = '값' 을 선언하면  
a = '값1' 는 불가능하다.

### 값 재할당 불가능
``` javascript
// 값 재할당 불가능 예제
const a = 1;
a = 2;

const b = [1,2,3];
b = [4,5,6];

// 예외
const c = [1,2,3];
c.push(4);
console.log(c); // [1,2,3,4];
```

## reduce 메서드
- 배열을 객체로 변경 가능
- 배열의 모든값을 +, -, * 가능
- 초기값을 넣지 않으면 배열의 첫번째 값이 초기값이다.

``` javascript
배열.reduce((누적값, 현재값) => {
 return 새로운 누적값;
}, 초깃값);
[1,2,3,4].reduce((a, c) => { return a + c})
// a:0 c:1
// a:1 c:2
// a:3 c:3
// a:6 c:4
// return 10

[1,2,3,4].reduce((a, c) => { return a * c})
// a:1 c:1
// a:1 c:2
// a:2 c:3
// a:6 c:4
// return 24

['철수', '영희', '진구', '종국'].reduce((a, c, i) => {
  a[i] = c;
  return a;
)}
```

