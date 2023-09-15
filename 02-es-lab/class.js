'use strict';

class Person {
    constructor(id, fname, laname, age) {
        this.id = id;
        this.fname = fname;
        this.laname = laname;
        this.age = age;
    }

    toString() {
        return `${this.id}: ${this.fname} ${this.laname}, age: ${this.age}`;
    }
}

class User extends Person {
    constructor(id, fname, laname, age, username, password, role = 'Customer') {
        super(id, fname, laname, age);
        this.username = username;
        this.password = password;
        this.role = role;
    }

    toString() {
        return `${super.toString()}, username: ${this.username}, password: ${this.password}, role: ${this.role}`;
    }
}

const users = [
    new User(1, 'John', 'Smith', 45, 'john', 'john123'),
    new User(2, 'Jane', 'Smith', 25, 'jane', 'jane123', 'Admin'),
    new User(3, 'Ivan', 'Petrov', 30, 'ivan', 'ivan123')
];

function logUsers(users) {
    for (const user of users) {
        console.log(user.toString());
    }
}

console.log("Cumulative age of young users:",
    users
    // .filter(function (user) {
    //     return user.age <= 40;
    // })
    .map(user => user.age)
    .reduce((accumulator, age) => accumulator + age , '')
);
