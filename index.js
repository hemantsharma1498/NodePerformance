//Dependencies
const cluster=require('cluster');

//Set single thread per threadpool 
process.env.UV_THREADPOOL_SIZE=1;

//Is the file being executed in master mode?
if(cluster.isMaster){

    //index.js will be executed again but in child mode (as in else clause)
    cluster.fork();
    

}else{

    //Server will run in child mode

    const express=require('express');
    const app=express();
    const crypto=require('crypto');
    
    
    
    
    
    
    //Basic routing
    app.get('/', function(req, res){
        
        //Using pbkdf2 of the crypto module to benchmark performance against blocking code
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', ()=>{
            
            res.send('Hello world');

        });

    });
    
    
    app.get('/fast', function(req, res){
        res.send('Hello world, but fast');
    })
    
    
    app.listen(3000);
    
}
