/*
[Easy] PassingCars
*/

function solution(A) {
    const VALUE_THRESHOLD = 1000000000;
    let passing = Array.from({ length: A.length }, () => (0));

    // 뒤에서부터 1이 나오는 횟수를 쌓아간다
    for (let i = A.length - 2; i >= 0; i--) {
        let prevCar = (A[i + 1] === 1) ? 1 : 0;
        passing[i] = passing[i + 1] + prevCar;
    }

    // 이 중 본인이 1인 경우는 모두 0으로 바꿔준다
    for (let i = 0; i < passing.length; i++) {
        if (A[i] === 1) passing[i] = 0;
    }

    let answer = 0;
    for (let i = 0; i < passing.length; i++) {
        answer += passing[i];
        if (answer > VALUE_THRESHOLD) {
            answer = -1;
            break;
        }
    }

    return answer;
}