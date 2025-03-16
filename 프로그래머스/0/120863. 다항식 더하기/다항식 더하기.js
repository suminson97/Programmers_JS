function solution(polynomial) {
    let x = 0;
    let num = 0;
    let pArray = polynomial.split(" ");

    for (let i = 0; i < pArray.length; i += 2) {
        if (pArray[i].includes("x")) {
            let coefficient = pArray[i] === "x" ? 1 : Number(pArray[i].slice(0, -1));
            x += coefficient;
        } else {
            num += Number(pArray[i]);
        }
    }

    if (x === 0) return `${num}`;
    if (num === 0) return x === 1 ? "x" : `${x}x`;
    return x === 1 ? `x + ${num}` : `${x}x + ${num}`;
}