const {User} = require("../models/user.models")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
//This whole page
module.exports.register = (req, res)=>{
    User.create(req.body)
        .then(user => {
            const userToken = jwt.sign({id: user._id}, process.env.SECRET_KEY);            
            res
                .cookie("usertoken", userToken, {httpOnly: true})
                .json({msg: "success", user:user});
        })
        .catch(err => {
            console.log("in err")
            console.log(err)
            res.status(400).json(err)
        }); 
}

module.exports.cookie =(req, res)=>{
    res.cookie("test","test", {httpOnly:true}).json("success")
}


module.exports.index =(req, res)=>{
    User.find()
        .then(users=>res.cookie("test","test", {httpOnly:true}).json(users))
        .catch(err=>res.json(err))
}

module.exports.login = async(req, res)=>{
    const user = await User.findOne({ email: req.body.email });

    if(user === null) {
        console.log(user)
        return res.sendStatus(400);
    }

    const correctPassword = await bcrypt.compare(req.body.password, user.password);

    if(!correctPassword) {
        console.log(correctPassword)
        return res.sendStatus(400);
    }

    const userToken = jwt.sign({id: user._id}, process.env.SECRET_KEY);

    res
        .cookie("usertoken", userToken, {httpOnly: true})
        .json({ msg: "success!" });  
}

module.exports.logout = (req, res) =>{
    res.clearCookie('usertoken')
    res.sendStatus(200)
}