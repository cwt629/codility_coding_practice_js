/*
[Easy] Dominator
*/

function solution(A) {
    let answer = -1;
    let countMap = new Map();

    // 순회하면서 각 value를 가진 인덱스를 배열 형태로 저장한다
    for (let i = 0; i < A.length; i++) {
        if (countMap.has(A[i])) {
            countMap.get(A[i]).push(i);
        }
        else {
            countMap.set(A[i], [i]);
        }
    }

    // map을 순회하며, dominator가 든 인덱스들을 찾는다
    const THRESHOLD = A.length / 2;
    countMap.forEach((val) => {
        if (val.length > THRESHOLD) {
            answer = val[0];
        }
    });

    return answer;
}
