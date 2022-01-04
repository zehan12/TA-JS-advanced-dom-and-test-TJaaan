
function fullName( firstName, lastName ){
    return firstName + " " + lastName;
}

function isPalindrome( str ){
    return str.reverse() === str;
}

function getCircumfrence( radius){
    let circumfrence = radius * 2;
    return `The circumference is ${circumfrence}`;
}

function getArea( r){
    const pi = 3.14;
    let area = pi*(r**2);
    return `The area is ${area}`
}

module.exports = {fullName,isPalindrome,getCircumfrence,getArea};
