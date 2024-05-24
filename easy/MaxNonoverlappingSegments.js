/*
[Easy] MaxNonoverlappingSegments
*/

function solution(A, B) {
    let answer = 0;

    // B에 대해서 정렬이 되어 있으므로, 앞에서부터 다 긁어모아본다
    let index = 0;
    while (index < A.length) {
        // 현재 segment 대입
        answer++;

        // 다음 segment 탐색
        let nextIndex = index + 1;
        while (nextIndex < A.length && A[nextIndex] <= B[index]) nextIndex++;

        index = nextIndex;
    }

    return answer;
}