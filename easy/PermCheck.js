/*
[Easy] PermCheck
*/

function solution(A) {
    let checked = Array.from({ length: A.length + 1 }, () => (false));
    checked[0] = true; // 논외

    for (let i = 0; i < A.length; i++) {
        // 1~N을 벗어났거나 이미 존재했다면, permutation 깨짐
        if (A[i] > A.length || checked[A[i]]) {
            return 0;
        }

        checked[A[i]] = true;
    }

    // 무사히 벗어났다면 모든 원소가 1번씩 방문된 것
    return 1;
}