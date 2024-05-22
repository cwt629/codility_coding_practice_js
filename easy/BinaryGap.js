/*
[Easy] 1. BinaryGap
*/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // Implement your solution here
    let bin = N.toString(2);
    let answer = 0;

    // 0 탐색(최초는 무조건 1)
    let count = 0;
    for (let i = 1; i < bin.length; i++) {
        if (bin.charAt(i) === "1") {
            answer = (answer < count) ? count : answer;
            count = 0;
        }
        else count++;
    }

    return answer;
}