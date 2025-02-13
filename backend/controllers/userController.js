import aysncHandler from 'express-async-handler';

// Description: This file contains the routes for the user model
//route post /api/users/auth
//@acess Public
const authUser = aysncHandler(async (req, res) => {  // eslint-disable-line no-unused-vars // This is a route handler function for the /api/users/auth route // This function is asynchronous because it will be making a call to the database 
    res.status(200).json({ message: 'Auth User' }) // 200 is the status code for OK
    });
    
//@desc Auth user & get token
//@route POST /api/users/login
//@access Public
const registerUser = aysncHandler(async (req, res) => {  // eslint-disable-line no-unused-vars // This is a route handler function for the /api/users/auth route // This function is asynchronous because it will be making a call to the database 
    res.status(200).json({ message: 'Register User' }) // 200 is the status code for OK
    });
        
//@desc logout user / clear cookie
//@route Post /api/users/logout
const logoutUser = aysncHandler(async (req, res) => {  // eslint-disable-line no-unused-vars // This is a route handler function for the /api/users/auth route // This function is asynchronous because it will be making a call to the database 
    res.status(200).json({ message: 'Logout User' }) // 200 is the status code for OK
    });

//@desc Get user profile
//@route GET /api/users/profile
//@access Private

const getUserProfile = aysncHandler(async (req, res) => {  // eslint-disable-line no-unused-vars // This is a route handler function for the /api/users/auth route // This function is asynchronous because it will be making a call to the database
    res.status(200).json({ message: 'Get User Profile' }) // 200 is

});

//@desc Update user profile
//@route PUT /api/users/profile
//@access Private

const updateUserProfile = aysncHandler(async (req, res) => {  // eslint-disable-line no-unused-vars // This is a route handler function for the /api/users/auth route // This function is asynchronous because it will be making a call to the database
    res.status(200).json({ message: 'Update User Profile' }) // 200 is
    
});



    export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile };