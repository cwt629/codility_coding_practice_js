/*
[Easy] OddOccurrencesInArray
*/

function solution(A) {
    let counts = new Map();
    let answer = -1;

    A.forEach((number) => {
        increment(counts, number);
    })

    // map 순회하며 count가 홀수인 숫자 찾기
    counts.forEach((count, number) => {
        if (count % 2 === 1) {
            answer = number;
        }
    })

    return answer;
}

// map에서 해당 숫자에 대한 카운트 1 증가
function increment(map, number) {
    if (map.has(number)) {
        map.set(number, map.get(number) + 1);
        return;
    }

    map.set(number, 1);
}