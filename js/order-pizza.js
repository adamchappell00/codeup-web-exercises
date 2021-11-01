
/*
var tabEl = document.querySelector('button[data-bs-toggle="tab"]')
tabEl.addEventListener('shown.bs.tab', function (event) {
    event.target // newly activated tab
    event.relatedTarget // previous active tab
})
*/


// Tab Control for the Pizza Builder Form, Includes Listeners & Functions
var tab1 = function(){
   //var tab = new bootstrap.Tab(crustSizeTab)
    $('#crust-tab').tab('show');
}
var tab2 = function(){
    //var tab = new bootstrap.Tab(cheeseSauceTab)
    $('#cheese-sauce-tab').tab('show')
}
var tab3 = function(){
   // var tab = new bootstrap.Tab(toppingTab)
    $('#toppings-tab').tab('show')
}
var crustSizeTab = document.getElementById('crust-tab-button');
crustSizeTab.addEventListener('click', tab1);
var backToCrust = document.getElementById('back-size-crust');
backToCrust.addEventListener("click", tab1);

var cheeseSauceTab = document.getElementById('cheese-sauce-tab-button');
cheeseSauceTab.addEventListener('click', tab2);
var toppingTab = document.getElementById('toppings-tab-button');
toppingTab.addEventListener('click', tab3);

// Form Control Listener and Function
// Currently Logs submitted values without HTML POST
var submitPizza = function(){
    /*
    console.log("Size and Crust:");
    console.log(document.getElementsByName("size-crust"));
    console.log("Cheese Amount:");
    console.log(document.getElementById("cheese"));
    console.log("Sauce:");
    console.log(document.getElementById("sauce-type"));
    console.log(document.getElementById("sauce-amount"));
    console.log("Toppings:");
    console.log(document.getElementsByName("meat"));
    console.log(document.getElementsByName("non-meat"));

     */
}
var orderPizza = document.getElementById("pizza-checkout");
orderPizza.addEventListener("click", submitPizza);
