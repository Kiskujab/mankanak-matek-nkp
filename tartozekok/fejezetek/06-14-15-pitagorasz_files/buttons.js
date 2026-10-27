var Buttons = function() {
    
    this.container = document.getElementById("buttonContainer");
    this.items = [];

    this.buttonData = [

        [UJRAKEZDES, "ujra", "Újrakezdés", "reset();"],
        [MEGOLDAS, "helyes", "Megoldás", "showSolution();"],
        [INSTRUKCIO, "instrukcio", "Feladatleírás", "introduce();"],
        [ELLENORZES, "ellenorzes", "Ellenőrzés", "checkSolution();"],
        [TOVABB, "tovabb", "Tovább", "next();"]

    ];

    this.initialise();

}

Buttons.prototype = {
    
    initialise : function() {


        for (var i = 0; i < this.buttonData.length; i++)
            this.items.push( this.getButton(i) );

        this.displayButtons();



    },

    getButton : function(id) {

        if (this.buttonData[id][0]) {
            var img = document.createElement("img");
            img.className = "button";
            img.src = "images/" + this.buttonData[id][1] + ".png";
            img.title = this.buttonData[id][2];
            img.setAttribute("onClick", this.buttonData[id][3]);
            img.setAttribute("id", "button_" + id);

            return img;
        }
        else
            return null;

    },


    displayButtons : function() {

        var that = this;

        this.items.forEach(function(button) {
            if (button != null)
                that.container.appendChild(button);
        });

    },

    swapCheckAndNextButtons : function(isNext) {

        var id = (isNext) ? 4 : 3;

        this.items[3].src = "images/" + this.buttonData[id][1] + ".png";
        this.items[3].title = this.buttonData[id][2];
        this.items[3].setAttribute("onClick", this.buttonData[id][3]);

    },

};