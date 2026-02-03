// wwwroot/js/services.js

$(document).ready(function () {

    // When the button is clicked...
    $("#btn-calc").click(onCalculateClicked);

});

function onCalculateClicked() {
    // 1. Read values from the page
    var hoursText = $("#hours").val();
    var rateText = $("#rate").val();

    // 2. Convert to numbers
    var hours = parseFloat(hoursText);
    var rate = parseFloat(rateText);

    // 3. Validate
    if (isNaN(hours) || hours <= 0) {
        alert("Please enter a positive number of hours.");
        $("#total").val("");
        return;
    }

    // 4. Do the calculation
    var total = hours * rate;

    // 5. Show the result
    $("#total").val("$" + total.toFixed(2));
}
