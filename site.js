function site() {
    var obj = newObject();

    //do stuff
    obj.geometry = new THREE.CubeGeometry(1, 1, 1);
    obj.material = new THREE.MeshBasicMaterial({color: 0xff00ff});
    obj.mesh = new THREE.Mesh(obj.geometry, obj.material);
    obj.stack.push(function (){

        obj.mesh.rotation.x += 0.01;
        obj.mesh.rotation.y += 0.01;
    });
}

site();