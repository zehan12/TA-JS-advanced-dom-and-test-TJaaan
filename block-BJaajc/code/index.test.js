const index = require('./index');

test('getFullNames "Zehan" + "Khan" to equal "Zehan Khan"', ()=>{
    expect(getFullName("Zehan","Khan")).toBe("Zehan Khan");
});

test("add 1 + 2 to equal 3" , ()=> {
    expect(add(1,2)).toBe(3);
});

test("add 100 + 2 to equal 102" , ()=> {
    expect(add(100,2)).toBe(102);
});


test("add 10000 + 2 to equal 10002" , ()=> {
    expect(add(10000,2)).toBe(10002);
});

test("add 4 + 2 to not equal 6" , ()=> {
    expect(add(4,2)).not.toBe(6);
});