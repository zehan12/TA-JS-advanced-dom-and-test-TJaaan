
function getFullName( firstName, lastName ){
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
    let area = 2*pi*r;
    return `The area is ${area}`
}

module.exports = {getFullName,isPalindrome,getCircumfrence,getArea};
