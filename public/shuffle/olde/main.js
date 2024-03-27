var nameresult = document.getElementById("nameresult");
var normalcy = document.getElementById("normalcy");
var gender = document.getElementById("gender");
var religion = document.getElementById("religion");
var alternative = document.getElementById("alternative");
var firstname;
var lastname;
var objectsshuffled = 0;
var snd = new Audio("sound.wav");
var returnedFullName;
var normalcyvalue;
var gendervalue;
var religionvalue;
function getresult() {


    //10 random numbers
    var randomlist = Math.floor(Math.random() * 10);


    // first jewish normal male
    var firstJewishNormalMaleList = {
        name: ["Yitzchok", "Jacob", "Moshe", "Chaim", "Hershy"],
        religion: "jewish",
        normalcy: "normal",
        gender: "male"
    };

    // first jewish weird male

    var firstJewishWeirdMaleList = {
        name: ["Ploiny", "Almoni", "Chagdi", "Gimpel", "Groinem"],
        religion: "jewish",
        normalcy: "weird",
        gender: "male"
    };



    // first jewish normal female

    var firstJewishNormalFemaleList = {
        name: ["Sarah", "Rachel", "Esther", "Hindy", "Blima", "Rivka"],
        religion: "jewish",
        normalcy: "normal",
        gender: "female"
    };

    // first jewish weird female

    var firstJewishWeirdFemaleList = {
        name: ["Challah", "Krimet", "Shlomptzi", "Gela", "Tuna"],
        religion: "jewish",
        normalcy: "weird",
        gender: "female"
    };



    // last jewish normal

    var lastJewishNormalList = {
        name: ["Sabel", "Moskowics", "Roth", "Wieder", "Teitelbaum", "Spitzer", "Jacobs"],
        religion: "jewish",
        normalcy: "normal",
    };


    // last jewish weird

    var lastJewishWeirdList = {
        name: ["Shtreimel", "Friedom", "Velvet", "Upgrindt", "Milchuma"],
        religion: "jewish",
        normalcy: "weird",
    };

    //non-jewish

    // first nonjewish normal male
    var firstNonJewishNormalMaleList = {
        name: ["Jack", "Mark", "John", "Jack", "Eric"],
        religion: "nonjewish",
        normalcy: "normal",
        gender: "male"
    };

    // first nonjewish weird male

    var firstNonJewishWeirdMaleList = {
        name: ["Dronald", "Jreg", "TinTin", "Gilette"],
        religion: "nonjewish",
        normalcy: "weird",
        gender: "male"
    };



    // first nonjewish normal female

    var firstNonJewishNormalFemaleList = {
        name: ["Emma", "Ava", "Isabella", "Sophia", "Charlotte", "Emily"],
        religion: "nonjewish",
        normalcy: "normal",
        gender: "female"
    };

    // first nonjewish weird female

    var firstNonJewishWeirdFemaleList = {
        name: ["Grecia", "Greer", "Embry", "Bronywyn", "Camari"],
        religion: "nonjewish",
        normalcy: "weird",
        gender: "female"
    };



    // last nonjewish normal

    var lastNonJewishNormalList = {
        name: ["Smith", "Johnson", "Brown", "Davis", "Rodriguez", "Wilson", "Anderson"],
        religion: "nonjewish",
        normalcy: "normal",
    };


    // last nonjewish weird

    var lastNonJewishWeirdList = {
        name: ["Fernsby", "MacQuoid", "Loughty", "Relish", "Villin"],
        religion: "nonjewish",
        normalcy: "weird",
    };


     normalcyvalue = document.querySelector('input[name="normalcy"]:checked').value;
     gendervalue = document.querySelector('input[name="gender"]:checked').value;
     religionvalue = document.querySelector('input[name="religion"]:checked').value;



    //normal
    if (normalcyvalue == "normal") {
        //male
        if (gendervalue == "male") {
            //jewish
            if (religionvalue == "jewish") {
                //normal jewish male
                firstname = firstJewishNormalMaleList;
                lastname = lastJewishNormalList;

            } else if (religionvalue == "nonjewish") {
                //normal nonjewish male
                firstname = firstNonJewishNormalMaleList;
                lastname = lastNonJewishNormalList;

            } else {
                //normal ?jewish?  male
                if (randomlist > 5) {
                    firstname = firstJewishNormalMaleList;
                    lastname = lastJewishNormalList;

                } else if (randomlist < 5) {
                    firstname = firstNonJewishNormalMaleList;
                    lastname = lastNonJewishNormalList;

                }
            }
            //female
        } else if (gendervalue == "female") {
            //jewish
            if (religionvalue == "jewish") {
                //normal jewish female
                firstname = firstJewishNormalFemaleList;
                lastname = lastJewishNormalList;

            } else if (religionvalue == "nonjewish") {
                //normal nonjewish female
                firstname = firstNonJewishNormalFemaleList;
                lastname = lastNonJewishNormalList;

            } else {
                //normal ?jewish?  female
                if (randomlist > 5) {
                    firstname = firstJewishNormalFemaleList;
                    lastname = lastJewishNormalList;
                } else if (randomlist < 5) {
                    firstname = firstNonJewishNormalFemaleList;
                    lastname = lastNonJewishNormalList;
                }
            }

        } else {
            //jewish
            if (religionvalue == "jewish") {
                //normal jewish ?male?

                if (randomlist > 5) {
                    firstname = firstJewishNormalFemaleList;
                    lastname = lastJewishNormalList;
                } else if (randomlist < 5) {
                    firstname = firstJewishNormalMaleList;
                    lastname = lastJewishNormalList;
                }


            } else if (religionvalue == "nonjewish") {
                //normal nonjewish ?male?

                if (randomlist > 5) {
                    firstname = firstNonJewishNormalFemaleList;
                    lastname = lastNonJewishNormalList;
                } else if (randomlist < 5) {
                    firstname = firstNonJewishNormalMaleList;
                    lastname = lastNonJewishNormalList;
                }

            } else {
                //normal ?jewish? ?male?

                if (randomlist > 8) {
                    // nonjewish female
                    firstname = firstNonJewishNormalFemaleList;
                    lastname = lastNonJewishNormalList;
                } else if (randomlist > 6) {
                    // nonjewish male
                    firstname = firstNonJewishNormalMaleList;
                    lastname = lastNonJewishNormalList;
                } else if (randomlist > 3) {
                    // jewish male
                    firstname = firstJewishNormalMaleList;
                    lastname = lastJewishNormalList;
                } else {
                    // jewish female
                    firstname = firstJewishNormalFemaleList;
                    lastname = lastJewishNormalList;
                }

            }

        }
        //end normal
        //begin weird
    } else if (normalcyvalue == "weird") {
        //male
        if (gendervalue == "male") {
            //jewish
            if (religionvalue == "jewish") {
                //weird jewish male
                firstname = firstJewishWeirdMaleList;
                lastname = lastJewishWeirdList;

            } else if (religionvalue == "nonjewish") {
                //weird nonjewish male
                firstname = firstNonJewishWeirdMaleList;
                lastname = lastNonJewishWeirdList;

            } else {
                //weird ?jewish?  male
                if (randomlist > 5) {
                    firstname = firstJewishWeirdMaleList;
                    lastname = lastJewishWeirdList;

                } else if (randomlist < 5) {
                    firstname = firstNonJewishWeirdMaleList;
                    lastname = lastNonJewishWeirdList;

                }
            }
            //female
        } else if (gendervalue == "female") {
            //jewish
            if (religionvalue == "jewish") {
                //weird jewish female
                firstname = firstJewishWeirdFemaleList;
                lastname = lastJewishWeirdList;

            } else if (religionvalue == "nonjewish") {
                //weird nonjewish female
                firstname = firstNonJewishWeirdFemaleList;
                lastname = lastNonJewishWeirdList;

            } else {
                //weird ?jewish?  female
                if (randomlist > 5) {
                    firstname = firstJewishWeirdFemaleList;
                    lastname = lastJewishWeirdList;
                } else if (randomlist < 5) {
                    firstname = firstNonJewishWeirdFemaleList;
                    lastname = lastNonJewishWeirdList;
                }
            }

        } else {
            //jewish
            if (religionvalue == "jewish") {
                //weird jewish ?male?

                if (randomlist > 5) {
                    firstname = firstJewishWeirdFemaleList;
                    lastname = lastJewishWeirdList;
                } else if (randomlist < 5) {
                    firstname = firstJewishWeirdMaleList;
                    lastname = lastJewishWeirdList;
                }


            } else if (religionvalue == "nonjewish") {
                //weird nonjewish ?male?

                if (randomlist > 5) {
                    firstname = firstNonJewishWeirdFemaleList;
                    lastname = lastNonJewishWeirdList;
                } else if (randomlist < 5) {
                    firstname = firstNonJewishWeirdMaleList;
                    lastname = lastNonJewishWeirdList;
                }

            } else {
                //weird ?jewish? ?male?

                if (randomlist > 8) {
                    // nonjewish female
                    firstname = firstNonJewishWeirdFemaleList;
                    lastname = lastNonJewishWeirdList;
                } else if (randomlist > 6) {
                    // nonjewish male
                    firstname = firstNonJewishWeirdMaleList;
                    lastname = lastNonJewishWeirdList;
                } else if (randomlist > 3) {
                    // jewish male
                    firstname = firstJewishWeirdMaleList;
                    lastname = lastJewishWeirdList;
                } else {
                    // jewish female
                    firstname = firstJewishWeirdFemaleList;
                    lastname = lastJewishWeirdList;
                }

            }

        }
        // end weird
        //begin random weirdness
    } else {
        //male
        if (gendervalue == "male") {
            //jewish
            if (religionvalue == "jewish") {
                //?weird? jewish male
                if (randomlist > 5) {

                    firstname = firstJewishWeirdMaleList;
                    lastname = lastJewishWeirdList;
                } else {

                    firstname = firstJewishNormalMaleList;
                    lastname = lastJewishNormalList;
                }

            } else if (religionvalue == "nonjewish") {
                //?weird? nonjewish male
                if (randomlist > 5) {
                    //weird
                    firstname = firstNonJewishWeirdMaleList;
                    lastname = lastNonJewishWeirdList;
                } else {
                    //normal
                    firstname = firstNonJewishNormalMaleList;
                    lastname = lastNonJewishNormalList;
                }

            } else {
                //?weird? ?jewish?  male
                if (randomlist > 8) {
                    // male nonjewish weird
                    firstname = firstNonJewishWeirdMaleList;
                    lastname = lastNonJewishWeirdList;
                } else if (randomlist > 6) {
                    // male jewish weird
                    firstname = firstJewishWeirdMaleList;
                    lastname = lastJewishWeirdList;
                } else if (randomlist > 3) {
                    // male nonjewish normal
                    firstname = firstNonJewishNormalMaleList;
                    lastname = lastNonJewishNormalList;
                } else {
                    // male jewish normal
                    firstname = firstJewishNormalMaleList;
                    lastname = lastJewishNormalList;
                }
            }
            //female
        } else if (gendervalue == "female") {


            //jewish
            if (religionvalue == "jewish") {
                //?weird? jewish female
                if (randomlist > 5) {

                    firstname = firstJewishWeirdFemaleList;
                    lastname = lastJewishWeirdList;
                } else {

                    firstname = firstJewishNormalFemaleList;
                    lastname = lastJewishNormalList;
                }

            } else if (religionvalue == "nonjewish") {
                //?weird? nonjewish female
                if (randomlist > 5) {
                    //weird
                    firstname = firstNonJewishWeirdFemaleList;
                    lastname = lastNonJewishWeirdList;
                } else {
                    //normal
                    firstname = firstNonJewishNormalFemaleList;
                    lastname = lastNonJewishNormalList;
                }

            } else {
                //?weird? ?jewish?  female
                if (randomlist > 8) {
                    // female nonjewish weird
                    firstname = firstNonJewishWeirdFemaleList;
                    lastname = lastNonJewishWeirdList;
                } else if (randomlist > 6) {
                    // female jewish weird
                    firstname = firstJewishWeirdFemaleList;
                    lastname = lastJewishWeirdList;
                } else if (randomlist > 3) {
                    // female nonjewish normal
                    firstname = firstNonJewishNormalFemaleList;
                    lastname = lastNonJewishNormalList;
                } else {
                    // female jewish normal
                    firstname = firstJewishNormalFemaleList;
                    lastname = lastJewishNormalList;
                }
            }


        } else {
            //weirdness is random
            //gender is random


            if (religionvalue == "jewish") {

                if (randomlist > 8) {
                    // female weird
                    firstname = firstJewishWeirdFemaleList;
                    lastname = lastJewishWeirdList;
                } else if (randomlist > 6) {
                    // female normal
                    firstname = firstJewishNormalFemaleList;
                    lastname = lastJewishNormalList;
                } else if (randomlist > 3) {
                    // male weird
                    firstname = firstJewishWeirdMaleList;
                    lastname = lastJewishWeirdList;
                } else {
                    // male normal
                    firstname = firstJewishNormalMaleList;
                    lastname = lastJewishNormalList;
                }


            } else if (religionvalue == "nonjewish") {


                if (randomlist > 8) {
                    // nonjewish female weird
                    firstname = firstNonJewishWeirdFemaleList;
                    lastname = lastJewishWeirdList;
                } else if (randomlist > 6) {
                    // nonjewish female normal
                    firstname = firstNonJewishNormalFemaleList;
                    lastname = lastNonJewishNormalList;
                } else if (randomlist > 3) {
                    // nonjewish male weird
                    firstname = firstNonJewishWeirdMaleList;
                    lastname = lastNonJewishWeirdList;
                } else {
                    // nonjewish male normal
                    firstname = firstNonJewishNormalMaleList;
                    lastname = lastNonJewishNormalList;
                }

            } else {
                //complete ANARCHY!!!!

                if (randomlist > 9) {
                    // nonjewish female weird
                    firstname = firstNonJewishWeirdFemaleList;
                    lastname = lastNonJewishWeirdList;
                } else if (randomlist > 8) {
                    // nonjewish female normal
                    firstname = firstNonJewishNormalFemaleList;
                    lastname = lastNonJewishWeirdList;
                } else if (randomlist > 7) {
                    // nonjewish male weird
                    firstname = firstNonJewishWeirdMaleList;
                    lastname = lastNonJewishWeirdList;
                } else if (randomlist > 6) {
                    // nonjewish male normal
                    firstname = firstNonJewishNormalMaleList;
                    lastname = lastNonJewishNormalList;
                } else if (randomlist > 5) {
                    // female weird
                    firstname = firstJewishWeirdFemaleList;
                    lastname = lastJewishWeirdList;
                } else if (randomlist > 3) {
                    // female normal
                    firstname = firstJewishNormalFemaleList;
                    lastname = lastJewishNormalList;
                } else if (randomlist > 1) {
                    // male weird
                    firstname = firstJewishWeirdMaleList;
                    lastname = lastJewishWeirdList;
                } else {
                    // male normal
                    firstname = firstJewishNormalMaleList;
                    lastname = lastJewishNormalList;
                }



            }


        }

    }




 var firstrandom = Math.floor(Math.random() * firstname.name.length),
     lastrandom = Math.floor(Math.random() * lastname.name.length),

     returnedFirstName = firstname.name[firstrandom],
     returnedLastName = lastname.name[lastrandom];

     returnedFullName = returnedFirstName + " " + returnedLastName;




    //momemt of truth
    nameresult.innerHTML = returnedFullName;

    //copy to clipboard



  


    setTimeout(() => {
        document.getElementById("go").blur();
    }, 100);

bottomtext();


}

addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {

        document.getElementById("go").focus();


    }
});


//close buttons
function closecustomization() {
    document.getElementById("outercustomization").style.display = "none";
    document.getElementById("showsettings").innerHTML = '<p onclick="opencustomization()">Show settings</p>';
}


function opencustomization() {

    document.getElementById("outercustomization").style.display = "block";
    document.getElementById("showsettings").innerHTML = '<p onclick="closecustomization()">Hide settings</p';


}

// Make the DIV element draggable:
dragElement(document.getElementById("outercustomization"));

function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function bottomtext() {

  //how many clicks
  objectsshuffled++;
  var sezoedobjectsshuffled = "0000" + objectsshuffled;
  var length = sezoedobjectsshuffled.length;
  var calculatedfour = length - 4;
  var returnedobjectsshuffled = sezoedobjectsshuffled.substring(calculatedfour, length);

//return clicks
  document.getElementById('objectsshuffled').innerHTML = returnedobjectsshuffled;

  //binary conversion
  var output = document.getElementById("binary");
  var input = returnedFullName;
  output.innerHTML = "";
  for (var i = 0; i < input.length; i++) {
      output.innerHTML += input[i].charCodeAt(0).toString(2) + " ";
  }
//char code
  var outputC = document.getElementById("charcode");
  var inputC = returnedFullName;
  outputC.innerHTML = "";
  for (var i = 0; i < inputC.length; i++) {
      outputC.innerHTML += inputC[i].charCodeAt(0) + " ";

  }



var currentsettings = document.getElementById('currentsettings').innerHTML = "N: "+normalcyvalue.toUpperCase() + " • G: "+gendervalue.toUpperCase() + " • R: "+religionvalue.toUpperCase();
var currentresults = document.getElementById('currentresults').innerHTML = "N: "+firstname.normalcy.toUpperCase() + " • G: "+firstname.gender.toUpperCase() + " • R: "+firstname.religion.toUpperCase();




}
