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

const {authRouter, userRouter, productRouter }= require('./routes');

app.use('/auth', authRouter)
app.use('/users', userRouter)
app.use('/products', productRouter)

app.use('*',(err, req,res, next)=> {
        res
            .status(err.status || 400)
            .json({
             message: err.message,
                code: err.customCode

            })
})

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


process.on("unhandledRejection", reason => {

    console.log('_________________')
    console.log(reason);
    console.log('_________________')


   process.exit(0)

});