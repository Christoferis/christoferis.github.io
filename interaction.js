//Interaction functions
//Model View Controller

const subscribers = [];
const raycaster = new THREE.Raycaster();
let current_hover = null;
let prev_hover = null;
const dragging = 10;


//object that needs to be attached to an object
class interactionOBJ{
    //the attached object
    attachedOBJ;

    //the same things as boolean (for flexibility)
    isLeftMouse = false;
    isRightMouse = false;
    isDrag = false;
    isHovering = false;
    
    constructor(obj){
        this.attachedOBJ = obj;
        subscribers.push(this);
    }

    onLeftMouse(){};
    onRightMouse(){};
    onDrag(){};
    onHover(){};
}

//mouse presses
function _mouseButtonDown(event) {
    if(current_hover == null){return;}
    
    //only set the boolean as functions should be executed after liftoff
    if(event.button == 0){
        current_hover.isLeftMouse = true;
    }else if(event.button == 2){
        current_hover.isRightMouse = true;
    }
}


function _mouseButtonUp(event){
    if(current_hover == null){return;}
    
    //left mouse
    if(event.button == 0){
        current_hover.isLeftMouse = false;
        current_hover.onLeftMouse();
        
    }else if (event.button == 2){ // right mouse
        current_hover.isRightMouse = false;
        current_hover.onRightMouse();
    }
}



//internal function for use in the loop thingy, courtesy of: https://threejs.org/docs/#api/en/core/Raycaster

function _mouseRaycast(event, camera) {
    var pointerVec = new THREE.Vector2((event.clientX / window.innerWidth) * 2 - 1, -1 *(event.clientY / window.innerHeight) * 2 + 1);

    raycaster.setFromCamera(pointerVec, camera);

    for(const sub of subscribers){

        if(raycaster.intersectObject(sub.attachedOBJ).length >= 1){
            sub.isHovering = true;
            sub.onHover();
            current_hover = sub;

            if(prev_hover != current_hover){
                sub.isLeftMouse = false;
                sub.isRightMouse = false;
            }
            
        }else{
            sub.isHovering = false;
            current_hover = null;
        }
    }

    prev_hover = current_hover;
}
