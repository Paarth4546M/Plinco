class Ground{
    constructor(x,y,width,heigth) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,heigth,options);
      this.width = width; 
      this.heigth = heigth;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
    rect(this.body.position.x,this.body.position.y, this.width,this.heigth);
    }
  }