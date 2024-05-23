/*
[Easy] FrogJmp
*/

function solution(X, Y, D) {
    let distance = Y - X;

    return Math.ceil(distance / D);
}