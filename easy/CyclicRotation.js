/*
[Easy] 1. CyclicRotation
*/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // Implement your solution here

    // 회전하여 움직이는 횟수
    let rotation = K % A.length;

    // 오른쪽에서 rotation만큼 떨어진 부분을 기준으로 subarray 나누기
    let left = A.slice(0, A.length - rotation), right = A.slice(A.length - rotation);

    // 회전 결과 왼쪽 절반은 뒤로, 오른쪽 절반은 앞으로 간다
    return [...right, ...left];
}