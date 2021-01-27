class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
      
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(pointA){
        var pointB = this.pointB
        var pointA = this.sling.bodyA.position
        push();
        strokeWeight(4)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop();
        }
        }
}