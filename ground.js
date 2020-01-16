class Ground{
    constructor(x,y,w,h){
       var options = {
           'isStatic': true
       }
       this.width = w;
       this.height = h;
       this.body = Bodies.rectangle(x,y,w,h,options);
       World.add(world,this.body);
    }
    display(color){
        fill(color);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        rectMode(CENTER);
    }
}