"use strict";
const people1 = {
    uid: 1,
    name: "oksi",
    pets: "dog",
};
const people2 = {
    uid: 1,
    name: "diksi",
    pets: ["dog", "cat"],
};
console.log(people1, people2);
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let doc1 = addUID({ age: 19 });
console.log(doc1);
