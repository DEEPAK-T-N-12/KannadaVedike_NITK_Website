// translator button functions here  
function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {
            pageLanguage: 'en-US',
            layout: google.translate.TranslateElement.FloatPosition.TOP_LEFT,
            autoDisplay: false,
            includedLanguages: 'en,kn'
        },
        'google_translate_element'
    );
}

function translate_full_page() {
    var translate_dropdown = document.querySelector("#google_translate_element select");
    if (document.documentElement.lang === "kn") {
        $("#google_translate_element select").val("en");
        translate_dropdown.dispatchEvent(new Event('change'));
        translate_dropdown.dispatchEvent(new Event('change')); // Some weird bug; doesn't work without dispatching event twice
        language.innerHTML = "ಕನ್ನಡ";
    }
    else {
        $("#google_translate_element select").val("kn");
        translate_dropdown.dispatchEvent(new Event('change'));
        language.innerHTML = "English";
    }
}

$(document).ready(function () {
    if (document.documentElement.lang === "kn" || document.cookie.indexOf('googtrans=') != -1) {
        $("#translate_display_button, #translate_display_button_mobile").text("English");
    }
})

// translator button function ends here 

// adding header and footer 

header.innerHTML = `
                    <div id="preloader">
                        <div class="load">
                        <hr/><hr/><hr/><hr/>
                        </div>
                    </div>
                    <header class="flex px-3">
                    <div class="languageSection flex">
                    <img class="m-auto" src="icons/language.svg" width="20" height="20" alt="">
                    <div id="language" class="m-auto pl-1 notranslate btn" onclick="translate_full_page()">
                        ಕನ್ನಡ
                    </div>
                    </div>
                    <div class="support mr-5 py-2 px-4 red-bg white-txt">
                    <a href="#">
                        Donate Us
                    </a>
                    </div>
                    </header>
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-custom ">
                    <a class="navbar-brand" href="#">
                    <img id="logo" src="images/logo.jpg" width="100" height="100" alt="">
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                        <a class="nav-link" href="/">home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/#about">about us</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="events.html">events</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="social.html">social activities</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">alumni</a>
                        </li>
                    </ul>
                    </div>
                    </nav>
`;

footer.innerHTML=`
                    <footer class="footer">
                    <div class="container">
                        <div class="row">
                            <div class="footer-col first">
                                <div class="flex">
                                    <img src="images/logo.jpg" height="75" width="75" alt="" style="border-radius: 100%;">
                                    <h4 class="white-txt my-auto ml-2 font-weight-bold">KANNADA VEDIKE</h4>
                                </div>
                            </div>
                            <div class="footer-col">
                                <h4>Contact Us</h4>
                                <ul>
                                    <li>
                                        <p>
                                            NH 66, Srinivasnagar
                                            <br> Surathkal, Mangalore
                                            <br> Karnataka 575025
                                        </p>
                                    </li>
                                    <li>                    
                                        <p>
                                            <span class="white-txt"> 8989898989</span>
                                            <br> <a class="white-txt" href="mailto:kannadavedike@nitk.ac.in">kannadavedike@nitk.ac.in</a>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div class="footer-col">
                                <h4>Quick Links</h4>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/#about">About us</a></li>
                                    <li><a href="events.html">Events</a></li>
                                    <li><a href="social.html">Social Activities</a></li>
                                    <li><a href="#">alumni</a></li>
                                </ul>
                            </div>
                            <div class="footer-col">
                                <h4>follow us</h4>
                                <div class="social-links">
                                    <a href="https://m.facebook.com/kannadavedikenitk/" target="_blank"><img src="icons/facebook.svg" alt="" height="40" width="40"></a>
                                    <a href="https://www.instagram.com/kannadavedike_nitk/" target="_blank"><img src="icons/insta.svg" alt="" height="40" width="40"></a>
                                    <a href="https://twitter.com/kv_nitk" target="_blank"><img src="icons/twitter.svg" alt="" height="40" width="40"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    </footer>
                    <div id="lstFooter" class="flex">
                    <span style="color: #afafaf;">Copyright All Rights Reserved 2021, Kannada Vedike</span>
                    <span style="color: #afafaf;">Made with ❤️ by <a href="https://github.com/SaikiranPatil" target="_blank">KV Web Team</a></span>
                    </div>
`;


// preloader starts here 
function load(){
    setTimeout(() => {
        preloader.style.opacity = 0;
        preloader.style.display = "none";
    }, 1000);
}

window.onload=load();
// preloader ends here


// $('.carousel').carousel({
//     interval: 2000, keyboard: false, pause: false
// })