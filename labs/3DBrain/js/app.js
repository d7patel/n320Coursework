var canvas = document.getElementById("renderCanvas");

var selectedButton = document.querySelectorAll(".parts");
var infoBox = document.getElementById("infoBox");
var camera, scene, data, selectedType;


//application setup stuff
fetch("data/brain.json",{ method: 'get' })
    .then(response => response.json())
    .then((jsonData) => {
        data = jsonData;
        //console.log(data);

        data.brain.forEach((piece, idx) => {

            
            // var p = BABYLON.SceneLoader.ImportMesh(
            //     "","./models/house/", piece.asset, scene,
            //     (meshes) => {
            //         var containerNode = new BABYLON.TransformNode("root");
            //         piece.asset = containerNode;
            //         piece.asset.dataID = idx;

            //         meshes.forEach((mesh) => {
            //             mesh.parent = containerNode;
            //         })
            //     }
            // );
        })
    })

//setup engine stuff
var engine = new BABYLON.Engine(canvas, true);

scene = createScene();
engine.runRenderLoop(function(){
    scene.render();
})

function createScene(){
    var scene = new BABYLON.Scene(engine);

    // add a camera into the scene
    camera = new BABYLON.ArcRotateCamera(
        "c", Math.PI/4, Math.PI/4, 10, BABYLON.Vector3.Zero(), scene);

    var light = new BABYLON.DirectionalLight(
        "1", new BABYLON.Vector3(0, -.5, 0.2), scene);

    //Loaded the brain model
    BABYLON.SceneLoader.Append("./models/brain/","brain-simple-mesh.obj", scene, function (meshes){
        try {
            var model = scene.meshes[0]
            scene.createDefaultCameraOrLight(true, true, true);        
            model.rotation.y = MATH.PI /2
        } catch (err) {
            console.log('error!', err)
        }
    });

    return scene;
}
//end setup engine stuff

//application functions
function bParts(event){
    //remember what was selected
    selectedType = event.target.getAttribute("data-type");

    //reset selected class
    selectedButton.forEach((button) => { button.classList.remove("selected") });

    //add the selected class to the item that was clicked
    event.target.classList.add("selected");

    //event.target.innerHTML ="Hi";

}