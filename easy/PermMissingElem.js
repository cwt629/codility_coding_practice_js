/*
[Easy] PermMissingElem
*/

function solution(A) {
    let answer = -1;
    let exists = Array.from({ length: A.length + 2 }, () => (false));
    // 0은 존재하지 않으며 판단 범주 외
    exists[0] = true;

    A.forEach((number) => {
        exists[number] = true;
    })

    // 존재하지 않는 수 찾기
    for (let i = 1; i < exists.length; i++) {
        if (!exists[i]) {
            answer = i;
        }
    }

    return answer;
}