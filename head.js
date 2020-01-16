class Head{
  constructor(x, y, width, height, angle) {
      var options = {
          'isStatic':true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      Matter.Body.setAngle(this.body, angle);
      World.add(world, this.body);
    }
    display(color){
      var angle = this.body.angle;
      push();
      translate(cannon.bodyc.position.x, cannon.bodyc.position.y);
      rotate(angle);
      fill(color)
      rectMode(CENTER);
      rect(20, -10, this.width, this.height);
      pop();
    }
}