// task 3 
function getCircleLength(radius){
    return 2 * Math.PI * radius;
}
function getCircleArea(radius) {
    return Math.PI * radius **2;
}
test ('Testing the length of the circle fucntion', () => {
    expect (getCircleLength(22)).toBeCloseTO(138.2, 1);
    expect(getCircleLength()).toBeNan();
})
test ('Testing the area of the circle function', () => {
    expecte(getCircleArea(9)).toBeCloseTo(254.47);
    expect(getCircleArea()).tobeNan()
});

