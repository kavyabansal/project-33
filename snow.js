class Snow{

    constructor(x,y,r){
        var options={
            isStatic:false,
            'density':0.04,
            'restitution':0.3
        }
        this.body=Bodies.circle(x,y,r,options);
        World.add(world,this.body);
        this.image = loadImage("snow4.webp");
        this.r=r;
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0,this.r,this.r);
        //scale(0.1);
        pop();
    }
     
}


