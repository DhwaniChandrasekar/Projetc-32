class Polygon {
    constructor(x, y, width, height, angle) {
      var options = { 
        density: 1, 
    }
    
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      //this.polyimg = loadImage('polygon.png');
      World.add(world, this.body);
    }
  
    display() {
       // image(this.polyimg,20,20);
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      ellipse(0, 0, this.width, this.height);
      pop();
    }


  }