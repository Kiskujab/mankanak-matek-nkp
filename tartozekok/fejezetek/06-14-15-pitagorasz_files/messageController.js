/**
 * This class is responsible for a fix-positioned div that informs
 * the users what's going on with the application.
 *
 */
var MessageController = function() {


    this.item = this.createControllerItem();
    this.textPlace = document.getElementById("messageContent");
    this.menuPlace = document.getElementById("menuBar");
    this.titlePlace = document.getElementById("messageTitle");



    this.isOpen;

    this.initialiseColors();
}



// ================================================================================
//                                    FUNCTIONS
// ================================================================================




MessageController.prototype = {

    /**
     * Sets the colors of the box;
     */
    initialiseColors : function() {

        $("#menuBar").css({
            "background": CIM_HATTER
        });

        $("#messageTitle").css({
            "color": CIM_SZOVEG
        });


    },

    /**
     * Creating the html divs that represent our message box.
     */
    createControllerItem : function() {

        // This is the great collecter box
        var messageBox = document.createElement("div");
        messageBox.setAttribute("id", "messageBox");

        // This is where the title and the close button is stored
        var menuBar = document.createElement("div");
        menuBar.setAttribute("id", "menuBar");

        // The title of the message
        var messageTitle = document.createElement("p");
        messageTitle.setAttribute("id", "messageTitle");

        // The button that closes the message
        var closeButton = document.createElement("img");
        closeButton.setAttribute("id", "close");
        closeButton.setAttribute("src", "images/close.png");
        closeButton.setAttribute("onCLick", "messageController.close()");

        // The content div of the message
        var messageContent = document.createElement("div");
        messageContent.setAttribute("id", "messageContent");


        messageBox.appendChild(menuBar);
        menuBar.appendChild(closeButton);
        menuBar.appendChild(messageTitle);

        messageBox.appendChild(messageContent);

        document.getElementById("resizeContainer").appendChild(messageBox);

        this.initialiseColors();

        return messageBox;

    },




    /**
     * Informs the student what's going on with the current game
     *
     * @param title
     * @param content
     */
    message : function(title, content) {
        messageController.setTitle(title);
        messageController.setContent(content);
        messageController.menuPlace.style.background = this.TITLE_BACKGROUND_COLOR;
        messageController.textPlace.style.background = "#FFF";
        messageController.open();

        this.initialiseColors();
    },




    /**
     * Informs the student what the exercise is going to be.
     *
     * @param introContent The introductory message.
     */
    introduceExercise : function(text) {
        if (this.isOpen)
            this.close();
        else
            this.message("Feladatleírás", text);
    },





    /**
     * Gives a mark on the student's performance. SPOT: 1 is the best, 5 is the worst mark.
     */
    markExercise : function(id, text) {

        text = (text == undefined) ? this.getDefaultCongratulationText(id) : text;
        var content = "<center>" +
                        "<img src='images/kiertekelesek" + id + ".png' / class='markImage' >" +
                        "<p class='markText'>" + text + "</p>" +
                      "</center>";


        messageController.setTitle("");
        messageController.setContent(content);
        messageController.menuPlace.style.background = JEGY_HATTER;
        messageController.textPlace.style.background = JEGY_HATTER;
        messageController.open();

        $(".markText").css({
            "color": JEGY_SZOVEG
        });
        
    },






    /**
     *  Gives the default texts below the smileys
     */
    getDefaultCongratulationText : function(id) {

        switch (id) {

            case 1 : return "Tökéletes!";
            case 2 : return "Ügyes vagy, bár megoldásod nem tökéletes!";
            case 3 : return "Szedd össze magad, lesz ez jobb is!";
            case 4 : return "Alig van jó megoldásod. Gyakorolj!";
            default: return "Sok gyakorlásra van még szükséged!";

        }

    },






    /**
     * Closing the message window.
     */
    close : function() {
        $("#messageBox").fadeOut(200);
        this.enableBackground();
        this.isOpen = false;
    },






    /**
     * Popping up the message window.
     */
    open : function() {
        $("#messageBox").fadeIn(200);
        this.disableBackground();
        this.isOpen = true;
    },






    /**
     * Enables the click events at the background.
     */
     enableBackground : function() {

        var darken = document.getElementById("darkenLayer");
        $("#darkenLayer").fadeOut(500);

        setTimeout(function(){
                try {
                    document.getElementById("resizeContainer").removeChild(darken);
                }
                catch(err) {
                    console.log("Do not click that hard.");
                }
            
            document.body.style.pointerEvents = 'auto';

        }, 500);

     },





    /**
     * Disables the click events at the background.
     */
    disableBackground : function() {
        
        var darken = document.createElement("div");
        darken.setAttribute("id", "darkenLayer");

        document.getElementById("resizeContainer").appendChild(darken);

        $("#darkenLayer").fadeIn(500);

        document.body.style.pointerEvents = 'none';
        document.getElementById("close").style.pointerEvents = 'auto';
        document.getElementById("button_2").style.pointerEvents = 'auto';

    },





    /**
     * Setting new title in the titleDiv.
     */
    setTitle : function(title) {
        this.titlePlace.innerHTML = title;
    },





    /**
     * Setting new content in the contentDiv.
     */
    setContent : function(text) {
        this.textPlace.innerHTML = text;
    }

};