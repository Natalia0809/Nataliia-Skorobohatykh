// task 4
function filterFoodPrice(food, min, max) {
    return food.filter(element => element.price >= min&&element.price <= max);    
}
const food = [
    {kind: 'potato', price: 10},
    {kind: 'bread', price: 16},
    {kind: 'pepper', price: 27},
    {kind: 'banana', price: 32},
    {kind: 'lemon', price: 50},
];
test ('Testing filterFoodPrice() function', () => {
    const min =12;
    const max = 40;
    const filterFoodPrice = filterFoodPrice(food, min, max);

    expect(filteredFood).toHaveLength(3);
    expect(filteredFood).toContaininEqual({kind: 'pepper', price:27});
    expect(filteredFood).toEqual([{kind:'bread', price:16}, {kind:'pepper', price:27}, {kind:'banana', price:32}]);
    expect(filteredFood[0].price).toBeGreaterThanOrEqual(min);
    expect(filteredFood[2].price).toBeLessThanOrEqual(max);
    expect(filteredFood).not.toContainEqual({kind: 'lemon', price:50});
});