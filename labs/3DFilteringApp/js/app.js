var canvas = document.getElementById("renderCanvas");
var rgCost = document.getElementById("rgCost");
var infoBox = document.getElementById("infoBox");
var filterButtons = document.querySelectorAll(".filterNav")
var camera, scene, data, selectedPieces;
var selectedType = "all";

//application setup stuff
fetch("data/furniture.json", { method: 'get'})
    .then(response => response.json())
    .then((jsonData) => {
        //json representation of the data
        data = jsonData;

        //load in all then models
        data.furniture.forEach((piece, idx) => {
            var p = BABYLON.SceneLoader.ImportMesh(
                "","./models/house/", piece.asset, scene,
                (meshes) => {
                    var containerNode = new BABYLON.TransformNode("root");
                    piece.asset = containerNode;
                    piece.asset.dataID = idx;

                    meshes.forEach((mesh) => {
                        mesh.parent = containerNode;
                    })
                }
            );
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

    camera = new BABYLON.ArcRotateCamera("c", Math.PI / 2, Math.PI / 4, 4, BABYLON.Vector3.Zero(), scene);

    var light = new BABYLON.DirectionalLight("1", new BABYLON.Vector3(0,-0.5,1), scene);

    //var bed = new BABYLON.SceneLoader.Append("./models/house/","bathroomMirror.obj",scene);

    return scene;
}
//end setup engine stuff

//application functions
function selectType(event){
    //remember what was selected
    selectedType = event.target.getAttribute("data-type");

    //reset selected class
    filterButtons.forEach((button) =>{
        button.classList.remove("selected")
    });

    //add the selected class to the item that was clicked
    event.target.classList.add("selected");
}
function showAvailable (){

    //get the slider cost value
    var amount = Number(rgCost.value);

    //filter selected pieces
    selectedPieces = data.furniture.filter((piece) =>{
        //only on price if all
        if (selectedType == "all"){
            return piece.price < amount;
        }else{ //price && type otherwise
            return (piece.price < amount) && (piece.type == selectedType);
        }
    })

    //hide all pieces
    data.furniture.forEach((piece) =>{
        TweenLite.to(piece.asset.position, .7,{ y: 5, onComplete: showFiltered })
    })
}

function showFiltered(){
    selectedPieces.forEach((piece, idx) => {
        TweenLite.to(piece.asset.position, .7, {y:0, x:idx })
    })
}

window.addEventListener("click", function(){
    var pickResult = scene.pick(scene.pointerX, scene.pointerY);
    var selectedObject = pickResult.pickedMesh;

    //lazy check
    if(selectedObject){
        //get id of the object.
        var dataID = selectedObject.parent.dataID;

        //pull rest of object info
        var itemInfo = data.furniture[dataID];
        infoBox.innerHTML = `${itemInfo.style} ${itemInfo.type} : $${itemInfo.price}`;
    }
})