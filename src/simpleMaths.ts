export function calcAreaSquare(sideLength: number): number {
    return Math.pow(sideLength, 2);
}

export function calcAreaTriangle(width: number, height: number): number {
    return width * height / 2;
}

export function calcCompoundInterest(startSum: number, interest: number, time = 1): number {
    return startSum * Math.pow(1+interest, time)
}

