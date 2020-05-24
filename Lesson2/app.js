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

const app = express();

const users = [
    {
        name: "Dima",
        age:22
    },
    {
        name: "Vova",
        age:44
    },
]

//когда нет фронта
app.use(express.static(path.join(__dirname,'views')));
app.use(express.json());
app.use(express.urlencoded());


app.engine('.hbs', expressBars({
   extname:'.hbs',
    defaultLayout:false
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'))



app.get('/', ( req,res ) =>{
    res.render('main', {name:'Viktor', showed:false})
})

app.get('/users', ( req,res ) =>{
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
    res.render('users', {users})
})




app.get('/register',(req,res)=>{
    res.render('register')
})

app.post('/reg', (req,res)=>{
    console.log(req.body);

    res.end()
})


app.listen(5000, (err)=>{
    if (err){
        console.log(err);
    } else{
        console.log('listen 5000....');
    }
})
