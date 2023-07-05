//the file to have all the available components in


//basically the createNew() function that creates a new basic object, conforms to THREE Object standards, stack for processing different functions during loop
function newObject(geometry, material) {
    var comp = {stack: [], material: material, geometry: geometry};

    comp.mesh = new THREE.Mesh(comp.geometry, comp.material);
    all_objs.push(comp);
    scene.add(comp.mesh);
    return comp;
}

//adds in all the interaction stuff needed
function interactionComponent(obj) {
    //action: function that is run upon the click
    obj.stack.push(function name(params) {
        
    });
    
    
    
}

