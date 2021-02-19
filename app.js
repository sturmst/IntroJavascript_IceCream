//GLOBAL VARIABLES
var globalScoopAmount = 0;
var globalStep1, globalStep2, globalStep3;
globalStep1 = document.getElementById("step1");
globalStep2 = document.getElementById("step2");
globalStep3 = document.getElementById("step3");

//* OK, kan nog verbeterd worden
function selectAmountOfScoops (scAmount) {
    if (scAmount === 1){
            globalScoopAmount = 1;
            document.getElementById("scoopAmountText").innerHTML = "Je hebt " + globalScoopAmount + " bol gekozen. - 2EUR";
            showFlavourOptions ();
            console.log("Selected amount of scoops: " + globalScoopAmount)
    }
    else if (scAmount === 2) {
        globalScoopAmount = 2;
        document.getElementById("scoopAmountText").innerHTML = "Je hebt " + globalScoopAmount + " bollen gekozen. - 3EUR";
        showFlavourOptions ();
    }
    else if (scAmount === 3){
        globalScoopAmount = 3;
        document.getElementById("scoopAmountText").innerHTML = "Je hebt " + globalScoopAmount + " bollen gekozen. - 4EUR";
        showFlavourOptions ();
    }
    else {
        alert("No scoops selected" + globalScoopAmount);
    }
    globalStep2.style.display = "block";
    showOrderButton();
}

//OK
function showFlavourOptions (){
    var scFlavOp1, scFlavOp2, scFlavOp3;
    scFlavOp1 = document.getElementById("scoopFlavourOptions1");
    scFlavOp2 = document.getElementById("scoopFlavourOptions2");
    scFlavOp3 = document.getElementById("scoopFlavourOptions3");

    if (globalScoopAmount === 1) {
        scFlavOp1.style.display = "block";
        scFlavOp2.style.display = "none";
        scFlavOp3.style.display = "none";
    }
    else if (globalScoopAmount === 2) {
        scFlavOp1.style.display = "block";
        scFlavOp2.style.display = "block";
        scFlavOp3.style.display = "none";
    }
    else if (globalScoopAmount === 3) {
        scFlavOp1.style.display = "block";
        scFlavOp2.style.display = "block";
        scFlavOp3.style.display = "block";
    }
}
// Flavour Option 1 -----------------------------------------------------------------------------------
// note: For-loop has to happen on Global level; else it won't be executed 
var flavourOptions1 = document.formFlavourOptions1.radsFlavOp1; //alt way of writing: document.forms[1]
var previous1 = null;
var flavourTextScoop1;

for (let i = 0; i < flavourOptions1.length; i++) {
    flavourOptions1[i].onclick = function (){
        (previous1)? console.log("Scoop 1: Previous selected flavour: " + previous1.value):null;

        if(this !== previous1){
            previous1 = this;
        }
        flavourTextScoop1 = this.value;
        console.log("Scoop 1: New selected flavour: " +this.value);
        showOrderButton();
    };
}
// ----------------------------------------------------------------------------------------------------
// Flavour Option 2 -----------------------------------------------------------------------------------
// note: For-loop has to happen on Global level; else it won't be executed 
var flavourOptions2 = document.formFlavourOptions2.radsFlavOp2; //alt way of writing: document.forms[2]
var previous2 = null;
var flavourTextScoop2;

for (let i = 0; i < flavourOptions2.length; i++) {
    flavourOptions2[i].onclick = function (){
        (previous2)? console.log("Scoop 2: Previous selected flavour: "  + previous2.value):null;

        if(this !== previous2){
            previous2 = this;
        }
        flavourTextScoop2 = this.value;
        console.log("Scoop 2: New selected flavour: " +this.value);
        showOrderButton();
    };
}
// ----------------------------------------------------------------------------------------------------
// Flavour Option 3 -----------------------------------------------------------------------------------
// note: For-loop has to happen on Global level; else it won't be executed 
var flavourOptions3 = document.formFlavourOptions3.radsFlavOp3; //alt way of writing: document.forms[3]
var previous3 = null;
var flavourTextScoop3;

for (let i = 0; i < flavourOptions3.length; i++) {
    flavourOptions3[i].onclick = function (){
        (previous3)? console.log("Scoop 3: Previous selected flavour: "  + previous3.value):null;

        if(this !== previous3){
            previous3 = this;
        }
        flavourTextScoop3 = this.value;
        console.log("Scoop 3: New selected flavour: " +this.value);
        showOrderButton();
    };
}
// ----------------------------------------------------------------------------------------------------
// Show Order button when each scoop has previous value not null ---------------------------------------
function showOrderButton (){
    if (globalScoopAmount === 1) {
        if (previous1 !== null) {
            console.log("Show button for 1 scoop");
            btnPlaceOrder.style.display ="block";
        }
        else
        {
            console.log("Don't show button 1");
            btnPlaceOrder.style.display ="none"; 
        }
    }
    if (globalScoopAmount === 2) {
        if (previous1 !== null && previous2 !== null) {
            console.log("Show button for 2 scoop");
            btnPlaceOrder.style.display ="block";
        }
        else
        {
            console.log("Don't show button 2");
            btnPlaceOrder.style.display ="none"; 
        }
    }
    if (globalScoopAmount === 3) {
        if (previous1 !== null && previous2 !== null && previous3 !== null) {
            console.log("Show button for 3 scoop");
            btnPlaceOrder.style.display ="block";
        }
        else
        {
            console.log("Don't show button 3");
            btnPlaceOrder.style.display ="none"; 
        }
    }

}
// ----------------------------------------------------------------------------------------------------
function getSelectedFalvours () {
    globalStep3.style.display = "block"; 

    var textSelectedFlavour1, textSelectedFlavour2, textSelectedFlavour3;
    textSelectedFlavour1 = document.getElementById("flav1");
    textSelectedFlavour2 = document.getElementById("flav2");
    textSelectedFlavour3 = document.getElementById("flav3");

    if (globalScoopAmount === 1) {
        document.getElementById("flav1").innerHTML = "Smaak voor bol 1: " + flavourTextScoop1;

        textSelectedFlavour1.style.display = "block";
        textSelectedFlavour2.style.display = "none";
        textSelectedFlavour3.style.display = "none"; 
    }
    if (globalScoopAmount === 2) {
        document.getElementById("flav1").innerHTML = "Smaak voor bol 1: " + flavourTextScoop1;
        document.getElementById("flav2").innerHTML = "Smaak voor bol 2: " + flavourTextScoop2;


        textSelectedFlavour1.style.display = "block";
        textSelectedFlavour2.style.display = "block";
        textSelectedFlavour3.style.display = "none";
    }
    
    if (globalScoopAmount === 3) {
        document.getElementById("flav1").innerHTML = "Smaak voor bol 1: " + flavourTextScoop1;
        document.getElementById("flav2").innerHTML = "Smaak voor bol 2: " + flavourTextScoop2;
        document.getElementById("flav3").innerHTML = "Smaak voor bol 3: " + flavourTextScoop3;


        textSelectedFlavour1.style.display = "block";
        textSelectedFlavour2.style.display = "block";
        textSelectedFlavour3.style.display = "block";
    }
    hideStep1And2();
}
function hideStep1And2() {
    globalStep1.style.display = "none";
    globalStep2.style.display = "none";
}