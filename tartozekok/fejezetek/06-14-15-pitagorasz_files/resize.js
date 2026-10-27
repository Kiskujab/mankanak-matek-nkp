/**
 * Ezt a scriptet a </body> tag ele kell beszurni. Egy adott dobozt
 * meretez a bongeszo merete alapjan.
 */

 // A doboz id-ja
 var objectID = "resizeContainer";

 var WidthPerHeight = 1.7;

 var ORIGINAL_FONT_SIZE =  12; //px


 // ===============================================================
 // Nem szerkesztheto felulet
 // ===============================================================

// It initializes the size of the object before loading the page
resizeWindow(WidthPerHeight, objectID);

// Resing the object whnever the window gets resized
window.addEventListener('resize', function(){
    resizeWindow(WidthPerHeight, objectID);
}, true);


function resizeWindow(WidthPerHeight, objectID) {

    var body = document.body;
    var html = document.documentElement;
    var object = document.getElementById(objectID);

    // The body fits to the object, so it needs to be cleaned.
    object.style.height = "0px";
    object.style.width = "0px";

    var bodyHeight = Math.max(  body.offsetHeight, 
                           html.clientHeight,  html.offsetHeight );

    var bodyWidth = Math.max(  body.offsetWidth,
                          html.clientWidth, html.offsetWidth );

    
    if (bodyWidth / bodyHeight > WidthPerHeight) {
        object.style.height = bodyHeight + "px";
        object.style.width = (bodyHeight * WidthPerHeight) + "px";
        body.style.fontSize = (bodyHeight * WidthPerHeight * ORIGINAL_FONT_SIZE / 1000) + "px";
    }
    else {
        object.style.width = bodyWidth + "px";
        object.style.height = (bodyWidth / WidthPerHeight) + "px";
        body.style.fontSize = (bodyWidth * ORIGINAL_FONT_SIZE / 1000) + "px";

    }

}