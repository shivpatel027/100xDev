const allUser = [{
    firstName: 'John',
    gender: 'Male',
}, {
    firstName: 'Shiv',
    gender: 'Male',
}, {
    firstName: 'Jeel',
    gender: 'Female',
}
]

for(let i=0; i<allUser.length; i++) {
    if(allUser[i]["gender"] == 'Female') {
        console.log(allUser[i]["firstName"]);
    }
}