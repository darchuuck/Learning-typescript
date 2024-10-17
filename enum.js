"use strict";
var Names;
(function (Names) {
    Names[Names["Oksi"] = 0] = "Oksi";
    Names[Names["Diksi"] = 1] = "Diksi";
    Names[Names["Kristi"] = 2] = "Kristi";
})(Names || (Names = {}));
;
const people3 = {
    uid: 1,
    username: Names.Diksi,
    pets: { kind: "dog" },
};
const people4 = {
    uid: 1,
    username: Names.Kristi,
    pets: { kind: "cat" },
};
console.log(people3, people4);
