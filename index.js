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
