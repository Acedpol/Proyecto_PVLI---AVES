// Open / Close overlay navigation:
function openNav() {
    document.getElementById("myNav").style.width = "100%";
    close_download();
}
    
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

// Toggle download window and start download:
function toggle_download()
{
    var obj = document.getElementById("download-link");
    var btn = document.getElementById("package-btn");
    if(obj.style.display == "flex") {
        obj.style.display = "none";
        btn.style.backgroundColor = "unset";
        btn.style.textDecorationLine = "unset";
    }
    else {
        obj.style.display = "flex";
        btn.style.backgroundColor = "rgba(0,0,0,0.92)";
        btn.style.textDecorationLine = "underline";
    }
    console.log("Haz click para descargar");
    
    closeNav();
}

function close_download() 
{
    var obj = document.getElementById("download-link");
    var btn = document.getElementById("package-btn");
    if(obj.style.display == "flex") {
        obj.style.display = "none";
        btn.style.backgroundColor = "unset";
        btn.style.textDecorationLine = "unset";
    }
}

function download_project()
{
    var obj = document.getElementById("download-link");
    obj.style.display = "none";
    console.log("La descarga ha comenzado");

    var btn = document.getElementById("package-btn");
    btn.style.backgroundColor = "unset";
    btn.style.textDecorationLine = "unset";
}
