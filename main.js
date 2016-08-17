window.addEventListener('load', onWindowLoad, false);

function onWindowLoad(){
    
    initApp();   
    
    
}

function initApp(){
    
    var example1 = document.getElementById('sample1');
       example1.addEventListener('click', onSample1, false);
    
    
    function onSample1(e){
        e.target.innerHTML = "Running";   
        e.target.disabled = true;
        
        
        // Sample 1;
        
        
        
        
        
        
        
    }
       
    
    
}