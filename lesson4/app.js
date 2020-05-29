const express = require('express');
const expressBars = require('express-handlebars');
const path = require('path');
const connection= require('./dataBase');
const db= require('./dataBase').getInstance()
db.setModels();


const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname,'views')));


app.engine('.hbs', expressBars({
   extname:'.hbs',
    defaultLayout:false
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'))

const {userRouter,productRouter }= require('./routes');

app.get('/register', (req,res)=>{

    res.render('register')
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.use('/users', userRouter)
app.use('/products', productRouter)

//mysql2
//app.post('/mysql', (req,res)=>{
//     connection.query(`INSERT INTO users (name, email, password) VALUES('${req.body.name}','${req.body.email}','${req.body.password}')`)
//
//     connection.query('SELECT * FROM users',(err,results)=>{
//         res.json(results)
//     });
// })



app.listen(5000, (err)=>{
    if (err){
        console.log(err);
    } else{
        console.log('listen 5000....');
    }
});
