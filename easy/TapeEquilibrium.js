/*
[Easy] TapeEquilibrium
*/

function solution(A) {
    let left = A[0], right = A.reduce((acc, cur) => (acc + cur), 0) - A[0]; // 초기는 p = 1
    let answer = Math.abs(right - left);

    // sliding window 방식으로 합 구하기
    for (let p = 2; p < A.length; p++) {
        left += A[p - 1];
        right -= A[p - 1];

        let gap = Math.abs(right - left);

        // 정답 갱신
        if (gap < answer) answer = gap;
    }

    return answer;
}