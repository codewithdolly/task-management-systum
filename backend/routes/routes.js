const express= require('express');
const router= express.Router();
const userRoutes= require('./userRoutes')
const dummyroutes= require('./dummy')
const TaskList= require('./TaskList')


module.exports= function (route) {

    //API Routes
    route.use('/api/users', userRoutes)
    route.use('/api/tasklist', TaskList)
    route.use('/api/dummy',dummyroutes)
    
}