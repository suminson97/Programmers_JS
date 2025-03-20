function solution(lines) {
    let overlap = new Array(201).fill(0); // -100 ~ 100을 인덱스로 사용 (총 201칸)

    // 모든 선분의 구간을 +1씩 증가시킴
    for (let [start, end] of lines) {
        for (let i = start; i < end; i++) {
            overlap[i + 100]++; // 음수를 방지하기 위해 +100 이동
        }
    }

    // 2개 이상 겹치는 부분의 길이 계산
    return overlap.filter(count => count > 1).length;
}
