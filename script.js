var $currentTimeElem = $("#current-time");
function startClock() {
    setInterval(function () {
     currentTime = moment();
        $currentTimeElem.text(currentTime.format("kk:mm:ss ddd"));     
    }, 1000)
}
startClock()

var Input9 = localStorage.getItem("notes9");

    $("#button9").on("click", function(event) {
        event.preventDefault();
        var data = $("#input9").val(); 
        console.log(data)
        localStorage.setItem("notes9", data);
      });

$("#input9").val(Input9);

var Input10 = localStorage.getItem("notes10");

    $("#button10").on("click", function(event) {
        event.preventDefault();
        var data = $("#input10").val(); 
        console.log(data)
        localStorage.setItem("notes10", data);
      });

$("#input10").val(Input10);

var Input11 = localStorage.getItem("notes11");

    $("#button11").on("click", function(event) {
        event.preventDefault();
        var data = $("#input11").val(); 
        console.log(data)
        localStorage.setItem("notes11", data);
      });

$("#input11").val(Input11);

var Input12 = localStorage.getItem("notes12");

    $("#button12").on("click", function(event) {
        event.preventDefault();
        var data = $("#input12").val(); 
        console.log(data)
        localStorage.setItem("notes12", data);
      });

$("#input12").val(Input12);

var Input13 = localStorage.getItem("notes13");

    $("#button13").on("click", function(event) {
        event.preventDefault();
        var data = $("#input13").val(); 
        console.log(data)
        localStorage.setItem("notes13", data);
      });

$("#input13").val(Input13);

var Input14 = localStorage.getItem("notes14");

    $("#button14").on("click", function(event) {
        event.preventDefault();
        var data = $("#input14").val(); 
        console.log(data)
        localStorage.setItem("notes14", data);
      });

$("#input14").val(Input14);

var Input15 = localStorage.getItem("notes15");

    $("#button15").on("click", function(event) {
        event.preventDefault();
        var data = $("#input15").val(); 
        console.log(data)
        localStorage.setItem("notes15", data);
      });

$("#input15").val(Input15);

var Input16 = localStorage.getItem("notes16");

    $("#button16").on("click", function(event) {
        event.preventDefault();
        var data = $("#input16").val(); 
        console.log(data)
        localStorage.setItem("notes16", data);
      });

$("#input16").val(Input16);

var Input17 = localStorage.getItem("notes17");

    $("#button17").on("click", function(event) {
        event.preventDefault();
        var data = $("#input17").val(); 
        console.log(data)
        localStorage.setItem("notes17", data);
      });

$("#input17").val(Input17);