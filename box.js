class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("sprites/wood1.png");
    }
  
   score(){
     if(this.visibility<0&& this.visibility>-105){
       score++;

     }

     box8.score();
     box9.score();
     box10.score();
     box11.score();
     box12.score();
     box131.score();
     box14.score();
     box15.score();
     box16.score();
   }

  };
  