//the file to have all the available components in


//basically the createNew() function that creates a new basic object, conforms to THREE Object standards, stack for processing different functions during loop
function newObject(geometry, material) {
    //change to Object3D
    //add in onInteraction function event thingy
    var comp = new THREE.Mesh(geometry, material);
    comp.stack = [];
        
    all_objs.push(comp);
    scene.add(comp);
    return comp;
}


//color as hexa
//Note to future: should return a newobj to control this button of course
function Button(position, rotation, size, text, color, func){
    var obj = newObject(new PlaneGeometry(1, 1), colorMaterial(color));
}
