class Cannon{
  constructor(x,y,width,height){
    var options = {
      'isStatic':true
    }
    this.width = width;
    this.height = height;
    this.bodyb = Bodies.rectangle(x,y,width,height,options);
    this.bodya = Bodies.rectangle(x,y+width/2,width,height,options);
    this.bodyc = Bodies.circle(x,y-height,width/2,options);
    
    World.add(world,this.bodya);
    World.add(world,this.bodyb);
    World.add(world,this.bodyc);
  }
  display(color){
    var posA = this.bodya.position;
    var posB = this.bodyb.position;
    var posC = this.bodyc.position;
    fill(color);
    rectMode(CENTER);
   
    ellipse(posC.x,posC.y,this.width,this.width);
    rect(posA.x,posA.y,this.width,this.height);
    rect(posB.x,posB.y,this.width,this.height);  
  }
}
    //this.bodyd = Bodies.rectangle(x+30,y-width*2/3,width*6/5,height,options);
    //Matter.Body.setAngle(this.bodyd,angle);
    //rect(posD.x,posD.y,this.width*6/5,this.height);