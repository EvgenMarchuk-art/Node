// const {EventEmitter} = require('events');
//
// const ee = new EventEmitter;
//
// //запускаеться сколько угодно раз
// ee.on( 'hello', ()=>{
//     console.log('Hello World')
// });
//
//
// //запускаеться 1 раз
// ee.once( 'test', (firstArg,secondArg)=>{
//     console.log('Test Event')
//     console.log(firstArg)
//     console.log(secondArg)
// });
//
// ee.emit('test','one', 2222222 )
// console.log(ee.listenerCount('test'));
// console.log(ee.listenerCount('hello'));


//const fs = require('fs');

//const writeStream = fs.createWriteStream('./data3.txt')
// for (let i=0; i<1000000; i++) {
//     writeStream.write('Lorem iugyfdhgfj hjgfdfjk khghfk khgjgdhjk khghfhgjk kffgdhj ')
// };

//const readStream = fs.createReadStream('./data.txt')


//
// readStream.on('data',(chunk ) =>{
//     console.log(chunk)
//     console.log('-------------------------')
// });
//
// readStream.on('end',()=>{
//     console.log('End ReAding');
// })

//колхозно
// readStream.on('data', chunk =>{
//     writeStream.write(chunk.toString())
// })


//readStream.pipe(writeStream)

//!!!express!!!
const express = require('express');
const expressBars = require('express-handlebars');
const path = require('path');
const {createUser, getUsers} = require('./Services/user.service')





const app = express();

const users = [
    {
        name: "Dima",
        age:22,
        email:"dima@mail.com",
        password:"12345a"
    },
    {
        name: "Vova",
        age:44,
        email:"vova@mail.com",
        password:"12345a"
    },
]

//когда нет фронта

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname,'views')));



app.engine('.hbs', expressBars({
   extname:'.hbs',
    defaultLayout:false
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'))



app.get('/', ( req,res ) =>{

    res.render('main', {name:'Viktor', showed:true})
})


app.get('/users', async ( req,res ) =>{
//
//
//     // res.write('HELLO WORLD !')
//     // res.write('HELLO WORLD 22!')
//     // res.write('HELLO WORLD 333!')
//     // res.write('HELLO WORLD 44444!')
//     // res.write('HELLO WORLD 5555555!')
//
//     // res.end()
//
//     res.json('hello json')
    const users = await getUsers();



    res.render('users', {users})
})


app.get('/register', (req,res)=>{

    res.render('register')
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.post('/auth', (req,res)=>{

    const{email, password} = req.body;
    const user = users.find(user =>user.email === email);


    if(!user){
       return res.render('error', { message:'User not found'})
    }

    //haash password ->hasg string

    if(user.password !== password){
        return res.render('error', { message:'User not found'})
    }

    res.json({email, name: user.name});
})

app.post('/reg', async (req,res)=>{
    await createUser(req.body);

    res.redirect('/users')
})


app.listen(5000, (err)=>{
    if (err){
        console.log(err);
    } else{
        console.log('listen 5000....');
    }
})
