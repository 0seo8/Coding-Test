//https://school.programmers.co.kr/learn/courses/30/lessons/120847

function solution(numbers) {
  let temp = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let t = 0; i < numbers.length; t++) {
      if (i === t) continue;

      temp.push(t * i);
    }
  }
  return temp;
}

//좋은 풀이

// function solution(numbers) {
//     numbers.sort((a,b)=>b-a);
//     return numbers[0]*numbers[1];
// }

console.log(solution([1, 2, 3, 4, 5]));
