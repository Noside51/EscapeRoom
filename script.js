let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let t = 300;
let tr = 0;
let countdownInterval;
let countupInterval;
let active = false;
let hasKey1 = false;
let hasKey2 = false;
let hasKey3 = false;
let correctAnswer = "drown";
let correct1 = false;

window.onload = function() {
	scene = document.querySelector("a-scene");
	c1 = document.querySelector("#c1");
	c2 = document.querySelector("#c2");
	Door = document.querySelector("#door");
	Door2 = document.querySelector("#door2");
	Door3 = document.querySelector("#door3");
	Door4 = document.querySelector("#door4");
	flashlight = document.querySelector("#light");
	copyofroom = document.querySelector("#room");

	times = document.querySelector("#times");
	timess = document.querySelector("#timess");
	timers = document.querySelector("#timers");
	timerss = document.querySelector("#timerss");
	win = document.querySelector("#win");
	lose = document.querySelector("#lose");
	keymessage = document.querySelector("#keymessage");
	doorlocked = document.querySelector("#doorlocked");
	doorwrong = document.querySelector("#doorwrong");

	ocean = document.querySelector("#ocean");
	ocean2 = document.querySelector("#ocean2");
	ocean3 = document.querySelector("#ocean3");

	key1 = document.querySelector("#keys1");
	key2 = document.querySelector("#keys2");
	key3 = document.querySelector("#keys3");

	w11 = document.querySelector("#w11");
	w12 = document.querySelector("#w12");
	w13 = document.querySelector("#w13");
	w132 = document.querySelector("#w132");
	w14 = document.querySelector("#w14");
	w2 = document.querySelector("#w2");
	w3 = document.querySelector("#w3");
	w112 = document.querySelector("#w112");
	w122 = document.querySelector("#w122");
	w132 = document.querySelector("#w132");
	w142 = document.querySelector("#w142");
	w4 = document.querySelector("#w4");
	floor = document.querySelector("#floor");
	roof = document.querySelector("#roof");

	table = document.querySelector("#table");
	top = document.querySelector("#top");
	leg1 = document.querySelector("#leg1");
	leg2 = document.querySelector("#leg2");
	leg3 = document.querySelector("#leg3");
	leg4 = document.querySelector("#leg4");
	
	new Room(27.25,0,-27,0,1);
	new Room(21.25,0,-27,0,1);
	new Room(15.25,0,-27,0,1);
	//missing
	new Room(3.25,0,-27,0,1);
	new Room(-2.75,0,-27,0,1);
	new Room(-8.75,0,-27,0,1);
	new Room(-14.75,0,-27,0,1);
	new Room(-20.75,0,-27,0,1);
	new Room(-26.75,0,-27,0,1);

	new Room(27.25,3,-27,0,1);
	new Room(21.25,3,-27,0,1);
	new Room(15.25,3,-27,0,1);
	new Room(9.25,3,-27,0,1);
	new Room(3.25,3,-27,0,1);
	new Room(-2.75,3,-27,0,1);
	new Room(-8.75,3,-27,0,1);
	new Room(-14.75,3,-27,0,1);
	new Room(-20.75,3,-27,0,1);
	new Room(-26.75,3,-27,0,1);


	function createFakeKey(id, position) {
        fakeKey = document.createElement('a-entity');
        fakeKey.setAttribute('id', id);
        fakeKey.setAttribute('scale', '0.125 0.125 0.125');
        fakeKey.setAttribute('rotation', '270 0 0');
        fakeKey.setAttribute('position', position);
        fakeKey.innerHTML = '<a-gltf-model src="#key" interact></a-gltf-model>';
        return fakeKey;
    }

    originalKeyPosition = { x: 0, y: 0.05, z: -40 };
    fakeKeyCount = 80;
    fakeKeyDistance = 5;

    for (let i = 0; i < fakeKeyCount; i++) {
        x = originalKeyPosition.x + (Math.random() * fakeKeyDistance * 2 - fakeKeyDistance);
        z = originalKeyPosition.z + (Math.random() * fakeKeyDistance * 2 - fakeKeyDistance);
        position = `${x} ${originalKeyPosition.y} ${z}`;
        fakeKey = createFakeKey(`fakeKey${i}`, position);
        document.querySelector('a-scene').appendChild(fakeKey);
    }

	new PhyObj(5.25,0.5,0.75,0,0,0,1,"box");
	new PhyObj(-2.5,0.05,12.5,0,0,0,1,"box");

	fillRoom2(100);

	let open1 = false;
	let open2 = false;
	let open3 = false;
	let open4 = false;
	
	box = document.getElementById('clickbox');
    popup = document.getElementById('popup');


    if (box && popup) {
        box.addEventListener('click', () => {
            popup.style.display = 'block';
            console.log("Box clicked");
        });
    }


    wordbox = document.getElementById('wordbox');
    answerPopup = document.getElementById('answerPopup');


    if (wordbox && answerPopup) {
        wordbox.addEventListener('click', () => {
            answerPopup.style.display = 'block';
            console.log("Box clicked");
        });
       
    }
    
	far1 = document.getElementById('far1');
    far2 = document.getElementById('far2');
    far3 = document.getElementById('far3');
    far4 = document.getElementById('far4');
    faraway = document.getElementById('faraway');


    if (far1 && faraway) {
        far1.addEventListener('click', () => {
            faraway.style.display = 'block';
            console.log("Box clicked");
        });
       
    }
    if (far2 && faraway) {
        far2.addEventListener('click', () => {
            faraway.style.display = 'block';
            console.log("Box clicked");
        });
       
    }
    if (far3 && faraway) {
        far3.addEventListener('click', () => {
            faraway.style.display = 'block';
            console.log("Box clicked");
        });
       
    }
    if (far4 && faraway) {
        far4.addEventListener('click', () => {
            faraway.style.display = 'block';
            console.log("Box clicked");
        });
       
    }

    hint1 = document.getElementById('hint1');
    hint2 = document.getElementById('hint2');
    hint3 = document.getElementById('hint3');
    hint4 = document.getElementById('hint4');
    hint5 = document.getElementById('hint5');
    phint1 = document.getElementById('phint1');
    phint2 = document.getElementById('phint2');
    phint3 = document.getElementById('phint3');
    phint4 = document.getElementById('phint4');
    phint5 = document.getElementById('phint5');

    if (hint1 && phint1) {
        hint1.addEventListener('click', () => {
            phint1.style.display = 'block';
            console.log("Box clicked");
        });
    }
    if (hint2 && phint2) {
        hint2.addEventListener('click', () => {
            phint2.style.display = 'block';
            console.log("Box clicked");
        });
    }if (hint3 && phint3) {
        hint3.addEventListener('click', () => {
            phint3.style.display = 'block';
            console.log("Box clicked");
        });
    }if (hint4 && phint4) {
        hint4.addEventListener('click', () => {
            phint4.style.display = 'block';
            console.log("Box clicked");
        });
    }if (hint5 && phint5) {
        hint5.addEventListener('click', () => {
            phint5.style.display = 'block';
            console.log("Box clicked");
        });
    }

	window.addEventListener("keypress",function(e){
		console.log(e)
		if(e.key == "1"){
			c1.setAttribute("active",true);
			c2.setAttribute("active",false);
			console.log("Flag 1");
		}else if(e.key == "2"){
			c1.setAttribute("active",false);
			c2.setAttribute("active",true);
			console.log("Flag 2");
		}else if(e.key == "e") {
			flashlight.setAttribute("light", "color: #fff;");
			flashlight.setAttribute("light", "intensity: 2;");
			console.log("Flashlight");
		}else if(e.key == "r") {
			flashlight.setAttribute("light", "color: blue;");
			flashlight.setAttribute("light", "intensity: 2;");
			console.log("Flashlight");
		}else if(e.key == "t") {
			flashlight.setAttribute("light", "intensity: 0;");
			console.log("Flashlight");
		}
	});

    function freezeGame() {
		active = true;
        AFRAME.scenes[0].pause();
        clearInterval(countdownInterval);
        clearInterval(countupInterval);
        console.log("You Win!");
		win.setAttribute("visible", "true");
    }

	Door.addEventListener("click", function () {
		if (hasKey1) {
			open1 = !open1;
			if (open1) {
				console.log("Door opened");
				Door.setAttribute("rotation", { x: 0, y: -45, z: 0 });
				Door.setAttribute("position", { x: -0.625, y: 2, z: 1.5 });
			} else {
				console.log("Door closed");
				Door.setAttribute("rotation", { x: 0, y: 0, z: 0 });
				Door.setAttribute("position", { x: 0, y: 2, z: 0 });
			}
		} else {
			console.log("Door is locked. Find the key!");
			doorlocked.setAttribute("visible", "true");

			setTimeout(() => {
				doorlocked.setAttribute("visible", "false");
			}, 5000);
		}
	})

	Door2.addEventListener("click", function () {
		if (hasKey2) {
			open2 = !open2;
  
			if (open2) {
				console.log("Door opened");
				Door2.setAttribute("rotation", { x: 0, y: -45, z: 0 });
				Door2.setAttribute("position", { x: -1.875, y: 6, z: 4.5 });
		  	} else {
				console.log("Door closed");
				Door2.setAttribute("rotation", { x: 0, y: 0, z: 0 });
				Door2.setAttribute("position", { x: 0, y: 6, z: 0 });
		  	}
		} else {
			console.log("Door is locked. Find the key, again!");
			doorlocked.setAttribute("visible", "true");

			setTimeout(() => {
				doorlocked.setAttribute("visible", "false");
			}, 5000);
		}	
	})

	Door3.addEventListener("click", function () {
		if (hasKey3) {
			open3 = !open3;
	
			if (open3) {
				console.log("Door opened");
				Door3.setAttribute("rotation", { x: 0, y: -45, z: 0 });
				Door3.setAttribute("position", { x: -0.625, y: 2, z: 1.5 });
			} else {
				console.log("Door closed");
				Door3.setAttribute("rotation", { x: 0, y: 0, z: 0 });
				Door3.setAttribute("position", { x: 0, y: 2, z: 0 });
			}
		}else {
			console.log("Door is locked. Find the key, again again!");
			doorlocked.setAttribute("visible", "true");

			setTimeout(() => {
				doorlocked.setAttribute("visible", "false");
			}, 5000);
		}
	})

	Door4.addEventListener("click", function () {
		open4 = !open4;
  
		if (open4) {
			console.log("Door opened");
			Door4.setAttribute("rotation", { x: 0, y: 45, z: 0 });
			Door4.setAttribute("position", { x: -0.625, y: 2, z: -13.5 });
			freezeGame();
		  } else {
			console.log("Door closed");
			Door4.setAttribute("rotation", { x: 0, y: 0, z: 0 });
			Door4.setAttribute("position", { x: 0, y: 2, z: -12 });
		  }
	})

	key1.addEventListener("click", function () {
		if (!hasKey1) {
			hasKey1 = true;
			key1.setAttribute("visible", "false");
			console.log("Key collected!");
			keymessage.setAttribute("visible", "true");

			setTimeout(() => {
				keymessage.setAttribute("visible", "false");
			}, 5000);
		}
	})

	key2.addEventListener("click", function () {
		if (!hasKey2) {
			hasKey2 = true;
			key2.setAttribute("visible", "false");
			console.log("Key collected, again!");
			keymessage.setAttribute("visible", "true");

			setTimeout(() => {
				keymessage.setAttribute("visible", "false");
			}, 5000);
		}
	})

	key3.addEventListener("click", function () {
		if (!hasKey3) {
			hasKey3 = true;
			key3.setAttribute("visible", "false");
			console.log("Key collected, again again!");
			keymessage.setAttribute("visible", "true");

			setTimeout(() => {
				keymessage.setAttribute("visible", "false");
			}, 5000);
		}
	})
	
	loop();
	let countdownInterval = setInterval(countdown, 1000);
	let countupInterval = setInterval(countup, 1000);
}

function checkAnswer() {
    userAnswer = document.getElementById("userAnswer").value.trim().toLowerCase();
    resultElement = document.getElementById("result");

    if (userAnswer === correctAnswer) {
        resultElement.textContent = "Correct!";
        resultElement.style.color = "green";
        correct1 = true;
    } else {
        resultElement.textContent = "Wrong! Try again.";
        resultElement.style.color = "red";
    }
}

function freezeGame() {
	active = true;
	AFRAME.scenes[0].pause();
	clearInterval(countdownInterval);
	clearInterval(countupInterval);
	console.log("You Lose!");
	lose.setAttribute("visible", "true");
}
	
function countdown(){
	if(!active){
    if (t > 0) {
        t--;
    } else {
		console.log("Time's up!");
		oceanPosition = ocean.getAttribute('position');
		ocean.setAttribute("position", {x:oceanPosition.x, y:oceanPosition.y+0.1, z:oceanPosition.z});
		if(oceanPosition.y >= 59.45){
			ocean.setAttribute("position", {x:oceanPosition.x, y:59.45, z:oceanPosition.z});
			freezeGame();
			clearInterval(countupInterval);
		}
		ocean2Position = ocean2.getAttribute('position');
		ocean2.setAttribute("position", {x:ocean2Position.x, y:ocean2Position.y+0.1, z:ocean2Position.z});
		if(ocean2Position.y >= 16.98){
			ocean2.setAttribute("position", {x:ocean2Position.x, y:16.98, z:ocean2Position.z});
		}
		ocean3Position = ocean3.getAttribute('position');
		ocean3.setAttribute("position", {x:ocean3Position.x, y:ocean3Position.y+0.1, z:ocean3Position.z});
		if(ocean3Position.y >= 5.66){
			ocean3.setAttribute("position", {x:ocean3Position.x, y:5.66, z:ocean3Position.z});
		}
    }
}
}

function countup(){	
    if (!active) {
		tr++;
    }
}

	
function loop(){
	if(!active){
	let minutes1 = Math.floor(t / 60);
	let seconds1 = t % 60;
	let minutes2 = Math.floor(tr / 60);
	let seconds2 = tr % 60;
	let formattedSeconds1 = seconds1 < 10 ? `0${seconds1}` : seconds1;
	let formattedSeconds2 = seconds2 < 10 ? `0${seconds2}` : seconds2;
	times.setAttribute("value", `Time Left: ${minutes1}:${formattedSeconds1}`);
	timess.setAttribute("value", `Time Left: ${minutes1}:${formattedSeconds1}`);
	timers.setAttribute("value", `Time Spent: ${minutes2}:${formattedSeconds2}`);
	timerss.setAttribute("value", `Time Spent: ${minutes2}:${formattedSeconds2}`);
	window.requestAnimationFrame(loop);
	}else{
		let minutes2 = Math.floor(tr / 60);
        let seconds2 = tr % 60;
        let formattedSeconds2 = seconds2 < 10 ? `0${seconds2}` : seconds2;
        timers.setAttribute("value", `Time Spent: ${minutes2}:${formattedSeconds2}`);
        timerss.setAttribute("value", `Time Spent: ${minutes2}:${formattedSeconds2}`);
	}	

	let x1 = c1.object3D.position.x;
	let z1 = c1.object3D.position.z;
	
	let x3 = c1.object3D.position.x;
	let z3 = c1.object3D.position.z;
	
	if (Math.abs(distance1(c1, w13) - 11.93) < 0.1 && -1.2 <= x1 <= 1.2 && 11.8 <= z1 <= 12.0) {
		console.log("Went through door");
	}
	if (Math.abs(distance2(c1, w132) - 23.86) < 0.1 && -5.2 <= x3 <= 5.2 && 23.7 <= z3 <= 23.9){
		console.log("Went through door again");
	}
	if(distance3(c1,key1) < 1.5 && !hasKey1){
		key1.setAttribute("class", "clickable");
	} else {
		key1.removeAttribute("class", "clickable");
	}

	if(distance4(c1,key2) < 3 && !hasKey2){
		key2.setAttribute("class", "clickable");
	} else {
		key2.removeAttribute("class", "clickable");
	}

	if(distance4(c1,key3) < 3 && !hasKey3){
		key3.setAttribute("class", "clickable");
	} else {
		key3.removeAttribute("class", "clickable");
	}
	if(correct1==true){
		wordbox.setAttribute("position","0 999 0");
	}
}

//Room1 Door Frame
function distance1(obj1,obj2){
  let x1 = obj1.object3D.position.x;
  let y1 = obj1.object3D.position.y;
  let z1 = obj1.object3D.position.z;
  let x2 = obj2.object3D.position.x;
  let y2 = obj2.object3D.position.y;
  let z2 = obj2.object3D.position.z;

  let d12 = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2));
  //console.log(x1, y1, z1);
  return d12;
}

//Room2 Door Frame
function distance2(obj3,obj4){
  let x3 = obj3.object3D.position.x;
  let y3 = obj3.object3D.position.y;
  let z3 = obj3.object3D.position.z;
  let x4 = obj4.object3D.position.x;
  let y4 = obj4.object3D.position.y;
  let z4 = obj4.object3D.position.z;

  let d34 = Math.sqrt(Math.pow(x3-x4,2) + Math.pow(y3-y4,2) + Math.pow(z3-z4,2));
  //console.log(x3, y3, z3);
  return d34;
}

//Room1 Key
function distance3(obj5,obj6){
	let x5 = obj5.object3D.position.x;
	let y5 = obj5.object3D.position.y;
	let z5 = obj5.object3D.position.z;
	let x6 = obj6.object3D.position.x;
	let y6 = obj6.object3D.position.y;
	let z6 = obj6.object3D.position.z;
  
	let d56 = Math.sqrt(Math.pow(x5-x6,2) + Math.pow(y5-y6,2) + Math.pow(z5-z6,2));
	//console.log(x5, y5, z5);
	return d56;
}

//Room2 Key
function distance4(obj7,obj8){
	let x7 = obj7.object3D.position.x;
	let y7 = obj7.object3D.position.y;
	let z7 = obj7.object3D.position.z;
	let x8 = obj8.object3D.position.x;
	let y8 = obj8.object3D.position.y;
	let z8 = obj8.object3D.position.z;
  
	let d78 = Math.sqrt(Math.pow(x7-x8,2) + Math.pow(y7-y8,2) + Math.pow(z7-z8,2));
	//console.log(x7, y7, z7);
	return d78;
}

//Room3 Key
function distance5(obj9,obj0){
	let x9 = obj9.object3D.position.x;
	let y9 = obj9.object3D.position.y;
	let z9 = obj9.object3D.position.z;
	let x0 = obj0.object3D.position.x;
	let y0 = obj0.object3D.position.y;
	let z0 = obj0.object3D.position.z;
  
	let d90 = Math.sqrt(Math.pow(x9-x0,2) + Math.pow(y9-y0,2) + Math.pow(z9-z0,2));
	//console.log(x9, y9, z9);
	return d90;
}
