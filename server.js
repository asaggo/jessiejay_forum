const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();

const SELECT_ALL_USERS_QUERY = 'SELECT * FROM react_forum.user';
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rufghs0417',
    database: 'react_forum'
});

connection.connect(err =>{
    if(err){
        return err;
    }
});

app.use(cors());

app.get('/', (req, res)=>{
    res.send('go to /users to see users');
});

app.get('/users', (req, res)=>{
    connection.query(SELECT_ALL_USERS_QUERY, (err, results)=>{
        if(err){
            return res.send(err)
        }
        else{
            return res.json({
                data: results
            })
        }
    })
})

app.get('/users/add', (req, res)=>{
    const {firstname, lastname, username, email, password} = req.query;
    const INSERT_USER_QUERY = 
        `INSERT INTO react_forum.user (firstname, lastname, username, email, password) VALUES ('${firstname}', '${lastname}', '${username}', '${email}', '${password}')`;
    connection.query(INSERT_USER_QUERY, (err, results)=>{
        if(err){
            return res.send(err)
        }
        else{
            return res.send('successfully added a new user')
        }
    })
})
app.listen(4000, ()=>{
    console.log('server listening on port 4000');
});