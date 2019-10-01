var $currentTimeElem = $("#current-time");

function startClock() {
    setInterval(function () {
        var currentTime = moment();
        $currentTimeElem.text(currentTime.format("LLL"));
    }, 1000)
}
startClock()

function saveNotes(){
    $("#button9").on("click", function(event) {
        event.preventDefault();
        var data = $("#input9").val(); 
        localStorage.setItem("notes", data.value);

      });
}