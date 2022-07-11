//Dependencies
const express=require('express');
const app=express();
const crypto=require('crypto');
const {Worker}=require('worker_threads');





//Basic routing
app.get('/', function(req, res){
    
    //Instantiate the worker object
    const worker=new Worker('./worker.js');


    worker.on('message', function(counter){
        console.log(counter);
        res.send(''+counter);
    }); 

    worker.postMessage('start');

});


app.get('/fast', function(req, res){
    res.send('Hello world, but fast');
})


app.listen(3000);

