//the file to have all the available components in


//basically the createNew() function that creates a new basic object, conforms to THREE Object standards, stack for processing different functions during loop
function newObject() {
    var comp = {stack: [], material: new THREE.MeshBasicMaterial({color: 0xff00ff}), geometry: new THREE.PlaneGeometry(0.1, 0.1)};

    comp.mesh = new THREE.Mesh(comp.geometry, comp.material);
    all_objs.push(comp);
    scene.add(comp.mesh);
    return comp;
}


