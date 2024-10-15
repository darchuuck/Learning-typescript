import { Invoice } from "./classes/Invoice.js";
let invOne = new Invoice("dasha", "for coffee", 100);
let inTwo = new Invoice("yulia", "for cake", 90);
console.log(invOne.format(), inTwo.format());
let invoices = [];
invoices.push(invOne);
invoices.push(inTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
//----------------------------------
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
