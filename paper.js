class paper{
    constructor(){
        var options={
            isStatic:false,
            restitution:0.2,
            friction:0.3,
            density:1.0
    }
   
    this.body = Bodies.circle(250,540,20,options)
    this.image = loadImage("paper.png")
    this.width = 50
    World.add(world,this.body)
}
    display(){
fill ("white")
imageMode(CENTER)
image(this.image,this.body.position.x,this.body.position.y,50,50)
    }
}