class Table{
  constructor(x,y,z,r,s){
    this.x = x;
     this.y = y;
     this.z = z;
     this.r = r;
     this.s = s;

   this.obj = table.cloneNode(true);
   this.obj.setAttribute("position",{x:this.x , y:this.y , z:this.z});
   this.obj.setAttribute("rotation",{ x: 0, y: this.r, z: 0 });
   this.obj.setAttribute("scale",{ x: this.s, y: this.s, z: this.s });
   this.obj.setAttribute("static-body","");
   scene.append(this.obj);
  }
}