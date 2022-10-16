const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
  ];

const mayoresDeEdad = [];
const menoresDeEdad = [];
for( let user of users){
if(user.years > 17){
    mayoresDeEdad.push(user.name)
}else {
    menoresDeEdad.push(user.name)
}
}

console.log(mayoresDeEdad )

console.log(menoresDeEdad)