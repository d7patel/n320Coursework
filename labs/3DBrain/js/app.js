var canvas = document.getElementById("renderCanvas");

var selectedButton = document.querySelectorAll(".parts");
var infoBox = document.getElementById("info");

var songs = ['Frontal','Temporal','Parietal','Occipital','Cerebellum','BrainStem'];
var soundElements = [];

var camera, scene, data, selectedType;

songs.forEach((soundURL, idx) => {
    //the sound
    var newSound = new Audio("songs/" + soundURL + ".m4a");

    //store each sound in an array for later reference
    soundElements.push(newSound);
})
//added the JSON file here
let brain =`[
    {"type":"Frontal Lobe", "info": "The frontal lobe is the part of the brain that controls important cognitive skills in humans, such as emotional expression, problem solving, memory, language, judgment, and sexual behaviors. 🔉 (Voice on)" , "asset": "frontalLobe.jpg"},
    {"type":"Temporal Lobe", "info": "The temporal lobe is involved in primary auditory perception, such as hearing, and holds the primary auditory cortex. The primary auditory cortex receives sensory information from the ears and secondary areas process the information into meaningful units such as speech and words. 🔉 (Voice on)" , "asset": "temporalLobe.jpg"},
    {"type":"Parietal Lobe", "info": "The parietal lobe is vital for sensory perception and integration, including the management of taste, hearing, sight, touch, and smell. It is home to the brain's primary sensory area, a region where the brain interprets input from other areas of the body. 🔉 (Voice on)" , "asset": "parietalLobe.jpg"},
    {"type":"Occipital Lobe", "info": "The occipital lobe is the visual processing center of the mammalian brain containing most of the anatomical region of the visual cortex. 🔉 (Voice on) " , "asset": "occipitalLobe.jpg"},
    {"type":"Cerebellum", "info": "The cerebellum receives information from the sensory systems, the spinal cord, and other parts of the brain and then regulates motor movements. The cerebellum coordinates voluntary movements such as posture, balance, coordination, and speech, resulting in smooth and balanced muscular activity. 🔉(Voice on)" , "asset": "cerebellum.jpg"},
    {"type":"Brain Stem", "info": "The brain stem controls the flow of messages between the brain and the rest of the body, and it also controls basic body functions such as breathing, swallowing, heart rate, blood pressure, consciousness, and whether one is awake or sleepy. 🔉 (Voice on)" , "asset": "brainStem.jpeg"}
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
    var brain3D = BABYLON.SceneLoader.Append("./models/brain/","brain-simple-mesh.obj", scene, function (meshes){
        try {
            var model = scene.meshes[0]
            scene.createDefaultCameraOrLight(true, true, true);        
            model.rotation.y = MATH.PI /2     

        } catch (err) {
            console.log('error!', err)
        }   

        // //keep rotate 3D brain
        scene.registerBeforeRender(function () {
            model.rotation.y -= 0.01;
        });     
    });
    
    
    return scene;
}
//end setup engine stuff

//application functions
function fParts(event){
    soundElements[0].currentTime = 0;

    //remember what was selected
    selectedType = event.target.getAttribute("data-type");

    //reset selected class
    selectedButton.forEach((button) => { button.classList.remove("selected") });

    //add the selected class to the item that was clicked
    event.target.classList.add("selected");

    var img = document.getElementById('pic');
    img.src = "images/" + JSON.parse(brain)[0].asset;  

    infoBox.innerHTML =  JSON.parse(brain)[0].type +": "+JSON.parse(brain)[0].info;

    soundElements[0].play();
    soundElements[3].pause();
    soundElements[1].pause();
    soundElements[2].pause();
    soundElements[4].pause();
    soundElements[5].pause();
}

function tParts(event){
    soundElements[1].currentTime = 0;

    //remember what was selected
    selectedType = event.target.getAttribute("data-type");

    //reset selected class
    selectedButton.forEach((button) => { button.classList.remove("selected") });

    //add the selected class to the item that was clicked
    event.target.classList.add("selected");

    var img = document.getElementById('pic');
    img.src = "images/" + JSON.parse(brain)[1].asset;  

    infoBox.innerHTML =  JSON.parse(brain)[1].type +": "+JSON.parse(brain)[1].info;

    soundElements[1].play();
    soundElements[0].pause();
    soundElements[3].pause();
    soundElements[2].pause();
    soundElements[4].pause();
    soundElements[5].pause();
}

function pParts(event){
    soundElements[2].currentTime = 0;

    //remember what was selected
    selectedType = event.target.getAttribute("data-type");

    //reset selected class
    selectedButton.forEach((button) => { button.classList.remove("selected") });

    //add the selected class to the item that was clicked
    event.target.classList.add("selected");

    var img = document.getElementById('pic');
    img.src = "images/" + JSON.parse(brain)[2].asset;  

    infoBox.innerHTML =  JSON.parse(brain)[2].type +": "+JSON.parse(brain)[2].info;
    soundElements[2].play();
    soundElements[0].pause();
    soundElements[1].pause();
    soundElements[3].pause();
    soundElements[4].pause();
    soundElements[5].pause();
}

function oParts(event){
    soundElements[3].currentTime = 0;

    //remember what was selected
    selectedType = event.target.getAttribute("data-type");

    //reset selected class
    selectedButton.forEach((button) => { button.classList.remove("selected") });

    //add the selected class to the item that was clicked
    event.target.classList.add("selected");

    var img = document.getElementById('pic');
    img.src = "images/" + JSON.parse(brain)[3].asset;  

    infoBox.innerHTML =  JSON.parse(brain)[3].type +": "+JSON.parse(brain)[3].info;
    soundElements[3].play();
    soundElements[0].pause();
    soundElements[1].pause();
    soundElements[2].pause();
    soundElements[4].pause();
    soundElements[5].pause();
}

function cParts(event){
    soundElements[4].currentTime = 0;

    //remember what was selected
    selectedType = event.target.getAttribute("data-type");

    //reset selected class
    selectedButton.forEach((button) => { button.classList.remove("selected") });

    //add the selected class to the item that was clicked
    event.target.classList.add("selected");

    var img = document.getElementById('pic');
    img.src = "images/" + JSON.parse(brain)[4].asset;  

    infoBox.innerHTML =  JSON.parse(brain)[4].type +": "+JSON.parse(brain)[4].info;
    soundElements[4].play();
    soundElements[0].pause();
    soundElements[1].pause();
    soundElements[2].pause();
    soundElements[3].pause();
    soundElements[5].pause();
}

function bParts(event){
    soundElements[5].currentTime = 0;

    //remember what was selected
    selectedType = event.target.getAttribute("data-type");

    //reset selected class
    selectedButton.forEach((button) => { button.classList.remove("selected") });

    //add the selected class to the item that was clicked
    event.target.classList.add("selected");

    var img = document.getElementById('pic');
    img.src = "images/" + JSON.parse(brain)[5].asset;  

    infoBox.innerHTML =  JSON.parse(brain)[5].type +": "+JSON.parse(brain)[5].info;
    soundElements[5].play();
    soundElements[0].pause();
    soundElements[1].pause();
    soundElements[2].pause();
    soundElements[4].pause();
    soundElements[3].pause();
}

function stop(event){
    soundElements[0].pause();
    soundElements[1].pause();
    soundElements[2].pause();
    soundElements[4].pause();
    soundElements[3].pause();
    soundElements[5].pause();
}