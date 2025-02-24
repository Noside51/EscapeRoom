AFRAME.registerComponent('float-on-ocean', {
  schema: {
    baseHeight: { type: 'number', default: 0 },
  },
  tick: function () {
    ocean = document.querySelector('#ocean');
	  ocean2 = document.querySelector('#ocean2');
    ocean3 = document.querySelector('#ocean3');
    object = this.el;

    if (!ocean || !ocean2) return;

    position = object.getAttribute('position');
    oceanPosition = ocean.getAttribute('position');
    oceanWidth = parseFloat(ocean.getAttribute('width'));
    oceanDepth = parseFloat(ocean.getAttribute('depth'));
    amplitude = parseFloat(ocean.getAttribute('amplitude') || 1);
    speed = parseFloat(ocean.getAttribute('speed') || 1);
	
	  position2 = object.getAttribute('position');
    oceanPosition2 = ocean2.getAttribute('position');
    oceanWidth2 = parseFloat(ocean2.getAttribute('width'));
    oceanDepth2 = parseFloat(ocean2.getAttribute('depth'));
    amplitude2 = parseFloat(ocean2.getAttribute('amplitude') || 1);
    speed2 = parseFloat(ocean2.getAttribute('speed') || 1);

    position3 = object.getAttribute('position');
    oceanPosition3 = ocean3.getAttribute('position');
    oceanWidth3 = parseFloat(ocean3.getAttribute('width'));
    oceanDepth3 = parseFloat(ocean3.getAttribute('depth'));
    amplitude3 = parseFloat(ocean3.getAttribute('amplitude') || 1);
    speed3 = parseFloat(ocean3.getAttribute('speed') || 1);

    isOverOcean =
      position.x > oceanPosition.x - oceanWidth / 2 &&
      position.x < oceanPosition.x + oceanWidth / 2 &&
      position.z > oceanPosition.z - oceanDepth / 2 &&
      position.z < oceanPosition.z + oceanDepth / 2;
	  
	  isOverOcean2 =
      position.x > oceanPosition2.x - oceanWidth2 / 2 &&
      position.x < oceanPosition2.x + oceanWidth2 / 2 &&
      position.z > oceanPosition2.z - oceanDepth2 / 2 &&
      position.z < oceanPosition2.z + oceanDepth2 / 2;

    isOverOcean3 =
      position.x > oceanPosition3.x - oceanWidth3 / 2 &&
      position.x < oceanPosition3.x + oceanWidth3 / 2 &&
      position.z > oceanPosition3.z - oceanDepth3 / 2 &&
      position.z < oceanPosition3.z + oceanDepth3 / 2;

      let isAboveCeiling = position.y > 5.66;
      let isAboveCeiling2 = position.y > 16.98;

    if (isOverOcean) {
      time = performance.now() / 1000;
      waveHeight = amplitude * Math.sin(speed * time + position.x + position.z);
      waveHeightDown = amplitude * Math.cos(speed * time + position.x + position.z);

      if(oceanPosition.y>=51.5){
        object.setAttribute('position', {
          x: position.x,
          y: oceanPosition.y + waveHeightDown - 2.75,
          z: position.z,
        });
      }else if(oceanPosition.y>=1.5){
        object.setAttribute('position', {
          x: position.x,
          y: (oceanPosition.y*0.69) + waveHeight,
          z: position.z,
        });
      }else {
      object.setAttribute('position', {
        x: position.x,
        y: this.data.baseHeight,
        z: position.z,
      });
      }  
    }

    if (isOverOcean2 && !isAboveCeiling2) {
      time = performance.now() / 1000;
      waveHeight2 = amplitude * Math.sin(speed * time + position2.x + position2.z);
      waveHeightDown2 = amplitude * Math.cos(speed * time + position2.x + position2.z);

      if(oceanPosition2.y>=15.45){
        object.setAttribute('position', {
          x: position.x,
          y: oceanPosition2.y + waveHeightDown2 - 2.75,
          z: position.z,
        });
      }else if(oceanPosition2.y>=1.5){
        object.setAttribute('position', {
          x: position.x,
          y: (oceanPosition2.y*0.69) + waveHeight2,
          z: position.z,
        });
      }else {
      object.setAttribute('position', {
        x: position.x,
        y: this.data.baseHeight,
        z: position.z,
      });
      }  
    }
	
	  if (isOverOcean3 && !isAboveCeiling) {
      time = performance.now() / 1000;
      waveHeight3 = amplitude * Math.sin(speed * time + position3.x + position3.z);
      waveHeightDown3 = amplitude * Math.cos(speed * time + position3.x + position3.z);

      if(oceanPosition3.y>=5.15){
        object.setAttribute('position', {
          x: position.x,
          y: oceanPosition3.y + waveHeightDown3 - 2.75,
          z: position.z,
        });
      }else if(oceanPosition3.y>=1.5){
        object.setAttribute('position', {
          x: position.x,
          y: (oceanPosition3.y*0.69) + waveHeight3,
          z: position.z,
        });
      }else {
      object.setAttribute('position', {
        x: position.x,
        y: this.data.baseHeight,
        z: position.z,
      });
      }  
    }
  },
});