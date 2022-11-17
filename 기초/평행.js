/**문제: https://school.programmers.co.kr/learn/courses/30/lessons/120875 */
function solution(dots) {
  var answer = 0;
  let temp = [];
  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      const a = dots[j][0] - dots[i][0];
      const b = dots[j][1] - dots[i][1];

      if (a > 0 && b > 0) {
        temp.push(a / b);
      }
    }
  }

  const uniqTemp = new Set(temp);

  if (temp.length !== [...uniqTemp].length) {
    answer++;
  }

  return answer;
}

console.log(
  solution([
    [1, 4],
    [9, 2],
    [3, 8],
    [11, 6],
  ])
);
console.log(
  solution([
    [3, 5],
    [4, 1],
    [2, 4],
    [5, 10],
  ])
);
