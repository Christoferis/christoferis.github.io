//Interaction functions
//Model View Controller

const subscribers = [];
const raycaster = new THREE.Raycaster();

//object that needs to be attached to an object
class interactionOBJ{
    onLeftMouse;
    onRightMouse;
    onHover;
    attachedOBJ;
    
    constructor(obj){
        this.attachedOBJ = obj;
        subscribers.push(this);
    }
}

//mouse presses
function _mouseButtons(event){

    if(event.button == 0){

    }
}

//internal function for use in the loop thingy, courtesy of: https://threejs.org/docs/#api/en/core/Raycaster

//where is the mouse?
function _mouseRaycast(event, camera) {
    var pointerVec = new THREE.Vector2((event.clientX / window.innerWidth) * 2 - 1, -1 *(event.clientY / window.innerHeight) * 2 + 1);

    raycaster.setFromCamera(pointerVec, camera);

    for(const sub of subscribers){

        if(raycaster.intersectObject(sub.attachedOBJ).length >= 1){
            sub.onHover();
        }
    }
}



