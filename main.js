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
        
        
        
        function inheritProto(childObject, parentObject){
            
            var copyOfParent = Object.create(parentObject.prototype);
            
            
            copyOfParent.constructor = childObject;
            
            childObject.prototype = copyOfParent;
            
                
            
        }
        

        
        
        function Vehicle(model, make, year){
            this.wheels = 4;
            this.material = 'steel';
            this.engine = 'gas';
            this.running = false;
            this.x = 0;
            this.y = 0;
            this.model = model;
            this.make = make;
            this.year = year;
        }
        
        
        Vehicle.prototype.running = false;
        
        Vehicle.prototype.drive = function(){
                this.running = true;  
                this.x += 20;
                this.y += 20;
                console.log('My new location is x: '+this.x + ' y: '+this.y);
            }
                
        function Car(model, make, year){
            
            //Vehicle.call(this, model, make, year);
            this.wheels = 4;
            
        }
        
        function Moto(model, make, year){
               
            //Vehicle.call(this, model, make, year);
            this.wheels = 2;
            
        }
        

        inheritProto(Car, Vehicle);
        inheritProto(Moto, Vehicle);
        
        
        var myCar = new Car('altima', 'nissan', 2001);
        var myMoto = new Moto('scooter', 'susuki', 2000);
        
        console.log(myCar);
        console.log(myMoto);
        
        myCar.drive();
        
        console.log('Is my car Driving? ' + myCar.running);
        console.log('Is my moto driving? ' + myMoto.running);
        
        
        
        
        
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