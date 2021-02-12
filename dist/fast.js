"use strict";
var age = 50;
var club = 'Real Madrid';
var itFamous = false;
var famous;
function add(num1, num2) {
    return num1 + num2;
}
add(3, 76);
add('adam', 'sand');
add(3, 'someone');
function doubleItAndConsole(num) {
    var result = num * 2;
    console.log(result);
}
var output = doubleItAndConsole(10);
console.log('output', output);
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
var multiply2;
multiply2 = function (x, y) { return x * y; };
var multiply = function (x, y) { return x * y; };
console.log(multiply(25, 6));
var numbers = [2, 4, 5, 9, 45, 60, 11];
numbers.push(22);
var friends = ['George', 'jeff', 'bill', 'Abdul'];
var megaName = '';
for (var i = 0; i < friends.length; i++) {
    var friend_1 = friends[i];
    if (friend_1.length > megaName.length) {
        megaName = friend_1;
    }
}
console.log('Friend with the largest name', megaName);
// let player: {
//     club: string,
//     salary: number,
// }
// player = {
//     club: 'Real Madrid',
//     salary: 450000,
// }
var player = {
    club: 'Real Madrid',
    salary: 450000,
};
// object
var friend = {
    name: 'samuel David',
    age: 61
};
friend.age = 57;
var messy = {
    name: 'Messy',
    club: 'Barcelona',
    salary: 45000000,
    wife: 'some name',
    isPlaying: true,
};
var ronaldo = {
    name: 'Ronaldo',
    club: 'Real Madrid',
    salary: 40000000,
    isPlaying: true,
};
function getBonus(player, friends) {
    return player.salary * 0.1;
}
var poorPlayer = { age: 50, salary: 100000 };
getBonus(messy, ['sam', 'tam']);
var Person = /** @class */ (function () {
    function Person(name, father) {
        this.name = name;
        this._partner = name;
        this.fatherName = father;
    }
    Person.prototype.getName = function () {
        return this.name + '' + this._partner;
    };
    return Person;
}());
var sam = new Person('Samuel', 'David');
console.log('name', sam.name, sam.fatherName);
var samName = sam.getName();
sam.name = 'Ben';
var user = fullName('ben', 'adam');
