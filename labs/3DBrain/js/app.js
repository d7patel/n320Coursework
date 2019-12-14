var canvas = document.getElementById("renderCanvas");

var selectedButton = document.querySelectorAll(".parts");
var infoBox = document.getElementById("info");

var camera, scene, data, selectedType;

//added the JSON file here
let brain =`[
    {"type":"Frontal Lobe", "info": "Speaking" , "asset": "frontalLobe.jpg"},
    {"type":"Temporal Lobe", "info": "Hearing" , "asset": "temporalLobe.jpg"},
    {"type":"Parietal Lobe", "info": "Touch" , "asset": "parietalLobe.jpg"},
    {"type":"Occipital Lobe", "info": "Vision" , "asset": "occipitalLobe.jpg"},
    {"type":"Cerebellum", "info": "Balance" , "asset": "cerebellum.jpg"},
    {"type":"Brain Stem", "info": "Breathing" , "asset": "brainStem.jpeg"}
]`

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
function fParts(event){
    //remember what was selected
    selectedType = event.target.getAttribute("data-type");

    //reset selected class
    selectedButton.forEach((button) => { button.classList.remove("selected") });

    //add the selected class to the item that was clicked
    event.target.classList.add("selected");

    var img = document.getElementById('pic');
    img.src = "images/" + JSON.parse(brain)[0].asset;  

    infoBox.innerHTML =  JSON.parse(brain)[0].type +": "+JSON.parse(brain)[0].info;
}

function tParts(event){
    //remember what was selected
    selectedType = event.target.getAttribute("data-type");

    //reset selected class
    selectedButton.forEach((button) => { button.classList.remove("selected") });

    //add the selected class to the item that was clicked
    event.target.classList.add("selected");

    var img = document.getElementById('pic');
    img.src = "images/" + JSON.parse(brain)[1].asset;  

    infoBox.innerHTML =  JSON.parse(brain)[1].type +": "+JSON.parse(brain)[1].info;
}

function pParts(event){
    //remember what was selected
    selectedType = event.target.getAttribute("data-type");

    //reset selected class
    selectedButton.forEach((button) => { button.classList.remove("selected") });

    //add the selected class to the item that was clicked
    event.target.classList.add("selected");

    var img = document.getElementById('pic');
    img.src = "images/" + JSON.parse(brain)[2].asset;  

    infoBox.innerHTML =  JSON.parse(brain)[2].type +": "+JSON.parse(brain)[2].info;
}

function oParts(event){
    //remember what was selected
    selectedType = event.target.getAttribute("data-type");

    //reset selected class
    selectedButton.forEach((button) => { button.classList.remove("selected") });

    //add the selected class to the item that was clicked
    event.target.classList.add("selected");

    var img = document.getElementById('pic');
    img.src = "images/" + JSON.parse(brain)[3].asset;  

    infoBox.innerHTML =  JSON.parse(brain)[3].type +": "+JSON.parse(brain)[3].info;
}

function cParts(event){
    //remember what was selected
    selectedType = event.target.getAttribute("data-type");

    //reset selected class
    selectedButton.forEach((button) => { button.classList.remove("selected") });

    //add the selected class to the item that was clicked
    event.target.classList.add("selected");

    var img = document.getElementById('pic');
    img.src = "images/" + JSON.parse(brain)[4].asset;  

    infoBox.innerHTML =  JSON.parse(brain)[4].type +": "+JSON.parse(brain)[4].info;
}

function bParts(event){
    //remember what was selected
    selectedType = event.target.getAttribute("data-type");

    //reset selected class
    selectedButton.forEach((button) => { button.classList.remove("selected") });

    //add the selected class to the item that was clicked
    event.target.classList.add("selected");

    var img = document.getElementById('pic');
    img.src = "images/" + JSON.parse(brain)[5].asset;  

    infoBox.innerHTML =  JSON.parse(brain)[5].type +": "+JSON.parse(brain)[5].info;
}