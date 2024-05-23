/*
[Easy] FrogRiverOne
*/

function solution(X, A) {
    let answer = -1;
    let hasLeaf = Array.from({ length: X + 1 }, () => (false));
    hasLeaf[0] = true; // 논외

    let count = X;
    for (let i = 0; i < A.length && count > 0; i++) {
        let position = A[i];
        if (!hasLeaf[position]) {
            hasLeaf[position] = true;
            count--;

            // 모두 떨어진 경우
            if (count === 0)
                answer = i;
        }
    }

    return answer;
}