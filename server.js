const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

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

app.get('/', (req, res)=>{
    const temp = '<h2>go to /users to see users</h2>'
    res.send(temp);
});

app.post('/login', (req, res)=>{
    console.log('i got a request');
    const un = req.body.un;
    const pw = req.body.pw;
    console.log('username: ', un);
    console.log('password: ', pw);

    const FIND_USER_QUERY = `SELECT * FROM react_forum.user WHERE username = '${un}';`;
    
    connection.query(FIND_USER_QUERY, (err, result)=>{
        if(err){
            return res.send(err)
        }
        
        console.log('Result: ', result);

        // wrong username
        if(result.length === 0){
            console.log('Invalid username');
            res.json({
                status: 'failed: invalid username'
            })
        }
        else{
            // correct username but wrong password
            if(result[0].password != pw){
                console.log('Invalid password...');
                return res.json(err);
            }
            // correct username and password
            else{
                console.log('success');
                res.json({
                    status: 'success',
                    return_data: result,
                })
                // return res.json({hello:result})
            }
        }
        
    })

})

app.get('/users', (req, res)=>{
    connection.query(SELECT_ALL_USERS_QUERY, (err, result)=>{
        if(err){
            return res.send(err)
        }
        else{
            return res.json({
                data: result
            })
        }
    })
})

app.get('/users/add', (req, res)=>{
    const {firstname, lastname, username, email, password} = req.query;
    const INSERT_USER_QUERY = 
        `INSERT INTO react_forum.user (firstname, lastname, username, email, password) VALUES ('${firstname}', '${lastname}', '${username}', '${email}', '${password}')`;
    connection.query(INSERT_USER_QUERY, (err, result)=>{
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