const express = require('express');
var cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('WOW! I am exited to learn NOde and Express with nodemon. Automatic restart');
})

const users = [
    { id: 0, name: "Shabana", email: "Jabana@gmail.com", phone: '01521312761' },
    { id: 1, name: "Shabnoor", email: "shabnoor@gmail.com", phone: '01521312761' },
    { id: 2, name: "Srabonti", email: "srabonti@gmail.com", phone: '01521312761' },
    { id: 3, name: "Suchorita", email: "Suchorita@gmail.com", phone: '01521312761' },
    { id: 4, name: "Soniya", email: "Soniya@gmail.com", phone: '01521312761' },
    { id: 5, name: "Susmita", email: "Susmita@gmail.com", phone: '01521312761' },
]
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }
    else {
        res.send(users);
    }

});

// app.METHOD 
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('Hitting', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser)
});




// dynamic API by us 
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
});
app.get('/fruits', (req, res) => {
    res.send(['Yammy Yammy tok marka fazli', 'Mango', 'orange', 'banana', 'apple']);
})
app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yammy Yammy tok marka fazli');
})

app.listen(port, () => {
    console.log('Listening to port', port);
})