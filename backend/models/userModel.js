import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({
 name:{
    type:String,
    required:true,
 },
 email:{
    type:String,
    required:true,
    unique:true
    },
    password:{
        type:String,
        required:true
 },
}, {
    timestamps:true
    });
       /**
     * @description: This is the user model
     * @param {string} name - The name of the user
     * @param {string} email - The email of the user
     * @param {string} password - The password of the user
     * @param {string} timestamps - The timestamps of the user
     * @returns {object} - The user object
     * @example
     * const user = new User({
     * name: 'John Doe',
     * email: '
     * password: '123456'
     * });
     * user.save();
     * 
     */

      userSchema.pre('save', async function (next) {
      if (!this.isModified('password')) {
        return next();
      }

      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);

      });
    

    const User = mongoose.model('User', userSchema);


    export default User;