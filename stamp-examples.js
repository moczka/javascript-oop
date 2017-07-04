window.onload = function(){
  //code
  var stampit = require('stampit');

  window.stampit = stampit;

  var methods = {
    addOne : function add(){
      this.sum += 1;
      return this.sum;
    }
  };
  var properties = {
    make : "Nissan",
    model : "Altima"
  };
  var enclose = function(){
      var on = false;
      this.isOn = function checkOn(){
        return on;
      };
      this.toggle = function toggleOn(){
        on = !on;
        return this;
      };
  };

  var Car = stampit({
    methods: methods,
    refs : properties,
    init : enclose
  });

  var Truck = stampit({
    methods : {
      numberOfWheels : function(){
        return this.wheels;
      }
    },
    refs : {
      wheels : 4
    },
    init : function(){
      var tankSize = 10,
          fuel = 5;
      this.isTankFull = function(){
        return fuel >= tankSize;
      },
      this.fillTank = function(){
        fuel = 10;
      },
      this.getFuel = function(){
        return fuel;
      },
      this.isOn = function(){
        return "YES, it is on!!!";
      }
    }
  });


  var myCar = Car.create();
  var myTruck = stampit().compose(Car, Truck).create();

  window.myCar = myCar;
  window.myTruck = myTruck;

  console.log(myCar);
  console.log(myTruck);


};
