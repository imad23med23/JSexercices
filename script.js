//exercice 1
let nums = [2,5,8,7,3]
let nouvNums = nums.map((value) => value *3)
console.log(nouvNums)

//exercice 2
const personnes = [
    { nom: "ALAMI", age: 33, estMember: true },
    { nom: "FATIHI", age: 24, estMember: false },
    { nom: "RAJI", age: 45, estMember: true },
    { nom: "RAMI", age: 37, estMember: false}
    ];

const membbres = personnes.filter(function(item){
    return item.estMember === true
}).map((per)=>per.nom)


console.log(membbres)



//exercice 3
const inscriptions = [
    { id: 10, nom: 'ALAMI', filiere: 'DEVOWFS',frais:500 },
    { id: 11, nom: 'RAJI', filiere: 'DEVOWFS',frais:650 },
    { id: 12, nom: 'NAJI', filiere: 'DEVOWFS',frais:950 },
    { id: 13, nom: 'IBRAHIMI', filiere: 'DEVOWFS',frais:300 }
    ];


const pureAppendInscription=(inscriptions,update)=>{
    return [...inscriptions,update]
} 
    const update = {id: 15, nom: 'Imad', filiere: 'DEVOWFS',frais:400};
    const newInscreption = pureAppendInscription(inscriptions,update)
    console.log(inscriptions)
    console.log(newInscreption)


//exercice 4



 //exercice 5