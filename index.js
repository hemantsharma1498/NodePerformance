//Dependencies
const cluster=require('cluster');


//Is the file being executed in master mode?
if(cluster.isMaster){

    //index.js will be executed again but in child mode (in in else clause)
    cluster.fork();


}else{

    //Server will run in child mode

    const express=require('express');
    const app=express();
    
    
    //Function to simulate a compute heavy task
    let pseudoWork=function(duration){
        const start=Date.now();
    
        while(Date.now()-start<duration){}
    };
    
    
    
    
    //Basic routing
    app.get('/', function(req, res){
    
    
        //Single instance of the event loop will take 5 seconds to resolve pseudoWork per call. 
        //Multiple calls demonstrate how the event loop can get blocked up on compute heavy tasks    
        pseudoWork(5000);
        res.send('Hello world');
    });
    
    
    
    
    app.listen(3000);
    
}
