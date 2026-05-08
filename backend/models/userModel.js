import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import validator from 'validator';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name     : {type:String, required:true},
    email    : {type:String, required:true},
    password : {type:String, required:true}
})

userSchema.statics.signup = async function(name, email,password) {
    if (!validator.isEmail(email)){
        throw Error("Invalid Email!")
    }
    if (!validator.isStrongPassword(password)){
        throw Error("Password is not strong enough")
    }
    const exists = await this.findOne({email});
    if (exists){
        throw Error("Email already exists")
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await this.create({name, email, password:hash});
    return user;
}

userSchema.statics.login = async function(name,password){
    const user = await this.findOne({name:name});
    if (!user){
        throw Error('Incorrect Username')
    }
    const match = await bcrypt.compare(password, user.password)
    if (!match){
        throw Error("Incorrect Password")
    }
    return user;
}

export default mongoose.model('elixirUser', userSchema)

