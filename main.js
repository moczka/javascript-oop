window.addEventListener('load', onWindowLoad, false);

function onWindowLoad(){
    
    initApp();   
    
    
}

function initApp(){
    
    var runButton = document.getElementById('runButton');
       runButton.addEventListener('click', onRun, false);
    var example = document.getElementById('examplePicker');
    
    
    function onRun(e){
        e.target.innerHTML = "Running";   
        e.target.disabled = true;
        
        console.log(example.value);
        
        switch(example.value){
            case "example1":
                exampleOne();
                break;
            case "example2":
                exampleTwo();
                break;
            case "example3":
                
                exampleThree();
                break;
            case "example4":
                
                exampleFour();
                break;      
        }
          
    }
    
    
    function exampleOne(){
        
        function Vehicle(numWheels, material, engine){
            this.wheels = numWheels || 4;
            this.material = material || 'steel';
            this.engine = engine || 'farts';
        }
                
        function Car(model, make, year){
            Vehicle.call(this);
            this.engine = 'gas';
            this.model = model || 'altima';
            this.make = make || 'nissan';
            this.year = year || 2001;        
        }
        
        Car.prototype = new Vehicle();
        
        var myCar = new Car('malibu', 'chevy', 2006);
        var hisCar = new Car('altima', 'nissan', 2001);
        
        
        
        console.log(myCar);
        console.log(myCar.engine);
        
    
       
        
        console.log(hisCar);
        console.log(hisCar.engine);
        
    }
    
    function exampleTwo(){
        
        alert('Youre running example 2');
        
        
        //end of example 1
       
        
    }
    
    function exampleThree(){
        
        alert('Youre running example 3');
        
        
        //end of example 1
       
        
    }
    
    
    
    
    //end of initApp
}