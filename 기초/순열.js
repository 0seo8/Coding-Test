let input = ["a", "b", "c"];
let count = 0;

/** 1. for문을 이용한 풀이
 * 좋은 풀이는 아님! 
 * 
function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue;
      for (let t = 0; t < arr.length; t++) {
        if (i == t || j == t) continue;

        count++;
      }
    }
  }
}

*/

//2. 재귀를 이용한 풀이

function solution(arr, 스타트위치, 몇개뽑을지) {
  //1. 재귀함수를 멈춰야할 조건

  if (스타트위치 === 몇개뽑을지) {
    count++;
    return;
  }

  //2. 재귀를 돌면서 변경되어야할 부분

  for (let i = 스타트위치; i < arr.length; i++) {
    [arr[스타트위치], arr[i]] = [arr[i], arr[스타트위치]]; //스왑

    solution(arr, 스타트위치 + 1, 몇개뽑을지);

    [arr[i], arr[스타트위치]] = [arr[스타트위치], arr[i]]; //원상복귀
  }
}

solution(input, 0, 2);
console.log(count);
