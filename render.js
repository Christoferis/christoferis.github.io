// The three.js scene: the 3D world where you put objects
const scene = new THREE.Scene();

// The camera
const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  1,
  10000
);

//all objects present here
const all_objs = [];
 
function add(obj) {
    all_objs.push(obj);
    scene.add(obj);
}

//standard new Composite, stack are functions that are run as subroutine

// The renderer: something that draws 3D objects onto the canvas
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xaaaaaa, 1);
// Append the renderer canvas into <body>
document.body.appendChild(renderer.domElement);

//add mouse listener
addEventListener("pointermove", function (event) {
    _mouseRaycast(event, camera);
});

//Mouse up and mouse down for dragging
addEventListener("mousedown", _mouseButtonDown);
addEventListener("mouseup", _mouseButtonUp);


// create new background
const background = newObject(new THREE.PlaneGeometry(window.innerWidth, window.innerHeight));
//move  further into background
background.position.z = -500;


function backgroundColor(color) {
    background.material = new THREE.MeshBasicMaterial({color: color});
}

// Make the camera further from the cube so we can see it better
camera.position.z = 5;

//to make dragging a little nicer

//mainloop
function render() {
  // Render the scene and the camera
    renderer.render(scene, camera);
    requestAnimationFrame(render);

    //Backend begins here
    for (let obj of all_objs) {
        for (let fun of obj.stack) {
            fun();
        }
    }

}

render();