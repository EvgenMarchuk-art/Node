function calculate(a,b) {
    // console.log("*****************************");
    // console.log(__filename);
    // console.log(__dirname);
    // console.log(process.cwd());
    // console.log("*****************************");
    return a+b
}

let z = 17

module.exports = {
    calculate,
    z
};

//export 2 variant
// module.exports.calc = calculate;
// module.exports.z = z;
