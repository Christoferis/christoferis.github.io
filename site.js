function site() {
    var color = new THREE.MeshBasicMaterial({color: 0xffffff});
    var otherColor = new THREE.MeshBasicMaterial({color: 0x00ffff});
    var obj = newObject(new THREE.CubeGeometry(1, 1, 1), color);

    //new interaction object
    var intOBJ = new interactionOBJ(obj);
    intOBJ.onLeftMouseDown = function () {
        obj.material = otherColor;
    };

    intOBJ.onLeftMouseUp = function () {
        obj.material = color;
    };

    intOBJ.onDrag = function () {
        obj.pos = cursor_pos;
    };
    
    obj.stack.push(function (){
        obj.rotation.x += 0.01;
        obj.rotation.y += 0.01;

    });

    obj.position.y = 0;
}

site();