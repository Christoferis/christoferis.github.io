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
    scene.add(obj.mesh);
}

//standard new Composite, stack are functions that are run as subroutine

// The renderer: something that draws 3D objects onto the canvas
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xaaaaaa, 1);
// Append the renderer canvas into <body>
document.body.appendChild(renderer.domElement);


// A cube we are going to animate
const background = newObject(new THREE.PlaneGeometry(window.innerWidth, window.innerHeight));



function backgroundColor(color) {
    background.material = new THREE.MeshBasicMaterial({color: color});
}


//adds the cube to the scene


// Make the camera further from the cube so we can see it better
camera.position.z = 5;

function render() {
  // Render the scene and the camera
  renderer.render(scene, camera);

    //solve stack call problem
  // Rotate the cube every frame
    for (let obj of all_objs) {
        for (let fun of obj.stack) {
            fun();
        }
    }

  // Make it call the render() function about every 1/60 second
  requestAnimationFrame(render);
}

render();