/*
[Easy] LongestPassword
(2015 Contest)
*/

function solution(S) {
    let answer = -1;
    let passwords = S.split(" ");

    passwords.forEach((pass) => {
        if (!isValidPassword(pass)) return;

        // valid한 패스워드인 경우, 최대 길이 갱신
        if (pass.length > answer)
            answer = pass.length;
    })

    return answer;
}

// 특정 패스워드가 valid한지 판단하는 함수
function isValidPassword(password) {
    // 1. a-z, A-Z, 0-9로 구성 체크
    if (!new RegExp(/^[a-zA-Z0-9]*$/).test(password)) return false;

    // 2. letter와 digit의 count 체크
    let letterCount = 0, digitCount = 0;
    for (let i = 0; i < password.length; i++) {
        if (password.charAt(i) >= "0" && password.charAt(i) <= "9")
            digitCount++;
        else letterCount++;
    }

    return (letterCount % 2 === 0 && digitCount % 2 === 1);
}