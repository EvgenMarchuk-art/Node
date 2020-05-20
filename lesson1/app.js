const path = require('path');
const {readFileSync} =require('fs');
const os =require('os');
const fs =require('fs');

const {calculate } = require('./mine.js');

let number = calculate(10,40);
console.log(number);
//
// console.log('-------------------------');
//
// console.log(__dirname);
// console.log(__filename);
// console.log('-------------------------');


// let s = path.resolve(`${process.cwd()}/\////../mongo`)
// console.log("*****************************")
// console.log(s)
// console.log("*****************************")
// let s1 = path.join(__dirname,'files','data.txt')
// console.log(s)
// console.log(s1)


//  fs.writeFile(
//     path.join(__dirname, 'files', 'data.txt'), 'HELLO WORLD \n', err => {
//         console.log(err)}
// )

// for (let i = 0; i < 100; i++) {
//     fs.appendFile(
//         path.join(__dirname, 'files', 'data.txt'), 'HELLO WORLD \n' , err => {
//             console.log(err)
//         })
//
// }

//
// fs.readFile(path.join(__dirname, 'files', 'data.txt'), (err,data) => {
//     console.log(data);
// })

// fs.stat(path.join(__dirname, 'files', 'data.txt'), (err,stats) => {
//     console.log(stats);
// })

//создать директорию
// fs.mkdir(path.join(__dirname, 'zoom'), err => {
//     console.log(err);
// })

//стереть директорию
// fs.rmdir(path.join(__dirname, 'zoom'), err => {
//     console.log(err);
// })

// fs.readdir(path.join(__dirname, 'zoom'), (err,files)=>{
//     console.log(files);
//
// });
//
// fs.stat(path.join(__dirname, 'app.js'), (err,stats)=>{
//     console.log(stats.isDirectory());
// })

// fs.unlink(path.join(__dirname,'xxx.txt.js'),err => {
//     console.log(err)
// });

//перемещение файлов
// fs.rename(path.join(__dirname,'xxx.txt.js'),path.join(__dirname, 'files','xxx.txt.js'),err => {
//     console.log(err);
// } )

//стереть все внутри файла
fs.truncate(path.joinn( __dirname, 'video.txt'),  err =>{
    console.log(err);
});

