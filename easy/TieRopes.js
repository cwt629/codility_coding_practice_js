/*
[Easy] TieRopes
*/

function solution(K, A) {
    let answer = 0;
    let currentRope = 0;

    // 앞에서부터 쭉 묶어가며 카운트한다
    for (let i = 0; i < A.length; i++) {
        currentRope += A[i];

        // 길이가 K 이상인지 체크
        if (currentRope >= K) {
            answer++;
            currentRope = 0;
        }
    }

    return answer;
}