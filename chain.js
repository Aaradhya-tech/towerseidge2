class chain {
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness :0.04,
            length : 10
        }
    
    this.chain= Constraint.create(options);
    this.pointB = pointB;
    World.add(world,this.chain);
    }

    attach(body){
        this.chain.bodyA = body;
      }

    fly(){
        this.chain.bodyA = null;
    }

    display(){
        push()
        var pointA = this.chain.bodyA.position;
        var pos = this.pointB;
        strokeWeight(3);
        fill(0)
        line(pointA.x,pointA.y,pos.x,pos.y)
        pop()
    }
}