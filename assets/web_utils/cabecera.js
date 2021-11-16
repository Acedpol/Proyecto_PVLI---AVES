document.write(`
<style>
@font-face {
    font-family: title-logo;
    src: url(/assets/fonts/Bombing.ttf);
}

@font-face {
    font-family: menu-opt;
    src: url(/assets/fonts/GrandStylus.ttf);
}

@font-face {
    font-family: overlay-opt;
    src: url(/assets/fonts/Montserrat-Bold.ttf);
}

@font-face {
    font-family: info;
    src: url(/assets/fonts/Montserrat-Regular.ttf);
}
</style>

<div id="download-link" class="download">
    <div style="height: 10%;"><h1 class="download-title" style="text-align: center;"> ¡Descarga con un click! </h1></div>
    <div style="height: 10%;">
        <button>
            <a onclick="download_project()" href="https://github.com/Acedpol/Proyecto_PVLI---AVES/archive/refs/heads/master.zip">AVES.zip</a>
        </button>
    </div>
</div>
<noscript>Sorry, your browser does not support JavaScript!</noscript>

<div class="container-fluid">
            <div class="row">
                <div class="col-logo">
                    <div class="logo"><a class="logo-text" href="index.html">Grupo 12: Aves</a></div>
                </div>
                <div class="col-menu">
                    <div class="menu_text">
                        <!-- Main menú: normal state -->
                        <ul>
                            <li><a id="menu-btn" href="index.html">HOME</a></li>                                                    
                            <li><a id="menu-btn" href="about.html">ABOUT</a></li>
                            <li><a id="package-btn" class="package-btn" onclick="toggle_download()">PACKAGE</a></li>
                            <li><a id="menu-btn" href="training.html">TRAINING</a></li>
                            <li><a id="menu-btn" href="contact-us.html">CONTACT US</a></li>
                        </ul>
                        <!-- Main menu: overlay -->
                        <div id="myNav" class="overlay">
                            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                            <div class="overlay-content">
                                <a id="overlay-btn" href="index.html">HOME</a>
                                <a id="overlay-btn" href="about.html">ABOUT</a>
                                <a id="overlay-btn" onclick="toggle_download()">PACKAGE</a>
                                <a id="overlay-btn" href="training.html">TRAINING</a>
                                <a id="overlay-btn" href="contact-us.html">CONTACT US</a>
                            </div>
                        </div>
                    </div>              
                </div>
                <!-- Overlay button -->
                <div class="col-button">
                    <span  onclick="openNav()">
                        <img src="assets/images/toggle.png" class="toggle_menu">
                    </span>
                </div>
            </div>
        </div>
`)
