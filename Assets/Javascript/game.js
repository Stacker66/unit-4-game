var targetNumber = 53;  

$("#number-to-guess").text(targetNumber);

var counter = 0; 

  var numberOptions = [10, 5, 3, 7];


for (var i = 0; i < numberOptions.length; i++) {


        var imageCrystal = $("<img>");
    
        imageCrystal.addClass("crystal-image");
    
        imageCrystal.attr("src", "https://files.slack.com/files-pri/T9NDS9U48-FANBQE3FW/red.png");
        imageCrystal.attr("src", "https://files.slack.com/files-pri/T9NDS9U48-FANBQGAUU/download/yellow.png");
        imageCrystal.attr("src", "https://files.slack.com/files-pri/T9NDS9U48-FANBQBRBN/download/green.png");
        imageCrystal.attr("src", "https://files.slack.com/files-pri/T9NDS9U48-FAPKU19RD/download/blue.png");


        imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    
        crystals.append(imageCrystal);
      }
    
      crystals.on("click", ".crystal-image", function() {
    
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        
        
        counter += crystalValue;
alert("New score: " + counter);  

    if (counter === targetNumber) {

          alert("You win!");
    }

    else if (counter >= targetNumber) {

        alert("You lose!!");
      }
  
       
    
});