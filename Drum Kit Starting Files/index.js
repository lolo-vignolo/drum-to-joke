// --------------------------- 1 - A) ----------------------------------------

// using clicks, this function when I make a click will give back a letter, wich
// was set up in my html, that is why i am using for loop and the class .drum, in
// conclusion any click on any letter is an special letter. Usin "this", a specific
// html is pressed and with "innerHTML" I can get the letter in this code.

for(var i = 0 ; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // here a letter is going to pop up
    var buttoninnerHTML = this.innerHTML;
    makeSound(buttoninnerHTML);
    buttonAnimation(buttoninnerHTML);

  });

}

// --------------------------- 1 - B) ----------------------------------------

// using keyboard:
// this event.key .. it is a proprety of "keydown" events, where a letter will be
// given back. So, again as a result I get a letter. The attribute event can receive any name.
// because event here represent a bunch of information that my computer will show when a key"tecla" is hited.
document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
  });

// --------------------------- 2) ----------------------------------------

//
// this function will work hitting a letter, or receiving a letter like a trigger,
//  so in the two last function I will reveice a letter as a result, and they will
//   be the letters to make working this new function.

function makeSound (llave){

      switch (llave) {
        case "w":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;

        case "a":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;

        case "s":
          var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
          break;

        case "d":
          var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
          break;

        case "j":
          var crash = new Audio("sounds/crash.mp3");
          crash.play();
          break;

        case "k":
          var kickbass = new Audio("sounds/kick-bass.mp3");
          kickbass.play();
          break;

        case "l":
          var snare = new Audio("sounds/snare.mp3");
          snare.play();
          break;

        default: console.log(buttonKey);

      }
}


// As we cn see here, first I create a function which the attribute will be some of
// the previous letters, then through the variable changeButton I can get the buttom from
// my HTML, which I will meake a change over.
  function buttonAnimation(newllave){
    var changeButton = document.querySelector("." + newllave);
    changeButton.classList.add( "pressed");
    setTimeout(function(){
      changeButton.classList.remove( "pressed");
    }, 0.3);

    }
