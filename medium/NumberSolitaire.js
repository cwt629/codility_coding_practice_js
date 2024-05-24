/*
[Medium] NumberSolitaire
*/

function solution(A) {
    let maxScores = [A[0]]; // dp 배열

    for (let i = 1; i < A.length; i++) {
        // 기본: 직전(1칸 앞)에서 온 경우
        maxScores[i] = maxScores[i - 1];

        // 2~6칸 앞 탐색하며 최대값 저장
        for (let die = 2; die <= 6; die++) {
            if (i - die >= 0 && maxScores[i] < maxScores[i - die])
                maxScores[i] = maxScores[i - die];
        }

        // 마지막에 현재 숫자를 더해준다
        maxScores[i] += A[i];
    }

    // 목적지에서의 최대 점수 반환
    return maxScores[maxScores.length - 1];
}