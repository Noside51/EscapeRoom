class Room{
	
  constructor(x,y,z,r,s){
    this.x = x;
    this.y = y;
    this.z = z;
    this.r = r;
	  this.s = s;
     
	  this.door = Door.cloneNode(true);
    this.door2 = Door2.cloneNode(true);
    this.w11 = w11.cloneNode(true);
	  this.w12 = w12.cloneNode(true);
	  this.w13 = w13.cloneNode(true);
	  this.w14 = w14.cloneNode(true);
    this.w2 = w2.cloneNode(true);
    this.w3 = w3.cloneNode(true);
    this.w112 = w112.cloneNode(true);
	  this.w122 = w122.cloneNode(true);
	  this.w132 = w132.cloneNode(true);
	  this.w142 = w142.cloneNode(true);
    // this.w4 = w4.cloneNode(true);
    this.floor = floor.cloneNode(true);
    this.roof = roof.cloneNode(true);
   
	  let open = false;
	  this.door.setAttribute("position",{x:this.x,y:this.y+(2*this.s),z:this.z});
	  this.door.setAttribute("scale",{ x: this.s, y: this.s, z: this.s });
    this.door.setAttribute("static-body","");
	  this.door.setAttribute("clickable","");
    this.door2.setAttribute("position",{x:this.x,y:this.y+(2*this.s),z:this.z-(12*this.s)});
	  this.door2.setAttribute("scale",{ x: this.s, y: this.s, z: this.s });
    this.door2.setAttribute("static-body","");
    this.door2.setAttribute("clickable","");

    this.w11.setAttribute("position",{x:this.x-(4*this.s),y:this.y+(3*this.s),z:this.z});
    this.w11.setAttribute("scale",{ x: this.s, y: this.s, z: this.s });
    this.w11.setAttribute("static-body","");
	  this.w12.setAttribute("position",{x:this.x+(4*this.s),y:this.y+(3*this.s),z:this.z});
	  this.w12.setAttribute("scale",{ x: this.s, y: this.s, z: this.s });
    this.w12.setAttribute("static-body","");
	  this.w13.setAttribute("position",{x:this.x,y:this.y+(1*this.s),z:this.z});
	  this.w13.setAttribute("scale",{ x: this.s, y: this.s, z: this.s });
	  this.w14.setAttribute("position",{x:this.x,y:this.y+(5*this.s),z:this.z});
	  this.w14.setAttribute("scale",{ x: this.s, y: this.s, z: this.s });
    this.w14.setAttribute("static-body","");

    this.w2.setAttribute("position",{x:this.x+(6*this.s),y:this.y,z:this.z-(6*this.s)});
    this.w2.setAttribute("scale",{ x: this.s, y: this.s, z: this.s });
    this.w2.setAttribute("static-body","");
    this.w3.setAttribute("position",{x:this.x-(6*this.s),y:this.y,z:this.z-(6*this.s)});
    this.w3.setAttribute("scale",{ x: this.s, y: this.s, z: this.s });
    this.w3.setAttribute("static-body","");

    this.w112.setAttribute("position",{x:this.x-(4*this.s),y:this.y+(3*this.s),z:this.z-(12*this.s)});
    this.w112.setAttribute("scale",{ x: this.s, y: this.s, z: this.s });
    this.w112.setAttribute("static-body","");
	  this.w122.setAttribute("position",{x:this.x+(4*this.s),y:this.y+(3*this.s),z:this.z-(12*this.s)});
	  this.w122.setAttribute("scale",{ x: this.s, y: this.s, z: this.s });
    this.w122.setAttribute("static-body","");
	  this.w132.setAttribute("position",{x:this.x,y:this.y+(1*this.s),z:this.z-(12*this.s)});
	  this.w132.setAttribute("scale",{ x: this.s, y: this.s, z: this.s });
	  this.w142.setAttribute("position",{x:this.x,y:this.y+(5*this.s),z:this.z-(12*this.s)});
	  this.w142.setAttribute("scale",{ x: this.s, y: this.s, z: this.s });
    this.w142.setAttribute("static-body","");

    // this.w4.setAttribute("position",{x:this.x,y:this.y,z:this.z-(12*this.s)});
    // this.w4.setAttribute("scale",{ x: this.s, y: this.s, z: this.s });
    // this.w4.setAttribute("static-body","");

    this.floor.setAttribute("position",{x:this.x,y:this.y,z:this.z-(6*this.s)});
    this.floor.setAttribute("scale",{ x: this.s, y: this.s, z: this.s });
    this.floor.setAttribute("static-body","");
    this.roof.setAttribute("position",{x:this.x,y:this.y+(6*this.s),z:this.z-(6*this.s)});
    this.roof.setAttribute("scale",{ x: this.s, y: this.s, z: this.s });
    this.roof.setAttribute("static-body","");
 
 
    this.obj = document.createElement("a-entity");
     
	  this.obj.append(this.door);
    this.obj.append(this.door2);
    this.obj.append(this.w11);
	  this.obj.append(this.w12);
	  this.obj.append(this.w13);
	  this.obj.append(this.w14);
    this.obj.append(this.w2);
    this.obj.append(this.w3);
    this.obj.append(this.w112);
	  this.obj.append(this.w122);
	  this.obj.append(this.w132);
	  this.obj.append(this.w142);
    // this.obj.append(this.w4);
    this.obj.append(this.floor);
    this.obj.append(this.roof);
      
    this.obj.setAttribute("position",{x:this.x , y:this.y , z:this.z});
    this.obj.setAttribute("rotation",{ x: 0, y: this.r, z: 0 });
      
    scene.append(this.obj);
    console.log(this.obj)

	  this.door.addEventListener("click", ()=>{
      if (hasKey3) {
        open = !open;

        if (open) {
        console.log("Door opened");
        this.door.setAttribute("rotation", { x: 0, y: -45, z: 0 });
        this.door.setAttribute("position", { x: this.x-(0.625*this.s), y: this.y+(2*this.s), z: this.z+(1.5*this.s) });
        } else {
        console.log("Door closed");
        this.door.setAttribute("rotation", { x: 0, y: 0, z: 0 });
        this.door.setAttribute("position", { x: this.x, y: this.y+(2*this.s), z: this.z });
        }
      }else {
        console.log("Door is locked. Find the key, again again!");
        doorlocked.setAttribute("visible", "true");

        setTimeout(() => {
          doorlocked.setAttribute("visible", "false");
        }, 5000);
      }
    })

    this.door2.addEventListener("click", ()=>{
      if (hasKey3) {
        open = !open;

        if (open) {
        console.log("Wrong door. Find another one!");
        doorwrong.setAttribute("visible", "true");

        setTimeout(() => {
          doorwrong.setAttribute("visible", "false");
        }, 5000);
        }
      }else {
        console.log("Door is locked. Find the key, again again!");
        doorlocked.setAttribute("visible", "true");

        setTimeout(() => {
          doorlocked.setAttribute("visible", "false");
        }, 5000);
      }
    })
  }
}