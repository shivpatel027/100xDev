const express = require('express');
const port = 3000;
const app = express();

const user = [ {
    name: 'John',
    kidneys: [{
        healty: false
    }]
}]

app.get('/', (req, res) => {
    const johnKidneys =  user[0].kidneys;  
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;

    for(let i = 0; i < numberOfKidneys; i++) {
        if(johnKidneys[i].healty) {
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }

    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.use(express.json)

app.post('/', (req, res) => {
    const isHealthy = req.body.isHealthy;
    user[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: 'Done!'
    })
})

app.put('/', (req, res) => {
    for(let i = 0; i<user.length; i++) {
        user[0].kidneys[i].healthy = true;
    }
    res.json({});
})

app.delete('/', (req, res) => {
    const newKidneys = [];
    for(let i=0; i<user[0].kidneys.length; i++) {
        if(user[0].kidneys[i],healthy) {
            newKidneys.push({
                helathy: true
            })
        }
    }

    users[0].kidneys = newKidneys;
    res.json({ msg: "done"})
})

app.listen(port);