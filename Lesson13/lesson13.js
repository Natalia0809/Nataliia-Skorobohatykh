// task 1
test ('Testing sum 0.1+0.2 is 0.3', () => {
    const floatNumber = 0.1 +0.2;
    expecte(num).toBe(0.3);
});
// task 2
const userList = ['Nick', 'Kate', 'quest123', 'admin', 'new_user_2'];

test ('Testing userList', () => {
    expect(userList).toContain('admin');
    expect(userList[0]).toBe('Nick');
    expect(userList[1]).toBe('new_user_2');
    expect(userList).toHaveLenght(5);
    expect(typeof userList[3] === 'string').toBeTruthy();
    expect(userList[8] === underfined).tobeTruthy();
})


