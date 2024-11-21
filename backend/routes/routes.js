const express= require('express');
const router= express.Router();
const userRoutes= require('./userRoutes')


module.exports= function (route) {

    //API Routes
    route.use('/api/users', userRoutes)
    
}