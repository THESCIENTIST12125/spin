class con {
constructor(bodyA,pointB,length,stiffness){
var option= {bodyA:bodyA,pointB:pointB,length:length,stiffness:stiffness,pointA:{x:0,y:0}}

this.body=Constraint.create(option)
this.pointB=pointB

World.add(world,this.body)
}
display(){
    var point1=this.body.bodyA
    var point2=this.pointB
    line(point1.position.x,point1.position.y,point2.x,point2.y)
}



}