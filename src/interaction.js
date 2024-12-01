//Interaction functions
//Model View Controller

const subscribers = [];
const raycaster = new THREE.Raycaster();
var cursor_pos = new THREE.Vector2(0, 0);

//hover
var current_hover = null;
var hover_lock = false;

//dragging
const drag_thresh = 10;
var dragging = 0;

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

    onLeftMouseDown(){};
    onRightMouseDown(){};
    onRightMouseUp(){};
    onLeftMouseUp(){};
    onDrag(){};
    onHover(){};
}

//mouse presses
function _mouseButtonDown(event) {
    if(current_hover == null){return;}
    
    //only set the boolean as functions should be executed after liftoff
    if(event.button == 0){
        current_hover.isLeftMouse = true;
        current_hover.onLeftMouseDown();
    } else if(event.button == 2){
        current_hover.isRightMouse = true;
        current_hover.onRightMouseDown();
    }

}

function _mouseButtonUp(event){
    if(current_hover == null){return;}

    //left mouse
    if (event.button == 0){
        current_hover.onLeftMouseUp();
        current_hover.isLeftMouse = false;
        
    } else if (event.button == 2){ // right mouse
        current_hover.onRightMouseUp();
        current_hover.isRightMouse = false;
    }
}

//internal function for use in the loop thingy, courtesy of: https://threejs.org/docs/#api/en/core/Raycaster
function _mouseRaycast(event, camera) {
    
    cursor_pos = new THREE.Vector2((event.clientX / window.innerWidth) * 2 - 1, -1 *(event.clientY / window.innerHeight) * 2 + 1);

    raycaster.setFromCamera(cursor_pos, camera);

    for(const sub of subscribers){

        if(raycaster.intersectObject(sub.attachedOBJ).length >= 1){
            sub.isHovering = true;
            sub.onHover();
            current_hover = sub;
            
        }else{
            sub.isHovering = false;
            current_hover = null;
        }
    }
}
