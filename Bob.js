class Bob {
  constructor (x,y,radius) {
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0, 
        'isStatic': false 
      };
      this.body = Bodies.circle(x, y,radius, options);
        
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
  };
  display(){
        var radius = this.body.radius;
       
        push();
        translate(this.body.position.x, this.body.position.y);
        //Rotate();
        //imageMode(CENTER);
        fill("pink");
        ellipse(0,0,100,100);
        //image(this.image, 0, 0, this.radius);
        pop();
}
};