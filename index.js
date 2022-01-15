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
        language.innerHTML="ಕನ್ನಡ";
    }
    else {
        $("#google_translate_element select").val("kn");
        translate_dropdown.dispatchEvent(new Event('change'));
        language.innerHTML="English";
    }
}

$(document).ready(function () {
    if (document.documentElement.lang === "kn" || document.cookie.indexOf('googtrans=') != -1) {
        $("#translate_display_button, #translate_display_button_mobile").text("English");
    }
})

// translator button function ends here 

// adding header and footer 

header.innerHTML=`
                    <div id="preloader">
                        <div class="load">
                        <hr/><hr/><hr/><hr/>
                        </div>
                    </div>
                    <header class="flex px-3">
                    <div class="languageSection flex">
                    <img class="m-auto" src="/icons/language.svg" width="20" height="20" alt="">
                    <div id="language" class="m-auto pl-1" onclick="translate_full_page()" role="button">
                        ಕನ್ನಡ
                    </div>
                    </div>
                    <div class="support mr-5 py-2 px-4 red-bg white-txt">
                    <a href="#">
                        Support Us
                    </a>
                    </div>
                    </header>
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-custom ">
                    <a class="navbar-brand" href="#">
                    <img id="logo" src="/images/logo.png" width="100" height="100" alt="">
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                        <a class="nav-link" href="/index.html">home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#about">about us</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="events.html">events</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">social activities</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">alumni</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">contact us</a>
                        </li>
                        <li class="nav-item">
                        </li>
                    </ul>
                    </div>
                    </nav>
`;

footer.innerHTML=``;


preloader.style.opacity = 0;
setTimeout(() => {
    preloader.style.display = "none";
}, 1000);