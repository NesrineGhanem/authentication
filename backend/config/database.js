const mongoose = require ('mongoose')

const connect = ()=>{
    mongoose
    .connect('mongodb://127.0.0.1:27017/authetication')
    .then(()=>{console.log("connect to port 8003")})
    .catch((e)=>{
        console.log(e);
        process.exit(1)})

}

module.exports.connect=connect