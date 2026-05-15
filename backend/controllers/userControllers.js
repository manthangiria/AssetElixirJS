import User from '../models/userModel.js';
import jwt  from 'jsonwebtoken';

const createToken = (id) => {
    return jwt.sign({_id:id}, process.env.SEC, {expiresIn:'3d'});
}

const loginUser = async (req,res) => {
    const {name,password} = req.body;
    try {
        const user  = await User.login(name,password);
        const token = createToken(user._id);
        return res.status(200).json({...user,token});
    } catch (error) {
        return res.status(404).json({error:error.message});
    }
};

const signupUser = async (req,res) => {
    const {name, password} = req.body;
    //console.log(name, password);
    //console.log(process.env.SEC)
    //await User.deleteMany({})
    //const x = await User.find()
    //console.log(x)
    //return;
    try {
        const user  = await User.signup(name,password);
        const token = createToken(user._id);
        return res.status(200).json({...user, token});
    } catch (error){
        return res.status(404).json({error:error.message})
    }
};

export {loginUser, signupUser};