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

app.listen(4000, ()=>{
    console.log('server listening on port 4000');
});