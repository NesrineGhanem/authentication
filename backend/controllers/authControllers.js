const user = require("../modle/user")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports.login = async(req,res)=>{
const {email,password} = req.body

const theuser = await user.findOne({email})
if(theuser !== null) {
    if (bcrypt.compareSync(password, theuser.password)) {
        const token = jwt.sign({_id:theuser._id},"project")
        return res.status(200).json(token);
      }
      else{
        return res.status(400).json({message: "worng password!"});
    }
}else{
    return res.status(400).json({message:'user not found'})
}
};

module.exports.register = (req,res)=>{
const {username,email,password} = req.body
const newuser = new user({
    username,
    email,
    
    password: bcrypt.hashSync(password, 10)

});
newuser.save()
.then(()=>{
return res.status(200).json({message:"welcom new user"})})

.catch((err)=>{
    return res.status(400).json({message:err.message})
})
}