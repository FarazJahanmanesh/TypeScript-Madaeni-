var person = {
    name: "faraz",
    lastName: "jahanmanesh",
    age: 21,
};
function Fullname(name, lastName) {
    return name + " " + lastName;
}
console.log(Fullname(person.name, person.lastName));
