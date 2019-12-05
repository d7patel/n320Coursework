var canvas = document.getElementById("renderCanvas"); // Get the canvas element 
var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine
var camera;

var sphere, light, blueMat, sphere2;
var selectedMesh = null;

var scene = createScene(); //Call the createScene function

function createScene() {

  // Create the scene space
  var scene = new BABYLON.Scene(engine);

  var radius = 3;
  var deltaTheta = 0;
  var path = [];
for(var theta = 0; theta < 2 * Math.PI; theta +=deltaTheta ) {
    path.push(new BABYLON.Vector3(radius * Math.cos(theta), radius * Math.sin(theta), 0)); }


  // Add a camera to the scene and attach it to the canvas
  camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 4, 4, BABYLON.Vector3.Zero(), scene);
  camera.attachControl(canvas, true);
  
  // Add lights to the scene
  var myLight = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(0, -0.5, 1.0), scene);

  // Add and manipulate meshes in the scene
  //sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: .5}, scene);
    
  var curve = BABYLON.Curve3.Create.CURVETYPE(parameters);
  return scene;
};


// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () { 
  
  //sphere.rotate(BABYLON.Axis.Y, .01, BABYLON.Space.WORLD);
  scene.render();
});


function checkUp() {
    console.log(selectedMesh.rotation.y)
}

window.addEventListener("keydown", (event) => {



})

window.addEventListener("click", function () {
    // We try to pick an object
   
})

