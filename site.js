function site() {
    var obj = newObject(new THREE.CubeGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color: 0xffffff}));

    obj.stack.push(function (){

        obj.mesh.rotation.x += 0.01;
        obj.mesh.rotation.y += 0.01;
    });

    //new interaction obj for this obj
    var intOBJ = new interactionOBJ(obj);
    intOBJ.onHover = function () {
        console.log("Hey");
    };

    obj.mesh.position.y = 0;
}

site();