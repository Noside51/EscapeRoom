class PhyObj {
    constructor(x, y, z, xr, yr, zr, s, o) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.xr = xr;
        this.yr = yr;
        this.zr = zr;
        this.s = s;
        this.o = o;

        shapeTypes = {
            "box": "a-box", "circle": "a-circle", "cone": "a-cone",
            "cylinder": "a-cylinder", "dodecahedron": "a-dodecahedron",
            "octahedron": "a-octahedron", "icosahedron": "a-icosahedron",
            "plane": "a-plane", "ring": "a-ring", "sphere": "a-sphere",
            "tetrahedron": "a-tetrahedron", "torus": "a-torus",
            "torusKnot": "a-torusKnot", "triangle": "a-triangle"
        };

        this.obj = document.createElement(shapeTypes[o]);
        this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });
        this.obj.setAttribute("scale", { x: this.s, y: this.s, z: this.s });
        this.obj.setAttribute("rotation", { x: this.xr, y: this.yr, z: this.zr });
        this.obj.setAttribute("color", "#FFF");
        this.obj.setAttribute("dynamic-body", "");
        this.obj.setAttribute("interact", "");

        scene.append(this.obj);
    }
}

function isInsideRoom1(x, z) {
    return x >= -6 && x <= 6 && z >= 6 && z <= 18;
}

function fillRoom2() {
    minX1 = -18, maxX1 = -6;
    minX2 = 6, maxX2 = 18;
    minZ1 = -12, maxZ1 = 6;
    minZ2 = 18, maxZ2 = 24;
    minY = 1, maxY = 15;

    for (let i = 0; i < 50; i++) {
        let x, z;
        let xRange = Math.random() < 0.5 ? { min: minX1, max: maxX1 } : { min: minX2, max: maxX2 };
        let zRange = Math.random() < 0.5 ? { min: minZ1, max: maxZ1 } : { min: minZ2, max: maxZ2 };

        x = Math.random() * (xRange.max - xRange.min) + xRange.min;
        z = Math.random() * (zRange.max - zRange.min) + zRange.min;

        let y = Math.random() * (maxY - minY) + minY;
        let s = Math.random() * 5 + 1;
        let xr = Math.random() * 360;
        let yr = Math.random() * 360;
        let zr = Math.random() * 360;
        let shapes = ["box", "cone", "cylinder", "plane", "sphere", "torusKnot", "triangle"];
        let shape = shapes[Math.floor(Math.random() * shapes.length)];

        new PhyObj(x, y, z, xr, yr, zr, s, shape);
    }
}