document.write(`
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
                            <li><a id="menu-btn" href="package.html">PACKAGE</a></li>
                            <li><a id="menu-btn" href="training.html">TRAINING</a></li>
                            <li><a id="menu-btn" href="contact-us.html">CONTACT US</a></li>
                        </ul>
                        <!-- Main menu: overlay -->
                        <div id="myNav" class="overlay">
                            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                            <div class="overlay-content">
                                <a id="overlay-btn" href="index.html">HOME</a>
                                <a id="overlay-btn" href="about.html">ABOUT</a>
                                <a id="overlay-btn" href="package.html">PACKAGE</a>
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
