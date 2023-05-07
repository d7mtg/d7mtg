rollDice();

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        getresult();
    }, 1000); //runs main function onload

}, false);

document.getElementById('outercustomization').style.zIndex = 5; //set default z-index for settings modal
document.getElementById('outerconsole').style.zIndex = 5; //set default z-index for console modal
let serverurl = "https://shufflenames-production-f47a.up.railway.app/"
var nameresult = document.getElementById("nameresult"); //gets the element to place the resulting name
var objectsshuffled = 0; //variable to count amount of total results in this session
var returnedFullName, normalcyvalue, gendervalue, returnedFullName, lastName, possibleCombinations, firstName; //if you dont understand the variable names, shut up! seriously, if you're looking through this code and you don't know what these are, you probably put pineapple on your pizza.
//sets the default settings
let settings = {
    normalcy: "normal", //normal, weird, random
    gender: "random", //male, female, random
    split: false, //true, false     //if false next 2 values not valid
    normalcyFirst: "normal", //normal, weird, random
    normalcyLast: "normal" //normal, weird, random
}
//triggered on click of go
function getresult() {
    document.getElementById("go").className = "activeGo"; //sets go animation
    setTimeout(function () {
        rollDice();
    }, 100);
    document.getElementById("copied").style.display = "none"; //set "copied" pop-up display invisible, since it is visible from previous session

    //fetches the name with the applied settings
    fetch(serverurl, {
            method: "POST",
            body: JSON.stringify(settings),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => main(json))
        .catch(error => {
            setTimeout(function () {
                document.getElementById("go").className = "inactiveGo"; //stops go animation
                document.getElementById("isonline").innerHTML = "<span class='labelbold'>SYSTEM STATUS</span><span><span id='noblink'> • </span>OFFLINE</span>"; //shows offline status
                document.getElementById("isonline").className = "offline"; //sets offline status animation
            }, Math.floor(Math.random() * 600) + 300);
        });
    const main = (obj) => {
        firstName = obj.firstName;
        lastName = obj.lastName;
        returnedFullName = firstName.name + " " + lastName.name; //gets string of full name

        setTimeout(() => {
                nameresult.innerHTML = returnedFullName; //momemt of truth - places name into html
                //history.pushState({
                //	 id: 'shuffle'
                //}, 'Shuffle', 'https://d7m.tg/shuffle/?name=' + firstName.name + '%20' + lastName.name);

                console.log(returnedFullName);

                objectsshuffled++; //increases total results for this session by one
                //bottomtext();
                //function bottomtext() {
                document.getElementById('splitbottom').innerHTML = settings.split.toString();
                //how many clicks
                var sezoedobjectsshuffled = "0".repeat(5 - String(objectsshuffled).length) + objectsshuffled
                //return clicks
                document.getElementById('objectsshuffled').innerHTML = sezoedobjectsshuffled;
                document.getElementById('currentsettings').innerHTML = !settings.split ?
                    `NORMALCY: ${settings.normalcy} // GENDER: ${settings.gender}` :
                    `NORMALCY FIRST: ${settings.normalcyFirst} // NORMALCY LAST: ${settings.normalcyLast} // GENDER: ${settings.gender}`
                document.getElementById('currentresults').innerHTML = !settings.split ?
                    `NORMALCY: ${firstName.weird == "weird" || lastName.weird == "weird" ? "weird" : "normal"} // GENDER: ${firstName.gender}` :
                    `NORMALCY FIRST: ${firstName.weird} // NORMALCY LAST: ${lastName.weird} // GENDER: ${firstName.gender}`
                document.getElementById("isonline").innerHTML = "<span class='labelbold'>SYSTEM STATUS</span><span><span id='blink'> • </span>ONLINE </span>"; //shows online status
                document.getElementById("isonline").className = "online"; //sets online status animation
                document.getElementById("go").className = "inactiveGo"; //stops go animation
            },
            Math.floor(Math.random() * 800) + 500 //gets random number 500ms to 1200ms, when the result function should run. I know, just making it longer.
        );
    }
}

function newpossible() {
    settings.normalcy = document.querySelector('input[name="normalcy"]:checked').value;
    settings.normalcyFirst = document.querySelector('input[name="normalcyFirst"]:checked').value;
    settings.normalcyLast = document.querySelector('input[name="normalcyLast"]:checked').value;
    settings.gender = document.querySelector('input[name="gender"]:checked').value;
    settings.split = document.querySelector('input[name="split"]').checked;

    if (settings.split) {
        console.log("first name normalcy: " + settings.normalcyFirst + "\n last name normalcy: " + settings.normalcyLast + "\n gender: " + settings.gender);

    } else {
        console.log("normalcy: " + settings.normalcy + "\n gender: " + settings.gender);

    }

    fetch(serverurl + "poss", {
            method: "POST",
            body: JSON.stringify(settings),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => main(json));
    const main = (obj) => {
        possibleCombinations = obj;
        document.getElementById('possiblecombinations').innerHTML = possibleCombinations.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById('possiblecombinationstwo').innerHTML = possibleCombinations.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}

function splitsettings() {
    var split = document.querySelector('input[name="split"]').checked;
    if (split) {
        document.getElementById("splitcheckbox").innerHTML = '<i class="fal fa-check"></i>';
        document.getElementById("firstnormalcydiv").style.display = "block";
        document.getElementById("lastnormalcydiv").style.display = "block";
        document.getElementById("normalcydiv").style.display = "none";
    } else {
        document.getElementById("splitcheckbox").innerHTML = '<i class="fal fa-fw"></i>';
        document.getElementById("firstnormalcydiv").style.display = "none";
        document.getElementById("lastnormalcydiv").style.display = "none";
        document.getElementById("normalcydiv").style.display = "block";
    }
}

addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        if (document.activeElement === document.getElementById('editableconsole')) {
            runconsole();
        } else {
            getresult();
        }
    }
    if (e.keyCode === 38) {
        e.preventDefault();
        if (document.activeElement === document.getElementById('editableconsole')) {
            getprevious();
        }
    }
    if (e.keyCode === 40) {
        e.preventDefault();
        if (document.activeElement === document.getElementById('editableconsole')) {
            getnext();
        }
    }
});
//close buttons
function closecustomization() {
    document.getElementById("outercustomization").className = "settingshidden";
    document.getElementById("showsettings").className = "iconbutton";
}

function opencustomization() {
    document.getElementById("outercustomization").className = "settingshown";
    document.getElementById("showsettings").className = "activebutton";
    zsettings();
}

function openconsole() {
    document.getElementById("outerconsole").className = "consoleshown";
    document.getElementById("showconsole").className = "activebutton";
    document.getElementById('editableconsole').focus();
    zconsole();
}

function closeconsole() {
    document.getElementById('editableconsole').blur();
    document.getElementById("outerconsole").className = "consolehidden";
    document.getElementById("showconsole").className = "iconbutton";
}

function changetheme() {


    document.getElementById("changetheme").className = "activebutton";
    setTimeout(function () {

        var stylesheet = document.getElementById('stylesheet').href;
        if (stylesheet.includes("modern")) {
            document.getElementById('stylesheet').href = '/shuffle/cyber.css';
            console.log("theme set: cyber.css");
        } else if (stylesheet.includes("cyber")) {
            document.getElementById('stylesheet').href = '/shuffle/modern.css';
            console.log("theme set: modern.css");

        }
        document.getElementById("changetheme").className = "iconbutton";
    }, 100);


}

init();
// Make the DIV element draggable:
dragElement(document.getElementById("outercustomization"));
dragElement(document.getElementById("outerconsole"));

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
//start touch
function touchHandler(event) {
    var touch = event.changedTouches[0];
    var simulatedEvent = document.createEvent("MouseEvent");
    simulatedEvent.initMouseEvent({
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup"
        } [event.type], true, true, window, 1,
        touch.screenX, touch.screenY,
        touch.clientX, touch.clientY, false,
        false, false, false, 0, null);
    touch.target.dispatchEvent(simulatedEvent);
    event.touchmove.preventDefault();
}

function init() {
    document.addEventListener("touchstart", touchHandler, true);
    document.addEventListener("touchmove", touchHandler, true);
    document.addEventListener("touchend", touchHandler, true);
    document.addEventListener("touchcancel", touchHandler, true);
}
//end touch

//clipboard
var clipboard = new ClipboardJS('.btn');
clipboard.on('success', function (e) {
    console.log(e);
});
clipboard.on('error', function (e) {
    console.log(e);
});
//add possible
var checkboxes = document.querySelectorAll("input");
for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("change", newpossible);
}
for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("change", splitsettings);
}
var commandlist = [];
var i = -5;

function runconsole() {
    var consolereturn = document.getElementById("consolereturn");
    if (editableconsole.innerText == "") {
        consolereturn.innerText = "error: command is null";
    } else if (editableconsole.innerText == "shuffle" || editableconsole.innerText == "run") {
        consolereturn.innerText = "shuffling...";
        getresult();
    } else if (editableconsole.innerText == "settings") {
        opencustomization();
        consolereturn.innerText = "opening settings...";
    } else if (editableconsole.innerText == "close settings") {
        closecustomization();
        consolereturn.innerText = "closing settings...";
    } else if (editableconsole.innerText == "refresh") {
        consolereturn.innerText = "refreshing page";
        location.reload();
    } else if (editableconsole.innerText == "d7mtg") {
        consolereturn.innerText = "that's the one!";
    } else if (editableconsole.innerText == "help") {
        consolereturn.innerText = "list of available commands:" + "\n" + "shuffle: shuffles the deck " + "\n" + "settings: opens configurations dialogue" + "\n" + "close settings: closes configurations dialogue";
    } else {
        consolereturn.innerText = "error: command not found: " + editableconsole.innerText;
    }
    commandlist[commandlist.length] = editableconsole.innerText;
    i = commandlist.length - 1;
    document.getElementById('consolereturn').id = "oldconsolereturn";
    document.getElementById('editableconsole').id = "oldeditableconsole";
    document.getElementById('oldeditableconsole').contentEditable = "false";
    document.getElementsByClassName("consoleobject")[0].innerHTML = document.getElementsByClassName("consoleobject")[0].innerHTML + '<br><span class="before">~$<\/span><span id="editableconsole" spellcheck="false" contenteditable="true"></span><p id="consolereturn"></p>';
    editableconsole.focus();
}

function getprevious() {
    if (i >= 0) {
        editableconsole.innerText = commandlist[i];
        i--;
    } else {
        editableconsole.innerText = editableconsole.innerText;
    }
}

function getnext() {
    if (i < commandlist.length - 1) {
        i++;
        editableconsole.innerText = commandlist[i];
    } else {
        editableconsole.innerText = "";
    }
}

function rollDice() {

    let diceObj = {
        "0": "one",
        "1": "two",
        "2": "three",
        "3": "four",
        "4": "five",
        "5": "six"
    }
    var dice = diceObj[Math.floor(Math.random() * 6)]

    document.getElementById("dice").innerHTML = '<i class="fas fa-dice-' + dice + '" aria-hidden="true"></i>'

}
