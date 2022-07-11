//Worker thread for high compute (pseudo) task

const {parentPort}=require('worker_threads');


parentPort.on('message', function(){
    let counter=0;

    while(counter<1e9){
        counter++;
    }


    parentPort.postMessage(''+counter);
});