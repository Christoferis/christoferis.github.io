function site() {
    var obj = newObject(new THREE.CubeGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color: 0xff00ff}));

    obj.stack.push(function (){

        obj.mesh.rotation.x += 0.01;
        obj.mesh.rotation.y += 0.01;
    });
}

site();