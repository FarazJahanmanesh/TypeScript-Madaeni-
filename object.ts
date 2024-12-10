var person = {
    name:"faraz",
    lastName : "jahanmanesh",
    age : 21,
}

function fullname(name:string,lastName:string):string{
    return name + " " + lastName;
}

console.log(fullname(person.name,person.lastName));