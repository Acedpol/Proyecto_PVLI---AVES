document.write(`
<div class="header_section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3">
                    <div class="logo"><a href="index.html"><img src="images/logo.png"></a></div>
                </div>
                <div class="col-md-9">
                    <div class="menu_text">
                        <ul>
                            <li><a href="index.html">HOME</a></li>                                                    
                            <li><a href="about.html">ABOUT</a></li>
                            <li><a href="price.html">PACKAGE</a></li>
                            <li><a href="gym.html">TRAINING</a></li>
                            <li><a href="contact.html">CONTACT US</a></li>
                            <li><a href="#"><img src="images/search-icon.png"></a></li>
                            <div id="myNav" class="overlay">
                <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                <div class="overlay-content">
                  <a href="index.html">HOME</a>
                  <a href="about.html">ABOUT</a>
                  <a href="price.html">PRICE</a>
                  <a href="gym.html">GYM</a>
                  <a href="class.html">CLASS</a>
                  <a href="contact.html">CONTACT US</a>
                  <a href="#">LOGIN</a>
                  <a href="#">REGISTER</a>
                </div>
                </div>
                <span  style="font-size:33px;cursor:pointer; color: #ffffff;" onclick="openNav()"><img src="images/toggle.png" class="toggle_menu"></span>
                </div>  
                </li>
              </ul>
                    </div>
            </div>
        </div>
    </div>
`)
