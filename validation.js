const applicant = require("./params");
const checkAge = require("./input-checker");

console.log(checkAge(applicant.john.name, applicant.john.age));
console.log(checkAge(applicant.daisy.name, applicant.daisy.age));
console.log(checkAge(applicant.guido.name, applicant.guido.age));




