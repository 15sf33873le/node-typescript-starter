import { calcAreaSquare, calcAreaTriangle, calcCompoundInterest } from './simpleMaths'

test('Area Square', () => {
    expect(calcAreaSquare(4)).toBe(16);
})

test('Area Triangle', () => {
    expect(calcAreaTriangle(4, 5)).toBe(10);
})

test("simple positive Compound Interest", () => {
    expect(calcCompoundInterest(100, 0.05)).toBe(105)
})

test("small starting sum Compound Interest", () => {
    expect(calcCompoundInterest(1, 0.05)).toBe(1.05)
})

test("large starting sum Compound Interest", () => {
    expect(calcCompoundInterest(1000000000, 0.05)).toBe(1050000000)
})

test("multiple interval Compound Interest", () => {
    expect(calcCompoundInterest(100, 0.05, 5)).toBe(100*(1.05**5))
})

test("negative Compound Interest", () => {
    expect(calcCompoundInterest(100, -0.05)).toBe(95)
})

test("multiple interval negative Compound Interest", () => {
    expect(calcCompoundInterest(100, -0.05, 5)).toBe(100*(0.95**5))
})